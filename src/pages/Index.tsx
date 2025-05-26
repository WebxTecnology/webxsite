
import { Hero } from "@/components/Hero";
import { Portfolio } from "@/components/Portfolio";
import { Testimonials } from "@/components/Testimonials";
import { Offers } from "@/components/Offers";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

const Index = () => {
  const { language } = useLanguage();
  
  return (
    <div className={`min-h-screen bg-white ${language === "ar" ? "font-arabic" : ""}`}>
      <Navigation />
      <Hero />
      <Portfolio />
      <Testimonials />
      <Offers />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
