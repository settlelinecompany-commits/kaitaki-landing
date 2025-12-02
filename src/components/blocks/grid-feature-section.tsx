'use client';

import { CheckCircle, Shield, Database, Download, TrendingUp, Link as LinkIcon, Brain } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FadeInStagger, HoverLift, SubtleGlow } from '@/components/animations';

const features = [
  {
    title: 'Pass audits under PDPL, GDPR, CPRA',
    icon: CheckCircle,
    description: 'Built-in regulatory mapping ensures your assessments meet global privacy standards.',
    hasGlow: false,
  },
  {
    title: 'Keep legal in control of final sign-off',
    icon: Shield,
    description: 'Approval workflows ensure nothing goes out without proper authorization.',
    hasGlow: false,
  },
  {
    title: 'In-region, private cloud, or fully isolated',
    icon: Database,
    description: 'Meet PDPL/GDPR residency requirements with deployments aligned to your compliance needs.',
    hasGlow: false,
  },
  {
    title: 'Track every change & export anytime',
    icon: Download,
    description: 'Complete audit trail with full change history and on-demand exports.',
    hasGlow: false,
  },
  {
    title: 'Explainable AI Engine',
    icon: Brain,
    description: 'Every risk decision includes full reasoning, citations, overrides, and version history.',
    hasGlow: true,
  },
  {
    title: 'See time saved per assessment',
    icon: TrendingUp,
    description: 'Dashboard metrics show efficiency gains and demonstrate ROI.',
    hasGlow: false,
  },
  {
    title: 'Sync to Jira, email, and RoPA',
    icon: LinkIcon,
    description: 'Push results to your existing tools. No workflow disruption.',
    hasGlow: false,
  },
];

export function GridFeatureSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 md:py-28 bg-white" ref={ref}>
      <div className="mx-auto w-full max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-3xl text-center mb-12 md:mb-16"
        >
          <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-wider text-zinc-500 uppercase bg-zinc-100 rounded-full mb-6">
            Features
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-zinc-900 mb-4">
            Enterprise-grade compliance platform
          </h2>
          <p className="text-lg md:text-xl text-zinc-600 max-w-2xl mx-auto">
            Everything you need to scale privacy operations — all inside your Privacy Assurance Operating System.
          </p>
        </motion.div>

        <FadeInStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" staggerSpeed={0.05}>
          {features.map((feature) => (
            <HoverLift key={feature.title} liftAmount={3} scaleAmount={1.02}>
              <div className="group p-6 bg-zinc-50 border border-zinc-200 rounded-2xl hover:border-zinc-300 hover:shadow-lg transition-all duration-300 h-full">
                {feature.hasGlow ? (
                  <SubtleGlow color="rgba(59, 130, 246, 0.15)">
                    <div className="w-10 h-10 rounded-xl bg-white border border-zinc-200 flex items-center justify-center mb-4 group-hover:border-zinc-300 transition-colors">
                      <feature.icon className="w-5 h-5 text-blue-600" />
                    </div>
                  </SubtleGlow>
                ) : (
                  <div className="w-10 h-10 rounded-xl bg-white border border-zinc-200 flex items-center justify-center mb-4 group-hover:border-zinc-300 transition-colors">
                    <feature.icon className="w-5 h-5 text-zinc-600" />
                  </div>
                )}
                <h3 className="text-lg font-semibold text-zinc-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-zinc-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </HoverLift>
          ))}
        </FadeInStagger>

        {/* Highlight: Zero follow-ups */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 p-8 bg-zinc-900 rounded-2xl text-center"
        >
          <p className="text-xl md:text-2xl font-semibold text-white mb-2">
            No follow-ups. Complete in one session. <span className="text-blue-400">100% coverage.</span>
          </p>
          <p className="text-zinc-400">
            Kaitaki closes information loops in real time — the single biggest bottleneck for privacy teams, solved.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
