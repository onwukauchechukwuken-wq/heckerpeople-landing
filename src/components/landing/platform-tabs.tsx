"use client";

import { useState } from "react";
import Image from "next/image";
import { useReducedMotion } from "motion/react";
import { AnimatedBackground } from "@/components/ui/animated-background";
import FocusBlurResolve from "@/components/ui/smoothui/focus-blur-resolve";
import { TransitionPanel } from "@/components/ui/transition-panel";

interface PlatformTab {
  value: "payroll" | "biometric" | "talent";
  iconSrc: string;
  iconWidth: number;
  iconHeight: number;
  title: string;
  description: string;
}

interface BentoImageTile {
  src: string;
  alt: string;
}

const PLATFORM_TABS: PlatformTab[] = [
  {
    value: "payroll",
    iconSrc: "/logos/Hand%20Money.svg",
    iconWidth: 20,
    iconHeight: 20,
    title: "Automated Compensation & Payroll",
    description:
      "Calculate multi-tier salaries, taxes, and bank-ready payouts in minutes without spreadsheet errors.",
  },
  {
    value: "biometric",
    iconSrc: "/logos/Container.svg",
    iconWidth: 17,
    iconHeight: 18,
    title: "Hardware-Verified Biometric Attendance",
    description:
      "Eliminate buddy punching and ghost workers. Real-time direct synchronisation with on-premise biometric finger and facial terminals with geo-fencing fail-safes.",
  },
  {
    value: "talent",
    iconSrc: "/logos/Users%20Group%20Two%20Rounded.svg",
    iconWidth: 20,
    iconHeight: 20,
    title: "Unified Talent Lifecycle",
    description:
      "Manage requisitions, evaluate candidate pipelines, and run structured quarterly KPI appraisals from one dashboard.",
  },
];

const BENTO_BY_TAB: Record<
  PlatformTab["value"],
  [BentoImageTile, BentoImageTile, BentoImageTile, BentoImageTile]
> = {
  payroll: [
    {
      src: "/features/tab1-payroll1.png",
      alt: "Smiling team member representing automated compensation and payroll",
    },
    {
      src: "/features/tab1-payroll2.png",
      alt: "Paid employee compensation records list in HeckerPeople",
    },
    {
      src: "/features/tab1-payroll3.png",
      alt: "Create payroll interface displaying mandated allowances in Naira",
    },
    {
      src: "/features/tab1-payroll4.png",
      alt: "Translucent Naira currency coins arranged in a ring",
    },
  ],
  biometric: [
    {
      src: "/features/tab2-biometric1.png",
      alt: "Hardware-verified biometric attendance visual 1",
    },
    {
      src: "/features/tab2-biometric2.png",
      alt: "Hardware-verified biometric attendance visual 2",
    },
    {
      src: "/features/tab2-biometric3.png",
      alt: "Hardware-verified biometric attendance visual 3",
    },
    {
      src: "/features/tab2-biometric4.png",
      alt: "Hardware-verified biometric attendance visual 4",
    },
  ],
  talent: [
    {
      src: "/features/tab3-talent1.png",
      alt: "Unified talent lifecycle visual 1",
    },
    {
      src: "/features/tab3-talent2.png",
      alt: "Unified talent lifecycle visual 2",
    },
    {
      src: "/features/tab3-talent3.png",
      alt: "Unified talent lifecycle visual 3",
    },
    {
      src: "/features/tab3-talent4.png",
      alt: "Unified talent lifecycle visual 4",
    },
  ],
};

function Bento({
  tiles,
}: {
  tiles: [BentoImageTile, BentoImageTile, BentoImageTile, BentoImageTile];
}) {
  const [col1Tall, col1Short, col2Short, col2Tall] = tiles;

  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="flex flex-col gap-4">
        <div className="relative h-72 overflow-hidden rounded-2xl sm:h-96 lg:h-[440px]">
          <Image
            src={col1Tall.src}
            alt={col1Tall.alt}
            fill
            sizes="(min-width:1024px) 25vw, 50vw"
            className="object-cover"
          />
        </div>
        <div className="relative h-48 overflow-hidden rounded-2xl sm:h-64 lg:h-[310px]">
          <Image
            src={col1Short.src}
            alt={col1Short.alt}
            fill
            sizes="(min-width:1024px) 25vw, 50vw"
            className="object-cover"
          />
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="relative h-48 overflow-hidden rounded-2xl sm:h-64 lg:h-[310px]">
          <Image
            src={col2Short.src}
            alt={col2Short.alt}
            fill
            sizes="(min-width:1024px) 25vw, 50vw"
            className="object-cover"
          />
        </div>
        <div className="relative h-72 overflow-hidden rounded-2xl sm:h-96 lg:h-[440px]">
          <Image
            src={col2Tall.src}
            alt={col2Tall.alt}
            fill
            sizes="(min-width:1024px) 25vw, 50vw"
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export function PlatformTabs() {
  const [activeTab, setActiveTab] = useState<PlatformTab["value"]>("payroll");
  const prefersReducedMotion = useReducedMotion();

  const activeTabIndex = Math.max(
    0,
    PLATFORM_TABS.findIndex((tab) => tab.value === activeTab)
  );

  const panelVariants = prefersReducedMotion
    ? {
        enter: { opacity: 1 },
        center: { opacity: 1 },
        exit: { opacity: 0 },
      }
    : {
        enter: { opacity: 0, y: 8, filter: "blur(4px)" },
        center: { opacity: 1, y: 0, filter: "blur(0px)" },
        exit: { opacity: 0, y: -8, filter: "blur(4px)" },
      };

  const panelTransition = prefersReducedMotion
    ? { duration: 0 }
    : { duration: 0.3, ease: [0.22, 1, 0.36, 1] as const };

  return (
    <section
      id="platform"
      className="px-6 py-16 md:px-12 lg:px-[80px] lg:py-[100px] xl:px-[100px]"
    >
      <div className="mx-auto w-full max-w-[1620px]">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="text-display max-w-[520px] font-medium text-[#0F172A]">
              <FocusBlurResolve triggerOnView>
                One Platform. Total Workforce Control.
              </FocusBlurResolve>
            </h2>

            <div
              role="tablist"
              aria-orientation="vertical"
              aria-label="HeckerPeople platform capabilities"
              className="mt-12 flex w-full flex-col items-stretch gap-2"
            >
              <AnimatedBackground
                defaultValue="payroll"
                enableHover={false}
                onValueChange={(id) => {
                  if (id) {
                    setActiveTab(id as PlatformTab["value"]);
                  }
                }}
                className="rounded-2xl bg-accent"
                transition={{
                  type: "spring",
                  bounce: 0.15,
                  duration: 0.4,
                }}
              >
                {PLATFORM_TABS.map((tab) => (
                  <button
                    key={tab.value}
                    type="button"
                    role="tab"
                    aria-selected={activeTab === tab.value}
                    data-id={tab.value}
                    className="w-full cursor-pointer rounded-2xl border-0 p-6 text-left font-normal text-foreground outline-none focus-visible:ring-3 focus-visible:ring-ring/50 md:p-8"
                  >
                    <span className="flex w-full flex-col items-start gap-3">
                      <span className="flex items-center gap-3 font-sans text-[20px] leading-snug font-medium text-foreground">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={tab.iconSrc}
                          alt=""
                          width={tab.iconWidth}
                          height={tab.iconHeight}
                          aria-hidden="true"
                          className="h-5 w-auto shrink-0 object-contain"
                        />
                        <span>{tab.title}</span>
                      </span>
                      <span className="max-w-[470px] font-sans text-base leading-[1.6] font-normal text-body">
                        {tab.description}
                      </span>
                    </span>
                  </button>
                ))}
              </AnimatedBackground>
            </div>
          </div>

          <div role="tabpanel" className="w-full">
            <TransitionPanel
              activeIndex={activeTabIndex}
              variants={panelVariants}
              transition={panelTransition}
            >
              {PLATFORM_TABS.map((tab) => (
                <Bento key={tab.value} tiles={BENTO_BY_TAB[tab.value]} />
              ))}
            </TransitionPanel>
          </div>
        </div>
      </div>
    </section>
  );
}
