import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import GettingStarted from './components/GettingStarted';
import Docs from './components/Docs';
import Footer from './components/Footer';

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
