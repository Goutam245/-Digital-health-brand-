import { ArrowRight } from "lucide-react";
import injectionPen from "@/assets/injection-pen.png";
import medicalVial from "@/assets/medical-vial.png";
import pumpBottle from "@/assets/pump-bottle.png";

const FeaturedTreatments = () => {
  const treatments = [
    {
      title: "Personalized GLP-1 Treatments",
      subtitle: "for weight loss",
      gradient: "from-[#1B5E4B] to-primary",
      badge: null,
      delay: "stagger-1",
      image: injectionPen,
    },
    {
      title: "Sermorelin",
      subtitle: "for muscle support",
      gradient: "from-[#D4A574] to-amber",
      badge: "Rx only",
      delay: "stagger-2",
      image: medicalVial,
    },
    {
      title: "NAD+",
      subtitle: "for energy and longevity",
      gradient: "from-[#2D4A7C] to-sky",
      badge: "Rx only",
      delay: "stagger-3",
      image: pumpBottle,
    },
  ];

  return (
    <section id="treatments" className="section-padding bg-secondary">
      <div className="container-custom">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="mb-4">Featured Treatments</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-lora">
            Discover our most popular treatments, backed by science and trusted by thousands.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {treatments.map((treatment, index) => (
            <div
              key={index}
              className={`group relative rounded-3xl overflow-hidden cursor-pointer hover-lift animate-fade-in-up ${treatment.delay}`}
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${treatment.gradient}`} />
              
              {/* Content */}
              <div className="relative z-10 p-8 lg:p-10 min-h-[400px] flex flex-col justify-between">
                {/* Badge */}
                {treatment.badge && (
                  <span className="self-end bg-card/20 backdrop-blur-sm text-primary-foreground text-xs font-inter font-medium px-3 py-1 rounded-full">
                    {treatment.badge}
                  </span>
                )}
                
                {/* Product Visual */}
                <div className="flex-1 flex items-center justify-center py-8">
                  <div className="w-40 h-40 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <img 
                      src={treatment.image} 
                      alt={treatment.title}
                      className="w-full h-full object-contain drop-shadow-2xl"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Text */}
                <div className="space-y-3">
                  <h3 className="text-2xl lg:text-3xl font-bold text-primary-foreground font-inter">
                    {treatment.title}
                  </h3>
                  <p className="text-primary-foreground/80 font-lora text-lg">
                    {treatment.subtitle}
                  </p>
                  
                  {/* CTA */}
                  <button className="inline-flex items-center gap-2 text-primary-foreground font-inter font-semibold mt-4 group-hover:gap-3 transition-all duration-300">
                    LEARN MORE
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedTreatments;
