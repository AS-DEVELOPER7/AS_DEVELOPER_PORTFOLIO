"use client";
import React from "react";
import { ContactForm } from "@/components/organisms/contact/ContactForm";
import { Footer } from "@/components/organisms/Footer";
import { TracingBeam } from "@/components/atoms/ui/tracing-beam";
import { SocialSection } from "@/components/organisms/home/SocialSection";

export default function ContactPage() {
  return (
    <main className="flex bg-secondary md:rounded-lg transition-all duration-500 min-h-screen p-4 flex-col overflow-clip">
      <TracingBeam className="z-50">
        <div className="flex flex-col w-full">
          {/* Main Contact Form & Header Block */}
          <div className="mb-12 w-full">
            <ContactForm />
          </div>

          {/* Socials Stack Block */}
          <div className="mb-24 w-full">
            <SocialSection />
          </div>

          {/* Footer component */}
          <Footer />
        </div>
      </TracingBeam>
    </main>
  );
}
