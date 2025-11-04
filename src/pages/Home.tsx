import { Bot, Shield, Zap, Mic } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import WaitlistPage from '@/components/WaitlistPage';
import { BlogListing } from '@/components/blocks/blog-listing';
import { getFeaturedBlogPosts } from '@/lib/content';
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
    <div className="min-h-screen bg-zinc-950 text-zinc-100 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute bottom-1/3 right-1/4 w-[32rem] h-[32rem] bg-blue-400/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '1s' }} />
      </div>
      <nav className="border-b border-zinc-800 bg-zinc-950/50 backdrop-blur-sm fixed w-full z-10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src={kaitakiLogo} alt="Kaitaki" className="w-6 h-6" />
            <span className="text-xl font-semibold">Kaitaki</span>
          </div>
          <button
            onClick={() => setShowWaitlist(true)}
            className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition-colors"
          >
            Join Waitlist
          </button>
        </div>
      </nav>

      <main className="pt-32 pb-20 relative z-0">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-full mb-6">
              <Zap className="w-4 h-4 text-blue-400" />
              <span className="text-sm text-zinc-400">Building the future of privacy automation</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Privacy Compliance,
              <span className="text-blue-400"> Reimagined</span>
            </h1>

            <p className="text-xl text-zinc-400 mb-10 leading-relaxed">
              Next-generation privacy & governance platform powered by intelligent AI agents to help organizations manage data privacy compliance and risks.
            </p>

            <div className="flex gap-4 justify-center">
              <button
                onClick={() => setShowWaitlist(true)}
                className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold transition-colors"
              >
                Request Early Access
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-20">
            <div className="p-6 bg-zinc-900 border border-zinc-800 rounded-xl hover:border-zinc-700 transition-colors">
              <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4">
                <Bot className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Multi-Agent Systems</h3>
              <p className="text-zinc-400">
                Coordinated AI agents working together to handle complex privacy workflows
              </p>
            </div>

            <div className="p-6 bg-zinc-900 border border-zinc-800 rounded-xl hover:border-zinc-700 transition-colors">
              <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4">
                <Mic className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Voice Assessments</h3>
              <p className="text-zinc-400">
                Conduct privacy risk assessments through natural voice conversations
              </p>
            </div>

            <div className="p-6 bg-zinc-900 border border-zinc-800 rounded-xl hover:border-zinc-700 transition-colors">
              <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Privacy Teams</h3>
              <p className="text-zinc-400">
                Purpose-built for privacy professionals to accelerate compliance processes
              </p>
            </div>
          </div>

          {/* Blog CMS Section - Right below the three feature cards */}
          <BlogListing posts={featuredPosts} className="mt-20" />

          <div className="mt-20 text-center">
            <p className="text-zinc-500 text-sm">Currently in development • Sign up to be notified</p>
          </div>
        </div>
      </main>
    </div>
  );
}

