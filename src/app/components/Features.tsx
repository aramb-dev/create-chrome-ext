import React from 'react';
import { Layers, FileCheck, Play, Zap, Shield, Code } from 'lucide-react';

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
              <Layers className="w-6 h-6 text-indigo-400" />
            </div>
            <h4 className="text-xl font-semibold text-white">Multiple Templates</h4>
          </div>
          <p className="mt-4 text-gray-400">Choose from Vanilla JS, React + Vite, or React + Next.js to match your project's needs.</p>
        </div>
        {/* Feature 2 */}
        <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
          <div className="flex items-center space-x-4">
            <div className="bg-indigo-500/10 p-3 rounded-lg">
              <FileCheck className="w-6 h-6 text-indigo-400" />
            </div>
            <h4 className="text-xl font-semibold text-white">Manifest V3 Ready</h4>
          </div>
          <p className="mt-4 text-gray-400">Generates a fully compliant `manifest.json` with sensible defaults, so you're up-to-date from the start.</p>
        </div>
        {/* Feature 3 */}
        <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
          <div className="flex items-center space-x-4">
            <div className="bg-indigo-500/10 p-3 rounded-lg">
              <Zap className="w-6 h-6 text-indigo-400" />
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