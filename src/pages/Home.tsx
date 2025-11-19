import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import WaitlistPage from '@/components/WaitlistPage';
import { BlogListing } from '@/components/blocks/blog-listing';
import { getFeaturedBlogPosts } from '@/lib/content';
import { ContainerScroll } from '@/components/ui/container-scroll-animation';
import { GridFeatureSection } from '@/components/blocks/grid-feature-section';
import { Feature } from '@/components/blocks/feature';
import { Features2 } from '@/components/blocks/features-2';
import { FeatureSteps } from '@/components/blocks/feature-section';
import { Footer } from '@/components/blocks/footer';
import kaitakiLogo from '../../kaitaki.png';

export default function Home() {
  const [showWaitlist, setShowWaitlist] = useState(false);
  const [searchParams] = useSearchParams();

  // Check for waitlist parameter on mount and when it changes
  useEffect(() => {
    if (searchParams.get('waitlist') === 'true') {
      setShowWaitlist(true);
      // Clean up URL parameter for cleaner navigation
      window.history.replaceState({}, '', '/');
    }
  }, [searchParams]);
  
  // Safely get featured posts with error handling
  let featuredPosts: ReturnType<typeof getFeaturedBlogPosts> = [];
  try {
    featuredPosts = getFeaturedBlogPosts(3);
  } catch (error) {
    console.error('Error loading featured blog posts:', error);
  }

  if (showWaitlist) {
    return <WaitlistPage onBack={() => setShowWaitlist(false)} />;
  }

  return (
    <div className="min-h-screen bg-white text-zinc-900 relative overflow-hidden">
      <nav className="border-b border-gray-200 bg-white/95 backdrop-blur-sm fixed w-full z-10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src={kaitakiLogo} alt="Kaitaki" className="w-6 h-6" />
            <span className="text-xl font-semibold">Kaitaki</span>
          </div>
          <a
            href="https://global.kaitaki.app"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition-colors inline-block"
          >
            Login
          </a>
        </div>
      </nav>

      <main className="relative z-0">
        {/* Hero Section with Scroll Animation */}
        <div className="pt-24">
          <ContainerScroll
            titleComponent={
              <>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-zinc-900 mb-6 leading-tight">
                  Run privacy assessments through AI agents in hours, not weeks
                </h1>
                <p className="text-xl md:text-2xl text-zinc-600 mb-10 leading-relaxed max-w-3xl mx-auto">
                  Kaitaki automates Data Privacy Assessments end-to-end, from interviews to audit-ready risk reports
                </p>
                <div className="flex gap-4 justify-center">
                  <a
                    href="https://global.kaitaki.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold transition-colors inline-block"
                  >
                    Try the Demo
                  </a>
                </div>
              </>
            }
          >
            <img
              src="/images/hero/kaitaki-hero.jpg"
              alt="Kaitaki Platform"
              className="mx-auto rounded-2xl object-contain h-full w-full scale-110"
              draggable={false}
            />
          </ContainerScroll>
        </div>

        <div className="max-w-6xl mx-auto px-6">
          {/* Process Section */}
          <Feature />

          {/* 3 AI Agents Section */}
          <section id="ai-agents">
            <Features2 />
          </section>

          {/* How It Works Section */}
          <section id="how-it-works" className="py-8">
            <FeatureSteps
              features={[
                {
                  step: 'Step 1',
                  title: 'Voice agent interviews stakeholders',
                  content: 'Detect when a new DPIA is needed and collect structured answers via voice or form',
                  image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop'
                },
                {
                  step: 'Step 2',
                  title: 'Risk agent scores, drafts mitigations',
                  content: 'Score impact × likelihood, draft mitigations, and approve findings with a full audit trail',
                  image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop'
                },
                {
                  step: 'Step 3',
                  title: 'Export instant, audit-ready report',
                  content: 'Generate a signed report, push final records to RoPA or Jira in one click, instantly pivot to implementation',
                  image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop'
                }
              ]}
              title="How It Works"
              autoPlayInterval={4000}
              imageHeight="h-[400px]"
            />
          </section>

          {/* Compliance Benefits Section */}
          <section id="features">
            <GridFeatureSection />
          </section>

          {/* Blog CMS Section */}
          <section id="blog">
            <BlogListing posts={featuredPosts} />
          </section>

          {/* Final CTA Section */}
          <section className="py-2">
            <div className="text-center max-w-3xl mx-auto p-12 bg-gray-50 border border-gray-200 rounded-2xl">
              <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-6">
                Every tool scans code - none automate stakeholder intake
              </h2>
              <p className="text-lg text-zinc-600 mb-8">
                Schedule a Call and Begin Automating Privacy
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => setShowWaitlist(true)}
                  className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold transition-colors"
                >
                  Schedule a Call
                </button>
                <a
                  href="https://global.kaitaki.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-white hover:bg-gray-50 text-zinc-900 border border-gray-300 rounded-lg font-semibold transition-colors inline-block"
                >
                  Try the Demo
                </a>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

