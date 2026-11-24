import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Sora } from "next/font/google";
import { BookDemoProvider } from "@/components/landing/book-demo-modal";
import { MotionProvider } from "@/components/motion-provider";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-jakarta",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sora",
  display: "swap",
});

export const metadata: Metadata = {
  title: "HeckerPeople — Seamless Workforce Management",
  description:
    "HeckerPeople provides the tools to effortlessly manage your workforce — from biometric attendance to multi-tier payroll, shift rostering, and KPI appraisals.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jakarta.variable} ${sora.variable}`}>
      <body className="font-sans antialiased bg-background text-foreground">
        <MotionProvider>
          <BookDemoProvider>{children}</BookDemoProvider>
        </MotionProvider>
      </body>
    </html>
  );
}
