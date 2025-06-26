import Contact from '../components/Contact';
import Features from '../components/Features';
import Fleet from '../components/Fleet';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Services />
      <Fleet />
      <Features />
      <Contact />
      <Footer />
    </div>
  );
}