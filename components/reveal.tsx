"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  duration?: number;
  amount?: number;
  once?: boolean;
};

export function Reveal({
  children,
  className,
  delay = 0,
  y = 10,
  duration = 0.8,
  amount = 0.15,
  once = true,
}: RevealProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0.001, y: reduceMotion ? 0 : y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount }}
      transition={
        reduceMotion
          ? { duration: 0.2, delay, ease: "linear" }
          : { type: "spring", bounce: 0.2, duration, delay }
      }
    >
      {children}
    </motion.div>
  );
}
