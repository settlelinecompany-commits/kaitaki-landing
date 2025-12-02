"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface BentoGridProps {
  children: ReactNode;
  className?: string;
}

export function BentoGrid({ children, className }: BentoGridProps) {
  return (
    <div className={cn(
      "grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4",
      className
    )}>
      {children}
    </div>
  );
}

interface BentoCardProps {
  name: string;
  className?: string;
  background?: ReactNode;
  Icon: React.ElementType;
  description: string;
}

export function BentoCard({
  name,
  className,
  background,
  Icon,
  description,
}: BentoCardProps) {
  return (
    <div
      className={cn(
        "group relative col-span-3 flex flex-col justify-end overflow-hidden rounded-xl",
        "bg-white border border-zinc-200",
        "transform-gpu transition-all duration-300",
        "hover:shadow-lg hover:border-zinc-300",
        "min-h-[280px] md:min-h-[320px]",
        className
      )}
    >
      <div className="absolute inset-0">{background}</div>
      <div className="pointer-events-none z-10 flex flex-col gap-1 p-5 md:p-6 bg-gradient-to-t from-white via-white/95 to-transparent pt-16">
        <Icon className="h-8 w-8 md:h-10 md:w-10 origin-left text-zinc-700 transition-all duration-300 ease-in-out group-hover:scale-95" />
        <h3 className="text-lg md:text-xl font-semibold text-zinc-900">{name}</h3>
        <p className="text-sm md:text-base text-zinc-500 leading-relaxed">{description}</p>
      </div>
      <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-zinc-50/30" />
    </div>
  );
}

