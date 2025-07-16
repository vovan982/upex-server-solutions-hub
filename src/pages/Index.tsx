import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Competencies } from "@/components/Competencies";
import { WhyUpex } from "@/components/WhyUpex";
import { Cases } from "@/components/Cases";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Competencies />
      <WhyUpex />
      <Cases />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
