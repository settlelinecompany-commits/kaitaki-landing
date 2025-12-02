'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { AnimatedCounter, FadeInStagger, HoverLift } from '@/components/animations';

interface MetricProps {
  value: number;
  suffix: string;
  label: string;
  description: string;
}

const metrics: MetricProps[] = [
  {
    value: 80,
    suffix: '%',
    label: 'Faster',
    description: 'Assessment completion time',
  },
  {
    value: 30,
    suffix: 'min',
    label: 'Average',
    description: 'Stakeholder interview time',
  },
  {
    value: 100,
    suffix: '%',
    label: 'Coverage',
    description: 'Audit-ready documentation',
  },
  {
    value: 0,
    suffix: '',
    label: 'Follow-ups',
    description: 'Complete in one session',
  },
];

export function ResultsMetrics() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 md:py-28 bg-zinc-50" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-wider text-zinc-500 uppercase bg-white border border-zinc-200 rounded-full mb-6">
            Results
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-zinc-900 mb-4">
            Proven impact on privacy operations
          </h2>
          <p className="text-lg md:text-xl text-zinc-600 max-w-2xl mx-auto">
            Measurable improvements from day one.
          </p>
        </motion.div>

        <FadeInStagger className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8" staggerSpeed={0.1}>
          {metrics.map((metric) => (
            <HoverLift key={metric.label} liftAmount={3} scaleAmount={1.02}>
              <div className="text-center p-6 md:p-8 bg-white border border-zinc-200 rounded-2xl shadow-sm">
                <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-zinc-900 mb-2">
                  <AnimatedCounter value={metric.value} suffix={metric.suffix} duration={2} />
                </div>
                <div className="text-lg font-semibold text-zinc-700 mb-1">
                  {metric.label}
                </div>
                <div className="text-sm text-zinc-500">
                  {metric.description}
                </div>
              </div>
            </HoverLift>
          ))}
        </FadeInStagger>
      </div>
    </section>
  );
}
