import { Fragment } from "react";
import { Check, X } from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";
import FocusBlurResolve from "@/components/ui/smoothui/focus-blur-resolve";

interface ComparisonRow {
  label: string;
  basic: boolean;
  pro: boolean;
  enterprise: boolean;
}

interface ComparisonCategory {
  title: string;
  rows: ComparisonRow[];
}

const COMPARE_CATEGORIES: ComparisonCategory[] = [
  {
    title: "Attendance",
    rows: [
      { label: "Leave/Exemption", basic: true, pro: true, enterprise: true },
      { label: "Clock In/Clock out", basic: true, pro: true, enterprise: true },
      { label: "Break-In/Break-out", basic: true, pro: true, enterprise: true },
      { label: "Daily report", basic: true, pro: true, enterprise: true },
      { label: "Export report", basic: true, pro: true, enterprise: true },
      { label: "Work shift schedule", basic: true, pro: true, enterprise: true },
      { label: "Holidays", basic: true, pro: true, enterprise: true },
      { label: "Geo fencing", basic: true, pro: true, enterprise: true },
      {
        label: "Interactive admin dashboard",
        basic: true,
        pro: true,
        enterprise: true,
      },
      { label: "Monthly report", basic: true, pro: true, enterprise: true },
      { label: "Customize report", basic: true, pro: true, enterprise: true },
      { label: "Attendance override", basic: true, pro: true, enterprise: true },
      { label: "Notifications", basic: true, pro: true, enterprise: true },
      { label: "Employee Dashboard", basic: true, pro: true, enterprise: true },
      {
        label: "Employee self service",
        basic: true,
        pro: true,
        enterprise: true,
      },
      { label: "Employee Tracking", basic: true, pro: true, enterprise: true },
      {
        label: "Integration with payroll",
        basic: true,
        pro: true,
        enterprise: true,
      },
      { label: "Audit log", basic: true, pro: true, enterprise: true },
    ],
  },
  {
    title: "Payroll Management",
    rows: [
      { label: "Allowances", basic: false, pro: true, enterprise: true },
      { label: "Deductions", basic: false, pro: true, enterprise: true },
      {
        label: "Generate Pay Slips",
        basic: false,
        pro: true,
        enterprise: true,
      },
      { label: "Generate pay roll", basic: false, pro: true, enterprise: true },
      { label: "Export pay slip", basic: false, pro: true, enterprise: true },
      { label: "Salary grade", basic: false, pro: true, enterprise: true },
      { label: "Print pay slip", basic: false, pro: true, enterprise: true },
      { label: "Audit log", basic: false, pro: true, enterprise: true },
      { label: "Export pay roll", basic: false, pro: true, enterprise: true },
      { label: "Pay history", basic: false, pro: true, enterprise: true },
      { label: "Tax computation", basic: false, pro: true, enterprise: true },
      {
        label: "Pension calculation and remittance",
        basic: false,
        pro: true,
        enterprise: true,
      },
    ],
  },
  {
    title: "KPI Management",
    rows: [
      { label: "Individual KPI", basic: false, pro: true, enterprise: true },
      { label: "KPI history", basic: false, pro: true, enterprise: true },
      { label: "Departmental KPI", basic: false, pro: true, enterprise: true },
      { label: "Grade KPI", basic: false, pro: true, enterprise: true },
      { label: "Audit log", basic: false, pro: true, enterprise: true },
      { label: "Export KPI", basic: false, pro: true, enterprise: true },
    ],
  },
  {
    title: "Recruit Management",
    rows: [
      { label: "Job Requisition", basic: false, pro: true, enterprise: true },
      { label: "Publish Jobs", basic: false, pro: false, enterprise: true },
      { label: "Applicant pool", basic: false, pro: false, enterprise: true },
      { label: "Create Job", basic: false, pro: false, enterprise: true },
      {
        label: "Upload Applicants CV's",
        basic: false,
        pro: false,
        enterprise: true,
      },
      {
        label: "Manage job workflow",
        basic: false,
        pro: false,
        enterprise: true,
      },
      {
        label: "Manage email template",
        basic: false,
        pro: false,
        enterprise: true,
      },
      {
        label: "Manage interview Template",
        basic: false,
        pro: false,
        enterprise: true,
      },
      {
        label: "Manage job upload to media Platform",
        basic: false,
        pro: false,
        enterprise: true,
      },
      {
        label: "Applicant Tracking Systems (ATS)",
        basic: false,
        pro: false,
        enterprise: true,
      },
      {
        label: "Scheduling interviews",
        basic: false,
        pro: false,
        enterprise: true,
      },
      { label: "Internal jobs", basic: false, pro: false, enterprise: true },
      { label: "External jobs", basic: false, pro: false, enterprise: true },
      { label: "Job Team Members", basic: false, pro: false, enterprise: true },
      {
        label: "Career website integration",
        basic: false,
        pro: false,
        enterprise: true,
      },
      { label: "Audit log", basic: false, pro: true, enterprise: true },
    ],
  },
];

function FeatureStatus({ included }: { included: boolean }) {
  if (included) {
    return (
      <span className="inline-flex items-center justify-center" aria-label="Included">
        <Check className="size-4 text-[#0F172A]" aria-hidden="true" />
      </span>
    );
  }
  return (
    <span className="inline-flex items-center justify-center" aria-label="Not included">
      <X className="size-4 text-[#9CA3AF]" aria-hidden="true" />
    </span>
  );
}

export function ComparePlansTable() {
  return (
    <section
      id="compare"
      className="px-6 py-16 md:px-12 lg:px-[80px] lg:py-[100px] xl:px-[100px]"
    >
      <div className="mx-auto w-full max-w-[1620px]">
        <h2 className="text-h2 font-medium text-[#0F172A]">
          <FocusBlurResolve triggerOnView>Compare Plans</FocusBlurResolve>
        </h2>

        <BlurFade inView delay={0.06} duration={0.36} offset={8} blur="4px">
          <div className="mt-10 overflow-x-auto">
            <table className="w-full min-w-[680px] border-collapse text-left">
              <thead>
                <tr>
                  <th className="w-[46%] pb-5 pr-4 font-sans text-sm font-medium text-[#0F172A]">
                    <span className="sr-only">Feature</span>
                  </th>
                  <th className="w-[18%] pb-5 text-center font-sans text-sm font-medium text-[#0F172A]">
                    Basic
                  </th>
                  <th className="w-[18%] pb-5 text-center font-sans text-sm font-medium text-[#0F172A]">
                    Pro
                  </th>
                  <th className="w-[18%] pb-5 text-center font-sans text-sm font-medium text-[#0F172A]">
                    Enterprise
                  </th>
                </tr>
              </thead>

              <tbody>
                {COMPARE_CATEGORIES.map((category) => (
                  <Fragment key={category.title}>
                    <tr>
                      <th
                        colSpan={4}
                        scope="colgroup"
                        className="bg-[#E5E7EB]/85 px-5 py-3.5 text-left font-sans text-sm font-medium text-[#0F172A]"
                      >
                        {category.title}
                      </th>
                    </tr>
                    {category.rows.map((row) => (
                      <tr
                        key={`${category.title}-${row.label}`}
                        className="border-b border-dashed border-[#E5E7EB]"
                      >
                        <td className="px-5 py-4 font-sans text-sm font-normal text-[#334155]">
                          {row.label}
                        </td>
                        <td className="py-4 text-center">
                          <FeatureStatus included={row.basic} />
                        </td>
                        <td className="py-4 text-center">
                          <FeatureStatus included={row.pro} />
                        </td>
                        <td className="py-4 text-center">
                          <FeatureStatus included={row.enterprise} />
                        </td>
                      </tr>
                    ))}
                  </Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
