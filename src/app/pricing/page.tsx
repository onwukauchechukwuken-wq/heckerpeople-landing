import type { Metadata } from "next";
import { Cta } from "@/components/landing/cta";
import { SiteFooter } from "@/components/landing/site-footer";
import { SiteHeader } from "@/components/landing/site-header";
import { ComparePlansTable } from "@/components/pricing/compare-plans-table";
import { PricingTierCards } from "@/components/pricing/pricing-tier-cards";

export const metadata: Metadata = {
  title: "Pricing — HeckerPeople",
  description:
    "Simple pricing for scalable workforce management. Compare Basic, Pro, and Enterprise plans across Attendance, Payroll, KPI, and Recruitment.",
};

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        <PricingTierCards />
        <ComparePlansTable />
        <Cta />
      </main>
      <SiteFooter />
    </div>
  );
}
