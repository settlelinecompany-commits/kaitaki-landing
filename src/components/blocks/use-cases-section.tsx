'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import {
  DPIAPreview,
  VendorAssessmentPreview,
  ROPAPreview,
  AIMLAssessmentPreview,
} from '@/components/ui/use-case-previews';

interface UseCase {
  id: string;
  title: string;
  description: string;
  preview: React.ComponentType;
  stat: string;
  statLabel: string;
}

const useCases: UseCase[] = [
  {
    id: 'dpia',
    title: 'Data Protection Impact Assessments',
    description: 'Complete DPIAs in hours instead of weeks. AI conducts stakeholder interviews, identifies risks, and generates audit-ready documentation - with full reasoning you can explain to regulators.',
    preview: DPIAPreview,
    stat: '80%',
    statLabel: 'faster completion',
  },
  {
    id: 'vendor',
    title: 'Third-Party Vendor Assessments',
    description: 'Stop chasing vendors for questionnaire responses. Voice-based interviews capture complete answers in one 30-minute session. Risk scores auto-calculate based on your criteria.',
    preview: VendorAssessmentPreview,
    stat: '30 min',
    statLabel: 'vs 3+ weeks',
  },
  {
    id: 'ropa',
    title: 'Record of Processing Activities',
    description: "Your ROPA updates automatically as assessments complete. No more stale spreadsheets. When auditors ask for your processing records, you export - you don't scramble.",
    preview: ROPAPreview,
    stat: '100%',
    statLabel: 'audit coverage',
  },
  {
    id: 'ai-ml',
    title: 'AI/ML Privacy Assessments',
    description: 'Assess AI systems against GDPR, PDPL, and emerging AI regulations. Map risks to specific articles. Stay ahead of regulatory requirements before they become enforcement actions.',
    preview: AIMLAssessmentPreview,
    stat: 'Multi-reg',
    statLabel: 'ready',
  },
];

interface UseCasesSectionProps {
  onBookDemo?: () => void;
}

export function UseCasesSection({ onBookDemo }: UseCasesSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-20 md:py-28 bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto px-6 flex flex-col gap-12 lg:gap-16">
        {/* Header - Left aligned like Feature72 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="lg:max-w-lg"
        >
          <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-wider text-zinc-500 uppercase bg-zinc-100 rounded-full mb-6">
            Use Cases
          </span>
          <h2 className="mb-4 text-3xl md:text-4xl lg:text-5xl font-bold text-zinc-900">
            What Kaitaki Solves
          </h2>
          <p className="mb-6 text-lg md:text-xl text-zinc-600">
            One platform. Four critical workflows. Always audit-ready.
          </p>
          <button
            onClick={onBookDemo}
            className="group flex items-center text-base font-semibold text-blue-600 hover:text-blue-700 transition-colors"
          >
            Book a demo
            <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
          </button>
        </motion.div>

        {/* Feature Cards Grid with UI Previews */}
        <div className="grid gap-6 md:grid-cols-2 lg:gap-8 items-stretch">
          {useCases.map((useCase, index) => {
            const PreviewComponent = useCase.preview;
            return (
              <motion.div
                key={useCase.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="group flex flex-col overflow-hidden rounded-2xl border border-zinc-200 hover:border-zinc-300 hover:shadow-lg transition-all bg-white"
              >
                {/* UI Preview with Stat Badge */}
                <div className="relative p-4 bg-zinc-50">
                  <PreviewComponent />
                  {/* Stat Badge Overlay */}
                  <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl px-3 py-1.5 shadow-lg border border-zinc-100">
                    <p className="text-lg font-bold text-zinc-900">{useCase.stat}</p>
                    <p className="text-[10px] text-zinc-500">{useCase.statLabel}</p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 flex flex-col flex-1">
                  <h3 className="mb-2 text-lg font-bold text-zinc-900">
                    {useCase.title}
                  </h3>
                  <p className="text-sm text-zinc-600 leading-relaxed flex-1">
                    {useCase.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
