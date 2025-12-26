'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mic, Brain, Shield } from 'lucide-react';

const differentiators = [
  {
    icon: Mic,
    title: 'Kiwa - Voice Capture Agent',
    description: 'Converts stakeholder conversations into structured assessments. Asks smart follow-ups. Eliminates weeks of email chasing.',
  },
  {
    icon: Brain,
    title: 'Risk Reasoning Agent',
    description: 'Scores risks using your matrices and frameworks. Every decision includes full reasoning and citations you can audit or override.',
  },
  {
    icon: Shield,
    title: 'Orchestrator Agent',
    description: 'Coordinates interviews, approvals, reminders, and reporting across your entire privacy program. Nothing gets missed.',
  },
];

export function WhyItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="py-20 md:py-28 bg-zinc-50" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="text-center mb-10"
        >
          <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-wider text-zinc-500 uppercase bg-zinc-100 rounded-full mb-6">
            Why It Works
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-zinc-900 mb-4">
            The agentic system behind the speed
          </h2>
          <p className="text-lg md:text-xl text-zinc-600 max-w-2xl mx-auto">
            Purpose-built AI agents designed for accuracy, completeness, and auditability.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {differentiators.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              transition={{ duration: 0.4, delay: index * 0.1, ease: "easeOut" }}
              className="relative p-6 bg-white border border-zinc-200 rounded-2xl hover:border-zinc-300 hover:shadow-md transition-all h-full"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-4">
                <item.icon className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-zinc-900 mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-zinc-600 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
