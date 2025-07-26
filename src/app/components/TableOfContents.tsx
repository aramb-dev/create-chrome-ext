"use client";
import { useEffect, useState } from 'react';
import { ChevronRight } from 'lucide-react';

interface TocItem {
  id: string;
  text: string;
  level: number;
}

export default function TableOfContents() {
  const [toc, setToc] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    // Generate TOC from headings
    const headings = document.querySelectorAll('h1, h2, h3, h4');
    const tocItems: TocItem[] = Array.from(headings).map((heading) => {
      const id = heading.id || heading.textContent?.toLowerCase().replace(/\s+/g, '-') || '';
      if (!heading.id) {
        heading.id = id;
      }
      return {
        id,
        text: heading.textContent || '',
        level: parseInt(heading.tagName.charAt(1)),
      };
    });
    setToc(tocItems);

    // Set up intersection observer for active section tracking
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-20% 0% -35% 0%',
        threshold: 0,
      }
    );

    headings.forEach((heading) => observer.observe(heading));

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  if (toc.length === 0) return null;

  return (
    <div className="hidden xl:block fixed right-8 top-1/2 transform -translate-y-1/2 w-64">
      <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-4">
        <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-4">
          On this page
        </h4>
        <nav className="space-y-1">
          {toc.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`
                block w-full text-left text-sm transition-colors duration-200
                ${item.level === 1 ? 'font-semibold' : ''}
                ${item.level === 2 ? 'pl-0' : ''}
                ${item.level === 3 ? 'pl-4' : ''}
                ${item.level === 4 ? 'pl-8' : ''}
                ${activeId === item.id
                  ? 'text-indigo-400 border-l-2 border-indigo-400 pl-3'
                  : 'text-gray-400 hover:text-gray-200 pl-3 border-l-2 border-transparent'
                }
              `}
            >
              <span className="flex items-center">
                {activeId === item.id && (
                  <ChevronRight className="w-3 h-3 mr-1 flex-shrink-0" />
                )}
                {item.text}
              </span>
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
}
