import Image from "next/image";
import { Apple, Play } from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";
import FocusBlurResolve from "@/components/ui/smoothui/focus-blur-resolve";

export function MobileApp() {
  return (
    <section
      id="mobile"
      className="px-6 py-16 md:px-12 lg:px-[80px] lg:py-[100px] xl:px-[100px]"
    >
      <div className="mx-auto w-full max-w-[1620px]">
        <div className="flex flex-col items-center text-center">
          <div className="mx-auto max-w-[700px]">
            <h2 className="text-h2 font-medium text-[#0F172A]">
              <FocusBlurResolve triggerOnView>
                Turn Any Mobile Device Into A Smart Biometric Terminal.
              </FocusBlurResolve>
            </h2>
            <p className="text-lead mt-5 font-normal">
              <FocusBlurResolve triggerOnView delay={100}>
                Clock in staff, enroll biometrics on the go, and sync attendance
                records directly to your central web dashboard in real time.
              </FocusBlurResolve>
            </p>
          </div>

          <BlurFade inView delay={0.12} duration={0.34} offset={8} blur="4px">
            <a
              href="#mobile"
              className="mt-8 inline-flex items-center gap-5 rounded-2xl bg-gradient-to-b from-[#22C3F0] to-primary p-2 pl-6 text-white transition-transform duration-150 hover:brightness-95 active:scale-[0.98]"
            >
              <span className="font-sans text-lg font-medium">Download App</span>
              <span className="flex items-center gap-2" aria-hidden="true">
                <Play className="size-4 fill-current" />
                <span className="h-4 w-px bg-white/40" />
                <Apple className="size-4 fill-current" />
              </span>
              <span className="rounded-xl bg-white p-1.5">
                <Image
                  src="/images/qr.png"
                  alt="QR code to download the HeckerPeople mobile app"
                  width={80}
                  height={80}
                  className="size-20"
                />
              </span>
            </a>
          </BlurFade>
        </div>

        <div className="mt-16 grid gap-5">
          <div className="grid gap-5 lg:grid-cols-[2600fr_1880fr]">
            <BlurFade inView duration={0.36} offset={8} blur="4px">
              <div className="relative aspect-[2600/1680] overflow-hidden rounded-3xl">
                <Image
                  src="/mobile/mobile1.png"
                  alt="HeckerPeople — Trusted by distributed teams across Lagos"
                  fill
                  sizes="(min-width:1024px) 58vw, 100vw"
                  className="object-cover"
                />
              </div>
            </BlurFade>
            <BlurFade inView delay={0.06} duration={0.36} offset={8} blur="4px">
              <div className="relative aspect-[1880/1680] overflow-hidden rounded-3xl">
                <Image
                  src="/mobile/mobile2.png"
                  alt="HeckerPeople mobile app screen showing biometric index finger enrollment"
                  fill
                  sizes="(min-width:1024px) 42vw, 100vw"
                  className="object-cover"
                />
              </div>
            </BlurFade>
          </div>

          <div className="grid gap-5 lg:grid-cols-[1880fr_2600fr]">
            <BlurFade inView duration={0.36} offset={8} blur="4px">
              <div className="relative aspect-[1880/1680] overflow-hidden rounded-3xl">
                <Image
                  src="/mobile/mobile3.png"
                  alt="HeckerPeople mobile app screen showing live fingerprint match verified at 99.8%"
                  fill
                  sizes="(min-width:1024px) 42vw, 100vw"
                  className="object-cover"
                />
              </div>
            </BlurFade>
            <BlurFade inView delay={0.06} duration={0.36} offset={8} blur="4px">
              <div className="relative aspect-[2600/1680] overflow-hidden rounded-3xl">
                <Image
                  src="/mobile/mobile4.png"
                  alt="Attendance That Works Where Your Team Works — Give on-site teams and remote field staff an effortless way to check in, review hours, and stay connected."
                  fill
                  sizes="(min-width:1024px) 58vw, 100vw"
                  className="object-cover"
                />
              </div>
            </BlurFade>
          </div>
        </div>
      </div>
    </section>
  );
}
