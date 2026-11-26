"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import { BlurFade } from "@/components/ui/blur-fade";
import { Button } from "@/components/ui/button";
import FocusBlurResolve from "@/components/ui/smoothui/focus-blur-resolve";
import { BookDemoButton } from "./book-demo-modal";

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);
  const [videoReady, setVideoReady] = useState(false);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const videoScale = useTransform(scrollYProgress, [0, 1], [1.08, 1]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -20]);

  useEffect(() => {
    if (prefersReducedMotion) return;
    const rafId = window.requestAnimationFrame(() => {
      setShouldLoadVideo(true);
    });
    return () => window.cancelAnimationFrame(rafId);
  }, [prefersReducedMotion]);

  return (
    <section className="pb-6">
      <div className="mx-auto w-full max-w-[1820px] px-4 md:px-6 lg:px-12">
        <div
          ref={heroRef}
          className="relative h-[540px] overflow-hidden rounded-[28px] bg-[#0B1220] sm:h-[580px] lg:h-[620px] xl:h-[680px]"
        >
          <motion.div
            style={prefersReducedMotion ? undefined : { scale: videoScale }}
            className="absolute inset-0 h-full w-full origin-center will-change-transform"
          >
            {/* Primary above-the-fold LCP visual */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/hero/hero-poster.webp"
              alt="Team collaborating in a modern HeckerPeople workspace"
              fetchPriority="high"
              decoding="async"
              className="h-full w-full object-cover"
            />

            {/* Hero background video */}
            {shouldLoadVideo && !prefersReducedMotion && (
              <video
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                poster="/hero/hero-poster.webp"
                onCanPlay={() => setVideoReady(true)}
                className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-300 ${
                  videoReady ? "opacity-100" : "opacity-0"
                }`}
              >
                <source src="/hero/hero-bg.mp4" type="video/mp4" />
              </video>
            )}
          </motion.div>

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 h-full w-full"
            style={{
              background:
                "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.65) 100%)",
            }}
          />

          <motion.div
            style={prefersReducedMotion ? undefined : { y: contentY }}
            className="absolute inset-x-0 bottom-0 z-10 flex flex-col items-center px-6 pb-8 text-center text-white will-change-transform lg:pb-12"
          >
            <h1 className="text-display max-w-[780px] font-semibold">
              <FocusBlurResolve delay={0}>
                Seamless Workforce Management Starts Here
              </FocusBlurResolve>
            </h1>
            <p className="mt-4 max-w-[760px] font-sans text-base leading-[1.55] text-white/90 sm:text-[17px]">
              <FocusBlurResolve delay={100}>
                Effortlessly manage your workforce by automating attendance,
                payroll, and core HR operations in one people-first platform.
              </FocusBlurResolve>
            </p>
            <BlurFade duration={0.34} delay={0.14} offset={8} blur="4px">
              <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
                <BookDemoButton
                  size="xl"
                  className="min-w-[200px] bg-white text-foreground hover:bg-white/90"
                >
                  Book A Demo
                </BookDemoButton>
                <Button
                  size="xl"
                  className="min-w-[200px]"
                  nativeButton={false}
                  render={<Link href="/pricing" prefetch={false} />}
                >
                  Get Started
                </Button>
              </div>
            </BlurFade>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
