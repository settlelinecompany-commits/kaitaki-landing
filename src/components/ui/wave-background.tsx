'use client';

export function WaveBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Navy blue gradient waves at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-96">
        {/* Wave SVG */}
        <svg
          className="absolute bottom-0 w-full"
          viewBox="0 0 1440 400"
          preserveAspectRatio="none"
          style={{ height: '100%' }}
        >
          {/* Darkest wave - back */}
          <path
            className="animate-wave-slow"
            fill="rgba(30, 58, 138, 0.12)"
            d="M0,160 C240,200 480,120 720,160 C960,200 1200,120 1440,160 L1440,400 L0,400 Z"
          >
            <animate
              attributeName="d"
              dur="10s"
              repeatCount="indefinite"
              values="
                M0,160 C240,200 480,120 720,160 C960,200 1200,120 1440,160 L1440,400 L0,400 Z;
                M0,180 C240,140 480,200 720,140 C960,180 1200,160 1440,180 L1440,400 L0,400 Z;
                M0,160 C240,200 480,120 720,160 C960,200 1200,120 1440,160 L1440,400 L0,400 Z
              "
            />
          </path>
          
          {/* Medium wave - middle */}
          <path
            className="animate-wave-medium"
            fill="rgba(37, 99, 235, 0.10)"
            d="M0,200 C320,160 640,240 960,200 C1280,160 1440,200 1440,200 L1440,400 L0,400 Z"
          >
            <animate
              attributeName="d"
              dur="8s"
              repeatCount="indefinite"
              values="
                M0,200 C320,160 640,240 960,200 C1280,160 1440,200 1440,200 L1440,400 L0,400 Z;
                M0,220 C320,260 640,180 960,220 C1280,180 1440,220 1440,220 L1440,400 L0,400 Z;
                M0,200 C320,160 640,240 960,200 C1280,160 1440,200 1440,200 L1440,400 L0,400 Z
              "
            />
          </path>
          
          {/* Lightest wave - front */}
          <path
            className="animate-wave-fast"
            fill="rgba(59, 130, 246, 0.08)"
            d="M0,260 C360,220 720,300 1080,260 C1260,240 1440,260 1440,260 L1440,400 L0,400 Z"
          >
            <animate
              attributeName="d"
              dur="6s"
              repeatCount="indefinite"
              values="
                M0,260 C360,220 720,300 1080,260 C1260,240 1440,260 1440,260 L1440,400 L0,400 Z;
                M0,280 C360,320 720,240 1080,280 C1260,260 1440,280 1440,280 L1440,400 L0,400 Z;
                M0,260 C360,220 720,300 1080,260 C1260,240 1440,260 1440,260 L1440,400 L0,400 Z
              "
            />
          </path>
        </svg>
      </div>

      {/* Subtle horizontal lines */}
      <div className="absolute inset-0">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="absolute left-0 right-0 h-px"
            style={{
              top: `${55 + i * 10}%`,
              background: `linear-gradient(90deg, transparent, rgba(30, 58, 138, ${0.08 - i * 0.015}), transparent)`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
