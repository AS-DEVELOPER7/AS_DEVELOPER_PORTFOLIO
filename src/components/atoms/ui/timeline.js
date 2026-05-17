"use client";
import {
  useScroll,
  useTransform,
  motion,
  useMotionValue,
  useMotionTemplate,
} from "framer-motion";
import React, { useEffect, useRef, useState, useId } from "react";
import { WobbleCard } from "./wobble-card";
import { NordicTabCard } from "./nordic-tab-card";
import { CanvasRevealEffect } from "./canvas-reveal-effect";

export const Timeline = ({ data }) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  return (
    <div className="w-full  " ref={containerRef}>
      <div className="max-w-7xl mx-auto pt-10 pb-10  space-y-2">
        <h2 className="text-3xl  font-bold text-primary tracking-tight">
          Professional Journey
        </h2>
        <p className="text-primary/60 text-base  max-w-2xl leading-relaxed">
          A chronological look at the roles and projects that have shaped my
          career, from early explorations to leading complex engineering
          initiatives.
        </p>
      </div>
      <div
        ref={ref}
        className="timeline-line-marker relative max-w-7xl mx-auto "
      >
        {data.map((item, index) => (
          <div key={index} className="flex  justify-start pb-20">
            <div className="sticky flex flex-row z-40 items-center top-40 self-start max-w-xs w-[15%]   bg-black ">
              <div className=" absolute top-0   left-3  bg-secondary  flex items-center justify-center">
                <div className="h-10   w-10 rounded-full bg-secondary  flex items-center justify-center">
                  <div className="h-4 w-4 rounded-full  bg-accent-tertiary p-2" />
                </div>
              </div>
            </div>

            <div className="relative w-full space-y-4">
              <div className="flex items-center gap-4 ">
                <div className="px-3 py-1 rounded-lg bg-neutral border border-primary/5 text-primary text-[10px] font-bold tracking-[0.2em] uppercase family-mono">
                  {item.title}
                </div>
                <div className="h-px flex-1 bg-linear-to-r from-primary/20 to-transparent" />
              </div>
              {item.content}{" "}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

/* 
// Previous version using only GlowingEffect and WobbleCard
export const TimelineEntry = ({
  role,
  company,
  location,
  description,
  technologies,
}) => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const [dimensions, setDimensions] = useState({ w: 0, h: 0, tw: 0 });
  const id = useId();

  useEffect(() => {
    if (!containerRef.current || !titleRef.current) return;
    const update = () => {
      setDimensions({
        w: containerRef.current.offsetWidth,
        h: containerRef.current.offsetHeight,
        tw: titleRef.current.offsetWidth,
      });
    };
    update();
    const observer = new ResizeObserver(update);
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  const { w, h, tw } = dimensions;
  const r = 16;
  const th = 40;

  const path =
    w > 0
      ? `
    M 0,${th + r}
    a ${r},${r} 0 0,1 ${r},-${r}
    h ${tw + 20 - r}
    a ${r},${r} 0 0,0 ${r},-${r}
    v -${th - 2 * r}
    a ${r},${r} 0 0,1 ${r},-${r}
    h ${w - tw - 20 - 3 * r}     
    a ${r},${r} 0 0,1 ${r},${r}
    v ${h - 2 * r}
    a ${r},${r} 0 0,1 -${r},${r}
    h -${w - 2 * r}             
    a ${r},${r} 0 0,1 -${r},-${r}
    Z
  `
          .replace(/\s+/g, " ")
          .trim()
      : "";

  return (
    <WobbleCard
      containerClassName="bg-transparent border-none shadow-none mt-4"
      className="p-0"
    >
      <div ref={containerRef} className="relative w-full h-full min-h-[180px]">
        <svg
          className="absolute inset-0 -z-10 w-full h-full overflow-visible drop-shadow-sm"
          viewBox={`0 0 ${w} ${h}`}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <mask id={`stroke-mask-${id.replace(/:/g, "")}`}>
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
          <path
            d={path}
            className="fill-neutral stroke-neutral/5 transition-colors duration-500"
            strokeWidth="1"
          />
          <foreignObject
            width="100%"
            height="100%"
            mask={`url(#stroke-mask-${id.replace(/:/g, "")})`}
          >
            <div className="w-full h-full relative">
              <GlowingEffect
                blur={0}
                borderWidth={3}
                spread={80}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
                fillMode={true}
              />
            </div>
          </foreignObject>
        </svg>

        <div className="flex flex-col h-full relative z-10">
          <div className="h-[40px] flex items-center px-6 relative z-20">
            <h4
              ref={titleRef}
              className="text-accent-tertiary font-bold text-lg md:text-xl tracking-tight"
            >
              {role}
            </h4>
          </div>
          <div className="flex-1 p-6 md:p-8 flex flex-col gap-4">
            <p className="text-primary/60 text-sm md:text-base font-medium">
              {company} • {location}
            </p>
            <p className="text-primary/80 leading-relaxed text-base md:text-lg">
              {description}
            </p>
            <div className="flex flex-wrap gap-2 mt-2">
              {technologies?.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs font-medium bg-accent-tertiary/5 border border-accent-tertiary/10 rounded-full text-primary/90 hover:border-accent-tertiary/30 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </WobbleCard>
  );
};
*/

// New version using unified NordicTabCard layout primitive
export const TimelineEntry = ({
  role,
  company,
  location,
  description,
  technologies,
}) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [isHovering, setIsHovering] = useState(false);

  // Motion template declared at top level
  const spotlightMask = useMotionTemplate`
    radial-gradient(
      350px circle at ${mouseX}px ${mouseY}px,
      white,
      transparent 80%
    )
  `;

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <WobbleCard
      containerClassName="bg-transparent border-none shadow-none "
      className="p-0"
    >
      <NordicTabCard
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        topLeftComponent={
          <h4 className="text-accent-tertiary p-3 font-bold text-lg tracking-tight">
            {role}
          </h4>
        }
        svgChildren={(safeId) => (
          <foreignObject
            width="100%"
            height="100%"
            mask={`url(#path-mask-${safeId})`}
          >
            <motion.div
              className="absolute inset-0 opacity-0 transition duration-300 group-hover/spotlight:opacity-100 h-full w-full pointer-events-none"
              style={{
                backgroundColor: "rgba(59, 130, 246, 0.08)",
                maskImage: spotlightMask,
              }}
            >
              {isHovering && (
                <CanvasRevealEffect
                  animationSpeed={5}
                  containerClassName="bg-transparent absolute inset-0 pointer-events-none"
                  showGradient={false}
                  colors={[
                    [59, 130, 246],
                    [139, 92, 246],
                  ]}
                  dotSize={2}
                />
              )}
            </motion.div>
          </foreignObject>
        )}
      >
        <div className="flex flex-col gap-6 p-6  pt-14">
          <p className="text-primary/60 text-sm  font-medium">
            {company} • {location}
          </p>
          <div className="text-primary/80 leading-relaxed text-base ">
            {description}
          </div>
          <div className="flex flex-wrap gap-2 ">
            {technologies?.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs font-medium bg-accent-tertiary/5 border border-accent-tertiary/10 rounded-full text-primary/90 hover:border-accent-tertiary/30 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </NordicTabCard>
    </WobbleCard>
  );
};
