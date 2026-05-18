"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Hero } from "@/components/organisms/Hero";
import { CanvasText } from "@/components/atoms/ui/canvas-text";
import { TextGenerateEffect } from "@/components/atoms/ui/text-generate-effect";
import { cn } from "@/utils/cn";
import emailjs from "@emailjs/browser";
import { Input } from "@/components/atoms/ui/input";
import { Textarea } from "@/components/atoms/ui/textarea";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all fields.");
      return;
    }

    setStatus("sending");

    const serviceId =
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "YOUR_SERVICE_ID";
    const templateId =
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "YOUR_TEMPLATE_ID";
    const publicKey =
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY";

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      to_name: "Ali Hussain Sagir",
    };

    emailjs.send(serviceId, templateId, templateParams, { publicKey }).then(
      (response) => {
        console.log("EMAILJS SUCCESS!", response.status, response.text);
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 4000);
      },
      (err) => {
        console.error("EMAILJS FAILED...", err);
        setStatus("error");
        setTimeout(() => setStatus("idle"), 4000);
      },
    );
  };

  return (
    <Hero>
      <div className="flex flex-col gap-8 w-full py-6 select-none">
        {/* Title & Narrative */}
        <div className="flex flex-col gap-3">
          <CanvasText
            text="Let's Talk"
            className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-primary font-outfit"
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
            animationDuration={10}
          />
          <TextGenerateEffect
            words="Let's collaborate! Reach out to discuss your next project today."
            className="text-primary/60 text-base font-medium leading-relaxed"
          />
        </div>

        {/* Interactive Form Card */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
          {/* Name Field */}
          <Input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            disabled={status === "sending"}
            required
          />

          {/* Email Field */}
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            disabled={status === "sending"}
            required
          />

          {/* Message Field */}
          <Textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows={5}
            disabled={status === "sending"}
            required
          />

          {/* Submit Button */}
          <button
            type="submit"
            disabled={status === "sending"}
            className={cn(
              "w-full py-4 bg-primary text-secondary rounded-xl font-bold tracking-wider transition-all duration-300 shadow-md outline-none border-none cursor-pointer flex justify-center items-center gap-2",
              " hover:text-white hover:scale-[1.01]",
              "active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:bg-primary disabled:hover:text-secondary disabled:hover:scale-100",
            )}
          >
            <AnimatePresence mode="wait">
              {status === "idle" && (
                <motion.span
                  key="send"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="flex items-center gap-2"
                >
                  Send Message
                  <i className="fa-solid fa-paper-plane text-sm" />
                </motion.span>
              )}
              {status === "sending" && (
                <motion.span
                  key="sending"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="flex items-center gap-2"
                >
                  Sending...
                  <i className="fa-solid fa-circle-notch animate-spin text-sm" />
                </motion.span>
              )}
              {status === "success" && (
                <motion.span
                  key="success"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="flex items-center gap-2 text-green-400 font-extrabold"
                >
                  Message Sent!
                  <i className="fa-solid fa-circle-check text-sm" />
                </motion.span>
              )}
              {status === "error" && (
                <motion.span
                  key="error"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="flex items-center gap-2 text-rose-500 font-extrabold"
                >
                  Sending Failed
                  <i className="fa-solid fa-triangle-exclamation text-sm animate-pulse" />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </form>
      </div>
    </Hero>
  );
};
