"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BookOpen, Rocket, Settings, Code, Layers, Chrome, HelpCircle } from 'lucide-react';

interface NavItem {
  title: string;
  href: string;
  icon: React.ComponentType<any>;
  description?: string;
}

interface NavSection {
  title: string;
  items: NavItem[];
}

const navigation: NavSection[] = [
  {
    title: 'Getting Started',
    items: [
      {
        title: 'Introduction',
        href: '/docs',
        icon: BookOpen,
        description: 'Learn about create-chrome-ext'
      },
      {
        title: 'Quick Start',
        href: '/docs/quick-start',
        icon: Rocket,
        description: 'Get up and running in minutes'
      },
    ],
  },
  {
    title: 'Templates',
    items: [
      {
        title: 'Vanilla JavaScript',
        href: '/docs/templates/vanilla',
        icon: Code,
        description: 'Simple HTML, CSS, and JS'
      },
      {
        title: 'React + Vite',
        href: '/docs/templates/react-vite',
        icon: Layers,
        description: 'Modern React development'
      },
      {
        title: 'React + Next.js',
        href: '/docs/templates/react-nextjs',
        icon: Layers,
        description: 'Full-featured framework'
      },
    ],
  },
  {
    title: 'Development',
    items: [
      {
        title: 'Project Structure',
        href: '/docs/project-structure',
        icon: Settings,
        description: 'Understanding the generated files'
      },
      {
        title: 'Chrome APIs',
        href: '/docs/chrome-apis',
        icon: Chrome,
        description: 'Working with extension APIs'
      },
    ],
  },
  {
    title: 'Help',
    items: [
      {
        title: 'FAQ',
        href: '/docs/faq',
        icon: HelpCircle,
        description: 'Common questions and answers'
      },
    ],
  },
];

export default function DocsSidebar() {
  const pathname = usePathname();

  return (
    <div className="hidden lg:block fixed left-8 top-24 bottom-8 w-64 overflow-y-auto">
      <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-lg p-4 h-full">
        <div className="mb-6">
          <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wide">
            Documentation
          </h3>
        </div>

        <nav className="space-y-8">
          {navigation.map((section) => (
            <div key={section.title}>
              <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-4">
                {section.title}
              </h4>
              <ul className="space-y-1.5">
                {section.items.map((item) => {
                  const Icon = item.icon;
                  const isActive = pathname === item.href;

                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        title={item.description}
                        className={`
                          group flex items-center space-x-3 px-3 py-2.5 rounded-md text-sm transition-all duration-200 relative
                          ${isActive
                            ? 'bg-indigo-600/15 text-indigo-300 border-l-2 border-indigo-400'
                            : 'text-gray-300 hover:text-gray-100 hover:bg-gray-800/40'
                          }
                        `}
                      >
                        <Icon className={`w-4 h-4 flex-shrink-0 ${isActive ? 'text-indigo-400' : 'text-gray-500 group-hover:text-gray-400'}`} />
                        <span className="font-medium truncate">
                          {item.title}
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
}
