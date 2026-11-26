"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatedBackground } from "@/components/ui/animated-background";
import FocusBlurResolve from "@/components/ui/smoothui/focus-blur-resolve";

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
  bgClass?: string;
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
      src: "/features/tab1-payroll1.webp",
      alt: "Smiling team member representing automated compensation and payroll",
    },
    {
      src: "/features/card-payroll-3.png",
      alt: "Paid employee compensation records list in HeckerPeople",
      bgClass: "bg-[#EAE6F3]",
    },
    {
      src: "/features/tab1-payroll3.webp",
      alt: "Create payroll interface displaying mandated allowances in Naira",
      bgClass: "bg-[#EBF4FA]",
    },
    {
      src: "/features/tab1-payroll4.webp",
      alt: "Translucent Naira currency coins arranged in a ring",
    },
  ],
  biometric: [
    {
      src: "/features/tab2-biometric1.webp",
      alt: "Hardware-verified biometric attendance visual 1",
    },
    {
      src: "/features/card-biometric-3.png",
      alt: "Employee attendance status card with clock-in, PTO leave, and exemption details",
      bgClass: "bg-[#F3EEF8]",
    },
    {
      src: "/features/tab2-biometric3.webp",
      alt: "Live fingerprint match verification card",
      bgClass: "bg-[#FDF6E7]",
    },
    {
      src: "/features/tab2-biometric4.webp",
      alt: "Hardware-verified biometric attendance visual 4",
    },
  ],
  talent: [
    {
      src: "/features/tab3-talent1.webp",
      alt: "Unified talent lifecycle visual 1",
    },
    {
      src: "/features/card-talent-3.png",
      alt: "Top candidate matches list in HeckerPeople",
      bgClass: "bg-[#F2F6E8]",
    },
    {
      src: "/features/tab3-talent3.webp",
      alt: "Quarterly KPI appraisal progress card",
      bgClass: "bg-[#E9F6EC]",
    },
    {
      src: "/features/tab3-talent4.webp",
      alt: "Unified talent lifecycle visual 4",
    },
  ],
};

function BentoTile({
  tile,
  heightClass,
}: {
  tile: BentoImageTile;
  heightClass: string;
}) {
  return (
    <div
      className={`relative ${heightClass} overflow-hidden rounded-2xl ${
        tile.bgClass ?? "bg-slate-100"
      }`}
    >
      <Image
        src={tile.src}
        alt={tile.alt}
        fill
        unoptimized
        loading="eager"
        decoding="async"
        sizes="(min-width:1024px) 25vw, 50vw"
        className="h-full w-full object-cover"
      />
    </div>
  );
}

function Bento({
  tiles,
}: {
  tiles: [BentoImageTile, BentoImageTile, BentoImageTile, BentoImageTile];
}) {
  const [col1Tall, col1Short, col2Short, col2Tall] = tiles;

  return (
    <div className="grid grid-cols-2 gap-3.5">
      <div className="flex flex-col gap-3.5">
        <BentoTile tile={col1Tall} heightClass="h-56 sm:h-64 lg:h-[260px]" />
        <BentoTile tile={col1Short} heightClass="h-44 sm:h-52 lg:h-[195px]" />
      </div>

      <div className="flex flex-col gap-3.5">
        <BentoTile tile={col2Short} heightClass="h-44 sm:h-52 lg:h-[195px]" />
        <BentoTile tile={col2Tall} heightClass="h-56 sm:h-64 lg:h-[260px]" />
      </div>
    </div>
  );
}

export function PlatformTabs() {
  const [activeTab, setActiveTab] = useState<PlatformTab["value"]>("payroll");

  return (
    <section
      id="platform"
      className="flex min-h-[calc(100vh-4rem)] w-full items-center px-6 py-10 md:px-12 lg:px-[80px] lg:py-12 xl:px-[100px]"
    >
      <div className="mx-auto w-full max-w-[1440px]">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <div>
            <h2 className="max-w-[480px] font-sans text-3xl leading-[1.15] font-medium tracking-tight text-[#0F172A] sm:text-4xl lg:text-[40px]">
              <FocusBlurResolve triggerOnView>
                One Platform. Total Workforce Control.
              </FocusBlurResolve>
            </h2>

            <div
              role="tablist"
              aria-orientation="vertical"
              aria-label="HeckerPeople platform capabilities"
              className="mt-6 flex w-full flex-col items-stretch gap-1.5"
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
                    onClick={() => setActiveTab(tab.value)}
                    className="w-full cursor-pointer rounded-2xl border-0 px-5 py-4 text-left font-normal text-foreground outline-none focus-visible:ring-3 focus-visible:ring-ring/50 md:px-6 md:py-5"
                  >
                    <span className="flex w-full flex-col items-start gap-2">
                      <span className="flex items-center gap-2.5 font-sans text-[18px] leading-snug font-medium text-foreground">
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
                      <span className="max-w-[470px] font-sans text-sm leading-relaxed font-normal text-body">
                        {tab.description}
                      </span>
                    </span>
                  </button>
                ))}
              </AnimatedBackground>
            </div>
          </div>

          <div role="tabpanel" className="w-full">
            <Bento tiles={BENTO_BY_TAB[activeTab]} />
          </div>
        </div>
      </div>
    </section>
  );
}
