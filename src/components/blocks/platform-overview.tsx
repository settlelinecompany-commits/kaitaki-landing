'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  FileText, 
  Bell,
  BarChart3,
  Share2,
  Users,
  FileCheck
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { BentoCard, BentoGrid } from '@/components/ui/bento-grid';
import { Marquee } from '@/components/ui/marquee';
import { AnimatedList } from '@/components/ui/animated-list';
import { ImportAnimation } from '@/components/ui/import-animation';

// Assessment templates for marquee
const templates = [
  { name: "DPIA Template", body: "Data Protection Impact Assessment for high-risk processing." },
  { name: "Vendor Risk", body: "Third-party vendor privacy risk questionnaire." },
  { name: "AI Systems", body: "Privacy assessment for AI/ML systems." },
  { name: "Data Transfer", body: "Cross-border data transfer assessment." },
  { name: "Marketing", body: "Marketing and consent compliance." },
];

// Notifications for animated list
const notifications = [
  { name: "Assessment approved", description: "CRM Integration DPIA", time: "2m ago", icon: "✅" },
  { name: "New risk identified", description: "High: Data retention policy", time: "5m ago", icon: "⚠️" },
  { name: "Interview scheduled", description: "Product team - 3pm", time: "10m ago", icon: "🎤" },
  { name: "Mitigation completed", description: "Encryption implemented", time: "15m ago", icon: "🔒" },
  { name: "Report exported", description: "Q4 Compliance Summary", time: "1h ago", icon: "📄" },
];

// Stakeholders for assignment animation
const stakeholders = [
  { name: "Engineering", role: "Tech Lead", status: "In Progress", avatar: "🧑‍💻" },
  { name: "Marketing", role: "Director", status: "Pending", avatar: "📢" },
  { name: "Legal", role: "Counsel", status: "Approved", avatar: "⚖️" },
  { name: "Product", role: "PM", status: "Scheduled", avatar: "📋" },
];

const Notification = ({ name, description, icon, time }: { name: string; description: string; icon: string; time: string }) => (
  <figure className={cn(
    "relative mx-auto min-h-fit w-full max-w-[280px] md:max-w-[350px] cursor-pointer overflow-hidden rounded-xl p-3 md:p-4",
    "border border-zinc-200 bg-white hover:bg-zinc-50",
    "transition-all duration-200"
  )}>
    <div className="flex flex-row items-center gap-2 md:gap-3">
      <div className="flex h-8 w-8 md:h-10 md:w-10 items-center justify-center rounded-xl bg-zinc-100 text-base md:text-lg">
        {icon}
      </div>
      <div className="flex flex-col overflow-hidden">
        <figcaption className="flex flex-row items-center whitespace-pre text-xs md:text-sm font-medium text-zinc-900">
          <span className="truncate">{name}</span>
          <span className="mx-1 text-zinc-400">·</span>
          <span className="text-xs text-zinc-500">{time}</span>
        </figcaption>
        <p className="text-xs font-normal text-zinc-500 truncate">{description}</p>
      </div>
    </div>
  </figure>
);

const StakeholderCard = ({ name, role, status, avatar }: { name: string; role: string; status: string; avatar: string }) => (
  <div className="flex items-center gap-3 p-3 bg-white rounded-lg border border-zinc-200">
    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-100 text-xl">
      {avatar}
    </div>
    <div className="flex-1 min-w-0">
      <p className="text-sm font-medium text-zinc-900 truncate">{name}</p>
      <p className="text-xs text-zinc-500">{role}</p>
    </div>
    <span className={cn(
      "text-xs px-2 py-1 rounded-full font-medium",
      status === "Approved" && "bg-green-100 text-green-700",
      status === "In Progress" && "bg-blue-100 text-blue-700",
      status === "Pending" && "bg-amber-100 text-amber-700",
      status === "Scheduled" && "bg-purple-100 text-purple-700"
    )}>
      {status}
    </span>
  </div>
);

const features = [
  {
    Icon: Share2,
    name: "Import & Integrate",
    description: "Bring your templates, connect to Jira, ServiceNow, Slack, and your existing compliance stack.",
    className: "sm:col-span-2 lg:col-span-2",
    background: (
      <ImportAnimation className="absolute inset-0 h-full w-full border-none opacity-60 group-hover:opacity-80 transition-opacity [mask-image:linear-gradient(to_bottom,#000_30%,transparent_90%)]" />
    ),
  },
  {
    Icon: FileText,
    name: "Assessment Library",
    description: "Pre-built templates for DPIA, vendor risk, AI systems, and more.",
    className: "sm:col-span-1 lg:col-span-1",
    background: (
      <Marquee
        pauseOnHover
        className="absolute top-4 left-0 right-0 [mask-image:linear-gradient(to_bottom,#000_20%,transparent_80%)] [--duration:25s]"
      >
        {templates.map((t, idx) => (
          <figure
            key={idx}
            className={cn(
              "relative w-28 md:w-32 cursor-pointer overflow-hidden rounded-xl border p-3",
              "border-zinc-200 bg-zinc-50 hover:bg-zinc-100",
              "transform-gpu blur-[1px] transition-all duration-300 ease-out hover:blur-none"
            )}
          >
            <div className="flex flex-col gap-1">
              <figcaption className="text-xs md:text-sm font-medium text-zinc-900 truncate">{t.name}</figcaption>
              <blockquote className="text-xs text-zinc-500 line-clamp-2">{t.body}</blockquote>
            </div>
          </figure>
        ))}
      </Marquee>
    ),
  },
  {
    Icon: Users,
    name: "Assign & Track",
    description: "Route assessments to stakeholders with smart deadlines. Track progress in real-time.",
    className: "sm:col-span-1 lg:col-span-1",
    background: (
      <div className="absolute top-4 left-4 right-4 space-y-2 [mask-image:linear-gradient(to_bottom,#000_40%,transparent_90%)]">
        {stakeholders.map((s, idx) => (
          <motion.div
            key={s.name}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.15, duration: 0.3 }}
          >
            <StakeholderCard {...s} />
          </motion.div>
        ))}
      </div>
    ),
  },
  {
    Icon: Bell,
    name: "Real-time Alerts",
    description: "Get notified of risk changes, approvals, and deadlines instantly.",
    className: "sm:col-span-1 lg:col-span-1",
    background: (
      <AnimatedList 
        className="absolute top-4 left-2 right-2 h-[200px] md:h-[240px] [mask-image:linear-gradient(to_bottom,#000_30%,transparent_85%)]" 
        delay={2500}
      >
        {notifications.map((item, idx) => (
          <Notification {...item} key={idx} />
        ))}
      </AnimatedList>
    ),
  },
  {
    Icon: FileCheck,
    name: "Export & Report",
    description: "Generate audit-ready reports with one click. Push to RoPA or Jira.",
    className: "sm:col-span-1 lg:col-span-1",
    background: (
      <div className="absolute top-4 left-4 right-4 [mask-image:linear-gradient(to_bottom,#000_40%,transparent_90%)]">
        <div className="space-y-3 p-4 bg-white rounded-xl border border-zinc-200 shadow-sm">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-green-500" />
            <span className="text-sm font-medium text-zinc-900">Report Ready</span>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-xs">
              <span className="text-zinc-500">Format</span>
              <span className="text-zinc-700">PDF / Excel</span>
            </div>
            <div className="flex justify-between text-xs">
              <span className="text-zinc-500">Pages</span>
              <span className="text-zinc-700">24</span>
            </div>
            <div className="flex justify-between text-xs">
              <span className="text-zinc-500">Status</span>
              <span className="text-green-600 font-medium">Signed</span>
            </div>
          </div>
          <div className="pt-2 border-t border-zinc-100 flex gap-2">
            <button className="flex-1 text-xs py-2 px-3 bg-zinc-900 text-white rounded-lg">Download</button>
            <button className="flex-1 text-xs py-2 px-3 bg-zinc-100 text-zinc-700 rounded-lg">Share</button>
          </div>
        </div>
      </div>
    ),
  },
  {
    Icon: BarChart3,
    name: "Analytics Dashboard",
    description: "Track assessment velocity, risk trends, and team performance.",
    className: "sm:col-span-2 lg:col-span-1",
    background: (
      <div className="absolute top-4 left-4 right-4 [mask-image:linear-gradient(to_bottom,#000_50%,transparent_95%)]">
        <div className="space-y-4 p-4 bg-white rounded-xl border border-zinc-200">
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-zinc-600">Assessments</span>
              <span className="font-semibold text-zinc-900">47</span>
            </div>
            <div className="h-2 bg-zinc-100 rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-blue-500 rounded-full" 
                initial={{ width: 0 }}
                animate={{ width: "75%" }}
                transition={{ duration: 1, delay: 0.5 }}
              />
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-zinc-600">Completion</span>
              <span className="font-semibold text-green-600">89%</span>
            </div>
            <div className="h-2 bg-zinc-100 rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-green-500 rounded-full" 
                initial={{ width: 0 }}
                animate={{ width: "89%" }}
                transition={{ duration: 1, delay: 0.7 }}
              />
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-zinc-600">Avg. Time</span>
              <span className="font-semibold text-zinc-900">2.3 days</span>
            </div>
            <div className="h-2 bg-zinc-100 rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-purple-500 rounded-full" 
                initial={{ width: 0 }}
                animate={{ width: "45%" }}
                transition={{ duration: 1, delay: 0.9 }}
              />
            </div>
          </div>
        </div>
      </div>
    ),
  },
];

export function PlatformOverview() {
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
          <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-wider text-zinc-500 uppercase bg-zinc-100 rounded-full mb-6">
            Features
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-zinc-900 mb-4">
            One platform. Complete privacy operations.
          </h2>
          <p className="text-lg md:text-xl text-zinc-600 max-w-3xl mx-auto">
            Import your templates, assign to stakeholders, and export audit-ready reports — all in one unified system.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <BentoGrid>
            {features.map((feature) => (
              <BentoCard key={feature.name} {...feature} />
            ))}
          </BentoGrid>
        </motion.div>

      </div>
    </section>
  );
}
