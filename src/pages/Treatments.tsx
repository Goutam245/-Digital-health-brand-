import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { ArrowRight, Search, Filter, Check, Star, Clock, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTABanner from "@/components/CTABanner";
import injectionPen from "@/assets/injection-pen.png";
import medicalVial from "@/assets/medical-vial.png";
import pumpBottle from "@/assets/pump-bottle.png";
import pillBottle from "@/assets/pill-bottle.png";
import nasalSpray from "@/assets/nasal-spray.png";

const Treatments = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    { id: "all", name: "All Treatments", count: 12 },
    { id: "weight-loss", name: "Weight Loss", count: 4 },
    { id: "hormone", name: "Hormone Therapy", count: 3 },
    { id: "wellness", name: "Wellness", count: 3 },
    { id: "skincare", name: "Skin Care", count: 2 },
  ];

  const treatments = [
    {
      id: 1,
      name: "Semaglutide (GLP-1)",
      category: "weight-loss",
      description: "FDA-approved weight loss medication that helps reduce appetite and improve blood sugar control.",
      price: "Starting at $297/month",
      rating: 4.9,
      reviews: 1284,
      badge: "Most Popular",
      image: injectionPen,
      benefits: ["Clinically proven", "Once weekly injection", "Lose 15-20% body weight"],
    },
    {
      id: 2,
      name: "Tirzepatide",
      category: "weight-loss",
      description: "Next-generation GLP-1/GIP dual agonist for significant weight loss results.",
      price: "Starting at $399/month",
      rating: 4.8,
      reviews: 856,
      badge: "New",
      image: injectionPen,
      benefits: ["Dual action formula", "Superior results", "Weekly dosing"],
    },
    {
      id: 3,
      name: "Sermorelin",
      category: "hormone",
      description: "Growth hormone releasing peptide for anti-aging, muscle support, and vitality.",
      price: "Starting at $189/month",
      rating: 4.7,
      reviews: 642,
      badge: "Rx Only",
      image: medicalVial,
      benefits: ["Increases HGH naturally", "Better sleep quality", "Muscle recovery"],
    },
    {
      id: 4,
      name: "NAD+ Therapy",
      category: "wellness",
      description: "Cellular energy and longevity support with nicotinamide adenine dinucleotide.",
      price: "Starting at $249/month",
      rating: 4.8,
      reviews: 523,
      badge: "Premium",
      image: pumpBottle,
      benefits: ["Boost energy levels", "Anti-aging benefits", "Cognitive support"],
    },
    {
      id: 5,
      name: "Testosterone Therapy",
      category: "hormone",
      description: "Bioidentical testosterone replacement for men with low T symptoms.",
      price: "Starting at $159/month",
      rating: 4.9,
      reviews: 1102,
      badge: null,
      image: medicalVial,
      benefits: ["Increase energy", "Improve mood", "Build lean muscle"],
    },
    {
      id: 6,
      name: "Estrogen/Progesterone",
      category: "hormone",
      description: "Bioidentical hormone replacement therapy for women's health and menopause support.",
      price: "Starting at $129/month",
      rating: 4.7,
      reviews: 789,
      badge: null,
      image: pillBottle,
      benefits: ["Menopause relief", "Bone health", "Mood balance"],
    },
    {
      id: 7,
      name: "MIC+B12 Injections",
      category: "wellness",
      description: "Lipotropic injections for metabolism boost, energy, and weight management support.",
      price: "Starting at $79/month",
      rating: 4.6,
      reviews: 432,
      badge: "Best Value",
      image: medicalVial,
      benefits: ["Energy boost", "Fat metabolism", "Weekly injection"],
    },
    {
      id: 8,
      name: "Glutathione",
      category: "wellness",
      description: "Master antioxidant for detox, skin brightening, and immune system support.",
      price: "Starting at $149/month",
      rating: 4.8,
      reviews: 367,
      badge: null,
      image: pumpBottle,
      benefits: ["Powerful antioxidant", "Skin health", "Detoxification"],
    },
    {
      id: 9,
      name: "Tretinoin Cream",
      category: "skincare",
      description: "Prescription-strength retinoid for anti-aging, acne, and skin texture improvement.",
      price: "Starting at $49/month",
      rating: 4.9,
      reviews: 1567,
      badge: "Bestseller",
      image: pumpBottle,
      benefits: ["Reduce wrinkles", "Clear acne", "Even skin tone"],
    },
    {
      id: 10,
      name: "Hair Regrowth Kit",
      category: "skincare",
      description: "Comprehensive treatment with finasteride and minoxidil for hair loss.",
      price: "Starting at $89/month",
      rating: 4.7,
      reviews: 923,
      badge: null,
      image: nasalSpray,
      benefits: ["Stop hair loss", "Regrow hair", "Proven formula"],
    },
    {
      id: 11,
      name: "Metformin",
      category: "weight-loss",
      description: "Well-established medication for blood sugar control and metabolic health.",
      price: "Starting at $29/month",
      rating: 4.6,
      reviews: 1834,
      badge: "Affordable",
      image: pillBottle,
      benefits: ["Blood sugar control", "Weight management", "Heart health"],
    },
    {
      id: 12,
      name: "Liraglutide",
      category: "weight-loss",
      description: "Daily GLP-1 injection for weight management and appetite control.",
      price: "Starting at $249/month",
      rating: 4.7,
      reviews: 645,
      badge: null,
      image: injectionPen,
      benefits: ["Daily dosing option", "Appetite control", "FDA approved"],
    },
  ];

  const filteredTreatments = treatments.filter((treatment) => {
    const matchesCategory = activeCategory === "all" || treatment.category === activeCategory;
    const matchesSearch = treatment.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         treatment.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Helmet>
        <title>Treatments - MedRx | Weight Loss, Hormone Therapy & Wellness</title>
        <meta 
          name="description" 
          content="Explore our full range of FDA-approved treatments including GLP-1 weight loss, hormone therapy, wellness supplements, and skincare. Start your consultation today." 
        />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main>
          {/* Hero Section */}
          <section className="pt-32 pb-16 gradient-hero relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
            <div className="container-custom relative z-10">
              <div className="max-w-3xl mx-auto text-center">
                <span className="inline-block text-sm font-inter font-semibold text-primary mb-4 bg-primary/10 px-4 py-1.5 rounded-full">
                  EXPLORE OUR CATALOG
                </span>
                <h1 className="mb-6">
                  Personalized <span className="text-primary">Treatments</span> for Your Health Goals
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground font-lora max-w-2xl mx-auto">
                  Browse our comprehensive selection of FDA-approved medications and wellness treatments. 
                  All prescribed by licensed healthcare providers.
                </p>
              </div>
            </div>
          </section>

          {/* Filter & Search Section */}
          <section className="py-8 bg-card border-b border-border sticky top-[72px] z-40">
            <div className="container-custom">
              <div className="flex flex-col lg:flex-row gap-4 lg:items-center lg:justify-between">
                {/* Categories */}
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      className={`px-4 py-2 rounded-full font-inter text-sm font-medium transition-all duration-200 ${
                        activeCategory === category.id
                          ? "bg-primary text-primary-foreground shadow-md"
                          : "bg-secondary text-muted-foreground hover:bg-secondary/80 hover:text-foreground"
                      }`}
                    >
                      {category.name}
                      <span className="ml-1.5 text-xs opacity-70">({category.count})</span>
                    </button>
                  ))}
                </div>

                {/* Search */}
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Search treatments..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full lg:w-[300px] pl-12 pr-4 py-3 bg-secondary rounded-xl border border-border font-inter text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Treatments Grid */}
          <section className="section-padding bg-secondary">
            <div className="container-custom">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {filteredTreatments.map((treatment, index) => (
                  <div
                    key={treatment.id}
                    className="group bg-card rounded-3xl overflow-hidden shadow-card hover-lift border border-border/50 animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    {/* Image Section */}
                    <div className="relative h-48 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                      <img 
                        src={treatment.image} 
                        alt={treatment.name}
                        className="h-32 w-32 object-contain group-hover:scale-110 transition-transform duration-300"
                      />
                      {treatment.badge && (
                        <span className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-inter font-semibold ${
                          treatment.badge === "Most Popular" ? "bg-primary text-primary-foreground" :
                          treatment.badge === "New" ? "bg-accent text-foreground" :
                          treatment.badge === "Premium" ? "bg-amber text-foreground" :
                          treatment.badge === "Bestseller" ? "bg-coral text-primary-foreground" :
                          treatment.badge === "Best Value" ? "bg-sky text-primary-foreground" :
                          treatment.badge === "Affordable" ? "bg-mint text-foreground" :
                          "bg-muted text-muted-foreground"
                        }`}>
                          {treatment.badge}
                        </span>
                      )}
                    </div>

                    {/* Content Section */}
                    <div className="p-6">
                      {/* Rating */}
                      <div className="flex items-center gap-2 mb-3">
                        <div className="flex items-center gap-0.5">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star 
                              key={star} 
                              className={`w-4 h-4 ${star <= Math.floor(treatment.rating) ? "text-amber fill-amber" : "text-border"}`} 
                            />
                          ))}
                        </div>
                        <span className="text-sm font-inter text-muted-foreground">
                          {treatment.rating} ({treatment.reviews.toLocaleString()})
                        </span>
                      </div>

                      {/* Title & Description */}
                      <h3 className="text-xl font-bold font-inter text-foreground mb-2">{treatment.name}</h3>
                      <p className="text-muted-foreground font-lora text-sm mb-4 line-clamp-2">{treatment.description}</p>

                      {/* Benefits */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {treatment.benefits.map((benefit, idx) => (
                          <span key={idx} className="inline-flex items-center gap-1 text-xs font-inter text-primary bg-primary/10 px-2 py-1 rounded-full">
                            <Check className="w-3 h-3" />
                            {benefit}
                          </span>
                        ))}
                      </div>

                      {/* Price & CTA */}
                      <div className="flex items-center justify-between pt-4 border-t border-border">
                        <span className="font-inter font-bold text-foreground">{treatment.price}</span>
                        <Button variant="hero" size="sm" className="rounded-xl">
                          Get Started
                          <ArrowRight className="w-4 h-4 ml-1" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {filteredTreatments.length === 0 && (
                <div className="text-center py-16">
                  <p className="text-muted-foreground font-lora text-lg">No treatments found matching your criteria.</p>
                  <Button 
                    variant="outline" 
                    className="mt-4"
                    onClick={() => { setActiveCategory("all"); setSearchQuery(""); }}
                  >
                    Clear Filters
                  </Button>
                </div>
              )}
            </div>
          </section>

          {/* Trust Section */}
          <section className="py-12 bg-card border-t border-border">
            <div className="container-custom">
              <div className="grid sm:grid-cols-3 gap-8 text-center">
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Shield className="w-7 h-7 text-primary" />
                  </div>
                  <h4 className="font-inter font-semibold text-foreground mb-2">FDA Approved</h4>
                  <p className="text-sm text-muted-foreground font-lora">All medications are FDA-approved and sourced from licensed pharmacies.</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center mb-4">
                    <Clock className="w-7 h-7 text-primary" />
                  </div>
                  <h4 className="font-inter font-semibold text-foreground mb-2">Fast Shipping</h4>
                  <p className="text-sm text-muted-foreground font-lora">Free 2-day shipping on all orders. Discreet packaging guaranteed.</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 rounded-full bg-sky/20 flex items-center justify-center mb-4">
                    <Check className="w-7 h-7 text-primary" />
                  </div>
                  <h4 className="font-inter font-semibold text-foreground mb-2">Licensed Providers</h4>
                  <p className="text-sm text-muted-foreground font-lora">All prescriptions reviewed by licensed healthcare professionals.</p>
                </div>
              </div>
            </div>
          </section>

          <CTABanner />
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Treatments;
