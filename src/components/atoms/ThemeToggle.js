"use client";
import React, { useSyncExternalStore } from "react";
import { cn } from "@/utils/cn";

export const ThemeToggle = ({ className }) => {
  const isDark = useSyncExternalStore(
    (callback) => {
      if (typeof window === "undefined") return () => {};
      const observer = new MutationObserver(callback);
      observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ["class"],
      });
      return () => observer.disconnect();
    },
    () =>
      typeof window !== "undefined"
        ? document.documentElement.classList.contains("dark")
        : false,
    () => false,
  );

  const toggleTheme = () => {
    const newMode = !isDark;
    document.documentElement.classList.toggle("dark", newMode);
    localStorage.setItem("theme", newMode ? "dark" : "light");
  };

  return (
    <div
      onClick={toggleTheme}
      className={cn(
        "flex items-center rounded-full w-10 h-5 px-1 relative cursor-pointer bg-neutral border border-neutral/10 transition-all duration-500 ease-in-out",
        className
      )}
    >
      <div
        className={cn(
          "size-2.5 rounded-full transition-all duration-500 ease-in-out bg-primary",
          isDark ? "translate-x-4" : "translate-x-0"
        )}
      />
    </div>
  );
};
