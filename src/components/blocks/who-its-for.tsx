'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { UserCircle, Users, Scale } from 'lucide-react';
import { FadeInStagger, HoverLift } from '@/components/animations';

const personas = [
  {
    icon: UserCircle,
    title: 'Data Protection Officers',
    description: 'Portfolio visibility across all assessments and audit-ready documentation that regulators expect.',
    features: ['Dashboard overview', 'Compliance reporting', 'Audit exports'],
  },
  {
    icon: Users,
    title: 'Privacy Analysts',
    description: 'Stop spending 60% of your time chasing stakeholders. Get complete responses in one session.',
    features: ['Guided interviews', 'Auto-reminders', 'Response tracking'],
  },
  {
    icon: Scale,
    title: 'Legal & Compliance',
    description: 'Prove systematic compliance to regulators with full audit trails and sign-off workflows.',
    features: ['Approval workflows', 'Change tracking', 'Legal sign-off'],
  },
];

export function WhoItsFor() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 md:py-28 bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-wider text-zinc-500 uppercase bg-zinc-100 rounded-full mb-6">
            Built For
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-zinc-900 mb-4">
            Privacy teams managing 50+ assessments/year
          </h2>
          <p className="text-lg md:text-xl text-zinc-600 max-w-2xl mx-auto">
            Purpose-built for enterprise compliance workflows.
          </p>
        </motion.div>

        <FadeInStagger className="grid grid-cols-1 md:grid-cols-3 gap-8" staggerSpeed={0.15}>
          {personas.map((persona) => (
            <HoverLift key={persona.title} liftAmount={4} scaleAmount={1.02}>
              <div className="group bg-zinc-50 rounded-2xl p-8 hover:bg-zinc-100 transition-all duration-300 h-full">
                <div className="w-14 h-14 rounded-2xl bg-white border border-zinc-200 flex items-center justify-center mb-6 group-hover:border-zinc-300 transition-colors">
                  <persona.icon className="w-7 h-7 text-zinc-700" />
                </div>
                <h3 className="text-xl font-semibold text-zinc-900 mb-3">
                  {persona.title}
                </h3>
                <p className="text-zinc-600 mb-6 leading-relaxed">
                  {persona.description}
                </p>
                <ul className="space-y-2">
                  {persona.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-zinc-500">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </HoverLift>
          ))}
        </FadeInStagger>
      </div>
    </section>
  );
}
