"use client";

import { useRef } from "react";
import {
  motion,
  useInView,
  useReducedMotion,
  type MotionStyle,
  type Transition,
} from "motion/react";

import { cn } from "@/lib/utils";

interface BorderBeamProps {
  size?: number;
  duration?: number;
  delay?: number;
  colorFrom?: string;
  colorTo?: string;
  transition?: Transition;
  className?: string;
  style?: React.CSSProperties;
  reverse?: boolean;
  initialOffset?: number;
  borderWidth?: number;
  once?: boolean;
}

export const BorderBeam = ({
  className,
  size = 140,
  delay = 0,
  duration = 7,
  colorFrom = "#06B6E9",
  colorTo = "#7DD3FC",
  transition,
  style,
  reverse = false,
  initialOffset = 0,
  borderWidth = 2,
  once = true,
}: BorderBeamProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const isInView = useInView(ref, { once: true, amount: "some" });

  if (prefersReducedMotion) return null;

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 rounded-[inherit] border-(length:--border-beam-width) border-transparent mask-[linear-gradient(transparent,transparent),linear-gradient(#000,#000)] mask-intersect [mask-clip:padding-box,border-box]"
      style={
        {
          "--border-beam-width": `${borderWidth}px`,
        } as React.CSSProperties
      }
    >
      {isInView && (
        <motion.div
          className={cn(
            "absolute aspect-square bg-linear-to-l from-(--color-from) via-(--color-to) to-transparent",
            className
          )}
          style={
            {
              width: size,
              offsetPath: `rect(0 auto auto 0 round ${size}px)`,
              "--color-from": colorFrom,
              "--color-to": colorTo,
              ...style,
            } as MotionStyle
          }
          initial={{ offsetDistance: `${initialOffset}%`, opacity: 0.9 }}
          animate={{
            offsetDistance: reverse
              ? [`${100 - initialOffset}%`, `${-initialOffset}%`]
              : [`${initialOffset}%`, `${100 + initialOffset}%`],
            opacity: once ? [0, 1, 1, 0] : 1,
          }}
          transition={{
            repeat: once ? 0 : Infinity,
            ease: "linear",
            duration,
            delay,
            ...transition,
          }}
        />
      )}
    </div>
  );
};
