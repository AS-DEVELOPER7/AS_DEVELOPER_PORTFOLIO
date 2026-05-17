"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export const ProfileCard = ({
  name = "Ali Hussain Sagir",
  role = "Front End Developer",
  imageSrc = "/images/profile.jpeg",
  avatarSize = "w-16 h-16",
  imageWidth = 64,
  imageHeight = 64,
  isGrayscale = false,
  className = "",
  textColor = "text-primary",
  subTextColor = "text-primary/70",
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, delay: 0.2 }}
      className={`flex items-center gap-4 ${className}`}
    >
      <div className={`relative ${avatarSize} rounded-full overflow-hidden shadow-sm border border-neutral/10`}>
        <Image
          src={imageSrc}
          alt={name}
          width={imageWidth}
          height={imageHeight}
          className={`object-cover ${
            isGrayscale ? "grayscale hover:grayscale-0 transition-all duration-500" : ""
          }`}
        />
      </div>
      <div className="flex flex-col">
        <h3 className={`font-semibold text-xl tracking-tight transition-colors ${textColor}`}>
          {name}
        </h3>
        <div className={`text-sm font-medium transition-colors ${subTextColor}`}>
          {role}
        </div>
      </div>
    </motion.div>
  );
};
export default ProfileCard;
