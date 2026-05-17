"use client";
import React from "react";
import Marquee from "react-fast-marquee";
import { cn } from "@/utils/cn";

export const MarqueeLogos = ({ items, className }) => {
  return (
    // THE TRACK: Removed the gray box. Added top/bottom borders and the optical fade mask.
    <div
      className={cn(
        "w-full overflow-hidden py-6 border-y border-primary/5",
        "[mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]",
        className,
      )}
    >
      <Marquee
        gradient={false}
        speed={40}
        pauseOnHover={true}
        className="flex items-center"
      >
        {items.map((item, idx) => (
          <div
            key={idx}
            className="flex items-center group cursor-pointer transition-all duration-300 hover:scale-105"
          >
            {/* THE SEPARATOR: A geometric dot to link the items together */}
            <div className="mx-12 w-1.5 h-1.5 rounded-full bg-primary/10 group-hover:bg-accetext-accent-tertiary/40 transition-colors duration-300" />

            <div className="flex items-center gap-4">
              {item.icon ? (
                typeof item.icon === "string" ? (
                  <i className={cn(item.icon, "text-xl text-primary/30 group-hover:text-accent-tertiary transition-colors duration-300 drop-shadow-sm w-6 h-6 flex items-center justify-center")} />
                ) : (
                  <item.icon className="w-6 h-6 text-primary/30 group-hover:text-accent-tertiary transition-colors duration-300 drop-shadow-sm" />
                )
              ) : item.logo ? (
                <img
                  src={item.logo}
                  alt={item.name}
                  className="w-6 h-6 object-contain opacity-30 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                />
              ) : (
                <div className="w-6 h-6 rounded-full border border-primary/10 flex items-center justify-center group-hover:border-accetext-accent-tertiary/50 group-hover:bg-accetext-accent-tertiary/10 transition-colors duration-300">
                  <span className="text-primary/40 font-bold text-[10px] group-hover:text-accent-tertiary transition-colors">
                    {item.name.charAt(0)}
                  </span>
                </div>
              )}

              {/* THE TYPOGRAPHY: Uppercase, wide tracking, highly technical */}
              <span className="text-primary/40 font-bold text-sm uppercase tracking-[0.2em] group-hover:text-primary transition-colors duration-300 whitespace-nowrap">
                {item.name}
              </span>
            </div>
          </div>
        ))}
      </Marquee>
    </div>
  );
};
