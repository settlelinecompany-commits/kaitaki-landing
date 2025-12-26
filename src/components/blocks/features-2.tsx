'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import {
  VoiceInterviewPreview,
  RiskReasoningPreview,
  AuditDocPreview,
} from '@/components/ui/capability-previews';

interface Capability {
  id: string;
  title: string;
  description: string;
  preview: React.ComponentType;
  tags: string[];
}

const capabilities: Capability[] = [
  {
    id: 'interview',
    title: 'Complete responses in 30 minutes',
    description: 'Stakeholders talk instead of filling forms. Kiwa, your AI interview agent, asks smart follow-ups and captures everything. No more reminder emails. No more incomplete answers.',
    preview: VoiceInterviewPreview,
    tags: ['Voice or form-based', 'Smart follow-ups', 'Auto-reminders'],
  },
  {
    id: 'risk',
    title: 'See exactly why risks are flagged',
    description: "Every risk shows which answers triggered it, which regulations apply, and the full AI reasoning. Override any decision - your judgment gets logged alongside the AI's. Not a black box.",
    preview: RiskReasoningPreview,
    tags: ['Explainable AI', 'Human override', 'Citation links'],
  },
  {
    id: 'audit',
    title: 'Audit-ready documentation, always',
    description: 'Every assessment, every decision, every approval - logged automatically. Your ROPA updates in real-time. When regulators ask, you export a complete audit package in one click.',
    preview: AuditDocPreview,
    tags: ['Change tracking', 'Legal sign-off', 'Export anytime'],
  },
];

export function Features2() {
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
          className="lg:max-w-lg mb-12"
        >
          <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-wider text-zinc-500 uppercase bg-zinc-100 rounded-full mb-6">
            Capabilities
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-zinc-900 mb-4">
            How Kaitaki Works
          </h2>
          <p className="text-lg md:text-xl text-zinc-600">
            Enterprise-grade automation with complete oversight and control.
          </p>
        </motion.div>

        {/* Capabilities Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {capabilities.map((capability, index) => {
            const PreviewComponent = capability.preview;
            return (
              <motion.div
                key={capability.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="group flex flex-col overflow-hidden rounded-2xl border border-zinc-200 hover:border-zinc-300 hover:shadow-lg transition-all bg-white"
              >
                {/* UI Preview */}
                <div className="relative p-4 bg-zinc-50">
                  <PreviewComponent />
                </div>

                {/* Content */}
                <div className="p-4 flex flex-col flex-1">
                  <h3 className="mb-2 text-lg font-bold text-zinc-900">
                    {capability.title}
                  </h3>
                  <p className="text-sm text-zinc-600 leading-relaxed mb-3 flex-1">
                    {capability.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {capability.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 text-xs text-zinc-500 bg-zinc-100 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
