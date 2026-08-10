import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Strengths from "@/components/Strengths";
import Flow from "@/components/Flow";
import Pricing from "@/components/Pricing";
import Scope from "@/components/Scope";
import Maintenance from "@/components/Maintenance";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Services />
        <Strengths />
        <Flow />
        <Pricing />
        <Scope />
        <Maintenance />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
