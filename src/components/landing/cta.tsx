import Image from "next/image";
import Link from "next/link";
import { BlurFade } from "@/components/ui/blur-fade";
import { Button } from "@/components/ui/button";
import FocusBlurResolve from "@/components/ui/smoothui/focus-blur-resolve";
import { BookDemoButton } from "./book-demo-modal";

export function Cta() {
  return (
    <section className="px-6 py-16 md:px-12 lg:px-[80px] lg:py-[100px] xl:px-[100px]">
      <div className="mx-auto w-full max-w-[1620px]">
        <div className="flex flex-col items-center text-center">
          <div className="mx-auto max-w-[700px]">
            <h2 className="text-display font-medium text-[#0F172A]">
              <FocusBlurResolve triggerOnView>
                Ready To Transform Your Workforce Operations?
              </FocusBlurResolve>
            </h2>
            <p className="text-lead mt-5 font-normal">
              <FocusBlurResolve triggerOnView delay={100}>
                Join forward-thinking companies automating daily attendance,
                compliant payroll, and talent management with zero friction.
              </FocusBlurResolve>
            </p>
          </div>

          <BlurFade inView delay={0.12} duration={0.34} offset={8} blur="4px">
            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              <BookDemoButton
                variant="outline"
                size="xl"
                className="min-w-[184px] border-border bg-white text-[#0F172A] hover:bg-muted"
              >
                Book A Demo
              </BookDemoButton>
              <Button
                size="xl"
                className="min-w-[184px]"
                nativeButton={false}
                render={<Link href="/pricing" />}
              >
                Get Started
              </Button>
            </div>
          </BlurFade>
        </div>

        <BlurFade inView delay={0.1} duration={0.38} offset={10} blur="4px">
          <div className="relative mx-auto mt-14 w-full max-w-[1110px] overflow-hidden rounded-3xl">
            <Image
              src="/cta/conversion-dashboard.png"
              alt="HeckerPeople dashboard preview showing KPI management and team workflows"
              width={2400}
              height={913}
              className="block h-auto w-full object-cover"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white via-white/75 to-transparent"
            />
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
