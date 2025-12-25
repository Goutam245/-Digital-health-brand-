import { ArrowRight, Shield, Truck, BadgeCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTABanner = () => {
  const trustItems = [
    { icon: Shield, text: "HIPAA Compliant" },
    { icon: Truck, text: "Free Shipping" },
    { icon: BadgeCheck, text: "Licensed Pharmacy" },
  ];

  return (
    <section className="section-padding gradient-teal relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-foreground/5 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-foreground/5 rounded-full translate-y-1/2 -translate-x-1/2" />
      
      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-primary-foreground mb-4">Ready to get started?</h2>
          <p className="text-xl text-primary-foreground/80 font-lora mb-8">
            Join thousands of satisfied patients who trust MedRx for affordable, convenient healthcare.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <Button variant="ctaLight" size="xl" className="w-full sm:w-auto group">
              Browse Treatments
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="heroOutline" 
              size="xl" 
              className="w-full sm:w-auto border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:border-primary-foreground/50"
            >
              Contact Us
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-10">
            {trustItems.map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <item.icon className="w-5 h-5 text-primary-foreground/70" />
                <span className="text-sm font-inter text-primary-foreground/70">
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
