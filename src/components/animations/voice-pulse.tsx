"use client";

interface VoicePulseProps {
  className?: string;
  barCount?: number;
  color?: string;
}

// Simplified voice pulse using CSS animations instead of Framer Motion
export function VoicePulse({
  className = "",
  barCount = 5,
  color = "currentColor",
}: VoicePulseProps) {
  const bars = Array.from({ length: barCount }, (_, i) => i);

  return (
    <div className={`flex items-center justify-center gap-0.5 ${className}`}>
      {bars.map((index) => (
        <div
          key={index}
          className="w-0.5 rounded-full animate-pulse"
          style={{
            backgroundColor: color,
            height: "12px",
            animationDelay: `${index * 0.15}s`,
            animationDuration: "1s",
          }}
        />
      ))}
    </div>
  );
}

// Simplified subtle glow - CSS only, no Framer Motion
export function SubtleGlow({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`relative ${className}`}>
      <div 
        className="absolute inset-0 rounded-xl bg-blue-400/20 blur-lg animate-pulse"
        style={{ animationDuration: "3s" }}
      />
      <div className="relative">{children}</div>
    </div>
  );
}
