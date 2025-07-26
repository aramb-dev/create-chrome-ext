import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import DocsSidebar from '@/app/components/DocsSidebar';
import TableOfContents from '@/app/components/TableOfContents';

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-gray-900 text-gray-300 min-h-screen">
      <Header />

      {/* Atlas: Main Documentation Navigation */}
      <DocsSidebar />

      {/* Local Map: On-Page Table of Contents */}
      <TableOfContents />

      {/* Main Content Area */}
      <main className="lg:ml-72 xl:mr-72 container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          {children}
        </div>
      </main>

      <Footer />
    </div>
  );
}
