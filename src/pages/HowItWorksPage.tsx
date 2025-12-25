import { Helmet } from "react-helmet-async";
import { Search, Video, Package, CheckCircle, Clock, Shield, Headphones, ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTABanner from "@/components/CTABanner";

const HowItWorksPage = () => {
  const steps = [
    {
      number: "01",
      icon: Search,
      title: "Choose Your Treatment",
      description: "Browse our catalog of FDA-approved medications and select the treatment that fits your health goals. Not sure where to start? Take our free health assessment to get personalized recommendations.",
      details: [
        "Over 50 FDA-approved treatments available",
        "Categories include weight loss, hormone therapy, wellness & more",
        "Clear pricing with no hidden fees",
        "Free health assessment available"
      ],
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop"
    },
    {
      number: "02",
      icon: Video,
      title: "Online Consultation",
      description: "Complete a brief medical questionnaire and connect with a licensed healthcare provider. Our providers review your health history and ensure the treatment is right for you.",
      details: [
        "Simple online questionnaire (5-10 minutes)",
        "Board-certified physicians in all 50 states",
        "Secure, HIPAA-compliant platform",
        "Most consultations approved within 24 hours"
      ],
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop"
    },
    {
      number: "03",
      icon: Package,
      title: "Fast, Discreet Delivery",
      description: "Once approved, your prescription is filled by our licensed pharmacy and shipped directly to your door in discreet packaging. Free 2-day shipping on all orders.",
      details: [
        "Free 2-day shipping nationwide",
        "Discreet, unmarked packaging",
        "Temperature-controlled when needed",
        "Automatic refills available"
      ],
      image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=600&h=400&fit=crop"
    }
  ];

  const benefits = [
    {
      icon: Clock,
      title: "Save Time",
      description: "No waiting rooms or pharmacy lines. Get your medications without leaving home."
    },
    {
      icon: Shield,
      title: "100% Secure",
      description: "HIPAA-compliant platform with bank-level encryption to protect your data."
    },
    {
      icon: Headphones,
      title: "Ongoing Support",
      description: "24/7 customer support and direct messaging with your care team."
    },
    {
      icon: CheckCircle,
      title: "Quality Guaranteed",
      description: "FDA-approved medications from licensed US pharmacies only."
    }
  ];

  const faqs = [
    {
      question: "How long does the consultation take?",
      answer: "The online questionnaire takes about 5-10 minutes. A licensed provider reviews your information and typically responds within 24 hours."
    },
    {
      question: "Do I need insurance?",
      answer: "No insurance is required. Our transparent pricing includes the medication, provider consultation, and shipping. We also offer payment plans."
    },
    {
      question: "Is this legitimate?",
      answer: "Yes! MedRx is a licensed telehealth platform. All providers are board-certified physicians, and medications are dispensed from licensed US pharmacies."
    },
    {
      question: "How do refills work?",
      answer: "You can set up automatic refills so you never run out. We'll remind you before each shipment and you can pause or cancel anytime."
    }
  ];

  return (
    <>
      <Helmet>
        <title>How It Works - MedRx | Simple 3-Step Process</title>
        <meta 
          name="description" 
          content="Learn how MedRx works: Choose your treatment, consult online with a licensed provider, and get your medications delivered. Simple, secure, and affordable healthcare." 
        />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main>
          {/* Hero Section */}
          <section className="pt-32 pb-20 gradient-hero relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
            <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
            
            <div className="container-custom relative z-10">
              <div className="max-w-3xl mx-auto text-center">
                <span className="inline-block text-sm font-inter font-semibold text-primary mb-4 bg-primary/10 px-4 py-1.5 rounded-full">
                  SIMPLE PROCESS
                </span>
                <h1 className="mb-6">
                  Healthcare Made <span className="text-primary">Simple</span>
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground font-lora max-w-2xl mx-auto mb-8">
                  Getting your medications has never been easier. Our streamlined process gets you from consultation to delivery in just a few days.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/treatments">
                    <Button variant="hero" size="lg" className="w-full sm:w-auto text-base px-8 py-6 rounded-xl">
                      Start Your Consultation
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </Link>
                  <Button variant="outline" size="lg" className="w-full sm:w-auto text-base px-8 py-6 rounded-xl border-2">
                    <Play className="w-5 h-5 mr-2" />
                    Watch Video
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Steps Section */}
          <section className="section-padding bg-card">
            <div className="container-custom">
              <div className="space-y-24">
                {steps.map((step, index) => (
                  <div 
                    key={index}
                    className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
                  >
                    {/* Content */}
                    <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                      <div className="flex items-center gap-4">
                        <span className="text-6xl lg:text-7xl font-bold font-inter text-primary/20">{step.number}</span>
                        <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center">
                          <step.icon className="w-8 h-8 text-primary-foreground" />
                        </div>
                      </div>
                      <h2 className="text-3xl lg:text-4xl font-bold font-inter text-foreground">{step.title}</h2>
                      <p className="text-lg text-muted-foreground font-lora leading-relaxed">{step.description}</p>
                      <ul className="space-y-3">
                        {step.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                            <span className="text-foreground/80 font-inter">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Image */}
                    <div className={`relative ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                      <div className="relative rounded-3xl overflow-hidden shadow-lifted">
                        <img 
                          src={step.image} 
                          alt={step.title}
                          className="w-full h-[300px] lg:h-[400px] object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
                      </div>
                      {/* Decorative Element */}
                      <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/20 rounded-3xl -z-10" />
                      <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/10 rounded-full -z-10" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Benefits Grid */}
          <section className="section-padding bg-secondary">
            <div className="container-custom">
              <div className="text-center mb-16">
                <span className="inline-block text-sm font-inter font-semibold text-primary mb-4">
                  WHY CHOOSE MEDRX
                </span>
                <h2 className="mb-4">The MedRx Advantage</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-lora">
                  Experience healthcare that puts you first. Here's what sets us apart.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {benefits.map((benefit, index) => (
                  <div 
                    key={index}
                    className="bg-card rounded-2xl p-6 shadow-card border border-border/50 hover-lift animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                      <benefit.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold font-inter text-foreground mb-2">{benefit.title}</h3>
                    <p className="text-muted-foreground font-lora text-sm">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="section-padding bg-card">
            <div className="container-custom">
              <div className="max-w-3xl mx-auto">
                <div className="text-center mb-12">
                  <span className="inline-block text-sm font-inter font-semibold text-primary mb-4">
                    COMMON QUESTIONS
                  </span>
                  <h2>Frequently Asked Questions</h2>
                </div>

                <div className="space-y-6">
                  {faqs.map((faq, index) => (
                    <div 
                      key={index}
                      className="bg-secondary rounded-2xl p-6 border border-border/50"
                    >
                      <h4 className="font-inter font-semibold text-foreground mb-3">{faq.question}</h4>
                      <p className="text-muted-foreground font-lora">{faq.answer}</p>
                    </div>
                  ))}
                </div>

                <div className="text-center mt-8">
                  <Link to="/faq">
                    <Button variant="outline" className="rounded-xl">
                      View All FAQs
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
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

export default HowItWorksPage;
