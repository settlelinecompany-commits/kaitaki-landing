import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sparkles, ExternalLink } from 'lucide-react';
import WaitlistPage from '@/components/WaitlistPage';
import { BlogListing } from '@/components/blocks/blog-listing';
import { getFeaturedBlogPosts } from '@/lib/content';
import { WhyItWorks } from '@/components/blocks/why-it-works';
import { ChallengesSection } from '@/components/blocks/challenges-section';
import { ResultsSection } from '@/components/blocks/results-section';
import { PlatformOverview } from '@/components/blocks/platform-overview';
import { Features2 } from '@/components/blocks/features-2';
import { Footer } from '@/components/blocks/footer';
import { InteractiveGridPattern } from '@/components/ui/interactive-grid-pattern';
import { HeroVideoDialog } from '@/components/ui/hero-video-dialog';
import { Hero } from '@/components/blocks/hero';
import { HoverLift, FadeIn } from '@/components/animations';
import { cn } from '@/lib/utils';
import kaitakiLogo from '../../kaitaki.png';

export default function Home() {
  const [showWaitlist, setShowWaitlist] = useState(false);
  const [searchParams] = useSearchParams();

  // Check for waitlist parameter on mount and when it changes
  useEffect(() => {
    if (searchParams.get('waitlist') === 'true') {
      setShowWaitlist(true);
      window.history.replaceState({}, '', '/');
    }
  }, [searchParams]);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <motion.div 
            className="flex items-center gap-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <img src={kaitakiLogo} alt="Kaitaki" className="w-6 h-6" />
            <span className="text-xl font-semibold text-zinc-900">Kaitaki</span>
          </motion.div>
          <motion.div 
            className="hidden md:flex items-center gap-8"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <a href="#features" className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors">
              Features
            </a>
            <a href="#capabilities" className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors">
              Capabilities
            </a>
            <a href="#results" className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors">
              Results
            </a>
            <a href="#blog" className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors">
              Blog
            </a>
          </motion.div>
          <motion.div 
            className="flex items-center gap-3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <a
              href="https://global.kaitaki.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors hidden sm:block"
            >
              Login
            </a>
            <HoverLift liftAmount={2} scaleAmount={1.03}>
            <button
              onClick={() => setShowWaitlist(true)}
              className="px-4 py-2 bg-zinc-900 hover:bg-zinc-800 text-white rounded-lg text-sm font-semibold transition-colors"
            >
              Book a Demo
            </button>
            </HoverLift>
          </motion.div>
        </div>
      </nav>

      <main className="relative">
        {/* Hero Section */}
        <section id="home" className="relative pt-20 bg-white">
          {/* Interactive Grid Pattern Background - Only in Hero */}
          <div className="absolute inset-0 -z-10 h-full w-full overflow-hidden pointer-events-auto">
            <InteractiveGridPattern
              width={60}
              height={60}
              squares={[40, 30]}
              className="[mask-image:radial-gradient(600px_circle_at_center,white,transparent)] opacity-50"
              squaresClassName="fill-blue-500/10 stroke-zinc-200/50 hover:fill-blue-500/20 hover:stroke-blue-400/50"
            />
          </div>
          <Hero
            pill={{
              text: "Your complete Privacy Assurance Operating System",
              href: "#capabilities",
              icon: <Sparkles className="h-4 w-4" />,
              variant: "default",
              size: "md",
            }}
            content={{
              title: "Run privacy assessments",
              titleHighlight: "in hours, not weeks",
              subtitle: "Every new product launch triggers privacy review obligations. Every vendor needs vetting. Your Privacy Team can't keep up — until now.",
              primaryAction: {
                text: "Book a Demo",
                onClick: () => setShowWaitlist(true),
              },
              secondaryAction: {
                href: "https://global.kaitaki.app",
                text: "Try Platform",
                icon: <ExternalLink className="h-4 w-4" />,
              },
              trustText: 'Trusted by enterprise privacy teams managing <strong class="text-zinc-700">50–500+ assessments</strong> per year',
            }}
            preview={
              <div className="space-y-4">
                <HeroVideoDialog
                  animationStyle="from-center"
                  videoSrc="https://www.youtube.com/embed/KbSe5gBGAfE"
                  thumbnailSrc="/images/hero/kaitaki-hero.jpg"
                  thumbnailAlt="Watch Kaitaki Demo"
                />
                <p className="text-center text-sm text-zinc-500">
                  Watch a 2-minute overview of the platform
                </p>
              </div>
            }
          />
        </section>

        {/* Challenges & Solutions */}
        <ChallengesSection />

        {/* Capabilities */}
        <section id="capabilities">
          <Features2 />
        </section>

        {/* Results */}
        <section id="results">
          <ResultsSection />
        </section>

        {/* Why It Works */}
        <WhyItWorks />

        {/* Features (Platform Overview) */}
        <section id="features" className="scroll-mt-20">
          <PlatformOverview />
        </section>

        {/* Blog Section */}
        <section id="blog" className="py-20 md:py-28 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <FadeIn direction="up">
            <BlogListing posts={featuredPosts} />
            </FadeIn>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

