import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { BookDemoButton } from "./book-demo-modal";
import { Logo } from "./logo";

const FEATURE_LINKS = [
  {
    href: "/#platform",
    title: "Platform Overview",
    description: "Payroll, biometric attendance & talent lifecycle",
  },
  {
    href: "/#tools",
    title: "People Operations",
    description: "Shift rostering, KPI appraisals & audit logs",
  },
  {
    href: "/#mobile",
    title: "Mobile Biometric App",
    description: "Clock in and enroll biometrics anywhere",
  },
];

export function SiteHeader() {
  return (
    <header className="w-full bg-background">
      <div className="mx-auto flex h-24 w-full max-w-[1820px] items-center justify-between px-4 md:px-6 lg:px-12">
        <div className="flex items-center gap-10 lg:gap-14">
          <Link href="/" aria-label="HeckerPeople Home" className="shrink-0">
            <Logo />
          </Link>

          <nav
            aria-label="Primary"
            className="hidden items-center gap-8 font-sans text-[17px] font-medium text-foreground lg:flex"
          >
            <Link href="/" className="hover:text-primary">
              Home
            </Link>

            <NavigationMenu align="start">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="h-auto bg-transparent px-0 py-0 font-sans text-[17px] font-medium text-foreground hover:bg-transparent hover:text-primary focus:bg-transparent data-open:bg-transparent data-open:hover:bg-transparent data-popup-open:bg-transparent data-popup-open:hover:bg-transparent">
                    Features
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="w-[290px] p-2">
                    <ul className="flex flex-col gap-1">
                      {FEATURE_LINKS.map((item) => (
                        <li key={item.href}>
                          <NavigationMenuLink
                            href={item.href}
                            closeOnClick
                            className="flex flex-col items-start gap-0.5 rounded-lg p-3"
                          >
                            <span className="font-sans text-sm font-semibold text-foreground">
                              {item.title}
                            </span>
                            <span className="font-sans text-xs text-body">
                              {item.description}
                            </span>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Link href="/pricing" prefetch={false} className="hover:text-primary">
              Pricing
            </Link>
            <a href="#contact" className="hover:text-primary">
              Contact Us
            </a>
          </nav>
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <Button
            variant="outline"
            size="pill"
            className="px-12"
            nativeButton={false}
            render={<a href="#contact" />}
          >
            Log In
          </Button>
          <BookDemoButton size="pill">Book A Demo</BookDemoButton>
        </div>

        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger
              render={
                <Button
                  variant="ghost"
                  size="icon"
                  aria-label="Open navigation menu"
                />
              }
            >
              <Menu className="size-6" />
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] p-6 sm:w-[360px]">
              <SheetHeader className="p-0 text-left">
                <SheetTitle>
                  <Logo />
                </SheetTitle>
                <SheetDescription className="sr-only">
                  HeckerPeople site navigation
                </SheetDescription>
              </SheetHeader>

              <nav
                aria-label="Mobile navigation"
                className="mt-8 flex flex-col gap-4 font-sans text-base font-medium text-foreground"
              >
                <SheetClose nativeButton={false} render={<Link href="/" />}>
                  Home
                </SheetClose>
                <SheetClose
                  nativeButton={false}
                  render={<Link href="/#platform" />}
                >
                  Features
                </SheetClose>
                <SheetClose
                  nativeButton={false}
                  render={<Link href="/#tools" />}
                >
                  People Operations
                </SheetClose>
                <SheetClose
                  nativeButton={false}
                  render={<Link href="/#mobile" />}
                >
                  Mobile App
                </SheetClose>
                <SheetClose
                  nativeButton={false}
                  render={<Link href="/pricing" prefetch={false} />}
                >
                  Pricing
                </SheetClose>
                <SheetClose nativeButton={false} render={<a href="#contact" />}>
                  Contact Us
                </SheetClose>
              </nav>

              <div className="mt-8 flex flex-col gap-3">
                <Button
                  variant="outline"
                  size="pill"
                  className="w-full"
                  nativeButton={false}
                  render={<a href="#contact" />}
                >
                  Log In
                </Button>
                <SheetClose
                  render={<BookDemoButton size="pill" className="w-full" />}
                >
                  Book A Demo
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
