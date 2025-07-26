import React from 'react';

const Features = () => {
  return (
    <section id="features" className="py-24">
      <div className="text-center mb-12">
        <h3 className="text-3xl font-bold text-white">Packed with Powerful Features</h3>
        <p className="mt-2 text-gray-400">Everything you need for a modern development workflow.</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Feature 1 */}
        <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
          <div className="flex items-center space-x-4">
            <div className="bg-indigo-500/10 p-3 rounded-lg">
              <svg className="w-6 h-6 text-indigo-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
              </svg>
            </div>
            <h4 className="text-xl font-semibold text-white">Multiple Templates</h4>
          </div>
          <p className="mt-4 text-gray-400">Choose from Vanilla JS, React + Vite, or React + Next.js to match your project's needs.</p>
        </div>
        {/* Feature 2 */}
        <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
          <div className="flex items-center space-x-4">
            <div className="bg-indigo-500/10 p-3 rounded-lg">
              <svg className="w-6 h-6 text-indigo-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.25 2.25h-4.5a2.25 2.25 0 00-2.25 2.25v13.5a2.25 2.25 0 002.25 2.25h13.5a2.25 2.25 0 002.25-2.25v-4.5m-7.5-10.5h4.5m-4.5 0v4.5m0-4.5L15 6.75" />
              </svg>
            </div>
            <h4 className="text-xl font-semibold text-white">Manifest V3 Ready</h4>
          </div>
          <p className="mt-4 text-gray-400">Generates a fully compliant `manifest.json` with sensible defaults, so you're up-to-date from the start.</p>
        </div>
        {/* Feature 3 */}
        <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
          <div className="flex items-center space-x-4">
            <div className="bg-indigo-500/10 p-3 rounded-lg">
              <svg className="w-6 h-6 text-indigo-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5V18M15 7.5V18M3 16.811V8.69c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 010 1.954l-7.108 4.061A1.125 1.125 0 013 16.811z" />
              </svg>
            </div>
            <h4 className="text-xl font-semibold text-white">Zero Configuration</h4>
          </div>
          <p className="mt-4 text-gray-400">All build tools and scripts are pre-configured. Just run `npm run dev` and start coding.</p>
        </div>
      </div>
    </section>
  );
};

export default Features;