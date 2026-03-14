"use client";

import { motion, useScroll, useTransform, MotionValue } from "motion/react";
import { useRef } from "react";
import Image from "next/image";

const sentence = "WHY OUR EVENT MATTERS.";
const chars = sentence.split("");

export default function AboutH1() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "start 0.2"],
  });

  return (

      <div className="max-w-5xl mx-auto flex flex-col items-center gap-20 text-center pt-14 pb-5 md:pt-24 md:pb-10" id="About">

        <div
          ref={containerRef}
          className="flex flex-wrap justify-center gap-[0.2em]"
        >
          {chars.map((char, i) => {
            const start = i / chars.length;
            const end = start + 1 / chars.length;
            return (
              <Char
                key={i}
                char={char}
                progress={scrollYProgress}
                range={[start, end]}
              />
            );
          })}
        </div>

      </div>
  );
}

function Char({
  char,
  progress,
  range,
}: {
  char: string;
  progress: MotionValue<number>;
  range: [number, number];
}) {
  const opacity = useTransform(progress, range, [0.1, 1]);

  return (
    <motion.span
      style={{ opacity }}
      className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[0.95] md:leading-none tracking-tighter uppercase"
    >
      {char === " " ? "\u00A0" : char}
    </motion.span>
  );
}


