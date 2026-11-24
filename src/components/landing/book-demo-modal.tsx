"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ComponentProps,
  type FormEvent,
  type ReactNode,
} from "react";
import Image from "next/image";
import { CheckCircle2, X } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface BookDemoContextValue {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const BookDemoContext = createContext<BookDemoContextValue | null>(null);

export function useBookDemo() {
  const ctx = useContext(BookDemoContext);
  if (!ctx) {
    throw new Error("useBookDemo must be used within a BookDemoProvider");
  }
  return ctx;
}

export function BookDemoButton({
  onClick,
  ...props
}: ComponentProps<typeof Button>) {
  const { openModal } = useBookDemo();

  return (
    <Button
      type="button"
      onClick={(e) => {
        onClick?.(e);
        openModal();
      }}
      {...props}
    />
  );
}

export function BookDemoLink({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  const { openModal } = useBookDemo();

  return (
    <button
      type="button"
      onClick={openModal}
      className={cn("cursor-pointer text-left", className)}
    >
      {children}
    </button>
  );
}

export function BookDemoProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = useCallback(() => setIsOpen(true), []);
  const closeModal = useCallback(() => setIsOpen(false), []);

  return (
    <BookDemoContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
      <BookDemoModal isOpen={isOpen} onClose={closeModal} />
    </BookDemoContext.Provider>
  );
}

interface FormState {
  name: string;
  phone: string;
  company: string;
  email: string;
}

const INITIAL_FORM: FormState = {
  name: "",
  phone: "",
  company: "",
  email: "",
};

function BookDemoModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const prefersReducedMotion = useReducedMotion();
  const [form, setForm] = useState<FormState>(INITIAL_FORM);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleClose = () => {
    onClose();
  };

  const handleExitComplete = () => {
    setSubmitted(false);
    setForm(INITIAL_FORM);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <AnimatePresence onExitComplete={handleExitComplete}>
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="book-demo-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
        >
          {/* Blurred backdrop */}
          <motion.div
            data-testid="book-demo-backdrop"
            onClick={handleClose}
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.24, ease: "easeOut" }}
            className="fixed inset-0 bg-white/[0.01] backdrop-blur-[25px]"
          />

          {/* Modal card */}
          <motion.div
            initial={
              prefersReducedMotion
                ? { opacity: 1 }
                : { opacity: 0, scale: 0.95, y: 12 }
            }
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={
              prefersReducedMotion
                ? { opacity: 0 }
                : { opacity: 0, scale: 0.95, y: 12 }
            }
            transition={
              prefersReducedMotion
                ? { duration: 0 }
                : { type: "spring", bounce: 0.15, duration: 0.36 }
            }
            onClick={(e) => e.stopPropagation()}
            className="relative z-10 grid max-h-[92vh] w-full max-w-[980px] overflow-y-auto rounded-3xl border border-[#E5E7EB]/80 bg-white p-6 shadow-[0_24px_80px_rgba(15,23,42,0.12)] sm:p-8 lg:grid-cols-[1fr_1.02fr] lg:items-stretch lg:gap-10 lg:overflow-hidden lg:p-10"
          >
            {/* Top-right close button */}
            <button
              type="button"
              onClick={handleClose}
              aria-label="Close Book a Demo modal"
              className="absolute top-4 right-4 z-20 flex size-9 cursor-pointer items-center justify-center rounded-full bg-white/90 text-[#0F172A] shadow-sm ring-1 ring-black/5 transition-[transform,background-color] duration-150 hover:bg-white active:scale-95 sm:top-5 sm:right-5"
            >
              <X className="size-4" aria-hidden="true" />
            </button>

            {/* Left column: Form / Confirmation */}
            <div className="flex flex-col justify-center py-2 pr-0 lg:py-4">
              {submitted ? (
                <div className="flex flex-col items-start py-6">
                  <div className="flex size-12 items-center justify-center rounded-full bg-[#E0F2FE] text-[#06B6E9]">
                    <CheckCircle2 className="size-6" aria-hidden="true" />
                  </div>
                  <h2
                    id="book-demo-modal-title"
                    className="mt-5 font-heading text-[28px] leading-[1.2] font-medium tracking-[-0.02em] text-[#0F172A] sm:text-[32px]"
                  >
                    Demo Request Received
                  </h2>
                  <p className="mt-3 font-sans text-sm leading-[1.6] font-normal text-[#475569]">
                    Thanks, <span className="font-medium text-[#0F172A]">{form.name}</span>! Our team has received your demo request for{" "}
                    <span className="font-medium text-[#0F172A]">{form.company}</span> and will reach out shortly at{" "}
                    <span className="font-medium text-[#0F172A]">{form.email}</span>.
                  </p>
                  <Button
                    type="button"
                    size="pill"
                    onClick={handleClose}
                    className="mt-8 w-full bg-[#06B6E9] text-white hover:bg-[#059EC9]"
                  >
                    Done
                  </Button>
                </div>
              ) : (
                <>
                  <h2
                    id="book-demo-modal-title"
                    className="font-heading text-[28px] leading-[1.2] font-medium tracking-[-0.02em] text-[#0F172A] sm:text-[32px]"
                  >
                    Fill The Form to Book a Demo
                  </h2>
                  <p className="mt-2.5 font-sans text-sm leading-[1.6] font-normal text-[#6B7280]">
                    Book a personalized demo and discover how we help you manage
                    recruitment, payroll, employee records, and performance—all
                    in one place.
                  </p>

                  <form onSubmit={handleSubmit} className="mt-6 space-y-3.5">
                    <div>
                      <label htmlFor="demo-name" className="sr-only">
                        Name
                      </label>
                      <input
                        id="demo-name"
                        name="name"
                        type="text"
                        required
                        placeholder="Name"
                        value={form.name}
                        onChange={(e) =>
                          setForm((prev) => ({ ...prev, name: e.target.value }))
                        }
                        className="h-12 w-full rounded-xl border border-[#E5E7EB] bg-white px-4 font-sans text-sm text-[#0F172A] placeholder:text-[#6B7280] outline-none transition-[border-color,box-shadow] duration-150 focus:border-[#06B6E9] focus:ring-3 focus:ring-[#06B6E9]/20"
                      />
                    </div>

                    <div>
                      <label htmlFor="demo-phone" className="sr-only">
                        Phone number
                      </label>
                      <input
                        id="demo-phone"
                        name="phone"
                        type="tel"
                        required
                        placeholder="Phone number"
                        value={form.phone}
                        onChange={(e) =>
                          setForm((prev) => ({ ...prev, phone: e.target.value }))
                        }
                        className="h-12 w-full rounded-xl border border-[#E5E7EB] bg-white px-4 font-sans text-sm text-[#0F172A] placeholder:text-[#6B7280] outline-none transition-[border-color,box-shadow] duration-150 focus:border-[#06B6E9] focus:ring-3 focus:ring-[#06B6E9]/20"
                      />
                    </div>

                    <div>
                      <label htmlFor="demo-company" className="sr-only">
                        Company/Organization Name
                      </label>
                      <input
                        id="demo-company"
                        name="company"
                        type="text"
                        required
                        placeholder="Company/Organization Name"
                        value={form.company}
                        onChange={(e) =>
                          setForm((prev) => ({
                            ...prev,
                            company: e.target.value,
                          }))
                        }
                        className="h-12 w-full rounded-xl border border-[#E5E7EB] bg-white px-4 font-sans text-sm text-[#0F172A] placeholder:text-[#6B7280] outline-none transition-[border-color,box-shadow] duration-150 focus:border-[#06B6E9] focus:ring-3 focus:ring-[#06B6E9]/20"
                      />
                    </div>

                    <div>
                      <label htmlFor="demo-email" className="sr-only">
                        Email Address
                      </label>
                      <input
                        id="demo-email"
                        name="email"
                        type="email"
                        required
                        placeholder="Email Address"
                        value={form.email}
                        onChange={(e) =>
                          setForm((prev) => ({ ...prev, email: e.target.value }))
                        }
                        className="h-12 w-full rounded-xl border border-[#E5E7EB] bg-white px-4 font-sans text-sm text-[#0F172A] placeholder:text-[#6B7280] outline-none transition-[border-color,box-shadow] duration-150 focus:border-[#06B6E9] focus:ring-3 focus:ring-[#06B6E9]/20"
                      />
                    </div>

                    <div className="pt-2">
                      <Button
                        type="submit"
                        size="pill"
                        className="h-12 w-full bg-[#06B6E9] text-sm font-medium text-white hover:bg-[#059EC9]"
                      >
                        Book A Demo
                      </Button>
                    </div>
                  </form>
                </>
              )}
            </div>

            {/* Right column: Rounded image card */}
            <div className="relative hidden min-h-[520px] overflow-hidden rounded-2xl lg:block">
              <Image
                src="/images/book-demo-card.png"
                alt="Heckerpeople, Happy People — Less HR friction on your plate means more energy for the people driving your business."
                fill
                sizes="(min-width:1024px) 460px, 100vw"
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
