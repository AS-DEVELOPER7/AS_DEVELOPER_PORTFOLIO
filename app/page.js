import { Hero } from "@/components/organisms/Hero";
import { HeroContent } from "@/components/organisms/home/HeroContent";
import { SkillsSection } from "@/components/organisms/home/SkillsSection";
import { ServicesSection } from "@/components/organisms/home/ServicesSection";
import { ExperienceSection } from "@/components/organisms/home/ExperienceSection";
import { SocialSection } from "@/components/organisms/home/SocialSection";
import { Footer } from "@/components/organisms/Footer";
import { TracingBeam } from "@/components/atoms/ui/tracing-beam";

export default function Home() {
  return (
    <main className="flex bg-secondary md:rounded-lg transition-all duration-500 min-h-[200vh] p-4 flex-col overflow-clip">
      <TracingBeam className="z-50">
        {/* Removed the global gap-32. We now control spacing explicitly per block. */}
        <div className="flex flex-col w-full">
          {/* BLOCK 1: Hero & Marquee */}
          {/* Grouping these tells the TracingBeam they are one cohesive unit. */}
          <div className="flex flex-col gap-24 mb-24  w-full">
            <Hero>
              <HeroContent />
            </Hero>
            <SkillsSection />
          </div>

          {/* BLOCK 2: Services */}
          <div className="mb-24  w-full">
            <ServicesSection />
          </div>

          {/* BLOCK 3: Experience */}
          <div className="mb-24  w-full">
            <ExperienceSection />
          </div>

          {/* BLOCK 4: Socials */}
          <div className="mb-20 w-full">
            <SocialSection />
          </div>

          {/* Footer */}
          <Footer />
        </div>
      </TracingBeam>
    </main>
  );
}
