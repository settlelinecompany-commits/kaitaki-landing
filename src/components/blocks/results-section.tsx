'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Clock, 
  CheckCircle, 
  Shield, 
  Users,
} from 'lucide-react';
import { VoiceAgentPreview, AuditTrailPreview, TeamDashboardPreview } from '@/components/ui/results-previews';

// Hook: respects user's motion preferences
function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    if (typeof window === 'undefined' || !('matchMedia' in window)) return;
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const onChange = (e: MediaQueryListEvent) => setReduced(e.matches);
    setReduced(mq.matches);
    mq.addEventListener?.('change', onChange);
    return () => mq.removeEventListener?.('change', onChange);
  }, []);
  return reduced;
}

// Animated counter component
function AnimatedCounter({ 
  end, 
  suffix = '', 
  prefix = '',
  duration = 2000 
}: { 
  end: number; 
  suffix?: string;
  prefix?: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const reduceMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (!isInView) return;
    if (reduceMotion) {
      setCount(end);
      return;
    }

    let startTime: number;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [isInView, end, duration, reduceMotion]);

  return (
    <span ref={ref}>
      {prefix}{count}{suffix}
    </span>
  );
}

// Metric stat component
function MetricStat({
  value,
  suffix,
  label,
  sub,
}: {
  value: number;
  suffix: string;
  label: string;
  sub?: string;
}) {
  return (
    <div className="flex flex-col gap-2 text-left p-6">
      <p className="text-3xl md:text-4xl font-bold text-zinc-900">
        <AnimatedCounter end={value} suffix={suffix} />
      </p>
      <p className="font-semibold text-zinc-900">{label}</p>
      {sub && <p className="text-sm text-zinc-500">{sub}</p>}
    </div>
  );
}

const caseStudies = [
  {
    id: 1,
    title: 'Assessment Velocity',
    description: 'Privacy teams complete assessments 80% faster with voice-based capture and AI-powered analysis. No more chasing stakeholders for weeks.',
    icon: Clock,
    preview: VoiceAgentPreview,
    metrics: [
      { value: 80, suffix: '%', label: 'Faster Completion', sub: 'Assessment turnaround time' },
      { value: 30, suffix: 'min', label: 'Average Interview', sub: 'Down from 3+ weeks of emails. Stakeholders complete in one session.' },
    ],
    features: ['Voice-based capture', 'Smart follow-ups', 'Auto-reminders'],
  },
  {
    id: 2,
    title: 'Audit Confidence',
    description: 'Every decision documented with full reasoning. Zero follow-ups needed.',
    icon: Shield,
    preview: AuditTrailPreview,
    metrics: [
      { value: 100, suffix: '%', label: 'Audit Coverage', sub: 'Complete documentation' },
      { value: 0, suffix: '', label: 'Follow-ups Needed', sub: 'Complete in one session' },
    ],
    features: ['Full audit trail', 'Change tracking', 'One-click exports'],
  },
  {
    id: 3,
    title: 'Team Efficiency',
    description: 'DPOs get portfolio visibility, analysts stop chasing stakeholders, and legal gets proper sign-off workflows. Everyone wins.',
    icon: Users,
    preview: TeamDashboardPreview,
    metrics: [
      { value: 50, suffix: '+', label: 'Assessments/Year', sub: 'Teams managing at scale' },
      { value: 3, suffix: 'x', label: 'Productivity Gain', sub: 'Across privacy operations' },
    ],
    features: ['Role-based dashboards', 'Approval workflows', 'SLA tracking'],
  },
];

export function ResultsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-20 md:py-28 bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-wider text-zinc-500 uppercase bg-zinc-100 rounded-full mb-6">
            Results
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-zinc-900 mb-4">
            Real results from privacy teams
          </h2>
          <p className="text-lg md:text-xl text-zinc-600">
            From assessment backlogs to audit confidence.
          </p>
        </motion.div>

        {/* Case Studies */}
        <div className="flex flex-col gap-16 md:gap-24">
          {caseStudies.map((study, idx) => {
            const reversed = idx % 2 === 1;
            const Icon = study.icon;

            return (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="grid gap-8 lg:grid-cols-3 xl:gap-12 items-center border-b border-zinc-200 pb-16 last:border-b-0"
              >
                {/* Left: Preview + Content */}
                <div
                  className={`flex flex-col sm:flex-row gap-6 lg:col-span-2 ${
                    reversed
                      ? 'lg:order-2 lg:border-l lg:pl-12 lg:pr-0 border-zinc-200'
                      : 'lg:border-r lg:pr-12 border-zinc-200'
                  }`}
                >
                  {/* Animated Preview */}
                  <div className="relative w-full sm:w-[280px] md:w-[320px] flex-shrink-0">
                    <study.preview />
                    <div className="absolute -bottom-3 -right-3 w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg z-10">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col justify-center gap-4">
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-zinc-900 mb-3">
                        {study.title}
                      </h3>
                      <p className="text-zinc-600 leading-relaxed mb-4">
                        {study.description}
                      </p>
                      {/* Feature tags */}
                      <div className="flex flex-wrap gap-2">
                        {study.features.map((feature) => (
                          <span
                            key={feature}
                            className="px-3 py-1 text-xs font-medium text-zinc-600 bg-zinc-100 rounded-full"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right: Metrics */}
                <div className={`grid grid-cols-1 gap-4 ${reversed ? 'lg:order-1' : ''}`}>
                  {study.metrics.map((metric, i) => (
                    <MetricStat
                      key={`${study.id}-${i}`}
                      value={metric.value}
                      suffix={metric.suffix}
                      label={metric.label}
                      sub={metric.sub}
                    />
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 p-8 bg-zinc-50 rounded-2xl text-center"
        >
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 mb-6">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <span className="text-sm font-medium text-zinc-700">PDPL Compliant</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <span className="text-sm font-medium text-zinc-700">GDPR Ready</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <span className="text-sm font-medium text-zinc-700">SOC 2 Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <span className="text-sm font-medium text-zinc-700">In-Region Deployment</span>
            </div>
          </div>
          <p className="text-zinc-600">
            Enterprise-grade security and compliance built into every layer of the platform.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

