import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import { ArrowLeft, BookOpen, Code, Package, Settings, FolderTree } from 'lucide-react';
import Link from 'next/link';

export default function DocsPage() {
  return (
    <div className="bg-gray-900 text-gray-300 min-h-screen">
      <Header />
      <main className="container mx-auto px-6 py-16">
        {/* Back to Home Button */}
        <div className="mb-8">
          <Link 
            href="/" 
            className="inline-flex items-center space-x-2 text-indigo-400 hover:text-indigo-300 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
        </div>

        {/* Page Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="bg-indigo-500/10 p-4 rounded-full">
              <BookOpen className="w-12 h-12 text-indigo-400" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white">Documentation</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-400">
            Everything you need to know to get the most out of create-chrome-ext.
          </p>
        </div>

        {/* Documentation Content */}
        <div className="max-w-4xl mx-auto space-y-16">

          {/* Introduction */}
          <section>
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-indigo-500/10 p-2 rounded-lg">
                <BookOpen className="w-6 h-6 text-indigo-400" />
              </div>
              <h2 className="text-3xl font-bold text-white">Introduction</h2>
            </div>
            <div className="bg-gray-800/50 rounded-lg border border-gray-700 p-8">
              <p className="text-gray-300 leading-relaxed">
                <code className="bg-gray-700 px-2 py-1 rounded text-green-400">create-chrome-ext</code> is a CLI tool that generates boilerplate code for
                modern Chrome extensions. It saves you from the tedious process of setting up build tools,
                configuring the manifest file, and structuring your project. With a single command, you get a
                production-ready setup so you can focus on what matters: building your extension's features.
              </p>
            </div>
          </section>

          {/* Available Templates */}
          <section>
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-indigo-500/10 p-2 rounded-lg">
                <Package className="w-6 h-6 text-indigo-400" />
              </div>
              <h2 className="text-3xl font-bold text-white">Available Templates</h2>
            </div>
            <div className="space-y-6">
              
              {/* Vanilla JS Template */}
              <div className="bg-gray-800/50 rounded-lg border border-gray-700 p-8">
                <h3 className="text-2xl font-semibold text-indigo-400 mb-4">Vanilla JS</h3>
                <p className="text-gray-300 leading-relaxed">
                  The classic, no-frills approach. This template provides a basic structure with HTML, CSS, 
                  and JavaScript files for a popup. It's perfect for simple extensions, learning the basics 
                  of Chrome APIs, or when performance is critical and you want to avoid framework overhead.
                </p>
              </div>

              {/* React + Vite Template */}
              <div className="bg-gray-800/50 rounded-lg border border-gray-700 p-8">
                <h3 className="text-2xl font-semibold text-indigo-400 mb-4">React + Vite</h3>
                <p className="text-gray-300 leading-relaxed">
                  For building rich, interactive UIs. This template uses React for component-based architecture 
                  and Vite for a lightning-fast development experience with Hot Module Replacement (HMR). 
                  It's the recommended choice for most modern extensions with a complex user interface.
                </p>
              </div>

              {/* React + Next.js Template */}
              <div className="bg-gray-800/50 rounded-lg border border-gray-700 p-8">
                <h3 className="text-2xl font-semibold text-indigo-400 mb-4">React + Next.js</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Leverage the power of a full-featured framework. This template is configured for static export 
                  (<code className="bg-gray-700 px-2 py-1 rounded text-green-400">output: 'export'</code>), 
                  making it suitable for multi-page extensions (e.g., a popup, an options page, and a full-page app). 
                  It's ideal for developers already familiar with the Next.js ecosystem.
                </p>
                <div className="bg-yellow-900/50 border border-yellow-700 text-yellow-300 p-4 rounded-lg">
                  <p>
                    <strong className="font-bold">Important Note:</strong> Chrome extensions cannot have
                    folders that start with an underscore (<code className="bg-yellow-800 px-1 rounded">_</code>). 
                    This template includes a build script that automatically renames the{' '}
                    <code className="bg-yellow-800 px-1 rounded">out/_next</code> directory to{' '}
                    <code className="bg-yellow-800 px-1 rounded">out/next</code> and updates all
                    file paths accordingly. This process is handled for you automatically when you run{' '}
                    <code className="bg-yellow-800 px-1 rounded">npm run build</code>.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Project Structure */}
          <section>
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-indigo-500/10 p-2 rounded-lg">
                <FolderTree className="w-6 h-6 text-indigo-400" />
              </div>
              <h2 className="text-3xl font-bold text-white">Generated Project Structure</h2>
            </div>
            <div className="bg-gray-800/50 rounded-lg border border-gray-700 p-8">
              <p className="text-gray-300 leading-relaxed mb-6">
                While the exact structure varies by template, all projects include:
              </p>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start space-x-3">
                  <Settings className="w-5 h-5 text-indigo-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <code className="bg-gray-700 px-2 py-1 rounded text-green-400">manifest.json</code>
                    <span className="ml-2">- The core configuration file for your extension.</span>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <Package className="w-5 h-5 text-indigo-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <code className="bg-gray-700 px-2 py-1 rounded text-green-400">package.json</code>
                    <span className="ml-2">- With pre-configured scripts for development and building.</span>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <Code className="w-5 h-5 text-indigo-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-white">Entry point files</strong>
                    <span className="ml-2">- (e.g., popup.html, options.html) for your extension's UI.</span>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <FolderTree className="w-5 h-5 text-indigo-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-white">Scripts folder</strong>
                    <span className="ml-2">- For background and content scripts.</span>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <Settings className="w-5 h-5 text-indigo-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <code className="bg-gray-700 px-2 py-1 rounded text-green-400">.gitignore</code>
                    <span className="ml-2">- Sensible defaults to keep your repository clean.</span>
                  </div>
                </li>
              </ul>
            </div>
          </section>

        </div>
      </main>
      <Footer />
    </div>
  );
}
