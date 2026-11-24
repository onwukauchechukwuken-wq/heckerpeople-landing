import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
}

export function Logo({ className }: LogoProps) {
  return (
    <span className={cn("inline-flex items-center", className)}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/logos/HeckerPeople%20Primary%20logo.svg"
        alt="HeckerPeople"
        width={83}
        height={32}
        fetchPriority="high"
        decoding="async"
        className="h-8 w-auto shrink-0 object-contain"
      />
    </span>
  );
}
