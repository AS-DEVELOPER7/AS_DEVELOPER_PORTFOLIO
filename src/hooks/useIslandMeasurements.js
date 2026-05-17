import { useState, useEffect } from "react";

export const useIslandMeasurements = ({
  containerRef,
  leftIslandRef,
  rightIslandRef,
  defaultLeftWidth = 300,
  defaultRightWidth = 80,
}) => {
  const [dimensions, setDimensions] = useState({ w: 0, h: 0 });
  const [islandWidths, setIslandWidths] = useState({
    left: defaultLeftWidth,
    right: defaultRightWidth,
  });

  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new ResizeObserver((entries) => {
      let dimUpdate = null;
      let leftUpdate = null;
      let rightUpdate = null;

      for (let entry of entries) {
        if (entry.target === containerRef.current) {
          const { inlineSize: w, blockSize: h } = entry.borderBoxSize[0];
          dimUpdate = { w, h };
        } else if (entry.target === leftIslandRef?.current) {
          leftUpdate = entry.borderBoxSize[0].inlineSize;
        } else if (entry.target === rightIslandRef?.current) {
          rightUpdate = entry.borderBoxSize[0].inlineSize;
        }
      }

      if (dimUpdate) {
        setDimensions((prev) =>
          prev.w !== dimUpdate.w || prev.h !== dimUpdate.h ? dimUpdate : prev
        );
      }

      if (leftUpdate !== null || rightUpdate !== null) {
        setIslandWidths((prev) => {
          const nextLeft = leftUpdate !== null ? leftUpdate : prev.left;
          const nextRight = rightUpdate !== null ? rightUpdate : prev.right;
          if (prev.left !== nextLeft || prev.right !== nextRight) {
            return { left: nextLeft, right: nextRight };
          }
          return prev;
        });
      }
    });

    observer.observe(containerRef.current);
    if (leftIslandRef?.current) observer.observe(leftIslandRef.current);
    if (rightIslandRef?.current) observer.observe(rightIslandRef.current);

    return () => observer.disconnect();
  }, [containerRef, leftIslandRef, rightIslandRef]);

  return {
    w: dimensions.w,
    h: dimensions.h,
    leftIslandWidth: islandWidths.left,
    rightIslandWidth: islandWidths.right,
  };
};
