'use client';

import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';

const regulations = [
  { name: 'PDPL', region: 'Saudi Arabia' },
  { name: 'GDPR', region: 'European Union' },
  { name: 'CPRA', region: 'California' },
];

export function TrustBadges() {
  return (
    <section className="py-12 bg-white border-t border-zinc-200">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center"
        >
          {/* Regulations */}
          <p className="text-xs font-semibold tracking-wider text-zinc-500 uppercase mb-4">
            Regulations Supported
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {regulations.map((reg) => (
              <div
                key={reg.name}
                className="flex items-center gap-2 px-4 py-2 bg-zinc-50 border border-zinc-200 rounded-lg"
              >
                <Shield className="w-4 h-4 text-blue-600" />
                <div>
                  <span className="text-sm font-semibold text-zinc-900">{reg.name}</span>
                  <span className="text-xs text-zinc-500 ml-2">{reg.region}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center text-zinc-500 mt-8 text-sm"
        >
          Built for enterprise privacy teams • Trusted by compliance leaders worldwide
        </motion.p>
      </div>
    </section>
  );
}
