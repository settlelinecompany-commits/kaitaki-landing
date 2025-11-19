import { useState, useEffect } from 'react';

interface TOCItem {
  id: string;
  title: string;
  level: number;
}

interface TableOfContentsProps {
  className?: string;
  containerId?: string;
}

export function TableOfContents({ className = '', containerId = 'article-content' }: TableOfContentsProps) {
  const [toc, setToc] = useState<TOCItem[]>([]);
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    // Extract headings only from the specified container
    const container = document.getElementById(containerId);
    if (!container) return;

    const headings = Array.from(container.querySelectorAll('h2'))
      .map((heading) => {
        const text = heading.textContent || '';
        const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
        return {
          id,
          title: text,
          level: parseInt(heading.tagName.charAt(1))
        };
      })
      .filter(item => item.id && item.title);

    setToc(headings);

    // Add IDs to headings if they don't have them
    headings.forEach(({ id, title }) => {
      const heading = Array.from(container.querySelectorAll('h2'))
        .find(h => h.textContent === title);
      if (heading && !heading.id) {
        heading.id = id;
      }
    });
  }, [containerId]);

  useEffect(() => {
    const handleScroll = () => {
      const headings = toc.map(item => document.getElementById(item.id)).filter(Boolean);
      const scrollPosition = window.scrollY + 100;

      for (let i = headings.length - 1; i >= 0; i--) {
        const heading = headings[i];
        if (heading && heading.offsetTop <= scrollPosition) {
          setActiveId(heading.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [toc]);

  if (toc.length === 0) return null;

  return (
    <div className={`bg-blue-500/10 border border-blue-500/20 rounded-2xl p-6 ${className}`}>
      <h3 className="text-lg font-semibold text-zinc-900 mb-4">
        TABLE OF CONTENTS
      </h3>
      <nav>
        {toc.map((item, index) => (
          <div key={item.id}>
            <a
              href={`#${item.id}`}
              className={`block py-2 text-zinc-700 hover:text-blue-500 transition-colors duration-200 ${
                activeId === item.id 
                  ? 'font-semibold text-blue-500' 
                  : 'font-normal'
              }`}
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById(item.id);
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
            >
              {item.title}
            </a>
            {index < toc.length - 1 && (
              <div className="border-b border-gray-200"></div>
            )}
          </div>
        ))}
      </nav>
    </div>
  );
}

