"use client";
import Link from 'next/link';
import { useState } from 'react';
import { Package, Github, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gray-900/80 backdrop-blur-sm sticky top-0 z-50 border-b border-gray-700">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <Package className="w-8 h-8 text-indigo-500" />
          <h1 className="text-2xl font-bold text-white">create-chrome-ext</h1>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <Link href="#features" className="hover:text-indigo-400 transition-colors">Features</Link>
          <Link href="#getting-started" className="hover:text-indigo-400 transition-colors">Get Started</Link>
          <Link href="#docs" className="hover:text-indigo-400 transition-colors">Docs</Link>
          <a href="https://github.com/aramb-dev/create-chrome-ext" target="_blank" rel="noopener noreferrer"
            className="bg-gray-700 hover:bg-gray-600 text-white font-medium py-2 px-4 rounded-lg transition-colors flex items-center space-x-2">
            <Github className="w-5 h-5" />
            <span>GitHub</span>
          </a>
        </div>
        <button
          id="mobile-menu-button"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {isMenuOpen ? (
            <X className="w-6 h-6 text-white" />
          ) : (
            <Menu className="w-6 h-6 text-white" />
          )}
        </button>
      </nav>
      {/* Mobile Menu */}
      <div id="mobile-menu" className={`${isMenuOpen ? '' : 'hidden'} md:hidden px-6 pb-4 space-y-2`}>
        <Link href="#features" className="block hover:text-indigo-400 transition-colors">Features</Link>
        <Link href="#getting-started" className="block hover:text-indigo-400 transition-colors">Get Started</Link>
        <Link href="#docs" className="block hover:text-indigo-400 transition-colors">Docs</Link>
        <a href="https://github.com/aramb-dev/create-chrome-ext" target="_blank" rel="noopener noreferrer"
          className="block hover:text-indigo-400 transition-colors">GitHub</a>
      </div>
    </header>
  );
};

export default Header;