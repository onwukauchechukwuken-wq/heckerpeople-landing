import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { BookDemoLink } from "./book-demo-modal";
import { Logo } from "./logo";
import { InstagramIcon, LinkedinIcon, XIcon } from "./social-icons";

export function SiteFooter() {
  return (
    <footer
      id="contact"
      className="bg-background px-6 py-16 md:px-12 lg:px-[80px] lg:py-[100px] xl:px-[100px]"
    >
      <div className="mx-auto w-full max-w-[1620px]">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_auto_auto_auto] lg:gap-x-24">
          <div>
            <Link
              href="/"
              aria-label="HeckerPeople Home"
              className="inline-block"
            >
              <Logo />
            </Link>
            <p className="mt-5 max-w-[330px] font-sans text-[15px] leading-[1.6] text-body">
              Modern workforce management, biometric attendance, and automated
              payroll for forward-thinking organizations.
            </p>
            <Badge
              variant="outline"
              className="mt-5 h-auto gap-2 rounded-full border-border bg-white px-4 py-2 font-sans text-sm font-normal text-body"
            >
              <span
                className="size-2 rounded-full bg-primary"
                aria-hidden="true"
              />
              All Systems Operational
            </Badge>
          </div>

          <div>
            <p className="font-sans text-lg font-medium text-foreground">
              Product
            </p>
            <ul className="mt-5 space-y-4 font-sans text-[17px] text-body">
              <li>
                <Link href="/" className="hover:text-foreground">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#platform" className="hover:text-foreground">
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  prefetch={false}
                  className="hover:text-foreground"
                >
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-sans text-lg font-medium text-foreground">
              Company
            </p>
            <ul className="mt-5 space-y-4 font-sans text-[17px] text-body">
              <li>
                <a href="#platform" className="hover:text-foreground">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-foreground">
                  Contact Us
                </a>
              </li>
              <li>
                <BookDemoLink className="hover:text-foreground">
                  Book a Demo
                </BookDemoLink>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-sans text-lg font-medium text-foreground">
              Contact
            </p>
            <ul className="mt-5 space-y-4 font-sans text-[17px] text-body">
              <li>
                <a
                  href="mailto:hello@heckerpeople.com"
                  className="hover:text-foreground"
                >
                  hello@heckerpeople.com
                </a>
              </li>
              <li>
                <a href="tel:020122975900" className="hover:text-foreground">
                  020122975900
                </a>
              </li>
              <li className="flex items-center gap-4 pt-1 text-gray-600">
                <a
                  href="#contact"
                  aria-label="HeckerPeople on LinkedIn"
                  className="hover:text-foreground"
                >
                  <LinkedinIcon className="size-5" />
                </a>
                <a
                  href="#contact"
                  aria-label="HeckerPeople on X"
                  className="hover:text-foreground"
                >
                  <XIcon className="size-5" />
                </a>
                <a
                  href="#contact"
                  aria-label="HeckerPeople on Instagram"
                  className="hover:text-foreground"
                >
                  <InstagramIcon className="size-5" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="mt-16" />

        <div className="mt-8 flex flex-col gap-3 font-sans text-[15px] text-body sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Heckerbella. All rights reserved.</p>
          <p>Built with precision for modern teams in Lagos &amp; beyond.</p>
        </div>
      </div>
    </footer>
  );
}
