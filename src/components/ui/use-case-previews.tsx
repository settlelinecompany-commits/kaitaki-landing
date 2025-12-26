'use client';

import { motion } from 'framer-motion';
import {
  FileCheck,
  AlertTriangle,
  CheckCircle2,
  Clock,
  Mic,
  Building2,
  Database,
  Brain,
  Shield,
  FileText,
  RefreshCw,
  Download,
  Scale
} from 'lucide-react';

// DPIA Preview - Document generation with risk identification
export function DPIAPreview() {
  const risks = [
    { level: 'high', label: 'Data retention', flagged: true },
    { level: 'medium', label: 'Third-party sharing', flagged: true },
    { level: 'low', label: 'Access controls', flagged: false },
  ];

  const sections = [
    { name: 'Processing purpose', status: 'complete' },
    { name: 'Data categories', status: 'complete' },
    { name: 'Risk assessment', status: 'complete' },
    { name: 'Mitigations', status: 'in-progress' },
  ];

  return (
    <div className="relative w-full h-full min-h-[200px] bg-gradient-to-br from-zinc-50 to-blue-50 rounded-xl border border-zinc-200 p-4 overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center">
            <FileCheck className="w-4 h-4 text-blue-600" />
          </div>
          <div>
            <p className="text-xs font-semibold text-zinc-900">DPIA Generator</p>
            <p className="text-[10px] text-zinc-500">CRM Integration Project</p>
          </div>
        </div>
        <span className="text-[10px] font-medium text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">Draft</span>
      </div>

      {/* Document Sections */}
      <div className="bg-white rounded-lg border border-zinc-100 p-2.5 mb-3">
        <p className="text-[10px] font-semibold text-zinc-500 uppercase tracking-wider mb-2">Sections</p>
        <div className="space-y-1.5">
          {sections.map((section, idx) => (
            <motion.div
              key={idx}
              className="flex items-center justify-between"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
            >
              <span className="text-[11px] text-zinc-600">{section.name}</span>
              {section.status === 'complete' ? (
                <CheckCircle2 className="w-3.5 h-3.5 text-green-500" />
              ) : (
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                >
                  <RefreshCw className="w-3.5 h-3.5 text-blue-500" />
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Risk Flags */}
      <div className="bg-white rounded-lg border border-zinc-100 p-2.5">
        <p className="text-[10px] font-semibold text-zinc-500 uppercase tracking-wider mb-2">Risks Identified</p>
        <div className="space-y-1.5">
          {risks.map((risk, idx) => (
            <motion.div
              key={idx}
              className="flex items-center gap-2"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + idx * 0.1 }}
            >
              <div className={`w-1.5 h-1.5 rounded-full ${
                risk.level === 'high' ? 'bg-red-500' :
                risk.level === 'medium' ? 'bg-amber-500' : 'bg-green-500'
              }`} />
              <span className="text-[11px] text-zinc-600 flex-1">{risk.label}</span>
              {risk.flagged && (
                <AlertTriangle className={`w-3 h-3 ${
                  risk.level === 'high' ? 'text-red-500' : 'text-amber-500'
                }`} />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Vendor Assessment Preview - Voice interview with status
export function VendorAssessmentPreview() {
  const questions = [
    { q: 'Data processing locations?', answered: true },
    { q: 'Security certifications?', answered: true },
    { q: 'Subprocessor list?', answered: true },
    { q: 'Breach notification SLA?', answered: false },
  ];

  return (
    <div className="relative w-full h-full min-h-[200px] bg-gradient-to-br from-zinc-50 to-purple-50 rounded-xl border border-zinc-200 p-4 overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center">
            <Building2 className="w-4 h-4 text-purple-600" />
          </div>
          <div>
            <p className="text-xs font-semibold text-zinc-900">Vendor Interview</p>
            <p className="text-[10px] text-zinc-500">Acme Cloud Services</p>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <motion.div
            className="w-2 h-2 bg-green-500 rounded-full"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
          <span className="text-[10px] text-green-600 font-medium">Live</span>
        </div>
      </div>

      {/* Waveform */}
      <div className="flex items-center justify-center gap-0.5 h-6 mb-3">
        {[...Array(16)].map((_, i) => (
          <motion.div
            key={i}
            className="w-1 bg-purple-400 rounded-full"
            animate={{ height: [4, 16, 4] }}
            transition={{
              duration: 0.6,
              repeat: Infinity,
              delay: i * 0.04,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Questions Checklist */}
      <div className="bg-white rounded-lg border border-zinc-100 p-2.5">
        <div className="flex items-center justify-between mb-2">
          <p className="text-[10px] font-semibold text-zinc-500 uppercase tracking-wider">Questions</p>
          <span className="text-[10px] text-purple-600 font-medium">3/4 captured</span>
        </div>
        <div className="space-y-1.5">
          {questions.map((item, idx) => (
            <motion.div
              key={idx}
              className="flex items-center gap-2"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
            >
              <div className={`w-4 h-4 rounded flex items-center justify-center ${
                item.answered ? 'bg-green-100' : 'bg-zinc-100'
              }`}>
                {item.answered ? (
                  <CheckCircle2 className="w-3 h-3 text-green-600" />
                ) : (
                  <Mic className="w-2.5 h-2.5 text-zinc-400" />
                )}
              </div>
              <span className={`text-[11px] ${item.answered ? 'text-zinc-600' : 'text-zinc-400'}`}>
                {item.q}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Timer */}
      <motion.div
        className="absolute bottom-3 right-3 flex items-center gap-1 px-2 py-1 bg-purple-600 rounded-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <Clock className="w-3 h-3 text-white" />
        <span className="text-[10px] font-medium text-white">12:34</span>
      </motion.div>
    </div>
  );
}

// ROPA Preview - Auto-updating records with export
export function ROPAPreview() {
  const records = [
    { process: 'Customer onboarding', updated: 'Auto-synced', status: 'current' },
    { process: 'Marketing analytics', updated: '2h ago', status: 'current' },
    { process: 'HR data processing', updated: 'Auto-synced', status: 'current' },
    { process: 'Vendor management', updated: 'Auto-synced', status: 'current' },
  ];

  return (
    <div className="relative w-full h-full min-h-[200px] bg-gradient-to-br from-zinc-50 to-green-50 rounded-xl border border-zinc-200 p-4 overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center">
            <Database className="w-4 h-4 text-green-600" />
          </div>
          <div>
            <p className="text-xs font-semibold text-zinc-900">ROPA Registry</p>
            <p className="text-[10px] text-zinc-500">24 processing activities</p>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
          >
            <RefreshCw className="w-3 h-3 text-green-600" />
          </motion.div>
          <span className="text-[10px] text-green-600 font-medium">Live sync</span>
        </div>
      </div>

      {/* Records Table */}
      <div className="bg-white rounded-lg border border-zinc-100 p-2.5 mb-3">
        <div className="space-y-2">
          {records.map((record, idx) => (
            <motion.div
              key={idx}
              className="flex items-center justify-between py-1 border-b border-zinc-50 last:border-0"
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
            >
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                <span className="text-[11px] text-zinc-700">{record.process}</span>
              </div>
              <span className="text-[10px] text-green-600">{record.updated}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Export Button */}
      <motion.div
        className="flex items-center justify-center gap-2 px-3 py-2 bg-green-600 rounded-lg cursor-pointer hover:bg-green-700 transition-colors"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        whileHover={{ scale: 1.02 }}
      >
        <Download className="w-3.5 h-3.5 text-white" />
        <span className="text-[11px] font-medium text-white">Export for Auditor</span>
      </motion.div>

      {/* Audit ready badge */}
      <motion.div
        className="absolute top-3 right-3 flex items-center gap-1 px-2 py-0.5 bg-green-100 rounded-full"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3 }}
      >
        <Shield className="w-3 h-3 text-green-600" />
        <span className="text-[10px] font-medium text-green-700">Audit Ready</span>
      </motion.div>
    </div>
  );
}

// AI/ML Assessment Preview - Multi-regulation compliance
export function AIMLAssessmentPreview() {
  const regulations = [
    { name: 'GDPR', status: 'compliant', articles: 'Art. 22, 35' },
    { name: 'PDPL', status: 'compliant', articles: 'Art. 10, 17' },
    { name: 'EU AI Act', status: 'review', articles: 'High-risk' },
  ];

  const checks = [
    { check: 'Automated decision-making', passed: true },
    { check: 'Transparency requirements', passed: true },
    { check: 'Human oversight', passed: false },
  ];

  return (
    <div className="relative w-full h-full min-h-[200px] bg-gradient-to-br from-zinc-50 to-amber-50 rounded-xl border border-zinc-200 p-4 overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-amber-100 flex items-center justify-center">
            <Brain className="w-4 h-4 text-amber-600" />
          </div>
          <div>
            <p className="text-xs font-semibold text-zinc-900">AI System Assessment</p>
            <p className="text-[10px] text-zinc-500">ML Recommendation Engine</p>
          </div>
        </div>
      </div>

      {/* Regulation Badges */}
      <div className="flex gap-1.5 mb-3">
        {regulations.map((reg, idx) => (
          <motion.div
            key={idx}
            className={`px-2 py-1 rounded-lg text-[10px] font-medium ${
              reg.status === 'compliant'
                ? 'bg-green-100 text-green-700'
                : 'bg-amber-100 text-amber-700'
            }`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.1 }}
          >
            {reg.name}
          </motion.div>
        ))}
      </div>

      {/* Compliance Checks */}
      <div className="bg-white rounded-lg border border-zinc-100 p-2.5 mb-3">
        <p className="text-[10px] font-semibold text-zinc-500 uppercase tracking-wider mb-2">Compliance Checks</p>
        <div className="space-y-1.5">
          {checks.map((item, idx) => (
            <motion.div
              key={idx}
              className="flex items-center gap-2"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + idx * 0.1 }}
            >
              {item.passed ? (
                <CheckCircle2 className="w-3.5 h-3.5 text-green-500" />
              ) : (
                <AlertTriangle className="w-3.5 h-3.5 text-amber-500" />
              )}
              <span className="text-[11px] text-zinc-600">{item.check}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Article References */}
      <div className="bg-white rounded-lg border border-zinc-100 p-2.5">
        <div className="flex items-center gap-2 mb-2">
          <Scale className="w-3.5 h-3.5 text-zinc-400" />
          <p className="text-[10px] font-semibold text-zinc-500 uppercase tracking-wider">Mapped Articles</p>
        </div>
        <div className="flex flex-wrap gap-1">
          {regulations.map((reg, idx) => (
            <motion.span
              key={idx}
              className="text-[10px] text-zinc-500 bg-zinc-100 px-1.5 py-0.5 rounded"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 + idx * 0.1 }}
            >
              {reg.name}: {reg.articles}
            </motion.span>
          ))}
        </div>
      </div>
    </div>
  );
}
