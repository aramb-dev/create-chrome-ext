import React from 'react';

const Docs = () => {
  return (
    <section id="docs" className="py-24">
      <div className="text-center mb-12">
        <h3 className="text-3xl font-bold text-white">Documentation</h3>
        <p className="mt-2 text-gray-400">All the details you need to get the most out of the tool.</p>
      </div>
      <div className="max-w-4xl mx-auto bg-gray-800/50 rounded-lg border border-gray-700 p-8 space-y-12">

        {/* Introduction */}
        <div>
          <h4 className="text-2xl font-bold text-white border-l-4 border-indigo-500 pl-4">Introduction</h4>
          <p className="mt-4 text-gray-400">`create-chrome-ext` is a CLI tool that generates boilerplate code for
            modern Chrome extensions. It saves you from the tedious process of setting up build tools,
            configuring the manifest file, and structuring your project. With a single command, you get a
            production-ready setup so you can focus on what matters: building your extension's features.</p>
        </div>

        {/* Available Templates */}
        <div>
          <h4 className="text-2xl font-bold text-white border-l-4 border-indigo-500 pl-4">Available Templates</h4>
          <div className="mt-6 space-y-8">
            <div>
              <h5 className="text-xl font-semibold text-indigo-400">Vanilla JS</h5>
              <p className="mt-2 text-gray-400">The classic, no-frills approach. This template provides a
                basic structure with HTML, CSS, and JavaScript files for a popup. It's perfect for
                simple extensions, learning the basics of Chrome APIs, or when performance is critical
                and you want to avoid framework overhead.</p>
            </div>
            <div>
              <h5 className="text-xl font-semibold text-indigo-400">React + Vite</h5>
              <p className="mt-2 text-gray-400">For building rich, interactive UIs. This template uses React
                for component-based architecture and Vite for a lightning-fast development experience
                with Hot Module Replacement (HMR). It's the recommended choice for most modern
                extensions with a complex user interface.</p>
            </div>
            <div>
              <h5 className="text-xl font-semibold text-indigo-400">React + Next.js</h5>
              <p className="mt-2 text-gray-400">Leverage the power of a full-featured framework. This template
                is configured for static export (`output: 'export'`), making it suitable for multi-page
                extensions (e.g., a popup, an options page, and a full-page app). It's ideal for
                developers already familiar with the Next.js ecosystem.</p>
              <div className="mt-4 bg-yellow-900/50 border border-yellow-700 text-yellow-300 p-4 rounded-lg">
                <p><strong className="font-bold">Important Note:</strong> Chrome extensions cannot have
                  folders that start with an underscore (`_`). This template includes a build script
                  that automatically renames the `out/_next` directory to `out/next` and updates all
                  file paths accordingly. This process is handled for you automatically when you run
                  `npm run build`.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Project Structure */}
        <div>
          <h4 className="text-2xl font-bold text-white border-l-4 border-indigo-500 pl-4">Generated Project
            Structure</h4>
          <p className="mt-4 text-gray-400">While the exact structure varies by template, all projects include:
          </p>
          <ul className="mt-4 list-disc list-inside text-gray-400 space-y-2">
            <li><strong className="text-white">`manifest.json`</strong>: The core configuration file for your
              extension.</li>
            <li><strong className="text-white">`package.json`</strong>: With pre-configured scripts for
              development and building.</li>
            <li><strong className="text-white">Entry point files</strong>: (e.g., `popup.html`, `options.html`)
              for your extension's UI.</li>
            <li><strong className="text-white">Scripts folder</strong>: For background and content scripts.</li>
            <li><strong className="text-white">`.gitignore`</strong>: Sensible defaults to keep your repository
              clean.</li>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default Docs;