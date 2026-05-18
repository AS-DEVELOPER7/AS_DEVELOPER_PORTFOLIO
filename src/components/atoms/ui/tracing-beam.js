"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useTransform, useScroll, useSpring } from "framer-motion";
import { cn } from "@/utils/cn";

export const TracingBeam = ({ children, className }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const contentRef = useRef(null);
  const [svgHeight, setSvgHeight] = useState(0);
  const [pathString, setPathString] = useState("M 8 0 V 0");
  const [dotOffset, setDotOffset] = useState(0);

  useEffect(() => {
    if (!contentRef.current) return;

    const updateHeight = () => {
      if (!contentRef.current) return;
      const wrapperRect = contentRef.current.getBoundingClientRect();
      const contentWrapper = contentRef.current.firstElementChild;

      if (contentWrapper && contentWrapper.children.length > 0) {
        const children = Array.from(contentWrapper.children);

        let minTop = Infinity;
        let maxBottom = -Infinity;

        children.forEach((child) => {
          const rect = child.getBoundingClientRect();
          if (rect.top < minTop) minTop = rect.top;
          if (rect.bottom > maxBottom) maxBottom = rect.bottom;
        });

        const relativeTop = minTop - wrapperRect.top;
        const relativeBottom = maxBottom - wrapperRect.top;

        setDotOffset(relativeTop);
        setSvgHeight(relativeBottom);

        let path = `M 8 ${relativeTop} `;

        // Safety tracker: The line can only go DOWN. Never up.
        let currentY = relativeTop;

        const timelineLineEl = contentRef.current.querySelector(
          ".timeline-line-marker",
        );
        let tTop = null;
        let tBottom = null;
        if (timelineLineEl) {
          const rect = timelineLineEl.getBoundingClientRect();
          tTop = rect.top - wrapperRect.top;
          tBottom = rect.bottom - wrapperRect.top;
        }

        for (let i = 0; i < children.length; i++) {
          const child = children[i];
          const childRect = child.getBoundingClientRect();
          const top = childRect.top - wrapperRect.top;
          const bottom = childRect.bottom - wrapperRect.top;

          const containsTimeline =
            child.querySelector(".timeline-line-marker") !== null;

          if (containsTimeline && tTop !== null && tBottom !== null) {
            // 1. TIMELINE LOGIC
            const startShift = Math.max(currentY, tTop - 50);
            path += `V ${startShift} `;
            path += `l 18 24 `;

            const endTimeline = Math.max(startShift + 24, tBottom - 24);
            path += `V ${endTimeline} `;
            path += `l -18 24 `;

            currentY = endTimeline + 24;

            // Connect cleanly to the next section without doing a second gap cutout
            if (i < children.length - 1) {
              const nextTop =
                children[i + 1].getBoundingClientRect().top - wrapperRect.top;
              currentY = Math.max(currentY, nextTop);
              path += `V ${currentY} `;
            } else {
              currentY = Math.max(currentY, bottom);
              path += `V ${currentY} `;
            }
          } else {
            // 2. STANDARD SECTION LOGIC
            if (i < children.length - 1) {
              const nextChild = children[i + 1];
              const nextTop =
                nextChild.getBoundingClientRect().top - wrapperRect.top;
              const gap = nextTop - bottom;

              if (gap > 0) {
                const drop = Math.min(24, gap / 2, (bottom - top) / 2);
                const shift = (drop / 24) * 18;

                const startDrop = Math.max(currentY, bottom - drop);
                path += `V ${startDrop} `;
                path += `l ${shift} ${drop} `;

                const endDrop = Math.max(startDrop + drop, nextTop - drop);
                path += `V ${endDrop} `;
                path += `l -${shift} ${drop} `;

                currentY = endDrop + drop;
              } else {
                currentY = Math.max(currentY, nextTop);
                path += `V ${currentY} `;
              }
            } else {
              currentY = Math.max(currentY, bottom);
              path += `V ${currentY} `;
            }
          }
        }

        path += `V ${relativeBottom} `;
        setPathString(path);
      } else {
        const totalHeight = contentRef.current.offsetHeight;
        setSvgHeight(totalHeight);
        setPathString(`M 8 0 V ${totalHeight}`);
      }
    };

    updateHeight();

    const resizeObserver = new ResizeObserver(updateHeight);
    resizeObserver.observe(contentRef.current);
    if (contentRef.current.firstElementChild) {
      Array.from(contentRef.current.firstElementChild.children).forEach(
        (child) => resizeObserver.observe(child),
      );
    }

    const mutationObserver = new MutationObserver(() => {
      requestAnimationFrame(updateHeight);
    });
    mutationObserver.observe(contentRef.current, {
      attributes: true,
      attributeFilter: ["style"],
      subtree: true,
    });

    window.addEventListener("resize", updateHeight);

    const t1 = setTimeout(updateHeight, 100);
    const t2 = setTimeout(updateHeight, 300);
    const t3 = setTimeout(updateHeight, 600);

    return () => {
      resizeObserver.disconnect();
      mutationObserver.disconnect();
      window.removeEventListener("resize", updateHeight);
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  const y1 = useSpring(
    useTransform(scrollYProgress, [0, 0.8], [0, svgHeight]),
    { stiffness: 500, damping: 90 },
  );
  const y2 = useSpring(useTransform(scrollYProgress, [0, 1], [0, svgHeight]), {
    stiffness: 500,
    damping: 90,
  });

  return (
    <motion.div
      ref={ref}
      className={cn("relative mx-auto h-full w-full", className)}
    >
      <div className="absolute top-4 left-[-23px] z-50 w-[80px] h-full pointer-events-none">
        <motion.div
          transition={{ duration: 0.2, delay: 0.5 }}
          style={{ top: dotOffset - 8 }}
          className="absolute left-0 z-10 flex h-4 w-4 items-center justify-center rounded-full"
        >
          <motion.div
            transition={{ duration: 0.2, delay: 0.5 }}
            className="h-2 w-2 rounded-full"
          />
        </motion.div>

        <svg
          viewBox={`0 0 80 ${svgHeight}`}
          width="80"
          height={svgHeight}
          className="absolute top-0 left-0 block"
          aria-hidden="true"
        >
          <motion.path
            d={pathString}
            fill="none"
            stroke="#9091A0"
            strokeOpacity="0.16"
            strokeLinecap="round"
            strokeLinejoin="round"
            transition={{ duration: 10 }}
          ></motion.path>
          <motion.path
            d={pathString}
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="1.25"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="motion-reduce:hidden"
            transition={{ duration: 10 }}
          ></motion.path>
          <defs>
            <motion.linearGradient
              id="gradient"
              gradientUnits="userSpaceOnUse"
              x1="0"
              x2="0"
              y1={y1}
              y2={y2}
            >
              <stop stopColor="#18CCFC" stopOpacity="0"></stop>
              <stop stopColor="#18CCFC"></stop>
              <stop offset="0.325" stopColor="#6344F5"></stop>
              <stop offset="1" stopColor="#AE48FF" stopOpacity="0"></stop>
            </motion.linearGradient>
          </defs>
        </svg>
      </div>
      <div ref={contentRef} className="w-full">
        {children}
      </div>
    </motion.div>
  );
};
