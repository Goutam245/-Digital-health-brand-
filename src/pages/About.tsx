import { Helmet } from "react-helmet-async";
import { Users, Award, Heart, Target, Shield, Zap, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTABanner from "@/components/CTABanner";

const About = () => {
  const stats = [
    { value: "50,000+", label: "Patients Served", icon: Users },
    { value: "98%", label: "Satisfaction Rate", icon: Heart },
    { value: "50", label: "States Covered", icon: MapPin },
    { value: "24/7", label: "Support Available", icon: Zap },
  ];

  const values = [
    {
      icon: Heart,
      title: "Patient-First Care",
      description: "Every decision we make starts with one question: How does this improve our patients' lives? Your health and satisfaction are our top priority."
    },
    {
      icon: Shield,
      title: "Trust & Transparency",
      description: "We believe in complete transparency. From pricing to medication sourcing, you'll always know exactly what you're getting with MedRx."
    },
    {
      icon: Target,
      title: "Accessibility",
      description: "Quality healthcare shouldn't be a luxury. We're committed to making prescription medications affordable and accessible to everyone."
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "We leverage cutting-edge technology to streamline the healthcare experience, making it faster and more convenient than ever before."
    }
  ];

  const team = [
    {
      name: "Dr. Sarah Chen, MD",
      role: "Chief Medical Officer",
      bio: "Board-certified physician with 15+ years experience in internal medicine and telehealth.",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&face"
    },
    {
      name: "Michael Roberts",
      role: "CEO & Co-Founder",
      bio: "Former healthcare executive passionate about making quality care accessible to all Americans.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&face"
    },
    {
      name: "Dr. James Wilson, PharmD",
      role: "Chief Pharmacy Officer",
      bio: "Licensed pharmacist with expertise in medication therapy management and patient safety.",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&face"
    },
    {
      name: "Emily Thompson",
      role: "VP of Patient Experience",
      bio: "Dedicated to ensuring every patient receives personalized, compassionate care throughout their journey.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&face"
    }
  ];

  const milestones = [
    { year: "2019", event: "MedRx founded with a mission to make healthcare accessible" },
    { year: "2020", event: "Launched telehealth platform and served first 1,000 patients" },
    { year: "2021", event: "Expanded to all 50 states, reached 10,000 patients" },
    { year: "2022", event: "Introduced weight loss and hormone therapy programs" },
    { year: "2023", event: "Reached 50,000+ patients, launched mobile app" },
    { year: "2024", event: "Achieved 98% patient satisfaction, expanded treatment catalog" },
  ];

  return (
    <>
      <Helmet>
        <title>About Us - MedRx | Our Mission & Team</title>
        <meta 
          name="description" 
          content="Learn about MedRx's mission to make healthcare accessible and affordable. Meet our team of licensed physicians and pharmacists dedicated to your health." 
        />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main>
          {/* Hero Section */}
          <section className="pt-32 pb-20 gradient-hero relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
            <div className="container-custom relative z-10">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <span className="inline-block text-sm font-inter font-semibold text-primary mb-4 bg-primary/10 px-4 py-1.5 rounded-full">
                    OUR STORY
                  </span>
                  <h1 className="mb-6">
                    Reimagining <span className="text-primary">Healthcare</span> for Everyone
                  </h1>
                  <p className="text-lg md:text-xl text-muted-foreground font-lora mb-8 leading-relaxed">
                    We started MedRx with a simple belief: everyone deserves access to quality healthcare without the hassle of traditional pharmacy visits, long wait times, or confusing insurance processes.
                  </p>
                  <p className="text-muted-foreground font-lora leading-relaxed">
                    Today, we've helped over 50,000 patients access the medications they need, delivered right to their door. Our team of licensed physicians and pharmacists work tirelessly to ensure you receive safe, effective treatments with the convenience you deserve.
                  </p>
                </div>
                <div className="relative">
                  <div className="rounded-3xl overflow-hidden shadow-lifted">
                    <img 
                      src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop"
                      alt="Modern healthcare"
                      className="w-full h-[400px] object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-6 -left-6 bg-card rounded-2xl p-6 shadow-lifted">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                        <Award className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="text-2xl font-bold font-inter text-foreground">A+ Rating</p>
                        <p className="text-sm text-muted-foreground">BBB Accredited</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="py-16 bg-primary">
            <div className="container-custom">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <stat.icon className="w-8 h-8 text-primary-foreground/60 mx-auto mb-3" />
                    <div className="text-4xl lg:text-5xl font-bold font-inter text-primary-foreground mb-2">
                      {stat.value}
                    </div>
                    <div className="text-primary-foreground/80 font-inter">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Mission & Values */}
          <section className="section-padding bg-card">
            <div className="container-custom">
              <div className="text-center mb-16">
                <span className="inline-block text-sm font-inter font-semibold text-primary mb-4">
                  OUR VALUES
                </span>
                <h2 className="mb-4">What Drives Us</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-lora">
                  Our core values guide every decision we make and every patient we serve.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {values.map((value, index) => (
                  <div 
                    key={index}
                    className="bg-secondary rounded-2xl p-6 hover-lift animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                      <value.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold font-inter text-foreground mb-3">{value.title}</h3>
                    <p className="text-muted-foreground font-lora text-sm leading-relaxed">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Timeline */}
          <section className="section-padding bg-secondary">
            <div className="container-custom">
              <div className="text-center mb-16">
                <span className="inline-block text-sm font-inter font-semibold text-primary mb-4">
                  OUR JOURNEY
                </span>
                <h2>Milestones</h2>
              </div>

              <div className="max-w-3xl mx-auto">
                <div className="relative">
                  {/* Timeline Line */}
                  <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-1/2" />
                  
                  {milestones.map((milestone, index) => (
                    <div 
                      key={index}
                      className={`relative flex items-center gap-8 mb-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                    >
                      <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                        <div className="bg-card rounded-2xl p-6 shadow-card ml-12 md:ml-0">
                          <span className="text-2xl font-bold font-inter text-primary">{milestone.year}</span>
                          <p className="text-muted-foreground font-lora mt-2">{milestone.event}</p>
                        </div>
                      </div>
                      <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary rounded-full md:-translate-x-1/2 z-10" />
                      <div className="flex-1 hidden md:block" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Team Section */}
          <section className="section-padding bg-card">
            <div className="container-custom">
              <div className="text-center mb-16">
                <span className="inline-block text-sm font-inter font-semibold text-primary mb-4">
                  LEADERSHIP
                </span>
                <h2 className="mb-4">Meet Our Team</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-lora">
                  A dedicated team of healthcare professionals committed to your wellbeing.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {team.map((member, index) => (
                  <div 
                    key={index}
                    className="bg-secondary rounded-3xl overflow-hidden hover-lift animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="h-64 overflow-hidden">
                      <img 
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="font-inter font-semibold text-foreground text-lg">{member.name}</h3>
                      <p className="text-primary font-inter text-sm mb-3">{member.role}</p>
                      <p className="text-muted-foreground font-lora text-sm">{member.bio}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Certifications */}
          <section className="py-16 bg-secondary border-t border-border">
            <div className="container-custom">
              <div className="text-center mb-12">
                <h3 className="text-xl font-inter font-semibold text-foreground">Licensed & Accredited</h3>
              </div>
              <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-card shadow-card flex items-center justify-center mx-auto mb-2">
                    <Shield className="w-8 h-8 text-primary" />
                  </div>
                  <p className="text-sm text-muted-foreground font-inter">HIPAA Compliant</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-card shadow-card flex items-center justify-center mx-auto mb-2">
                    <Award className="w-8 h-8 text-primary" />
                  </div>
                  <p className="text-sm text-muted-foreground font-inter">BBB A+ Rating</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-card shadow-card flex items-center justify-center mx-auto mb-2">
                    <Target className="w-8 h-8 text-primary" />
                  </div>
                  <p className="text-sm text-muted-foreground font-inter">LegitScript Certified</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-card shadow-card flex items-center justify-center mx-auto mb-2">
                    <Users className="w-8 h-8 text-primary" />
                  </div>
                  <p className="text-sm text-muted-foreground font-inter">Board Certified MDs</p>
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

export default About;
