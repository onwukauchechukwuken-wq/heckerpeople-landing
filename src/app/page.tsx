import dynamic from "next/dynamic";
import { Clients } from "@/components/landing/clients";
import { Hero } from "@/components/landing/hero";
import { SiteHeader } from "@/components/landing/site-header";

const PlatformTabs = dynamic(() =>
  import("@/components/landing/platform-tabs").then((m) => m.PlatformTabs)
);
const Features = dynamic(() =>
  import("@/components/landing/features").then((m) => m.Features)
);
const MobileApp = dynamic(() =>
  import("@/components/landing/mobile-app").then((m) => m.MobileApp)
);
const Pricing = dynamic(() =>
  import("@/components/landing/pricing").then((m) => m.Pricing)
);
const Cta = dynamic(() =>
  import("@/components/landing/cta").then((m) => m.Cta)
);
const SiteFooter = dynamic(() =>
  import("@/components/landing/site-footer").then((m) => m.SiteFooter)
);

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        <Hero />
        <Clients />
        <PlatformTabs />
        <Features />
        <MobileApp />
        <Pricing />
        <Cta />
      </main>
      <SiteFooter />
    </div>
  );
}
