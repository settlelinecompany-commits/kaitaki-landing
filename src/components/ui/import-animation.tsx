"use client";

import React, { forwardRef, useRef } from "react";
import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/components/ui/animated-beam";

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex size-10 md:size-12 items-center justify-center rounded-full border-2 border-zinc-200 bg-white p-2 md:p-3 shadow-md",
        className
      )}
    >
      {children}
    </div>
  );
});
Circle.displayName = "Circle";

export function ImportAnimation({ className }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);
  const div7Ref = useRef<HTMLDivElement>(null);

  return (
    <div
      className={cn(
        "relative flex h-full min-h-[200px] w-full items-center justify-center overflow-hidden rounded-2xl bg-transparent p-4 md:p-8",
        className
      )}
      ref={containerRef}
    >
      <div className="flex size-full max-w-lg flex-row items-stretch justify-between gap-6 md:gap-10">
        {/* Source icons - left side */}
        <div className="flex flex-col justify-center gap-2">
          <Circle ref={div1Ref}>
            <Icons.excel />
          </Circle>
          <Circle ref={div2Ref}>
            <Icons.pdf />
          </Circle>
          <Circle ref={div3Ref}>
            <Icons.csv />
          </Circle>
          <Circle ref={div4Ref}>
            <Icons.word />
          </Circle>
          <Circle ref={div5Ref}>
            <Icons.json />
          </Circle>
        </div>

        {/* Kaitaki AI - center */}
        <div className="flex flex-col justify-center">
          <Circle ref={div6Ref} className="size-12 md:size-16 border-blue-200 bg-blue-50">
            <Icons.kaitaki />
          </Circle>
        </div>

        {/* Output - right side */}
        <div className="flex flex-col justify-center">
          <Circle ref={div7Ref} className="size-10 md:size-12 border-green-200 bg-green-50">
            <Icons.assessment />
          </Circle>
        </div>
      </div>

      {/* Animated beams */}
      <AnimatedBeam containerRef={containerRef} fromRef={div1Ref} toRef={div6Ref} gradientStartColor="#22c55e" gradientStopColor="#3b82f6" />
      <AnimatedBeam containerRef={containerRef} fromRef={div2Ref} toRef={div6Ref} gradientStartColor="#ef4444" gradientStopColor="#3b82f6" />
      <AnimatedBeam containerRef={containerRef} fromRef={div3Ref} toRef={div6Ref} gradientStartColor="#f59e0b" gradientStopColor="#3b82f6" />
      <AnimatedBeam containerRef={containerRef} fromRef={div4Ref} toRef={div6Ref} gradientStartColor="#3b82f6" gradientStopColor="#3b82f6" />
      <AnimatedBeam containerRef={containerRef} fromRef={div5Ref} toRef={div6Ref} gradientStartColor="#8b5cf6" gradientStopColor="#3b82f6" />
      <AnimatedBeam containerRef={containerRef} fromRef={div6Ref} toRef={div7Ref} gradientStartColor="#3b82f6" gradientStopColor="#22c55e" />
    </div>
  );
}

const Icons = {
  excel: () => (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="#22863a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M14 2V8H20" stroke="#22863a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8 13H10L12 17L14 13H16" stroke="#22863a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  pdf: () => (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="#dc2626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M14 2V8H20" stroke="#dc2626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9 15V12H10.5C11.3284 12 12 12.6716 12 13.5C12 14.3284 11.3284 15 10.5 15H9Z" stroke="#dc2626" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9 18V15" stroke="#dc2626" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  csv: () => (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M14 2V8H20" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8 13H16M8 17H16M8 13V17M12 13V17" stroke="#f59e0b" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  word: () => (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M14 2V8H20" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8 13L10 18L12 13L14 18L16 13" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  json: () => (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="#8b5cf6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M14 2V8H20" stroke="#8b5cf6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10 12C10 12 8 12 8 14C8 16 10 16 10 16" stroke="#8b5cf6" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M14 12C14 12 16 12 16 14C16 16 14 16 14 16" stroke="#8b5cf6" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  kaitaki: () => (
    <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="10" stroke="#3b82f6" strokeWidth="2"/>
      <path d="M8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12C16 14.2091 14.2091 16 12 16" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round"/>
      <circle cx="12" cy="12" r="2" fill="#3b82f6"/>
    </svg>
  ),
  assessment: () => (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9 11L12 14L22 4" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M21 12V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H16" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
};

