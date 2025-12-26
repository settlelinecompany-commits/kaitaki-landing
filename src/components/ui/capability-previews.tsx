'use client';

import { motion } from 'framer-motion';
import {
  Mic,
  CheckCircle2,
  MessageSquare,
  AlertTriangle,
  Shield,
  FileCheck,
  Clock,
  ChevronRight,
  Users,
  Brain,
} from 'lucide-react';

// Voice Interview Preview - Shows stakeholder interview in progress
export function VoiceInterviewPreview() {
  const transcriptItems = [
    { speaker: 'Kiwa', text: 'What data will this system collect?', isAgent: true },
    { speaker: 'Product', text: 'Customer names, emails, and purchase history...', isAgent: false },
    { speaker: 'Kiwa', text: 'Will any of this data be shared with third parties?', isAgent: true },
  ];

  return (
    <div className="relative w-full bg-gradient-to-br from-zinc-50 to-blue-50 rounded-xl border border-zinc-200 p-4 overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center">
            <Mic className="w-4 h-4 text-blue-600" />
          </div>
          <div>
            <p className="text-xs font-semibold text-zinc-900">Kiwa Interview</p>
            <p className="text-[10px] text-zinc-500">Product Team - CRM Project</p>
          </div>
        </div>
        <div className="flex items-center gap-1.5">
          <motion.div
            className="w-2 h-2 bg-green-500 rounded-full"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
          <span className="text-[10px] text-green-600 font-medium">Recording</span>
        </div>
      </div>

      {/* Waveform */}
      <div className="flex items-center justify-center gap-0.5 h-6 mb-4 px-2">
        {[...Array(24)].map((_, i) => (
          <motion.div
            key={i}
            className="w-1 bg-blue-400 rounded-full"
            animate={{ height: [4, 16, 4] }}
            transition={{
              duration: 0.6,
              repeat: Infinity,
              delay: i * 0.03,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Transcript */}
      <div className="bg-white rounded-lg border border-zinc-100 p-3 space-y-2.5">
        {transcriptItems.map((item, idx) => (
          <motion.div
            key={idx}
            className={`flex gap-2 ${item.isAgent ? '' : 'flex-row-reverse'}`}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.15 }}
          >
            <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${
              item.isAgent ? 'bg-blue-100' : 'bg-zinc-100'
            }`}>
              {item.isAgent ? (
                <Brain className="w-3 h-3 text-blue-600" />
              ) : (
                <Users className="w-3 h-3 text-zinc-600" />
              )}
            </div>
            <div className={`flex-1 ${item.isAgent ? '' : 'text-right'}`}>
              <p className="text-[10px] text-zinc-400 mb-0.5">{item.speaker}</p>
              <p className={`text-[11px] text-zinc-700 ${item.isAgent ? 'bg-blue-50 rounded-lg px-2 py-1.5' : 'bg-zinc-50 rounded-lg px-2 py-1.5'}`}>
                {item.text}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Status bar */}
      <div className="mt-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-3.5 h-3.5 text-green-500" />
          <span className="text-[10px] text-zinc-500">3 of 8 sections captured</span>
        </div>
        <div className="flex items-center gap-1 text-[10px] text-zinc-400">
          <Clock className="w-3 h-3" />
          <span>12:34</span>
        </div>
      </div>
    </div>
  );
}

// Risk Reasoning Preview - Shows explainable AI risk scoring
export function RiskReasoningPreview() {
  const risks = [
    {
      name: 'Cross-border transfer',
      level: 'high',
      trigger: 'Data stored in US servers',
      regulation: 'GDPR Art. 44-49',
    },
    {
      name: 'Data retention',
      level: 'medium',
      trigger: 'No deletion policy defined',
      regulation: 'GDPR Art. 5(1)(e)',
    },
  ];

  return (
    <div className="relative w-full bg-gradient-to-br from-zinc-50 to-amber-50 rounded-xl border border-zinc-200 p-4 overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-amber-100 flex items-center justify-center">
            <Shield className="w-4 h-4 text-amber-600" />
          </div>
          <div>
            <p className="text-xs font-semibold text-zinc-900">Risk Analysis</p>
            <p className="text-[10px] text-zinc-500">CRM Integration DPIA</p>
          </div>
        </div>
        <span className="text-[10px] font-medium text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full">
          2 risks flagged
        </span>
      </div>

      {/* Risk Cards */}
      <div className="space-y-2.5">
        {risks.map((risk, idx) => (
          <motion.div
            key={idx}
            className="bg-white rounded-lg border border-zinc-100 p-3"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.15 }}
          >
            {/* Risk header */}
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <div className={`w-2 h-2 rounded-full ${
                  risk.level === 'high' ? 'bg-red-500' : 'bg-amber-500'
                }`} />
                <span className="text-xs font-medium text-zinc-900">{risk.name}</span>
              </div>
              <span className={`text-[10px] px-1.5 py-0.5 rounded ${
                risk.level === 'high'
                  ? 'bg-red-100 text-red-700'
                  : 'bg-amber-100 text-amber-700'
              }`}>
                {risk.level}
              </span>
            </div>

            {/* Reasoning */}
            <div className="space-y-1.5">
              <div className="flex items-start gap-2">
                <span className="text-[10px] text-zinc-400 w-14 flex-shrink-0">Trigger:</span>
                <span className="text-[10px] text-zinc-600">{risk.trigger}</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[10px] text-zinc-400 w-14 flex-shrink-0">Article:</span>
                <span className="text-[10px] text-blue-600 font-medium">{risk.regulation}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Override option */}
      <motion.div
        className="mt-3 flex items-center justify-between px-2 py-2 bg-white rounded-lg border border-dashed border-zinc-200"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <span className="text-[10px] text-zinc-500">Disagree with assessment?</span>
        <button className="text-[10px] text-blue-600 font-medium flex items-center gap-0.5">
          Override <ChevronRight className="w-3 h-3" />
        </button>
      </motion.div>
    </div>
  );
}

// Audit Trail Preview - Shows complete documentation
export function AuditDocPreview() {
  const timeline = [
    { action: 'Assessment created', user: 'System', time: 'Dec 15, 9:00am', icon: FileCheck, color: 'blue' },
    { action: 'Interview completed', user: 'Product Team', time: 'Dec 15, 10:34am', icon: Mic, color: 'purple' },
    { action: 'Risks identified (2)', user: 'AI Analysis', time: 'Dec 15, 10:35am', icon: AlertTriangle, color: 'amber' },
    { action: 'Legal review approved', user: 'J. Smith', time: 'Dec 16, 2:15pm', icon: CheckCircle2, color: 'green' },
  ];

  return (
    <div className="relative w-full bg-gradient-to-br from-zinc-50 to-green-50 rounded-xl border border-zinc-200 p-4 overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center">
            <FileCheck className="w-4 h-4 text-green-600" />
          </div>
          <div>
            <p className="text-xs font-semibold text-zinc-900">Audit Trail</p>
            <p className="text-[10px] text-zinc-500">Complete history</p>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <Shield className="w-3 h-3 text-green-600" />
          <span className="text-[10px] text-green-600 font-medium">Immutable</span>
        </div>
      </div>

      {/* Timeline */}
      <div className="bg-white rounded-lg border border-zinc-100 p-3">
        <div className="space-y-3">
          {timeline.map((item, idx) => {
            const Icon = item.icon;
            const isLast = idx === timeline.length - 1;
            return (
              <motion.div
                key={idx}
                className="flex items-start gap-3 relative"
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
              >
                {/* Connector line */}
                {!isLast && (
                  <div className="absolute left-3 top-6 w-px h-[calc(100%+4px)] bg-zinc-200" />
                )}

                {/* Icon */}
                <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 z-10 ${
                  item.color === 'blue' ? 'bg-blue-100' :
                  item.color === 'purple' ? 'bg-purple-100' :
                  item.color === 'amber' ? 'bg-amber-100' : 'bg-green-100'
                }`}>
                  <Icon className={`w-3 h-3 ${
                    item.color === 'blue' ? 'text-blue-600' :
                    item.color === 'purple' ? 'text-purple-600' :
                    item.color === 'amber' ? 'text-amber-600' : 'text-green-600'
                  }`} />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <p className="text-[11px] font-medium text-zinc-900">{item.action}</p>
                  <p className="text-[10px] text-zinc-500">{item.user} &middot; {item.time}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Export button */}
      <motion.button
        className="mt-3 w-full flex items-center justify-center gap-2 px-3 py-2 bg-green-600 hover:bg-green-700 rounded-lg transition-colors"
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <FileCheck className="w-3.5 h-3.5 text-white" />
        <span className="text-[11px] font-medium text-white">Export Audit Package</span>
      </motion.button>
    </div>
  );
}
