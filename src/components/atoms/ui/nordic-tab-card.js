"use client";
import React, { useEffect, useRef, useState, useId } from "react";
import { cn } from "@/utils/cn";

export const NordicTabCard = ({
  topLeftComponent,
  topRightComponent,
  bottomLeftComponent,
  bottomRightComponent,
  children,
  svgChildren,
  id,
  className,
  childrenClassName,
  tabHeight = 40,
  cornerRadius = 16,
  onMouseMove,
  onMouseEnter,
  onMouseLeave,
}) => {
  const containerRef = useRef(null);
  const topLeftRef = useRef(null);
  const topRightRef = useRef(null);
  const bottomLeftRef = useRef(null);
  const bottomRightRef = useRef(null);

  const [dimensions, setDimensions] = useState({ w: 0, h: 0 });
  const [widths, setWidths] = useState({ tl: 0, tr: 0, bl: 0, br: 0 });
  const generatedId = useId();
  const safeId = (id || generatedId).replace(/:/g, "");

  // Measure card dimensions
  useEffect(() => {
    if (!containerRef.current) return;
    const update = () => {
      setDimensions({
        w: containerRef.current?.offsetWidth || 0,
        h: containerRef.current?.offsetHeight || 0,
      });
    };
    update();
    const observer = new ResizeObserver(update);
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  // Measure slot widths dynamically
  useEffect(() => {
    const update = () => {
      setWidths({
        tl: topLeftRef.current?.offsetWidth || 0,
        tr: topRightRef.current?.offsetWidth || 0,
        bl: bottomLeftRef.current?.offsetWidth || 0,
        br: bottomRightRef.current?.offsetWidth || 0,
      });
    };
    update();
    const observer = new ResizeObserver(update);
    if (topLeftRef.current) observer.observe(topLeftRef.current);
    if (topRightRef.current) observer.observe(topRightRef.current);
    if (bottomLeftRef.current) observer.observe(bottomLeftRef.current);
    if (bottomRightRef.current) observer.observe(bottomRightRef.current);
    return () => observer.disconnect();
  }, [
    topLeftComponent,
    topRightComponent,
    bottomLeftComponent,
    bottomRightComponent,
  ]);

  const { w, h } = dimensions;
  const r = cornerRadius;
  const th = tabHeight;

  const W_tl = widths.tl;
  const W_tr = widths.tr;
  const W_bl = widths.bl;
  const W_br = widths.br;

  // Mathematically carve out concave curves around any corners where components exist
  const path =
    w > 0 && h > 0
      ? `
        M 0,${W_tl > 0 ? th + r : r}
        
        ${
          W_tl > 0
            ? `A ${r},${r} 0 0,1 ${r},${th}
               H ${W_tl - r}
               A ${r},${r} 0 0,0 ${W_tl},${th - r}
               V ${r}
               A ${r},${r} 0 0,1 ${W_tl + r},0`
            : `A ${r},${r} 0 0,1 ${r},0`
        }
        
        ${
          W_tr > 0
            ? `H ${w - W_tr - r}
               A ${r},${r} 0 0,1 ${w - W_tr},${r}
               V ${th - r}
               A ${r},${r} 0 0,0 ${w - W_tr + r},${th}
               H ${w - r}
               A ${r},${r} 0 0,1 ${w},${th + r}`
            : `H ${w - r}
               A ${r},${r} 0 0,1 ${w},${r}`
        }
        
        ${
          W_br > 0
            ? `V ${h - th - r}
               A ${r},${r} 0 0,1 ${w - r},${h - th}
               H ${w - W_br + r}
               A ${r},${r} 0 0,0 ${w - W_br},${h - th + r}
               V ${h - r}
               A ${r},${r} 0 0,1 ${w - W_br - r},${h}`
            : `V ${h - r}
               A ${r},${r} 0 0,1 ${w - r},${h}`
        }
        
        ${
          W_bl > 0
            ? `H ${W_bl + r}
               A ${r},${r} 0 0,1 ${W_bl},${h - r}
               V ${h - th + r}
               A ${r},${r} 0 0,0 ${W_bl - r},${h - th}
               H ${r}
               A ${r},${r} 0 0,1 0,${h - th + r}`
            : `H ${r}
               A ${r},${r} 0 0,1 0,${h - r}`
        }
        
        V ${W_tl > 0 ? th + r : r}
        Z
      `
          .replace(/\s+/g, " ")
          .trim()
      : "";

  return (
    <div
      ref={containerRef}
      onMouseMove={onMouseMove}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={cn(
        "relative w-full h-full min-h-[120px] transition-all duration-500 group/spotlight",
        className,
      )}
    >
      {w > 0 && h > 0 && (
        <svg
          className="absolute inset-0 -z-10 w-full h-full overflow-visible "
          viewBox={`0 0 ${w} ${h}`}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <mask id={`path-mask-${safeId}`}>
              <path d={path} fill="white" />
            </mask>

            {/* ADD THIS NEW CLIP-PATH */}
            <clipPath id={`clip-path-${safeId}`}>
              <path d={path} />
            </clipPath>

            <mask id={`stroke-mask-${safeId}`}>
              <path
                d={path}
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
            </mask>
          </defs>
          {/* Main SVG Background Layout Path */}
          <path
            d={path}
            className="fill-neutral stroke-neutral/5 transition-colors duration-500"
            strokeWidth="1"
          />

          {/* Render overlay children inside the SVG hierarchy */}
          {svgChildren &&
            (typeof svgChildren === "function"
              ? svgChildren(safeId, dimensions, widths)
              : svgChildren)}
        </svg>
      )}

      {/* Absolute Placed Slots */}
      {topLeftComponent && (
        <div
          ref={topLeftRef}
          className="absolute top-0 left-0 h-[40px] flex items-center   z-20"
        >
          {topLeftComponent}
        </div>
      )}
      {topRightComponent && (
        <div
          ref={topRightRef}
          className="absolute top-0 right-0 h-[40px] flex items-center   z-20"
        >
          {topRightComponent}
        </div>
      )}
      {bottomLeftComponent && (
        <div
          ref={bottomLeftRef}
          className="absolute bottom-0 left-0 h-[40px] flex items-center   z-20"
        >
          {bottomLeftComponent}
        </div>
      )}
      {bottomRightComponent && (
        <div
          ref={bottomRightRef}
          className="absolute bottom-0 right-0 h-[40px] flex items-center   z-20"
        >
          {bottomRightComponent}
        </div>
      )}

      {/* Layout Content wrapper */}
      <div
        className={cn("w-full h-full relative z-10", childrenClassName)}
        style={{ clipPath: `url(#clip-path-${safeId})` }}
      >
        {children}
      </div>
    </div>
  );
};
