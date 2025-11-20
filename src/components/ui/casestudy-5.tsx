import { MoveRight } from "lucide-react";
import React from "react";

interface CasestudyItem {
  logo?: string;
  company?: string;
  tags: string;
  title: string;
  subtitle: string;
  image: string;
  link?: string;
}

interface Casestudy5Props {
  featuredCasestudy: CasestudyItem;
  casestudies: CasestudyItem[];
  title?: string;
  subtitle?: string;
}

export const Casestudy5 = ({
  featuredCasestudy,
  casestudies,
  title = "How It Works",
  subtitle = "See how Kaitaki transforms intake into audit-ready privacy reports in three steps",
}: Casestudy5Props) => {
  return (
    <section className="py-16">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full mb-6">
            <span className="text-sm font-medium text-zinc-600">Workflow</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-zinc-900">
          {title}
        </h2>
          <p className="mt-4 text-lg text-zinc-600 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>
        <div className="border border-gray-200">
          <div
            className={`group grid gap-4 overflow-hidden px-6 transition-colors duration-500 ease-out ${featuredCasestudy.link ? 'hover:bg-gray-50' : ''} lg:grid-cols-2 xl:px-28`}
          >
            <div className="flex flex-col justify-between gap-12 py-8 md:py-16 lg:pb-16 xl:gap-16">
              {featuredCasestudy.logo && featuredCasestudy.company && (
                <div className="flex items-center gap-2 text-2xl font-medium text-zinc-900">
                  <img src={featuredCasestudy.logo} alt="logo" className="h-9" />
                  {featuredCasestudy.company}
                </div>
              )}
              <div>
                <h3 className="font-semibold text-zinc-900">
                  {featuredCasestudy.tags}
                </h3>
                <h3 className="mt-4 mb-5 font-semibold text-balance text-zinc-900">
                  {featuredCasestudy.title}
                </h3>
                <p className="text-sm text-zinc-600">
                  {featuredCasestudy.subtitle}
                </p>
                {featuredCasestudy.link && (
                  <div className="flex items-center gap-2 font-medium text-zinc-900">
                    Read case study
                    <MoveRight className="h-4 w-4 transition-transform duration-500 ease-out group-hover:translate-x-1" />
                  </div>
                )}
              </div>
            </div>
            <div className="relative isolate flex items-center py-2 md:py-4 self-stretch">
              <div className="w-full flex items-center justify-center">
                  <img
                    src={featuredCasestudy.image}
                    alt="placeholder"
                  className="max-w-full w-auto max-h-[250px] md:max-h-[320px] h-auto object-contain transition-transform duration-500 ease-out group-hover:scale-105"
                  />
              </div>
            </div>
          </div>
          <div className="flex border-t border-gray-200">
            <div className="hidden w-28 shrink-0 bg-[radial-gradient(rgb(113,113,122)_1px,transparent_1px)] [background-size:10px_10px] opacity-15 xl:block"></div>
            <div className="grid lg:grid-cols-2">
              {casestudies.map((item, idx) => (
                <div
                  key={idx}
                  className={`group flex flex-col justify-between gap-12 border-gray-200 bg-white px-6 py-8 transition-colors duration-500 ease-out ${item.link ? 'hover:bg-gray-50' : ''} md:py-16 lg:pb-16 xl:gap-16 ${
                    idx === 0
                      ? "xl:border-l xl:pl-8"
                      : "border-t lg:border-t-0 lg:border-l xl:border-r xl:pl-8"
                  }`}
                >
                  {item.logo && item.company && (
                    <div className="flex items-center gap-2 text-2xl font-medium text-zinc-900">
                      <img src={item.logo} alt="logo" className="h-9" />
                      {item.company}
                    </div>
                  )}
                  <div>
                    <h3 className="font-semibold text-zinc-900">
                      {item.tags}
                    </h3>
                    <h3 className="mt-4 mb-5 font-semibold text-balance text-zinc-900">
                      {item.title}
                    </h3>
                    <p className="text-sm text-zinc-600">
                      {item.subtitle}
                    </p>
                    {item.link && (
                      <div className="flex items-center gap-2 font-medium text-zinc-900">
                        Read case study
                        <MoveRight className="h-4 w-4 transition-transform duration-500 ease-out group-hover:translate-x-1" />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="hidden w-28 shrink-0 bg-[radial-gradient(rgb(113,113,122)_1px,transparent_1px)] [background-size:10px_10px] opacity-15 xl:block"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

