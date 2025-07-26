import React from 'react';
import { Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-gray-700">
      <div className="container mx-auto px-6 py-8 text-center text-gray-500">
        <p>Code is not available yet on npm.</p>
        <p className="mt-2 flex items-center justify-center space-x-2">
          <span>Built by</span>
          <a
            href="https://github.com/aramb-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-1 text-indigo-400 hover:text-indigo-300 transition-colors"
          >
            <Github className="w-4 h-4" />
            <span>aramb-dev</span>
          </a>
        </p>
        <p className="mt-2 text-sm">
          Inspired by{' '}
          <span className="text-gray-400">create-react-app</span>,{' '}
          <span className="text-gray-400">create-t3-app</span>, and{' '}
          <span className="text-gray-400">create-next-app</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;