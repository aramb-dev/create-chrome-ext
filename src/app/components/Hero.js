import React from 'react';

const Hero = () => {
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
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-lg transition-all duration-200 transform active:scale-95 flex items-center space-x-2"
          >
            <svg
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.353-.026.692-.026 1.038 0 .346.026.692.026 1.038 0 1.13.094 1.976 1.057 1.976 2.192V7.5M8.25 7.5h7.5M8.25 7.5c0 1.135-.845 2.098-1.976 2.192a48.424 48.424 0 01-1.038 0C4.12 9.598 3.275 8.635 3.275 7.5m5 0c0 .947.376 1.842.984 2.493m4.032-2.493c.608-.65.984-1.546.984-2.493m-4.032 2.493L9.75 10.5m4.032-2.493L14.25 10.5"
              />
            </svg>
            <span id="copy-button-text">Copy</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;