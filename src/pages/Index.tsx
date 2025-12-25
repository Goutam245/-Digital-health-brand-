import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturedTreatments from "@/components/FeaturedTreatments";
import ProductsGrid from "@/components/ProductsGrid";
import HowItWorks from "@/components/HowItWorks";
import Benefits from "@/components/Benefits";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>MedRx - Your Medications, Delivered | Online Pharmacy</title>
        <meta 
          name="description" 
          content="Get affordable prescriptions delivered to your door. No insurance required. Licensed pharmacy, FDA-approved medications, free delivery on orders over $50." 
        />
        <meta name="keywords" content="online pharmacy, telehealth, prescription delivery, affordable medications, licensed pharmacy" />
        <meta property="og:title" content="MedRx - Your Medications, Delivered" />
        <meta property="og:description" content="Get affordable prescriptions delivered to your door. No insurance required." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://medrx.com" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <HeroSection />
          <FeaturedTreatments />
          <ProductsGrid />
          <HowItWorks />
          <Benefits />
          <Testimonials />
          <FAQ />
          <CTABanner />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
