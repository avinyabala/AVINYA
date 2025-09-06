import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Logo Section */}
        <div className="logo">
          <img src="/assets/avinya-logo.png" alt="Avinya Logo" />
          <div className="logo-text">
            <span className="line1">Avinya</span>
            <span className="line2">TechnoSoft</span>
          </div>
        </div>

        {/* Other Sections */}
        <Hero />
        <About />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;