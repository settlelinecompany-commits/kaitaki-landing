import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface FeatureProps {
  badge?: string;
  heading?: string;
  description?: string;
  features?: Array<{
    title: string;
    description: string;
  }>;
  imageSrc?: string;
  imageAlt?: string;
}

function Feature({
  badge = "Our Process",
  heading = "Our Simple & Smart Process",
  description = "Understanding the challenge and our solution",
  features = [
    {
      title: "The Problem",
      description:
        "Privacy teams still run DPIAs over email and Excel. Each one takes 1–2 weeks for what's really 2–3 hours of work, most of it wasted chasing answers and approvals.",
    },
    {
      title: "The Solution",
      description:
        "Kaitaki automates that first mile — intake, risk scoring, and report generation — turning a week-long workflow into minutes",
    },
  ],
  imageSrc = "/images/blog/process-solution.png",
  imageAlt = "Process and Solution",
}: FeatureProps) {
  return (
    <div className="w-full py-16">
      <div className="container mx-auto max-w-6xl">
        <div className="grid border border-gray-200 rounded-lg p-8 grid-cols-1 gap-8 items-center lg:grid-cols-2 bg-white">
          <div className="flex gap-10 flex-col">
            <div className="flex gap-4 flex-col">
              <div>
                <Badge variant="outline" className="bg-white border-gray-200 text-zinc-600">
                  {badge}
                </Badge>
              </div>
              <div className="flex gap-2 flex-col">
                <h2 className="text-3xl lg:text-5xl tracking-tighter max-w-xl text-left font-semibold text-zinc-900">
                  {heading}
                </h2>
                <p className="text-lg leading-relaxed tracking-tight text-zinc-600 max-w-xl text-left">
                  {description}
                </p>
              </div>
            </div>
            <div className="grid lg:pl-6 grid-cols-1 sm:grid-cols-2 items-start lg:grid-cols-1 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex flex-row gap-6 items-start">
                  <Check className="w-4 h-4 mt-2 text-blue-500 flex-shrink-0" />
                  <div className="flex flex-col gap-1">
                    <p className="font-semibold text-zinc-900">{feature.title}</p>
                    <p className="text-zinc-600 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-gray-50 rounded-md aspect-square border border-gray-200 max-w-md mx-auto lg:max-w-full flex items-center justify-center p-4">
            <img
              src={imageSrc}
              alt={imageAlt}
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export { Feature };

