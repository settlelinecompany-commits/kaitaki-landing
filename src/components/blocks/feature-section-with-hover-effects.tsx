import { cn } from "@/lib/utils";
import {
  CheckCircle,
  Shield,
  Database,
  Download,
  TrendingUp,
  Link as LinkIcon,
} from "lucide-react";

export function FeaturesSectionWithHoverEffects() {
  const features = [
    {
      title: "Pass audits under PDPL + GDPR",
      description: "Ensure compliance with global privacy regulations and pass audits with confidence.",
      icon: <CheckCircle className="w-6 h-6" />,
    },
    {
      title: "Keep legal in control of final sign-off",
      description: "Maintain legal oversight and control over all privacy decisions and approvals.",
      icon: <Shield className="w-6 h-6" />,
    },
    {
      title: "Host data in-region or cloud",
      description: "Flexible hosting options to meet your data residency and compliance requirements.",
      icon: <Database className="w-6 h-6" />,
    },
    {
      title: "Track every change & export anytime",
      description: "Complete audit trail with full change tracking and on-demand export capabilities.",
      icon: <Download className="w-6 h-6" />,
    },
    {
      title: "See time saved per assessment",
      description: "Track efficiency gains and demonstrate ROI with detailed time savings metrics.",
      icon: <TrendingUp className="w-6 h-6" />,
    },
    {
      title: "Sync results to RoPA, Jira, and email",
      description: "Seamlessly integrate with your existing tools and workflows for maximum efficiency.",
      icon: <LinkIcon className="w-6 h-6" />,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative z-10 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/feature border-neutral-200",
        (index === 0 || index === 3) && "lg:border-l border-neutral-200",
        index < 3 && "lg:border-b border-neutral-200"
      )}
    >
      {index < 3 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 to-transparent pointer-events-none" />
      )}
      {index >= 3 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-blue-500">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};

