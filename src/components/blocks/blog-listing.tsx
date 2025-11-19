import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { BlogPost } from '@/lib/content';

interface BlogListingProps {
  posts: BlogPost[];
  className?: string;
}

export function BlogListing({ posts, className = '' }: BlogListingProps) {
  if (posts.length === 0) {
    return null;
  }

  return (
    <section className={`py-16 ${className}`}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-50 border border-gray-200 rounded-full mb-6">
            <span className="text-sm text-zinc-600">YOUR GO-TO KNOWLEDGE HUB</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-zinc-900">
            Insights, Resources, & Success Stories
          </h2>
          <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
            Discover expert insights, stay up to date on industry trends, and explore real-world success stories in Kaitaki's library.
          </p>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="group flex flex-col h-full bg-gray-50 border border-gray-200 rounded-xl overflow-hidden hover:border-gray-300 transition-colors"
            >
              {/* Image/Visual */}
              <div className="relative h-48 bg-gradient-to-br from-blue-500/20 to-blue-400/10 flex items-center justify-center">
                {post.cover ? (
                  <img
                    src={post.cover}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className="w-16 h-16 bg-blue-500/20 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-blue-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  </div>
                )}
              </div>

              {/* Content - flex column with flex-grow to push CTA to bottom */}
              <div className="flex flex-col flex-grow p-6">
                {/* Category */}
                <div className="mb-3">
                  <span className="text-xs font-semibold text-zinc-600 uppercase tracking-wider">
                    {post.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-zinc-900 mb-3 group-hover:text-blue-500 transition-colors">
                  {post.title}
                </h3>

                {/* Description - flex-grow to push CTA down */}
                <p className="text-sm text-zinc-600 mb-4 line-clamp-3 flex-grow">
                  {post.description}
                </p>

                {/* CTA - now at bottom due to flex-grow above */}
                <div className="flex items-center gap-2 text-blue-500 group-hover:text-blue-600 transition-colors mt-auto">
                  <span className="text-sm font-medium">Read More</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

