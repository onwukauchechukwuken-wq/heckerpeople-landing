import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { BorderBeam } from "@/components/ui/border-beam";
import { Button } from "@/components/ui/button";
import { NumberTicker } from "@/components/ui/number-ticker";
import FocusBlurResolve from "@/components/ui/smoothui/focus-blur-resolve";

const INCLUDED_FEATURES = [
  "Employee self-service & mobile clock-in",
  "Real-time employee tracking & geo-fencing",
  "Direct payroll integration",
  "Automated shift scheduling & reports",
];

export function Pricing() {
  return (
    <section
      id="pricing"
      className="px-6 py-8 md:px-[50px] md:py-[40px]"
    >
      <div className="mx-auto w-full max-w-[1820px]">
        <div className="relative grid items-start gap-12 overflow-hidden rounded-3xl bg-accent px-6 py-10 md:px-[100px] md:py-[60px] lg:grid-cols-2">
          <BorderBeam
            once
            size={180}
            duration={7}
            borderWidth={2}
            colorFrom="#06B6E9"
            colorTo="#7DD3FC"
          />

          <div>
            <p className="font-sans text-sm font-medium tracking-wide text-brand-hover uppercase">
              <FocusBlurResolve triggerOnView>
                ALL-IN-ONE WORKFORCE ENGINE
              </FocusBlurResolve>
            </p>
            <h2 className="text-h2 mt-6 max-w-[420px] font-medium text-[#0F172A]">
              <FocusBlurResolve triggerOnView delay={100}>
                Full Team Control, Built To Scale.
              </FocusBlurResolve>
            </h2>

            <div className="mt-10 flex flex-wrap items-end gap-2">
              <span className="font-heading text-6xl leading-none font-semibold tracking-[-0.03em] text-foreground lg:text-[88px]">
                ₦
                <NumberTicker value={2200} startValue={1800} delay={0.1} />
              </span>
              <span className="pb-2 font-sans text-lg text-body">
                / User / Month
              </span>
            </div>

            <p className="mt-6 font-sans text-base leading-[1.6] text-body">
              or ₦2,000/user/month, Billed annually.
              <br />
              Scale your seats as your team expands.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Button
                size="xl"
                className="px-12"
                nativeButton={false}
                render={<a href="#contact" />}
              >
                Get Started
              </Button>
              <Button
                variant="ghost"
                size="xl"
                className="hover:bg-primary/10"
                nativeButton={false}
                render={<Link href="/pricing" />}
              >
                See Plans
                <ArrowRight className="size-5" aria-hidden="true" />
              </Button>
            </div>
          </div>

          <div>
            <p className="font-sans text-2xl font-medium text-foreground">
              Included in every plan.
            </p>
            <ul className="mt-4">
              {INCLUDED_FEATURES.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-4 border-b border-dashed border-primary/60 py-5"
                >
                  <Check
                    className="size-5 shrink-0 text-foreground"
                    aria-hidden="true"
                  />
                  <span className="font-sans text-lg font-medium text-foreground">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-6 font-sans text-lg leading-[1.6] text-body">
              All modules included at ₦2,200 per user. Dedicated phone onboarding
              and priority support included.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
