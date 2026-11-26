"use client";

import { useRef } from "react";
import {
  motion,
  useInView,
  useReducedMotion,
  type MotionProps,
  type Variants,
} from "motion/react";

interface BlurFadeProps extends MotionProps {
  children: React.ReactNode;
  className?: string;
  variant?: {
    hidden: { y: number };
    visible: { y: number };
  };
  duration?: number;
  delay?: number;
  offset?: number;
  direction?: "up" | "down" | "left" | "right";
  inView?: boolean;
  blur?: string;
}

export function BlurFade({
  children,
  className,
  variant,
  duration = 0.5,
  delay = 0,
  offset = 14,
  direction = "up",
  inView = false,
  blur = "6px",
  ...props
}: BlurFadeProps) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const inViewResult = useInView(ref, { once: true, amount: 0.2 });
  const isInView = !inView || inViewResult;

  const axis = direction === "left" || direction === "right" ? "x" : "y";
  const sign = direction === "right" || direction === "down" ? -offset : offset;

  const defaultVariants: Variants = prefersReducedMotion
    ? {
        hidden: { opacity: 1 },
        visible: { opacity: 1 },
      }
    : {
        hidden: {
          [axis]: sign,
          opacity: 0,
          filter: `blur(${blur})`,
        },
        visible: {
          [axis]: 0,
          opacity: 1,
          filter: "blur(0px)",
        },
      };

  const combinedVariants = variant ?? defaultVariants;

  return (
    <motion.div
      ref={ref}
      initial={prefersReducedMotion ? "visible" : "hidden"}
      animate={isInView ? "visible" : "hidden"}
      variants={combinedVariants}
      transition={
        prefersReducedMotion
          ? { duration: 0 }
          : {
              delay,
              duration,
              ease: [0.22, 1, 0.36, 1],
            }
      }
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
