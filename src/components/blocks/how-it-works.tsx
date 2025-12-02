'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Upload, Users, FileCheck } from 'lucide-react';
import { StepReveal, StepNumber, StepContent, StepImage } from '@/components/animations';
import { ImportAnimation } from '@/components/ui/import-animation';

const steps = [
  {
    number: '01',
    icon: Upload,
    title: 'Import',
    subtitle: 'Bring your templates and risk matrices',
    description: 'Upload your existing assessment templates, risk scoring matrices, and regulatory requirements. Your Privacy Assurance OS adapts to your methodology.',
    visual: '/images/how-it-works/step1-hero.png',
    useAnimation: true,
  },
  {
    number: '02',
    icon: Users,
    title: 'Assign',
    subtitle: 'Route to stakeholders with deadlines',
    description: 'Assign assessments to business units with smart deadlines. Stakeholders complete guided interviews in 30 minutes.',
    visual: '/images/how-it-works/Risk-Report.png',
    useAnimation: false,
  },
  {
    number: '03',
    icon: FileCheck,
    title: 'Export',
    subtitle: 'Audit-ready reports, one click',
    description: 'Generate signed reports, push final records to RoPA or Jira. Every decision documented for regulators.',
    visual: '/images/hero/kaitaki-hero.jpg',
    useAnimation: false,
  },
];

export function HowItWorks() {
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
            How It Works
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-zinc-900 mb-4">
            From setup to results in days
          </h2>
          <p className="text-lg md:text-xl text-zinc-600 max-w-2xl mx-auto">
            Connect, configure, and scale with confidence.
          </p>
        </motion.div>

        <div className="space-y-16 md:space-y-24">
          {steps.map((step, index) => (
            <StepReveal
              key={step.number}
              delay={index * 0.1}
              className={`flex flex-col ${
                index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'
              } items-center gap-8 md:gap-12`}
            >
              {/* Content */}
              <StepContent className="flex-1 w-full">
                <div className="flex items-center gap-4 mb-4">
                  <StepNumber>
                    <motion.span 
                      className="text-6xl md:text-7xl font-bold text-zinc-200"
                      whileInView={{ 
                        scale: [1, 1.05, 1],
                        opacity: [0.5, 1, 1]
                      }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      viewport={{ once: true }}
                    >
                      {step.number}
                    </motion.span>
                  </StepNumber>
                  <div className="w-12 h-12 rounded-xl bg-white border border-zinc-200 flex items-center justify-center">
                    <step.icon className="w-6 h-6 text-zinc-700" />
                  </div>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-lg font-medium text-zinc-600 mb-4">
                  {step.subtitle}
                </p>
                <p className="text-zinc-500 leading-relaxed">
                  {step.description}
                </p>
              </StepContent>

              {/* Visual */}
              <StepImage className="flex-1 w-full">
                {step.useAnimation ? (
                  <ImportAnimation />
                ) : (
                  <div className="relative bg-white rounded-2xl border border-zinc-200 overflow-hidden shadow-lg">
                    <img
                      src={step.visual}
                      alt={step.title}
                      className="w-full h-64 md:h-80 object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                  </div>
                )}
              </StepImage>
            </StepReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
