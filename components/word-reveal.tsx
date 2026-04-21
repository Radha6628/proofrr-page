"use client";

import { motion, useReducedMotion } from "framer-motion";

import { cn } from "@/lib/utils";

type WordRevealProps = {
  text: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  className?: string;
  containerClassName?: string;
  delay?: number;
  stagger?: number;
  amount?: number;
};

export function WordReveal({
  text,
  as = "h2",
  className,
  containerClassName,
  delay = 0,
  stagger = 0.06,
  amount = 0.45,
}: WordRevealProps) {
  const Tag = as;
  const reduceMotion = useReducedMotion();
  const words = text.split(" ");

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      className={containerClassName}
    >
      <Tag className={className}>
        {words.map((word, index) => (
          <motion.span
            key={`${word}-${index}`}
            className={cn("inline-block whitespace-pre", index === words.length - 1 && "pr-0")}
            variants={{
              hidden: reduceMotion
                ? { opacity: 0 }
                : { opacity: 0.001, y: 10, filter: "blur(5px)" },
              visible: { opacity: 1, y: 0, filter: "blur(0px)" },
            }}
            transition={{
              duration: reduceMotion ? 0.2 : 0.6,
              delay: delay + index * stagger,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {`${word}${index === words.length - 1 ? "" : " "}`}
          </motion.span>
        ))}
      </Tag>
    </motion.div>
  );
}
