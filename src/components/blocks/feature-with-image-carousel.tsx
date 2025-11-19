import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface FeatureWithImageCarouselProps {
  badge?: string;
  heading?: string;
  description?: string;
  items?: Array<{
    title: string;
    description: string;
    imageSrc: string;
    imageAlt: string;
  }>;
}

function FeatureWithImageCarousel({
  badge = "Our Process",
  heading = "Our Simple & Smart Process",
  description = "Understanding the challenge and our solution",
  items = [
    {
      title: "The Problem",
      description:
        "Privacy teams still run DPIAs over email and Excel. Each one takes 1–2 weeks for what's really 2–3 hours of work, most of it wasted chasing answers and approvals.",
      imageSrc: "/images/hero/kaitaki-hero.png",
      imageAlt: "Privacy assessment problem",
    },
    {
      title: "The Solution",
      description:
        "Kaitaki automates that first mile — intake, risk scoring, and report generation — turning a week-long workflow into minutes",
      imageSrc: "/images/hero/kaitaki-hero.png",
      imageAlt: "Kaitaki solution",
    },
  ],
}: FeatureWithImageCarouselProps) {
  return (
    <div className="w-full py-20 lg:py-40">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 justify-end items-end gap-10">
          <div className="flex gap-4 flex-col items-start">
            <div>
              <Badge variant="outline" className="bg-white border-gray-200 text-zinc-600">
                {badge}
              </Badge>
            </div>
            <div className="flex gap-2 flex-col">
              <h2 className="text-xl md:text-3xl lg:text-5xl tracking-tighter lg:max-w-xl font-semibold text-left text-zinc-900">
                {heading}
              </h2>
              <p className="text-lg max-w-xl lg:max-w-sm leading-relaxed tracking-tight text-zinc-600 text-left">
                {description}
              </p>
            </div>
          </div>
          <div className="w-full max-w-full px-6 relative">
            <Carousel className="w-full">
              <CarouselContent>
                {items.map((item, index) => (
                  <CarouselItem key={index}>
                    <div className="flex flex-col rounded-md aspect-video bg-gray-50 border border-gray-200 items-center justify-center p-6 lg:p-10">
                      <div className="w-full h-full flex flex-col justify-center items-center gap-4">
                        <h3 className="text-2xl lg:text-3xl font-semibold text-zinc-900 text-center mb-2">
                          {item.title}
                        </h3>
                        <p className="text-base lg:text-lg text-zinc-600 text-center max-w-md leading-relaxed">
                          {item.description}
                        </p>
                        <img
                          src={item.imageSrc}
                          alt={item.imageAlt}
                          className="mt-4 rounded-lg w-full h-auto object-cover max-h-64"
                        />
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2 lg:-left-12 bg-white border-gray-200 hover:bg-gray-50" />
              <CarouselNext className="right-2 lg:-right-12 bg-white border-gray-200 hover:bg-gray-50" />
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}

export { FeatureWithImageCarousel };

