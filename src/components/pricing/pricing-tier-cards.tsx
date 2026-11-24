"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { BookDemoButton } from "@/components/landing/book-demo-modal";
import { AnimatedBackground } from "@/components/ui/animated-background";
import { BlurFade } from "@/components/ui/blur-fade";
import FocusBlurResolve from "@/components/ui/smoothui/focus-blur-resolve";
import { cn } from "@/lib/utils";

type BillingCycle = "monthly" | "annually";

interface PricingTier {
  id: string;
  name: string;
  description: string;
  monthlyPrice: string;
  annualPrice: string;
  unit?: string;
  monthlyNote: string;
  annualNote: string;
  featured?: boolean;
  features: string[];
}

const PRICING_TIERS: PricingTier[] = [
  {
    id: "starter",
    name: "Starter",
    description:
      "The unified exception cockpit. Get a handle on your daily logistics.",
    monthlyPrice: "$49",
    annualPrice: "$39",
    unit: "/ Store / Month",
    monthlyNote: "Billed monthly. 14-day free trial. Payment method required",
    annualNote: "Billed annually. 14-day free trial. Payment method required",
    features: [
      "Dynamic SLA aging clocks",
      "1-click Shopify holds & notes",
      "Order-centric chat threading",
      "Unlimited team seats",
      "Basic Slack integration",
    ],
  },
  {
    id: "growth",
    name: "Growth",
    description: "Advanced automations. Keep your delivery promises at scale.",
    monthlyPrice: "$149",
    annualPrice: "$119",
    unit: "/ Store / Month",
    monthlyNote: "Billed monthly. Includes custom webhooks and helpdesk sync.",
    annualNote: "Billed annually. Includes custom webhooks and helpdesk sync.",
    featured: true,
    features: [
      "Everything in Starter",
      "Automated exception sentinels",
      "Zendesk & Gorgias sync",
      "Custom webhook ingestion",
      "Multi-warehouse routing",
    ],
  },
  {
    id: "scale",
    name: "Scale",
    description:
      "The unified exception cockpit. Get a handle on your daily logistics.",
    monthlyPrice: "Custom",
    annualPrice: "Custom",
    monthlyNote:
      "Billed monthly. Includes dedicated support and onboarding.",
    annualNote:
      "Billed annually. Includes dedicated support and onboarding.",
    features: [
      "Everything in Growth",
      "Unlimited monthly orders",
      "Custom SLA rule engine",
      "Priority onboarding call",
      "Dedicated Slack support channel",
    ],
  },
];

export function PricingTierCards() {
  const [billing, setBilling] = useState<BillingCycle>("monthly");

  return (
    <section className="px-6 py-16 md:px-12 lg:px-[80px] lg:py-[100px] xl:px-[100px]">
      <div className="mx-auto w-full max-w-[1620px]">
        <div className="flex flex-col items-center text-center">
          <div className="mx-auto max-w-[700px]">
            <h1 className="text-display font-medium text-[#0F172A]">
              <FocusBlurResolve delay={0}>Simple Pricing For</FocusBlurResolve>
              <br />
              <span className="italic">
                <FocusBlurResolve delay={60}>
                  Scalable Fulfillment.
                </FocusBlurResolve>
              </span>
            </h1>
            <p className="text-lead mt-4 font-normal">
              <FocusBlurResolve delay={120}>
                Choose the plan that fits your volume. All plans include a
                14-day free trial.
              </FocusBlurResolve>
            </p>
          </div>

          <div
            role="radiogroup"
            aria-label="Billing cycle"
            className="mt-8 inline-flex items-center rounded-xl bg-[#F3F4F6] p-1"
          >
            <AnimatedBackground
              defaultValue="monthly"
              enableHover={false}
              onValueChange={(id) => {
                if (id === "monthly" || id === "annually") {
                  setBilling(id);
                }
              }}
              className="rounded-lg bg-white shadow-xs"
              transition={{ type: "spring", bounce: 0.15, duration: 0.35 }}
            >
              <button
                type="button"
                role="radio"
                aria-checked={billing === "monthly"}
                data-id="monthly"
                className={cn(
                  "cursor-pointer rounded-lg px-5 py-2 font-sans text-sm font-medium transition-colors duration-150",
                  billing === "monthly"
                    ? "text-[#0F172A]"
                    : "text-[#6B7280] hover:text-[#0F172A]"
                )}
              >
                Monthly
              </button>
              <button
                type="button"
                role="radio"
                aria-checked={billing === "annually"}
                data-id="annually"
                className={cn(
                  "cursor-pointer rounded-lg px-5 py-2 font-sans text-sm font-medium transition-colors duration-150",
                  billing === "annually"
                    ? "text-[#0F172A]"
                    : "text-[#6B7280] hover:text-[#0F172A]"
                )}
              >
                Annually · Save 20%
              </button>
            </AnimatedBackground>
          </div>
        </div>

        <div className="mt-12 grid items-stretch gap-6 lg:grid-cols-3">
          {PRICING_TIERS.map((tier, index) => {
            const price =
              billing === "annually" ? tier.annualPrice : tier.monthlyPrice;
            const billingNote =
              billing === "annually" ? tier.annualNote : tier.monthlyNote;

            return (
              <BlurFade
                key={tier.id}
                inView
                delay={index * 0.06}
                duration={0.34}
                offset={8}
                blur="4px"
                className="flex"
              >
                <div
                  className={cn(
                    "flex w-full flex-col rounded-2xl border p-8",
                    tier.featured
                      ? "border-[#06B6E9] bg-[#E0F2FE]/80"
                      : "border-[#E5E7EB] bg-white"
                  )}
                >
                  <div>
                    <h2 className="font-heading text-2xl font-medium text-[#0F172A]">
                      {tier.name}
                    </h2>
                    <p className="mt-2.5 min-h-[44px] font-sans text-sm leading-[1.6] font-normal text-body">
                      {tier.description}
                    </p>
                  </div>

                  <div className="mt-8 flex flex-wrap items-baseline gap-1.5">
                    <span className="font-heading text-5xl leading-none font-medium tracking-[-0.03em] text-[#0F172A] tabular-nums">
                      {price}
                    </span>
                    {tier.unit && (
                      <span className="font-sans text-sm font-normal text-[#6B7280]">
                        {tier.unit}
                      </span>
                    )}
                  </div>

                  <p className="mt-3 min-h-[44px] font-sans text-sm leading-[1.5] font-normal text-body">
                    {billingNote}
                  </p>

                  <BookDemoButton
                    size="pill"
                    className="mt-6 h-12 w-full bg-[#06B6E9] text-sm font-medium text-white hover:bg-[#059EC9]"
                  >
                    Book A Demo
                  </BookDemoButton>

                  <ul className="mt-7 flex flex-1 flex-col">
                    {tier.features.map((feature) => (
                      <li
                        key={feature}
                        className={cn(
                          "flex items-center gap-3 border-t border-dashed py-4",
                          tier.featured
                            ? "border-[#06B6E9]/30"
                            : "border-[#E5E7EB]"
                        )}
                      >
                        <Check
                          className="size-4 shrink-0 text-[#0F172A]"
                          aria-hidden="true"
                        />
                        <span className="font-sans text-sm font-normal text-[#0F172A]">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </BlurFade>
            );
          })}
        </div>
      </div>
    </section>
  );
}
