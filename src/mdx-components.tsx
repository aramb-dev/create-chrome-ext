import type { MDXComponents } from 'mdx/types';
import { ArrowLeft, BookOpen, Package, Settings, FolderTree, Code, AlertTriangle } from 'lucide-react';
import Link from 'next/link';
import DocsNavigation from '@/app/components/DocsNavigation';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Custom heading components with icons
    h1: ({ children }) => (
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 flex items-center gap-3">
        <BookOpen className="w-10 h-10 text-indigo-400" />
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-3xl font-bold text-white mb-4 flex items-center gap-3 border-l-4 border-indigo-500 pl-4">
        <Package className="w-6 h-6 text-indigo-400" />
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl font-semibold text-indigo-400 mb-4">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-xl font-semibold text-white mb-3">
        {children}
      </h4>
    ),

    // Paragraph styling
    p: ({ children }) => (
      <p className="text-gray-300 leading-relaxed mb-4">
        {children}
      </p>
    ),

    // Code styling
    code: ({ children, className }) => {
      const isInline = !className;
      if (isInline) {
        return (
          <code className="bg-gray-700 px-2 py-1 rounded text-green-400 text-sm">
            {children}
          </code>
        );
      }
      return (
        <code className={`block bg-gray-900 text-green-400 p-4 rounded-lg text-sm overflow-x-auto ${className || ''}`}>
          {children}
        </code>
      );
    },

    // Pre styling for code blocks
    pre: ({ children }) => (
      <pre className="bg-gray-900 p-4 rounded-lg overflow-x-auto mb-4 border border-gray-700">
        {children}
      </pre>
    ),

    // List styling
    ul: ({ children }) => (
      <ul className="space-y-3 text-gray-300 mb-4">
        {children}
      </ul>
    ),

    li: ({ children }) => (
      <li className="flex items-start space-x-3">
        <Settings className="w-5 h-5 text-indigo-400 mt-0.5 flex-shrink-0" />
        <div>{children}</div>
      </li>
    ),

    // Custom alert component
    Alert: ({ children, type = 'info' }: { children: React.ReactNode; type?: 'warning' | 'info' | 'error' }) => {
      const styles = {
        warning: 'bg-yellow-900/50 border-yellow-700 text-yellow-300',
        info: 'bg-blue-900/50 border-blue-700 text-blue-300',
        error: 'bg-red-900/50 border-red-700 text-red-300',
      };

      return (
        <div className={`border p-4 rounded-lg mb-4 ${styles[type]}`}>
          <div className="flex items-start space-x-2">
            <AlertTriangle className="w-5 h-5 mt-0.5 flex-shrink-0" />
            <div>{children}</div>
          </div>
        </div>
      );
    },

    // Custom section wrapper
    Section: ({ children, icon: Icon = BookOpen }: { children: React.ReactNode; icon?: React.ComponentType<any> }) => (
      <section className="mb-16">
        <div className="bg-gray-800/50 rounded-lg border border-gray-700 p-8">
          {children}
        </div>
      </section>
    ),

    // Back link component
    BackLink: () => (
      <div className="mb-8">
        <Link
          href="/"
          className="inline-flex items-center space-x-2 text-indigo-400 hover:text-indigo-300 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>
      </div>
    ),

    // Docs navigation component
    DocsNavigation: ({ previous, next }: {
      previous?: { href: string; title: string; description?: string };
      next?: { href: string; title: string; description?: string };
    }) => (
      <DocsNavigation previous={previous} next={next} />
    ),

    ...components,
  };
}
