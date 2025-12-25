import { BadgeCheck, DollarSign, Zap, Lock } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: BadgeCheck,
      title: "Licensed Pharmacists",
      description: "All medications are dispensed by licensed, US-based pharmacists who review every prescription.",
      color: "bg-primary/10 text-primary",
    },
    {
      icon: DollarSign,
      title: "Affordable Pricing",
      description: "No insurance required. We offer transparent, competitive pricing on all medications.",
      color: "bg-accent/20 text-accent",
    },
    {
      icon: Zap,
      title: "Fast Shipping",
      description: "Most orders ship within 24 hours. Free delivery on orders over $50.",
      color: "bg-amber/20 text-amber",
    },
    {
      icon: Lock,
      title: "Private & Secure",
      description: "Your health information is protected with bank-level encryption. Discreet packaging.",
      color: "bg-sky/20 text-sky",
    },
  ];

  return (
    <section id="about" className="section-padding bg-card">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-inter font-semibold text-primary mb-4">
            WHY CHOOSE US
          </span>
          <h2 className="mb-4">The MedRx Difference</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-lora">
            We're committed to making healthcare accessible, affordable, and convenient.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-2xl p-8 hover-lift animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className={`w-14 h-14 ${benefit.color} rounded-xl flex items-center justify-center mb-6`}>
                <benefit.icon className="w-7 h-7" />
              </div>

              {/* Content */}
              <h4 className="text-lg font-semibold text-foreground font-inter mb-3">
                {benefit.title}
              </h4>
              <p className="text-sm text-muted-foreground font-lora leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
