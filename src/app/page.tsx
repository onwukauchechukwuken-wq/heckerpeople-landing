import { Clients } from "@/components/landing/clients";
import { Cta } from "@/components/landing/cta";
import { Features } from "@/components/landing/features";
import { Hero } from "@/components/landing/hero";
import { MobileApp } from "@/components/landing/mobile-app";
import { PlatformTabs } from "@/components/landing/platform-tabs";
import { Pricing } from "@/components/landing/pricing";
import { SiteFooter } from "@/components/landing/site-footer";
import { SiteHeader } from "@/components/landing/site-header";

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
