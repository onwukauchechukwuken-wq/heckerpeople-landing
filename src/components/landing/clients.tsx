import { BlurFade } from "@/components/ui/blur-fade";
import FocusBlurResolve from "@/components/ui/smoothui/focus-blur-resolve";

const CLIENT_LOGOS = Array.from({ length: 12 }, (_, index) => {
  const num = index + 1;
  return {
    src: `/logos/Social%20Proof%20Logo${num}.svg`,
    alt: `Partner company logo ${num}`,
  };
});

export function Clients() {
  return (
    <section className="px-6 py-16 md:px-12 lg:px-[80px] lg:py-[100px] xl:px-[100px]">
      <div className="mx-auto w-full max-w-[1620px]">
        <h2 className="text-h2 mx-auto max-w-[700px] text-center font-medium text-[#0F172A]">
          <FocusBlurResolve triggerOnView>
            Trusted By 200+ Forward-Thinking Teams Across Nigeria
          </FocusBlurResolve>
        </h2>
        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {CLIENT_LOGOS.map((logo, index) => (
            <BlurFade
              key={logo.src}
              inView
              delay={index * 0.03}
              duration={0.32}
              offset={6}
              blur="4px"
            >
              <div className="flex h-[100px] items-center justify-center rounded-xl bg-surface px-4 transition-transform duration-150 will-change-transform hover:-translate-y-0.5">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={logo.src}
                  alt={logo.alt}
                  loading="lazy"
                  decoding="async"
                  className="h-7 w-auto max-w-full object-contain"
                />
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
