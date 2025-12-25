import { Search, Check, Truck, Shield, Clock, Star, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import pillBottle from "@/assets/pill-bottle.png";
import medicalVial from "@/assets/medical-vial.png";
import nasalSpray from "@/assets/nasal-spray.png";
import pumpBottle from "@/assets/pump-bottle.png";

const HeroSection = () => {
  const trustBadges = [
    { icon: Check, text: "Licensed Pharmacy" },
    { icon: Truck, text: "Free Delivery" },
    { icon: Shield, text: "FDA Approved" },
  ];

  const products = [
    { image: pillBottle, label: "Capsules", delay: "0s" },
    { image: medicalVial, label: "Injectable", delay: "0.1s" },
    { image: nasalSpray, label: "Nasal Spray", delay: "0.2s" },
    { image: pumpBottle, label: "Topical", delay: "0.3s" },
  ];

  const stats = [
    { value: "50K+", label: "Patients Served" },
    { value: "98%", label: "Satisfaction Rate" },
    { value: "24/7", label: "Support Available" },
  ];

  return (
    <section className="min-h-screen gradient-hero relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-primary/8 via-accent/5 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-accent/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-primary/3 rounded-full blur-3xl opacity-50" />
      
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-screen py-24 lg:py-32">
          {/* Left Content */}
          <div className="space-y-6 md:space-y-8 animate-fade-in-up order-2 lg:order-1">
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 bg-card/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-elegant border border-border/50">
              <span className="w-2.5 h-2.5 bg-accent rounded-full animate-pulse-soft" />
              <span className="text-sm font-inter font-medium text-foreground/80">
                Trusted by 50,000+ patients nationwide
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-4 md:space-y-6">
              <h1 className="text-foreground leading-[1.05]">
                Your medications,{" "}
                <span className="text-primary relative">
                  delivered
                  <svg className="absolute -bottom-2 left-0 w-full h-3 text-accent/40" viewBox="0 0 200 12" preserveAspectRatio="none">
                    <path d="M0 9C50 9 50 3 100 3C150 3 150 9 200 9" stroke="currentColor" strokeWidth="4" fill="none" />
                  </svg>
                </span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-lg font-lora leading-relaxed">
                Get affordable prescriptions delivered to your door. No insurance required. No appointments needed. Healthcare made simple.
              </p>
            </div>

            {/* Search Bar */}
            <div className="relative max-w-xl">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center bg-card rounded-2xl sm:rounded-2xl shadow-elegant border border-border overflow-hidden">
                <div className="flex items-center px-4 sm:px-5 py-4 sm:py-0 border-b sm:border-b-0 border-border/50">
                  <Search className="w-5 h-5 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Search for any medication..."
                    className="flex-1 sm:w-auto px-3 py-0 bg-transparent outline-none font-inter text-foreground placeholder:text-muted-foreground text-base"
                  />
                </div>
                <Button variant="hero" size="lg" className="m-3 sm:m-2 rounded-xl w-auto sm:w-auto flex-shrink-0">
                  <Search className="w-4 h-4 sm:hidden" />
                  <span className="hidden sm:inline">Search</span>
                  <span className="sm:hidden">Search Medications</span>
                </Button>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center gap-4 md:gap-6">
              {trustBadges.map((badge, index) => (
                <div key={index} className="flex items-center gap-2 bg-card/50 backdrop-blur-sm rounded-full px-3 py-1.5 border border-border/30">
                  <badge.icon className="w-4 h-4 md:w-5 md:h-5 text-accent" />
                  <span className="text-xs md:text-sm font-inter text-muted-foreground whitespace-nowrap">
                    {badge.text}
                  </span>
                </div>
              ))}
            </div>

            {/* Stats Row */}
            <div className="flex flex-wrap items-center gap-6 md:gap-8 pt-4 border-t border-border/50">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold font-inter text-foreground">{stat.value}</div>
                  <div className="text-xs md:text-sm text-muted-foreground font-inter">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Link to="/treatments">
                <Button variant="hero" size="lg" className="w-full sm:w-auto text-base px-8 py-6 rounded-xl">
                  Browse Treatments
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link to="/how-it-works">
                <Button variant="outline" size="lg" className="w-full sm:w-auto text-base px-8 py-6 rounded-xl border-2 border-primary/30 hover:border-primary hover:bg-primary/5">
                  How It Works
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Visual - Mobile & Desktop */}
          <div className="relative animate-fade-in stagger-2 order-1 lg:order-2">
            {/* Main Product Image Container */}
            <div className="relative">
              {/* Background Circle */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/8 to-primary/5 rounded-full scale-[0.85] blur-sm" />
              <div className="absolute inset-0 bg-gradient-to-tl from-accent/10 to-transparent rounded-full scale-90" />
              
              {/* Product Arrangement */}
              <div className="relative z-10 flex items-center justify-center p-4 md:p-8">
                <div className="grid grid-cols-2 gap-3 md:gap-6 max-w-[350px] md:max-w-none">
                  {products.map((product, index) => (
                    <div 
                      key={index}
                      className={`bg-card/90 backdrop-blur-sm rounded-2xl md:rounded-3xl p-3 md:p-4 shadow-card hover-lift border border-border/50 ${index === 1 ? 'mt-4 md:mt-8' : ''} ${index === 3 ? '-mt-2 md:-mt-4' : ''}`}
                      style={{ animationDelay: product.delay }}
                    >
                      <div className="w-20 h-20 md:w-28 md:h-28 mx-auto mb-2 flex items-center justify-center">
                        <img 
                          src={product.image} 
                          alt={product.label}
                          className="w-full h-full object-contain drop-shadow-lg"
                          loading="lazy"
                        />
                      </div>
                      <p className="text-[10px] md:text-xs text-center font-inter text-muted-foreground font-medium">{product.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating Card - Fast Delivery */}
              <div className="absolute top-0 right-0 md:top-4 md:right-0 bg-card/95 backdrop-blur-sm rounded-xl md:rounded-2xl p-3 md:p-4 shadow-lifted animate-float border border-border/50">
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-accent/20 flex items-center justify-center">
                    <Clock className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs md:text-sm font-inter font-semibold text-foreground">Fast Delivery</p>
                    <p className="text-[10px] md:text-xs text-muted-foreground">2-Day shipping</p>
                  </div>
                </div>
              </div>

              {/* Floating Card - Rating */}
              <div className="absolute bottom-4 left-0 md:bottom-8 md:-left-4 bg-card/95 backdrop-blur-sm rounded-xl md:rounded-2xl p-3 md:p-4 shadow-lifted animate-float border border-border/50" style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="flex items-center gap-0.5">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-3 h-3 md:w-4 md:h-4 text-amber fill-amber" />
                    ))}
                  </div>
                  <div className="text-xs md:text-sm font-inter text-foreground">
                    <span className="font-bold">4.9</span>
                    <span className="text-muted-foreground ml-1">(2,847)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0 h-16 md:h-24 bg-gradient-to-t from-secondary to-transparent" />
    </section>
  );
};

export default HeroSection;
