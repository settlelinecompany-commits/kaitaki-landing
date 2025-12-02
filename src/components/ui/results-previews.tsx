'use client';

import { motion } from 'framer-motion';
import { Mic, Brain, BarChart3, Users, FileCheck, Clock, Shield, TrendingUp } from 'lucide-react';

// Voice Agent Preview for Assessment Velocity
export function VoiceAgentPreview() {
  return (
    <div className="relative w-full h-full min-h-[280px] bg-gradient-to-br from-zinc-50 to-blue-50 rounded-2xl border border-zinc-200 p-4 overflow-hidden">
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
          <Mic className="w-5 h-5 text-blue-600" />
        </div>
        <div>
          <p className="text-sm font-semibold text-zinc-900">Assessment Voice Agent</p>
          <p className="text-xs text-zinc-500">Recording • 0:17</p>
        </div>
      </div>

      {/* Waveform Animation */}
      <div className="flex items-center justify-center gap-1 h-8 mb-4">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="w-1 bg-blue-500 rounded-full"
            animate={{
              height: [8, 24, 8],
            }}
            transition={{
              duration: 0.8,
              repeat: Infinity,
              delay: i * 0.05,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Chat Messages */}
      <div className="space-y-3">
        <motion.div 
          className="bg-white rounded-xl p-3 shadow-sm border border-zinc-100"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <p className="text-xs text-zinc-600 leading-relaxed">
            I've transcribed your answers, pulled matching evidence, and filled the DPIA template end-to-end. I can highlight risks and propose mitigations. Would you like the generated draft?
          </p>
        </motion.div>

        <motion.div 
          className="bg-blue-50 rounded-xl p-3 border border-blue-100"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <div className="flex items-center gap-2 mb-2">
            <Brain className="w-4 h-4 text-blue-600" />
            <span className="text-xs font-medium text-blue-700">Agent Reasoning</span>
          </div>
          <p className="text-xs text-zinc-600 leading-relaxed">
            Stakeholder responses cover all DPIA sections and evidence confidence is high. No high-risk triggers detected. Generating a full draft assessment is appropriate.
          </p>
        </motion.div>
      </div>

      {/* Processing indicator */}
      <motion.div 
        className="absolute bottom-4 left-4 right-4 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <div className="flex items-center gap-2 px-4 py-2 bg-blue-600 rounded-full">
          <Clock className="w-4 h-4 text-white animate-pulse" />
          <span className="text-xs font-medium text-white">Processing complete</span>
        </div>
      </motion.div>
    </div>
  );
}

// Audit Trail Preview for Audit Confidence
export function AuditTrailPreview() {
  const auditItems = [
    { action: 'Risk assessment approved', user: 'Legal', time: '2m ago', icon: Shield, color: 'green' },
    { action: 'Mitigation plan added', user: 'Engineering', time: '15m ago', icon: FileCheck, color: 'blue' },
    { action: 'Evidence uploaded', user: 'Product', time: '1h ago', icon: FileCheck, color: 'blue' },
    { action: 'Interview completed', user: 'DPO', time: '2h ago', icon: Mic, color: 'purple' },
  ];

  return (
    <div className="relative w-full h-full min-h-[280px] bg-gradient-to-br from-zinc-50 to-green-50 rounded-2xl border border-zinc-200 p-4 overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Shield className="w-5 h-5 text-green-600" />
          <span className="text-sm font-semibold text-zinc-900">Audit Trail</span>
        </div>
        <span className="text-xs text-green-600 font-medium">100% Complete</span>
      </div>

      {/* Timeline */}
      <div className="space-y-3">
        {auditItems.map((item, idx) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={idx}
              className="flex items-start gap-3"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.15 }}
            >
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
                item.color === 'green' ? 'bg-green-100' :
                item.color === 'blue' ? 'bg-blue-100' : 'bg-purple-100'
              }`}>
                <Icon className={`w-4 h-4 ${
                  item.color === 'green' ? 'text-green-600' :
                  item.color === 'blue' ? 'text-blue-600' : 'text-purple-600'
                }`} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-medium text-zinc-900 truncate">{item.action}</p>
                <p className="text-xs text-zinc-500">{item.user} • {item.time}</p>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Export button */}
      <motion.div 
        className="absolute bottom-4 left-4 right-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <div className="flex items-center justify-center gap-2 px-4 py-2 bg-green-600 rounded-lg">
          <FileCheck className="w-4 h-4 text-white" />
          <span className="text-xs font-medium text-white">Export Audit Report</span>
        </div>
      </motion.div>
    </div>
  );
}

// Dashboard Preview for Team Efficiency
export function TeamDashboardPreview() {
  const stats = [
    { label: 'Open', value: 16, change: '+5%' },
    { label: 'Pending', value: 4, change: '+5%' },
  ];

  const departments = [
    { name: 'Human Resources', progress: 56, color: 'blue' },
    { name: 'Marketing', progress: 56, color: 'blue' },
    { name: 'Engineering', progress: 42, color: 'blue' },
  ];

  return (
    <div className="relative w-full h-full min-h-[280px] bg-gradient-to-br from-zinc-50 to-blue-50 rounded-2xl border border-zinc-200 p-4 overflow-hidden">
      {/* Stats Row */}
      <div className="grid grid-cols-2 gap-3 mb-4">
        {stats.map((stat, idx) => (
          <motion.div
            key={idx}
            className="bg-white rounded-xl p-3 border border-zinc-100"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
          >
            <p className="text-xs text-zinc-500 uppercase tracking-wider">{stat.label}</p>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold text-zinc-900">{stat.value}</span>
              <span className="text-xs text-green-600">{stat.change}</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Compliance by Department */}
      <motion.div 
        className="bg-white rounded-xl p-3 border border-zinc-100"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-semibold text-zinc-900">Compliance by Department</span>
          <div className="flex items-center gap-1">
            <div className="w-8 h-8 rounded-full border-4 border-blue-500 border-t-zinc-200 flex items-center justify-center">
              <span className="text-[10px] font-bold text-zinc-900">50%</span>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          {departments.map((dept, idx) => (
            <motion.div
              key={idx}
              className="flex items-center gap-2"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + idx * 0.1 }}
            >
              <Users className="w-3 h-3 text-zinc-400" />
              <span className="text-xs text-zinc-600 flex-1">{dept.name}</span>
              <div className="w-16 h-1.5 bg-zinc-100 rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-blue-500 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${dept.progress}%` }}
                  transition={{ delay: 0.5 + idx * 0.1, duration: 0.5 }}
                />
              </div>
              <span className="text-xs text-zinc-500 w-8">{dept.progress}%</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Chart preview */}
      <motion.div 
        className="mt-3 bg-white rounded-xl p-3 border border-zinc-100"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
      >
        <div className="flex items-center gap-2 mb-2">
          <TrendingUp className="w-4 h-4 text-blue-600" />
          <span className="text-xs font-semibold text-zinc-900">Risk Posture</span>
          <span className="text-xs text-red-500">-16%</span>
        </div>
        <div className="flex items-end gap-1 h-12">
          {[20, 35, 45, 30, 55, 70, 60].map((h, i) => (
            <motion.div
              key={i}
              className="flex-1 bg-blue-500 rounded-t"
              initial={{ height: 0 }}
              animate={{ height: `${h}%` }}
              transition={{ delay: 0.8 + i * 0.05, duration: 0.3 }}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}

