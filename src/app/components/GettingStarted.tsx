import React from 'react';
import { Terminal, Code, Chrome } from 'lucide-react';

const GettingStarted = () => {
  return (
    <section id="getting-started" className="py-24">
      <div className="text-center mb-12">
        <h3 className="text-3xl font-bold text-white">Get Started in 3 Easy Steps</h3>
        <p className="mt-2 text-gray-400">Go from zero to a running extension in under a minute.</p>
      </div>
      <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8 text-center">
        {/* Step 1 */}
        <div className="bg-gray-800/50 p-8 rounded-lg border border-gray-700">
          <div className="flex justify-center mb-4">
            <div className="bg-indigo-500/10 p-4 rounded-full">
              <Terminal className="w-8 h-8 text-indigo-400" />
            </div>
          </div>
          <div className="text-5xl font-black text-indigo-400">1</div>
          <h4 className="mt-4 text-xl font-semibold text-white">Run the Command</h4>
          <p className="mt-2 text-gray-400">Open your terminal and use `npx` to run the tool. Follow the interactive prompts.</p>
          <code className="block mt-4 bg-gray-900 text-green-400 p-2 rounded-md text-sm">npx create-chrome-ext</code>
        </div>
        {/* Step 2 */}
        <div className="bg-gray-800/50 p-8 rounded-lg border border-gray-700">
          <div className="flex justify-center mb-4">
            <div className="bg-indigo-500/10 p-4 rounded-full">
              <Code className="w-8 h-8 text-indigo-400" />
            </div>
          </div>
          <div className="text-5xl font-black text-indigo-400">2</div>
          <h4 className="mt-4 text-xl font-semibold text-white">Start Developing</h4>
          <p className="mt-2 text-gray-400">Navigate into your new project directory and start the development server.</p>
          <code className="block mt-4 bg-gray-900 text-green-400 p-2 rounded-md text-sm">cd my-app && npm run dev</code>
        </div>
        {/* Step 3 */}
        <div className="bg-gray-800/50 p-8 rounded-lg border border-gray-700">
          <div className="flex justify-center mb-4">
            <div className="bg-indigo-500/10 p-4 rounded-full">
              <Chrome className="w-8 h-8 text-indigo-400" />
            </div>
          </div>
          <div className="text-5xl font-black text-indigo-400">3</div>
          <h4 className="mt-4 text-xl font-semibold text-white">Load in Chrome</h4>
          <p className="mt-2 text-gray-400">Open `chrome://extensions`, enable Developer Mode, and load the `dist` or `build` folder.</p>
        </div>
      </div>
    </section>
  );
};

export default GettingStarted;