import { Search, Video, Package } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Search,
      number: "1",
      title: "Choose Your Treatment",
      description: "Browse our selection of FDA-approved medications and find the right treatment for your needs.",
      color: "bg-primary",
    },
    {
      icon: Video,
      number: "2",
      title: "Consult Online",
      description: "Connect with a licensed healthcare provider from the comfort of your home. Quick, easy, and private.",
      color: "bg-accent",
    },
    {
      icon: Package,
      number: "3",
      title: "Get Delivered",
      description: "Your prescription is filled by our licensed pharmacy and shipped directly to your door.",
      color: "bg-sky",
    },
  ];

  return (
    <section id="how-it-works" className="section-padding bg-secondary relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-inter font-semibold text-primary mb-4">
            SIMPLE PROCESS
          </span>
          <h2 className="mb-4">How It Works</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-lora">
            Getting started is easy. Three simple steps to better health.
          </p>
        </div>

        <div className="relative">
          {/* Connection Line - Desktop Only */}
          <div className="hidden lg:block absolute top-20 left-1/4 right-1/4 h-0.5 border-t-2 border-dashed border-border" />

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <div
                key={index}
                className="text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Icon Circle */}
                <div className="relative inline-flex mb-8">
                  <div className={`w-20 h-20 ${step.color} rounded-full flex items-center justify-center shadow-elegant`}>
                    <step.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  {/* Step Number */}
                  <span className="absolute -bottom-2 -right-2 w-8 h-8 bg-card border-2 border-border rounded-full flex items-center justify-center font-inter font-bold text-sm text-foreground shadow-sm">
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold mb-3 font-inter">{step.title}</h3>
                <p className="text-muted-foreground font-lora leading-relaxed max-w-xs mx-auto">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
