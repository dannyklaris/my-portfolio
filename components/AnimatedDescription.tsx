// components/AnimatedDescription.tsx
"use client";
import { motion } from "framer-motion";
import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
});

const AnimatedDescription = () => {
  const text =
    "Engineering my way into tech, blending coding with creativity to build impactful solutions. Driven by a passion for problem-solving and a desire to shape the future through technology.";
  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.04,
      },
    },
  };

  const child = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      className={`${spaceGrotesk.className} text-neutral-300 text-lg md:text-xl text-center leading-relaxed max-w-2xl px-4 bg-clip-text`}
      variants={container}
      initial="hidden"
      animate="visible">
      <div className="flex flex-wrap justify-center gap-x-2">
        {words.map((word, i) => (
          <motion.span key={i} variants={child} className="inline-block">
            {word}{" "}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
};

export default AnimatedDescription;
