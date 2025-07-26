import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PageInfo {
  href: string;
  title: string;
  description?: string;
}

interface DocsNavigationProps {
  previous?: PageInfo;
  next?: PageInfo;
}

export default function DocsNavigation({ previous, next }: DocsNavigationProps) {
  return (
    <div className="mt-16 pt-8 border-t border-gray-700">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Previous Page */}
        <div className="flex justify-start">
          {previous ? (
            <Link
              href={previous.href}
              className="group flex items-center space-x-3 p-4 rounded-lg border border-gray-700 bg-gray-800/30 hover:bg-gray-800/50 transition-all duration-200 max-w-sm"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-700 group-hover:bg-gray-600 transition-colors">
                <ChevronLeft className="w-5 h-5 text-gray-300" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-medium text-gray-400 uppercase tracking-wide">
                  Previous
                </p>
                <p className="text-sm font-semibold text-white group-hover:text-indigo-300 transition-colors truncate">
                  {previous.title}
                </p>
                {previous.description && (
                  <p className="text-xs text-gray-400 mt-1 line-clamp-2">
                    {previous.description}
                  </p>
                )}
              </div>
            </Link>
          ) : (
            <div></div>
          )}
        </div>

        {/* Next Page */}
        <div className="flex justify-end">
          {next ? (
            <Link
              href={next.href}
              className="group flex items-center space-x-3 p-4 rounded-lg border border-gray-700 bg-gray-800/30 hover:bg-gray-800/50 transition-all duration-200 max-w-sm"
            >
              <div className="flex-1 min-w-0 text-right">
                <p className="text-xs font-medium text-gray-400 uppercase tracking-wide">
                  Next
                </p>
                <p className="text-sm font-semibold text-white group-hover:text-indigo-300 transition-colors truncate">
                  {next.title}
                </p>
                {next.description && (
                  <p className="text-xs text-gray-400 mt-1 line-clamp-2">
                    {next.description}
                  </p>
                )}
              </div>
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-700 group-hover:bg-gray-600 transition-colors">
                <ChevronRight className="w-5 h-5 text-gray-300" />
              </div>
            </Link>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
}
