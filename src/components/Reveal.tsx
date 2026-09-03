import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

/**
 * Scroll-reveal wrapper: subtle, one-shot fade/slide entrances
 * that respect the user's reduced-motion preferences.
 */
export default function Reveal({
  children,
  className = "",
  delay = 0,
  y = 22,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}) {
  const reduce = useReducedMotion();
  const isSSR = typeof window === "undefined";

  return (
    <motion.div
      className={className}
      initial={isSSR || reduce ? false : { opacity: 0, y }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.05, margin: "0px 0px 80px 0px" }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
