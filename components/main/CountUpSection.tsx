"use client";

import CountUp from "react-countup";
import { useInView } from "motion/react";
import { useRef } from "react";
import AboutH1 from "../AboutH1";

const stats = [
  { label: "Trophies Won", value: 42 },
  { label: "Tournaments", value: 156 },
  { label: "Global Fans", value: 2500000, suffix: "+" },
  { label: "Years Active", value: 7 },
];

export default function CountUpSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });

  return (
    <section
      id="about"
      ref={ref}
      className="min-h-5 flex items-center justify-center bg-black text-white relative z-10 border-t border-white/10"
    >
      <div className="container">
        <AboutH1 />
      </div>
    </section>
  );
}