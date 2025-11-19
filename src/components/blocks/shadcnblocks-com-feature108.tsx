import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AlertCircle, CheckCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface TabContent {
  badge: string;
  title: string;
  description: string;
  buttonText: string;
  imageSrc: string;
  imageAlt: string;
}

interface Tab {
  value: string;
  icon: React.ReactNode;
  label: string;
  content: TabContent;
}

interface Feature108Props {
  badge?: string;
  heading?: string;
  description?: string;
  tabs?: Tab[];
  onButtonClick?: () => void;
}

const Feature108 = ({
  badge = "Our Process",
  heading = "Our Simple & Smart Process",
  description = "Understanding the challenge and our solution",
  onButtonClick,
  tabs = [
    {
      value: "tab-1",
      icon: <AlertCircle className="h-auto w-4 shrink-0" />,
      label: "The Problem",
      content: {
        badge: "Current State",
        title: "The Problem",
        description:
          "Privacy teams still run DPIAs over email and Excel. Each one takes 1–2 weeks for what's really 2–3 hours of work, most of it wasted chasing answers and approvals.",
        buttonText: "Learn More",
        imageSrc: "/images/hero/kaitaki-hero.png",
        imageAlt: "Privacy assessment problem",
      },
    },
    {
      value: "tab-2",
      icon: <CheckCircle className="h-auto w-4 shrink-0" />,
      label: "The Solution",
      content: {
        badge: "Kaitaki Solution",
        title: "The Solution",
        description:
          "Kaitaki automates that first mile — intake, risk scoring, and report generation — turning a week-long workflow into minutes",
        buttonText: "Get Started",
        imageSrc: "/images/hero/kaitaki-hero.png",
        imageAlt: "Kaitaki solution",
      },
    },
  ],
}: Feature108Props) => {
  return (
    <section className="py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col items-center gap-4 text-center mb-12">
          <Badge variant="outline" className="bg-white border-gray-200 text-zinc-600">
            {badge}
          </Badge>
          <h2 className="max-w-2xl text-3xl font-bold md:text-4xl text-zinc-900">
            {heading}
          </h2>
          <p className="text-zinc-600">{description}</p>
        </div>
        <Tabs defaultValue={tabs[0].value} className="mt-8">
          <TabsList className="flex flex-col items-center justify-center gap-4 sm:flex-row md:gap-10 bg-transparent">
            {tabs.map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className="flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold text-zinc-600 data-[state=active]:bg-gray-50 data-[state=active]:text-blue-500 border border-gray-200 data-[state=active]:border-blue-500"
              >
                {tab.icon} {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>
          <div className="mx-auto mt-8 max-w-screen-xl rounded-2xl bg-gray-50 p-6 lg:p-16 border border-gray-200">
            {tabs.map((tab) => (
              <TabsContent
                key={tab.value}
                value={tab.value}
                className="grid place-items-center gap-20 lg:grid-cols-2 lg:gap-10 mt-0"
              >
                <div className="flex flex-col gap-5">
                  <Badge variant="outline" className="w-fit bg-white border-gray-200 text-zinc-600">
                    {tab.content.badge}
                  </Badge>
                  <h3 className="text-3xl font-semibold lg:text-5xl text-zinc-900">
                    {tab.content.title}
                  </h3>
                  <p className="text-zinc-600 lg:text-lg leading-relaxed">
                    {tab.content.description}
                  </p>
                  <Button 
                    className="mt-2.5 w-fit gap-2 bg-blue-500 hover:bg-blue-600 text-white" 
                    size="lg"
                    onClick={onButtonClick}
                  >
                    {tab.content.buttonText}
                  </Button>
                </div>
                <img
                  src={tab.content.imageSrc}
                  alt={tab.content.imageAlt}
                  className="rounded-xl w-full h-auto object-cover"
                />
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export { Feature108 };

