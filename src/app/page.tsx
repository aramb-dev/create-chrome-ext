import Header from './components/Header';

export default function Home() {
  return (
    <body className="bg-gray-900 text-gray-300">
      <Header />

      <main className="container mx-auto px-6 py-16 md:py-24">

        <section className="text-center">
          <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">The <span className="gradient-text">Easiest
            Way</span> to Build<br />Modern Chrome Extensions.</h2>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-400">Stop wrestling with `manifest.json` and build
            configurations. `create-chrome-ext` scaffolds a complete, modern development environment for your next
            browser extension in seconds.</p>

          <div className="mt-10 max-w-xl mx-auto">
            <div className="bg-gray-800 border border-gray-700 rounded-lg p-4 flex items-center justify-between">
              <code id="copy-text" className="text-green-400 text-lg">$ npx create-chrome-ext</code>
              <button id="copy-button"
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-lg transition-all duration-200 transform active:scale-95 flex items-center space-x-2">
                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                  strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round"
                    d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.353-.026.692-.026 1.038 0 .346.026.692.026 1.038 0 1.13.094 1.976 1.057 1.976 2.192V7.5M8.25 7.5h7.5M8.25 7.5c0 1.135-.845 2.098-1.976 2.192a48.424 48.424 0 01-1.038 0C4.12 9.598 3.275 8.635 3.275 7.5m5 0c0 .947.376 1.842.984 2.493m4.032-2.493c.608-.65.984-1.546.984-2.493m-4.032 2.493L9.75 10.5m4.032-2.493L14.25 10.5" />
                </svg>
                <span id="copy-button-text">Copy</span>
              </button>
            </div>
          </div>
        </section>

        <section id="features" className="py-24">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white">Packed with Powerful Features</h3>
            <p className="mt-2 text-gray-400">Everything you need for a modern development workflow.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
              <div className="flex items-center space-x-4">
                <div className="bg-indigo-500/10 p-3 rounded-lg"><svg className="w-6 h-6 text-indigo-400"
                  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                  stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round"
                    d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
                </svg></div>
                <h4 className="text-xl font-semibold text-white">Multiple Templates</h4>
              </div>
              <p className="mt-4 text-gray-400">Choose from Vanilla JS, React + Vite, or React + Next.js to match your
                project's needs.</p>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
              <div className="flex items-center space-x-4">
                <div className="bg-indigo-500/10 p-3 rounded-lg"><svg className="w-6 h-6 text-indigo-400"
                  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                  stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round"
                    d="M10.25 2.25h-4.5a2.25 2.25 0 00-2.25 2.25v13.5a2.25 2.25 0 002.25 2.25h13.5a2.25 2.25 0 002.25-2.25v-4.5m-7.5-10.5h4.5m-4.5 0v4.5m0-4.5L15 6.75" />
                </svg></div>
                <h4 className="text-xl font-semibold text-white">Manifest V3 Ready</h4>
              </div>
              <p className="mt-4 text-gray-400">Generates a fully compliant `manifest.json` with sensible defaults, so
                you're up-to-date from the start.</p>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
              <div className="flex items-center space-x-4">
                <div className="bg-indigo-500/10 p-3 rounded-lg"><svg className="w-6 h-6 text-indigo-400"
                  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                  stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round"
                    d="M21 7.5V18M15 7.5V18M3 16.811V8.69c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 010 1.954l-7.108 4.061A1.125 1.125 0 013 16.811z" />
                </svg></div>
                <h4 className="text-xl font-semibold text-white">Zero Configuration</h4>
              </div>
              <p className="mt-4 text-gray-400">All build tools and scripts are pre-configured. Just run `npm run dev`
                and start coding.</p>
            </div>
          </div>
        </section>

        <section id="getting-started" className="py-24">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white">Get Started in 3 Easy Steps</h3>
            <p className="mt-2 text-gray-400">Go from zero to a running extension in under a minute.</p>
          </div>
          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-gray-800/50 p-8 rounded-lg border border-gray-700">
              <div className="text-5xl font-black text-indigo-400">1</div>
              <h4 className="mt-4 text-xl font-semibold text-white">Run the Command</h4>
              <p className="mt-2 text-gray-400">Open your terminal and use `npx` to run the tool. Follow the
                interactive prompts.</p>
              <code
                className="block mt-4 bg-gray-900 text-green-400 p-2 rounded-md text-sm">npx create-chrome-ext</code>
            </div>
            <div className="bg-gray-800/50 p-8 rounded-lg border border-gray-700">
              <div className="text-5xl font-black text-indigo-400">2</div>
              <h4 className="mt-4 text-xl font-semibold text-white">Start Developing</h4>
              <p className="mt-2 text-gray-400">Navigate into your new project directory and start the development
                server.</p>
              <code
                className="block mt-4 bg-gray-900 text-green-400 p-2 rounded-md text-sm">cd my-app && npm run dev</code>
            </div>
            <div className="bg-gray-800/50 p-8 rounded-lg border border-gray-700">
              <div className="text-5xl font-black text-indigo-400">3</div>
              <h4 className="mt-4 text-xl font-semibold text-white">Load in Chrome</h4>
              <p className="mt-2 text-gray-400">Open `chrome://extensions`, enable Developer Mode, and load the `dist`
                or `build` folder.</p>
            </div>
          </div>
        </section>

        <section id="docs" className="py-24">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white">Documentation</h3>
            <p className="mt-2 text-gray-400">All the details you need to get the most out of the tool.</p>
          </div>
          <div className="max-w-4xl mx-auto bg-gray-800/50 rounded-lg border border-gray-700 p-8 space-y-12">

            <div>
              <h4 className="text-2xl font-bold text-white border-l-4 border-indigo-500 pl-4">Introduction</h4>
              <p className="mt-4 text-gray-400">`create-chrome-ext` is a CLI tool that generates boilerplate code for
                modern Chrome extensions. It saves you from the tedious process of setting up build tools,
                configuring the manifest file, and structuring your project. With a single command, you get a
                production-ready setup so you can focus on what matters: building your extension's features.</p>
            </div>

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

      </main>

      <footer className="border-t border-gray-700">
        <div className="container mx-auto px-6 py-8 text-center text-gray-500">
          <p>Built by the Open Source Community. Inspired by projects like `create-react-app`.</p>
          <p className="mt-2">This is a conceptual project. Code is not yet available on NPM.</p>
        </div>
      </footer>
    </body>
  );
}
