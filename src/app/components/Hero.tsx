"use client";
import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

const Hero = () => {
  const [copyButtonText, setCopyButtonText] = useState('Copy');

  const handleCopy = () => {
    navigator.clipboard.writeText('$ npx create-chrome-ext').then(() => {
      setCopyButtonText('Copied!');
      setTimeout(() => {
        setCopyButtonText('Copy');
      }, 2000);
    });
  };

  return (
    <section className="text-center">
      <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">
        The <span className="gradient-text">Easiest Way</span> to Build
        <br />
        Modern Chrome Extensions.
      </h2>
      <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-400">
        Stop wrestling with `manifest.json` and build configurations. `create-chrome-ext` scaffolds a complete, modern development environment for your next browser extension in seconds.
      </p>

      <div className="mt-10 max-w-xl mx-auto">
        <div className="bg-gray-800 border border-gray-700 rounded-lg p-4 flex items-center justify-between">
          <code id="copy-text" className="text-green-400 text-lg">
            $ npx create-chrome-ext
          </code>
          <button
            id="copy-button"
            onClick={handleCopy}
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-lg transition-all duration-200 transform active:scale-95 flex items-center space-x-2"
          >
            {copyButtonText === 'Copied!' ? (
              <Check className="w-5 h-5" />
            ) : (
              <Copy className="w-5 h-5" />
            )}
            <span id="copy-button-text">{copyButtonText}</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;