'use client';

import { useRef } from 'react';
import {
  Clock,
  Mail,
  AlertTriangle,
  UserCircle,
  Users,
  Scale,
} from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { cn } from '@/lib/utils';
import { AnimatedList } from '@/components/ui/animated-list';

interface NotificationItem {
  name: string;
  description: string;
  icon: string;
  color: string;
  time: string;
}

const privacyNotifications: NotificationItem[] = [
  {
    name: "Assessment completed",
    description: "CRM Integration DPIA",
    time: "2m ago",
    icon: "✅",
    color: "#00C9A7",
  },
  {
    name: "High risk identified",
    description: "Data retention policy",
    time: "5m ago",
    icon: "⚠️",
    color: "#FF3D71",
  },
  {
    name: "Interview scheduled",
    description: "Product team - 3pm",
    time: "8m ago",
    icon: "🎤",
    color: "#1E86FF",
  },
  {
    name: "Approval received",
    description: "Legal sign-off complete",
    time: "12m ago",
    icon: "✍️",
    color: "#00C9A7",
  },
  {
    name: "New assessment",
    description: "Vendor: Salesforce",
    time: "15m ago",
    icon: "📋",
    color: "#FFB800",
  },
  {
    name: "Mitigation assigned",
    description: "Engineering team",
    time: "20m ago",
    icon: "🔧",
    color: "#9333EA",
  },
];

const notifications = Array.from({ length: 3 }, () => privacyNotifications).flat();

const Notification = ({ name, description, icon, color, time }: NotificationItem) => {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-[320px] cursor-pointer overflow-hidden rounded-2xl p-3",
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]"
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <div
          className="flex size-9 items-center justify-center rounded-xl"
          style={{ backgroundColor: color }}
        >
          <span className="text-base">{icon}</span>
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center text-sm font-medium whitespace-pre text-zinc-900">
            <span className="truncate">{name}</span>
            <span className="mx-1 text-zinc-400">·</span>
            <span className="text-xs text-zinc-500">{time}</span>
          </figcaption>
          <p className="text-xs font-normal text-zinc-500 truncate">
            {description}
          </p>
        </div>
      </div>
    </figure>
  );
};

export function ChallengesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  const challenges = [
    {
      icon: <Clock className="w-5 h-5" />,
      title: 'Assessment Backlog',
      description: 'Every new feature, vendor, or data use requires a formal privacy review. Product launches delayed 2–4 weeks.',
      position: 'left',
    },
    {
      icon: <Mail className="w-5 h-5" />,
      title: 'Stakeholder Chasing',
      description: 'Privacy sends questionnaires; business units ignore them. 10+ email reminders per assessment.',
      position: 'left',
    },
    {
      icon: <AlertTriangle className="w-5 h-5" />,
      title: 'Audit Anxiety',
      description: 'Regulators can request proof of your privacy reviews at any time. PDPL fines up to 5M SAR.',
      position: 'left',
    },
  ];

  const solutions = [
    {
      icon: <UserCircle className="w-5 h-5" />,
      title: 'For DPOs',
      description: 'Portfolio visibility across all assessments and audit-ready documentation that regulators expect.',
      position: 'right',
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: 'For Privacy Analysts',
      description: 'Stop spending 60% of your time chasing stakeholders. Get complete responses in one session.',
      position: 'right',
    },
    {
      icon: <Scale className="w-5 h-5" />,
      title: 'For Legal & Compliance',
      description: 'Prove systematic compliance to regulators with full audit trails and sign-off workflows.',
      position: 'right',
    },
  ];


  return (
    <section
      ref={sectionRef}
      className="w-full py-20 md:py-28 px-6 bg-gradient-to-b from-zinc-50 to-white text-zinc-900 overflow-hidden relative"
    >
      {/* Decorative background elements */}
      <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-blue-500/5 blur-3xl" />
      <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-zinc-300/10 blur-3xl" />

      <motion.div
        className="max-w-6xl mx-auto relative z-10"
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={containerVariants}
      >
        {/* Header */}
        <motion.div className="flex flex-col items-center mb-16" variants={itemVariants}>
          <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-wider text-zinc-500 uppercase bg-zinc-100 rounded-full mb-6">
            Challenges & Solutions
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-zinc-900 mb-4 text-center">
            Privacy teams are overwhelmed
          </h2>
          <p className="text-lg md:text-xl text-zinc-600 max-w-2xl mx-auto text-center">
            Manual processes break at scale. Here's why privacy teams struggle — and how Kaitaki solves each challenge.
          </p>
        </motion.div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 relative">
          {/* Left Column - Challenges */}
          <div className="space-y-10">
            <motion.div
              className="flex items-center gap-2 mb-6"
              variants={itemVariants}
            >
              <div className="w-3 h-3 rounded-full bg-red-100 border-2 border-red-400" />
              <span className="text-sm font-semibold text-zinc-500 uppercase tracking-wider">The Problems</span>
            </motion.div>
            {challenges.map((item, index) => (
              <ServiceItem
                key={`challenge-${index}`}
                icon={item.icon}
                title={item.title}
                description={item.description}
                variants={itemVariants}
                delay={index * 0.1}
                accentColor="red"
              />
            ))}
          </div>

          {/* Center - Animated List */}
          <div className="flex justify-center items-center order-first md:order-none mb-8 md:mb-0">
            <motion.div 
              className="relative w-full"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="relative flex h-[420px] w-full flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50/50 p-2">
                <AnimatedList delay={2000}>
                  {notifications.map((item, idx) => (
                    <Notification {...item} key={idx} />
                  ))}
                </AnimatedList>
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-zinc-50 to-transparent"></div>
              </div>
              
              {/* Decorative elements */}
              <motion.div
                className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-blue-100"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              />
              <motion.div
                className="absolute -bottom-3 -left-3 w-12 h-12 rounded-full bg-green-100"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
              />
            </motion.div>
          </div>

          {/* Right Column - Solutions */}
          <div className="space-y-10">
            <motion.div
              className="flex items-center gap-2 mb-6"
              variants={itemVariants}
            >
              <div className="w-3 h-3 rounded-full bg-green-100 border-2 border-green-500" />
              <span className="text-sm font-semibold text-zinc-500 uppercase tracking-wider">The Solutions</span>
            </motion.div>
            {solutions.map((item, index) => (
              <ServiceItem
                key={`solution-${index}`}
                icon={item.icon}
                title={item.title}
                description={item.description}
                variants={itemVariants}
                delay={index * 0.1}
                accentColor="green"
              />
            ))}
          </div>
        </div>

      </motion.div>
    </section>
  );
}

interface ServiceItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  variants: {
    hidden: { opacity: number; y?: number };
    visible: { opacity: number; y?: number; transition: { duration: number; ease: string } };
  };
  delay: number;
  accentColor: 'red' | 'green' | 'blue';
}

function ServiceItem({ icon, title, description, variants, delay, accentColor }: ServiceItemProps) {
  const colors = {
    red: {
      bg: 'bg-red-50',
      hover: 'group-hover:bg-red-100',
      text: 'text-red-600',
      titleHover: 'group-hover:text-red-600',
    },
    green: {
      bg: 'bg-green-50',
      hover: 'group-hover:bg-green-100',
      text: 'text-green-600',
      titleHover: 'group-hover:text-green-600',
    },
    blue: {
      bg: 'bg-blue-50',
      hover: 'group-hover:bg-blue-100',
      text: 'text-blue-600',
      titleHover: 'group-hover:text-blue-600',
    },
  };

  const colorClasses = colors[accentColor];

  return (
    <motion.div
      className="flex flex-col group cursor-default"
      variants={variants}
      transition={{ delay }}
    >
      <div className="flex items-center gap-3 mb-2">
        <div
          className={`${colorClasses.text} ${colorClasses.bg} ${colorClasses.hover} p-2.5 rounded-lg transition-colors duration-200`}
        >
          {icon}
        </div>
        <h3 className={`text-lg font-semibold text-zinc-900 ${colorClasses.titleHover} transition-colors duration-200`}>
          {title}
        </h3>
      </div>
      <p className="text-sm text-zinc-600 leading-relaxed pl-12">
        {description}
      </p>
    </motion.div>
  );
}

