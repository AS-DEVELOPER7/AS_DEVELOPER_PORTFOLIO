import React from "react";
import { Hero } from "@/components/organisms/Hero";
import { CanvasText } from "@/components/atoms/ui/canvas-text";
import { TextGenerateEffect } from "@/components/atoms/ui/text-generate-effect";

export const WorkHeader = () => {
  return (
    <div className="w-full ">
      <Hero>
        <div className="py-10 flex flex-col justify-center">
          <CanvasText
            text="Work"
            className="text-3xl md:text-4xl font-bold tracking-tight text-primary mb-4 font-outfit "
            backgroundClassName="bg-blue-600 dark:bg-blue-700"
            colors={[
              "rgba(0, 153, 255, 1)",
              "rgba(0, 153, 255, 0.9)",
              "rgba(0, 153, 255, 0.8)",
              "rgba(0, 153, 255, 0.7)",
              "rgba(0, 153, 255, 0.6)",
              "rgba(0, 153, 255, 0.5)",
              "rgba(0, 153, 255, 0.4)",
              "rgba(0, 153, 255, 0.3)",
              "rgba(0, 153, 255, 0.2)",
              "rgba(0, 153, 255, 0.1)",
            ]}
            lineGap={4}
            animationDuration={10} // Sped up slightly so it's noticeable but smooth
          />
          <TextGenerateEffect
            words="A selected showcase of production-ready applications, custom fintech platforms, and internal tools engineered with high fidelity."
            className=" leading-relaxed font-normal max-w-2xl transition-colors"
            // duration={0.8}
          />
        </div>
      </Hero>
    </div>
  );
};
