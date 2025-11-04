import { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { getBlogPost, getBlogPosts } from '@/lib/content';
import { extractKeyTakeaways } from '@/lib/markdown';
import { ReadingProgress } from '@/components/blocks/reading-progress';
import { TableOfContents } from '@/components/blocks/table-of-contents';
import { KeyTakeaways } from '@/components/blocks/key-takeaways';
import { MarkdownRenderer } from '@/components/blocks/markdown-renderer';
import { FAQAccordion } from '@/components/blocks/faq-accordion';
import { RelatedPosts } from '@/components/blocks/related-posts';
import kaitakiLogo from '../../kaitaki.png';

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);
  
  if (!slug) {
    return <Navigate to="/" replace />;
  }

  const post = getBlogPost(slug);
  
  if (!post) {
    return <Navigate to="/" replace />;
  }

  const keyTakeaways = extractKeyTakeaways(post.content);
  const allPosts = getBlogPosts();

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: post.title, url: `/blog/${post.slug}` },
  ];

  return (
    <>
      <ReadingProgress />
      
      <div className="min-h-screen bg-zinc-950 text-zinc-100 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
          <div className="absolute bottom-1/3 right-1/4 w-[32rem] h-[32rem] bg-blue-400/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '1s' }} />
        </div>

        <nav className="border-b border-zinc-800 bg-zinc-950/50 backdrop-blur-sm fixed w-full z-10">
          <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
            <Link
              to="/"
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <img src={kaitakiLogo} alt="Kaitaki" className="w-6 h-6" />
              <span className="text-xl font-semibold">Kaitaki</span>
            </Link>
          </div>
        </nav>

        <main className="pt-32 pb-20 relative z-0">
          <div className="max-w-6xl mx-auto px-6">
            {/* Breadcrumbs */}
            <nav className="mb-8">
              <ol className="flex items-center space-x-2 text-sm text-zinc-400">
                {breadcrumbs.map((crumb, index) => (
                  <li key={crumb.name} className="flex items-center">
                    {index > 0 && <span className="mx-2">/</span>}
                    {index === breadcrumbs.length - 1 ? (
                      <span className="text-zinc-100">{crumb.name}</span>
                    ) : (
                      <Link to={crumb.url} className="hover:text-zinc-100 transition-colors">
                        {crumb.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ol>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-3">
                {/* Article Header */}
                <header className="mb-12">
                  <div className="flex items-center space-x-2 mb-4">
                    <span className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                    {Array.isArray(post.tags) && post.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-zinc-800 text-zinc-300 rounded-full text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <h1 className="text-4xl lg:text-5xl font-bold text-zinc-100 mb-4 leading-tight">
                    {post.title}
                  </h1>
                  
                  {/* Author Info */}
                  <div className="text-left mb-6">
                    <p className="text-sm text-zinc-400">
                      Written by <span className="text-blue-400 font-medium">{post.author}</span>
                      {post.reviewedBy && (
                        <span> • Reviewed by <span className="text-blue-400 font-medium">{post.reviewedBy}</span></span>
                      )}
                    </p>
                    <p className="text-sm text-zinc-400 mt-1">
                      {formatDate(post.date)} • {post.readTime}
                    </p>
                  </div>
                  
                  <p className="mb-4 leading-relaxed text-zinc-300 text-lg">
                    {post.description}
                  </p>

                  {/* Key Takeaways */}
                  {keyTakeaways.length > 0 && (
                    <div className="mb-8">
                      <KeyTakeaways takeaways={keyTakeaways} />
                    </div>
                  )}
                  
                  {/* Hero Image */}
                  <div className="relative w-full h-64 lg:h-80 rounded-2xl overflow-hidden mb-8 bg-zinc-900/50">
                    {post.cover ? (
                      <img
                        src={post.cover}
                        alt={post.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="flex items-center justify-center h-full">
                        <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center">
                          <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                        </div>
                      </div>
                    )}
                  </div>
                </header>

                {/* Table of Contents */}
                <div className="mb-8">
                  <TableOfContents containerId="article-content" />
                </div>

                {/* Article Content */}
                <article className="mb-16">
                  <div id="article-content">
                    <MarkdownRenderer content={post.content} />
                  </div>
                </article>

                {/* FAQ Section */}
                {post.faq && post.faq.length > 0 && (
                  <section className="mb-16">
                    <FAQAccordion faqs={post.faq} />
                  </section>
                )}
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-8 space-y-8">
                  {/* CTA Section - Desktop */}
                  <div className="hidden lg:block bg-blue-500/10 border border-blue-500/20 rounded-2xl p-6">
                    <h3 className="text-lg font-bold text-zinc-100 mb-3">
                      Ready to Transform Your Privacy Operations?
                    </h3>
                    <p className="text-sm text-zinc-400 mb-4">
                      Get personalized guidance from our expert team to maximize your privacy compliance and ensure governance.
                    </p>
                    <div className="flex flex-col gap-3">
                      <Link
                        to="/?waitlist=true"
                        className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition-colors text-center"
                      >
                        Request Early Access
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Related Posts */}
        <RelatedPosts posts={allPosts} currentSlug={post.slug} />

        {/* Mobile Sticky CTA */}
        <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-zinc-900 border-t border-zinc-800 p-4 shadow-lg z-50">
          <Link
            to="/?waitlist=true"
            className="w-full px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold transition-colors text-center block"
          >
            Request Early Access
          </Link>
        </div>
      </div>
    </>
  );
}

