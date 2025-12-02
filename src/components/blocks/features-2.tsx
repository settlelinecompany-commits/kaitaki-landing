'use client';

import { MessageSquare, BarChart3, FileText } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { AssessmentFlowOrbital } from '@/components/ui/assessment-flow-orbital';

interface FeatureTag {
  label: string;
}

export function Features2() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const interviewTags: FeatureTag[] = [
    { label: 'Voice or form-based' },
    { label: 'Smart follow-ups' },
    { label: 'Auto-reminders' },
  ];

  const auditTags: FeatureTag[] = [
    { label: 'Change tracking' },
    { label: 'Legal sign-off' },
    { label: 'Export anytime' },
  ];

  return (
    <section className="py-20 md:py-28 bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-wider text-zinc-500 uppercase bg-zinc-100 rounded-full mb-6">
            Capabilities
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-zinc-900 mb-4">
            Automation tailored to privacy compliance
          </h2>
          <p className="text-lg md:text-xl text-zinc-600 max-w-3xl mx-auto">
            Enterprise-grade workflows with complete oversight and control.
          </p>
        </motion.div>

        {/* Case Study Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="border border-zinc-200 rounded-2xl overflow-hidden"
        >
          {/* Featured Capability - Stakeholder Interviews */}
          <div className="group grid gap-6 overflow-hidden px-6 py-8 transition-colors duration-300 hover:bg-zinc-50 lg:grid-cols-2 lg:gap-12 xl:px-12 lg:py-12">
            {/* Left: Content */}
            <div className="flex flex-col justify-center">
              <div className="w-14 h-14 rounded-2xl border border-zinc-200 flex items-center justify-center mb-6">
                <MessageSquare className="w-6 h-6 text-zinc-700" />
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-4">
                Stakeholder Interviews
              </h3>
              <p className="text-lg text-zinc-600 mb-6">
                Guided questionnaires collect complete responses in 30 minutes, not 3 weeks of emails.
              </p>
              
              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {interviewTags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 text-sm text-zinc-600 bg-zinc-100 rounded-full"
                  >
                    {tag.label}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Right: Animation */}
            <div className="flex items-center justify-center">
              <AssessmentFlowOrbital />
            </div>
          </div>

          {/* Secondary Capabilities */}
          <div className="grid lg:grid-cols-2 border-t border-zinc-200">
            {/* Risk Scoring */}
            <div className="group flex flex-col justify-center gap-4 bg-white px-6 py-8 transition-colors duration-300 hover:bg-zinc-50 lg:py-10 lg:px-8 border-b lg:border-b-0 lg:border-r border-zinc-200">
              <h3 className="text-xl md:text-2xl font-bold text-zinc-900">
                Risk Scoring
              </h3>
              <p className="text-base text-zinc-600">
                Risks automatically scored against your matrix with regulation mapping to PDPL, GDPR, CPRA.
              </p>
            </div>

            {/* Workflow & Audit Trail */}
            <div className="group flex flex-col justify-center gap-4 bg-white px-6 py-8 transition-colors duration-300 hover:bg-zinc-50 lg:py-10 lg:px-8">
              <h3 className="text-xl md:text-2xl font-bold text-zinc-900">
                Workflow & Audit Trail
              </h3>
              <p className="text-base text-zinc-600 mb-4">
                Every approval, edit, and decision logged for regulators. Full traceability from intake to sign-off.
              </p>
              
              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {auditTags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 text-sm text-zinc-600 bg-zinc-100 rounded-full"
                  >
                    {tag.label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
