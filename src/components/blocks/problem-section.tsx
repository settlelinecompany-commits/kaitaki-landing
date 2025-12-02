'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Clock, Mail, AlertTriangle, FileSpreadsheet } from 'lucide-react';
import { FadeInStagger, HoverLift } from '@/components/animations';

const problems = [
  {
    icon: Clock,
    title: 'Assessment Backlog',
    description: 'Every new feature, vendor, or data use requires a formal privacy review.',
    impact: 'Product launches delayed 2–4 weeks.',
  },
  {
    icon: Mail,
    title: 'Stakeholder Chasing',
    description: 'Privacy sends questionnaires; business units ignore them.',
    impact: '10+ email reminders per assessment.',
  },
  {
    icon: AlertTriangle,
    title: 'Audit Anxiety',
    description: 'Regulators can request proof of your privacy reviews at any time.',
    impact: 'PDPL fines up to 5M SAR.',
  },
  {
    icon: FileSpreadsheet,
    title: 'Spreadsheet Hell',
    description: 'Risk tracking in Excel, approvals via email, nothing centralized.',
    impact: '"Did we complete that assessment?" — no one knows.',
  },
];

export function ProblemSection() {
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
            The Problem
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-zinc-900 mb-4">
            Privacy teams are overwhelmed
          </h2>
          <p className="text-lg md:text-xl text-zinc-600 max-w-2xl mx-auto">
            Manual processes that worked for 10 assessments/year break at 100+.
          </p>
        </motion.div>

        <FadeInStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" staggerSpeed={0.1}>
          {problems.map((problem) => (
            <HoverLift key={problem.title} liftAmount={3} scaleAmount={1.01}>
              <div className="group relative bg-white border border-zinc-200 rounded-2xl p-6 hover:border-zinc-300 hover:shadow-lg transition-all duration-300 h-full">
                <div className="w-12 h-12 rounded-xl bg-zinc-100 flex items-center justify-center mb-5 group-hover:bg-zinc-200 transition-colors">
                  <problem.icon className="w-6 h-6 text-zinc-600" />
                </div>
                <h3 className="text-lg font-semibold text-zinc-900 mb-2">
                  {problem.title}
                </h3>
                <p className="text-sm text-zinc-600 mb-4 leading-relaxed">
                  {problem.description}
                </p>
                <div className="pt-4 border-t border-zinc-100">
                  <p className="text-sm font-medium text-red-600">
                    {problem.impact}
                  </p>
                </div>
              </div>
            </HoverLift>
          ))}
        </FadeInStagger>
      </div>
    </section>
  );
}
