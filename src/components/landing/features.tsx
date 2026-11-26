import Image from "next/image";
import { CircleCheck } from "lucide-react";
import FocusBlurResolve from "@/components/ui/smoothui/focus-blur-resolve";

interface FeatureRow {
  title: string;
  description: string;
  bullets: string[];
  bgImage: string;
  cardImage: string;
  imageAlt: string;
  reverse?: boolean;
}

const FEATURES: FeatureRow[] = [
  {
    title: "Dynamic Shift Rostering & Coverage",
    description:
      "Easily manage complex work schedules, day/night rotations, and overlapping shifts. Monitor live clock-ins to ensure your operations are always adequately staffed without the spreadsheet chaos.",
    bullets: [
      "Drag-and-Drop Shift Calendars",
      "Live Shift Status Tracking",
      "Automated Conflict Alerts",
    ],
    bgImage: "/features/bg-feature-1.png",
    cardImage: "/features/card-feature-1.png",
    imageAlt:
      "HeckerPeople shift rostering interface showing employee schedule assignment",
  },
  {
    title: "KPI Appraisals & Secure Document Vault",
    description:
      "Foster transparent employee progression with objective, peer-supported review cycles. Retain complete historical audit records of contracts, leaves, salary raises, and compliance paperwork.",
    bullets: [
      "Standardized Scorecards",
      "Bank-Grade Document Vault",
      "Tamper-proof Audit Trails",
    ],
    bgImage: "/features/bg-feature-2.png",
    cardImage: "/features/card-feature-2.png",
    imageAlt:
      "HeckerPeople KPI Management scorecard showing deliverables and score breakdown",
    reverse: true,
  },
  {
    title: "Secure Activity & Compliance Audit Log",
    description:
      "Track every operational change in real time with an immutable, tamper-proof activity log. From permissions to payroll, ensure total accountability and audit-readiness without manual tracking.",
    bullets: [
      "Real-time Activity Logs",
      "Tamper-Proof Compliance",
      "Advanced Search & Filtering",
    ],
    bgImage: "/features/bg-feature-3.png",
    cardImage: "/features/card-feature-3.png",
    imageAlt:
      "HeckerPeople reports interface showing real-time activity and compliance audit logs",
  },
];

export function Features() {
  return (
    <section
      id="tools"
      className="px-6 py-16 md:px-12 lg:px-[80px] lg:py-[100px] xl:px-[100px]"
    >
      <div className="mx-auto w-full max-w-[1620px]">
        <div className="mx-auto max-w-[700px] text-center">
          <h2 className="text-h2 font-medium text-[#0F172A]">
            <FocusBlurResolve triggerOnView>
              The Tools Powering Your Entire People Operations.
            </FocusBlurResolve>
          </h2>
          <p className="text-lead mt-5 font-normal">
            <FocusBlurResolve triggerOnView delay={100}>
              From biometric shift check-ins to automated salary disbursements,
              explore the core engines keeping your workforce running smoothly.
            </FocusBlurResolve>
          </p>
        </div>

        <div className="mt-20 space-y-24 lg:space-y-32">
          {FEATURES.map((feature) => (
            <div
              key={feature.title}
              className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16"
            >
              <div>
                <h3 className="text-h3 max-w-[440px] font-medium text-[#0F172A]">
                  {feature.title}
                </h3>
                <p className="mt-5 max-w-[480px] font-sans text-base leading-[1.6] text-body">
                  {feature.description}
                </p>
                <ul className="mt-6 space-y-4">
                  {feature.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-center gap-3">
                      <CircleCheck
                        className="size-4 shrink-0 text-foreground"
                        aria-hidden="true"
                      />
                      <span className="font-sans text-[15px] font-medium text-foreground">
                        {bullet}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={feature.reverse ? "lg:order-first" : undefined}>
                <div className="relative aspect-[2416/1400] w-full overflow-hidden rounded-2xl bg-slate-100">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={feature.bgImage}
                    alt=""
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="relative z-10 flex h-full w-full items-center justify-center p-5">
                    <div className="relative h-full w-full">
                      <Image
                        src={feature.cardImage}
                        alt={feature.imageAlt}
                        fill
                        unoptimized
                        loading="eager"
                        decoding="async"
                        sizes="(min-width:1024px) 45vw, 100vw"
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
