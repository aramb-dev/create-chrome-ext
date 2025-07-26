import Header from '@/app/components/Header';
import Hero from '@/app/components/Hero';
import Features from '@/app/components/Features';
import GettingStarted from '@/app/components/GettingStarted';
import Docs from '@/app/components/Docs';
import Footer from '@/app/components/Footer';

export default function Home() {
  return (
    <div className="bg-gray-900 text-gray-300">
      <Header />
      <main className="container mx-auto px-6 py-16 md:py-24">
        <Hero />
        <Features />
        <GettingStarted />
        <Docs />
      </main>
      <Footer />
    </div>
  );
}
