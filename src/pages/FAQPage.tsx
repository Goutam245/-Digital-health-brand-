import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { Search, ChevronDown, Mail, Phone, MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const FAQPage = () => {
  const [activeCategory, setActiveCategory] = useState("getting-started");
  const [searchQuery, setSearchQuery] = useState("");
  const [openItems, setOpenItems] = useState<string[]>([]);

  const categories = [
    { id: "getting-started", name: "Getting Started" },
    { id: "ordering", name: "Ordering & Shipping" },
    { id: "medical", name: "Medical & Safety" },
    { id: "billing", name: "Account & Billing" },
    { id: "general", name: "General" },
  ];

  const faqs = {
    "getting-started": [
      {
        id: "gs1",
        question: "How do I get started with MedRx?",
        answer: "Getting started is simple! Browse our treatments, select one that fits your needs, and complete a brief online health questionnaire. A licensed provider will review your information and, if appropriate, prescribe your medication. It's delivered right to your door within 2-5 business days."
      },
      {
        id: "gs2",
        question: "Do I need a prescription?",
        answer: "Yes, all our medications require a prescription. However, you don't need to have one already – our licensed healthcare providers will evaluate your health information and issue a prescription if the treatment is appropriate for you."
      },
      {
        id: "gs3",
        question: "What if I'm not approved for treatment?",
        answer: "If our medical team determines that a treatment isn't right for you, you won't be charged. We'll provide feedback on why you weren't approved and may suggest alternative treatments or recommend you speak with your primary care physician."
      },
      {
        id: "gs4",
        question: "How long does the consultation take?",
        answer: "The online questionnaire typically takes 5-10 minutes to complete. Our providers usually review submissions and respond within 24 hours, though it can be faster during business hours."
      },
      {
        id: "gs5",
        question: "Can I use MedRx if I live outside the US?",
        answer: "Currently, MedRx only serves patients in the United States. We're licensed to provide telehealth services in all 50 states and can ship to any US address."
      }
    ],
    "ordering": [
      {
        id: "os1",
        question: "How much does shipping cost?",
        answer: "We offer FREE standard shipping on all orders. Standard shipping takes 2-5 business days. Expedited shipping options are available at checkout for an additional fee."
      },
      {
        id: "os2",
        question: "How is my medication packaged?",
        answer: "All medications are shipped in discreet, unmarked packaging with no indication of the contents. Temperature-sensitive medications are shipped with appropriate cold packs to ensure potency."
      },
      {
        id: "os3",
        question: "Can I track my order?",
        answer: "Yes! Once your order ships, you'll receive an email with tracking information. You can also track your order status anytime by logging into your account."
      },
      {
        id: "os4",
        question: "What if my medication is damaged or lost?",
        answer: "Contact our support team immediately. We'll work with the carrier to locate lost packages and will replace any damaged medications at no additional cost to you."
      },
      {
        id: "os5",
        question: "How do refills work?",
        answer: "You can set up automatic refills in your account settings. We'll process your refill and ship it so it arrives before you run out. You'll receive a reminder email 5 days before each shipment, and you can pause or cancel anytime."
      }
    ],
    "medical": [
      {
        id: "ms1",
        question: "Are your medications FDA approved?",
        answer: "Yes, all medications dispensed through MedRx are FDA-approved and sourced from licensed US pharmacies. We never source medications from overseas or unlicensed suppliers."
      },
      {
        id: "ms2",
        question: "Who are your healthcare providers?",
        answer: "All our providers are licensed, board-certified physicians in their respective states. They undergo thorough credentialing and ongoing training to ensure the highest quality of care."
      },
      {
        id: "ms3",
        question: "What if I experience side effects?",
        answer: "If you experience any concerning side effects, contact your primary care physician or seek emergency care if symptoms are severe. You can also message our medical team through your patient portal for guidance."
      },
      {
        id: "ms4",
        question: "Can I take these medications with my current prescriptions?",
        answer: "During your consultation, you'll provide information about your current medications. Our providers review this for potential interactions. Always inform us of any medication changes, and consult your primary care physician about your complete medication regimen."
      },
      {
        id: "ms5",
        question: "Is my health information secure?",
        answer: "Absolutely. We're fully HIPAA compliant and use bank-level encryption to protect your personal health information. We never sell your data to third parties."
      }
    ],
    "billing": [
      {
        id: "ab1",
        question: "Do you accept insurance?",
        answer: "Currently, we don't bill insurance directly. However, our transparent pricing is often comparable to or less than insurance copays. We provide detailed receipts you can submit to your insurance for potential reimbursement."
      },
      {
        id: "ab2",
        question: "What payment methods do you accept?",
        answer: "We accept all major credit cards (Visa, Mastercard, American Express, Discover), as well as HSA/FSA cards. Payment is processed securely through our encrypted payment system."
      },
      {
        id: "ab3",
        question: "Can I use my HSA or FSA?",
        answer: "Yes! Prescription medications from MedRx are eligible expenses for Health Savings Accounts (HSA) and Flexible Spending Accounts (FSA)."
      },
      {
        id: "ab4",
        question: "What's your refund policy?",
        answer: "If you're not approved for treatment, you won't be charged. For subscription medications, you can cancel anytime before your next shipment. Due to the nature of prescription medications, we cannot accept returns on shipped medications."
      },
      {
        id: "ab5",
        question: "Do you offer payment plans?",
        answer: "Yes, we offer flexible payment plans through Affirm for orders over $50. You can split your purchase into 3-12 monthly payments with 0% APR for qualifying customers."
      }
    ],
    "general": [
      {
        id: "gn1",
        question: "Is MedRx a legitimate pharmacy?",
        answer: "Yes, MedRx partners with licensed US pharmacies to dispense all medications. We're accredited by the Better Business Bureau (A+ rating) and certified by LegitScript. All our providers are licensed, board-certified physicians."
      },
      {
        id: "gn2",
        question: "How do I contact customer support?",
        answer: "You can reach our support team 24/7 via live chat on our website, by email at support@medrx.com, or by phone at 1-800-MEDRX. Our average response time is under 2 hours during business hours."
      },
      {
        id: "gn3",
        question: "Can I transfer my prescription from another pharmacy?",
        answer: "In most cases, yes! During the consultation process, you can request a prescription transfer. Our team will coordinate with your previous pharmacy to transfer your prescription."
      },
      {
        id: "gn4",
        question: "How do I update my account information?",
        answer: "Log into your account and navigate to 'Settings' to update your personal information, shipping address, or payment method. For health information updates, please contact our support team."
      },
      {
        id: "gn5",
        question: "Do you have a mobile app?",
        answer: "Yes! Download the MedRx app from the App Store or Google Play to manage your prescriptions, message your care team, track orders, and more – all from your phone."
      }
    ]
  };

  const toggleItem = (id: string) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const currentFaqs = faqs[activeCategory as keyof typeof faqs] || [];
  const filteredFaqs = searchQuery
    ? Object.values(faqs).flat().filter(faq => 
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : currentFaqs;

  return (
    <>
      <Helmet>
        <title>FAQ - MedRx | Frequently Asked Questions</title>
        <meta 
          name="description" 
          content="Find answers to common questions about MedRx telehealth services, ordering, shipping, medical safety, and billing. Get the information you need." 
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
                  HELP CENTER
                </span>
                <h1 className="mb-6">
                  Frequently Asked <span className="text-primary">Questions</span>
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground font-lora max-w-2xl mx-auto mb-8">
                  Find answers to common questions about our services, medications, and policies.
                </p>

                {/* Search */}
                <div className="relative max-w-xl mx-auto">
                  <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Search for answers..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-14 pr-6 py-4 bg-card rounded-2xl border border-border font-inter text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 shadow-elegant"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Content */}
          <section className="section-padding bg-card">
            <div className="container-custom">
              <div className="grid lg:grid-cols-4 gap-8">
                {/* Categories Sidebar */}
                {!searchQuery && (
                  <div className="lg:col-span-1">
                    <div className="sticky top-24 bg-secondary rounded-2xl p-4">
                      <h3 className="font-inter font-semibold text-foreground mb-4 px-2">Categories</h3>
                      <nav className="space-y-1">
                        {categories.map((category) => (
                          <button
                            key={category.id}
                            onClick={() => setActiveCategory(category.id)}
                            className={`w-full text-left px-4 py-3 rounded-xl font-inter text-sm transition-all duration-200 ${
                              activeCategory === category.id
                                ? "bg-primary text-primary-foreground font-medium"
                                : "text-muted-foreground hover:bg-card hover:text-foreground"
                            }`}
                          >
                            {category.name}
                          </button>
                        ))}
                      </nav>
                    </div>
                  </div>
                )}

                {/* FAQ List */}
                <div className={searchQuery ? "lg:col-span-4" : "lg:col-span-3"}>
                  {searchQuery && (
                    <p className="text-muted-foreground font-inter mb-6">
                      Showing {filteredFaqs.length} results for "{searchQuery}"
                    </p>
                  )}

                  <div className="space-y-4">
                    {filteredFaqs.map((faq) => (
                      <div
                        key={faq.id}
                        className="bg-secondary rounded-2xl overflow-hidden border border-border/50"
                      >
                        <button
                          onClick={() => toggleItem(faq.id)}
                          className="w-full flex items-center justify-between p-6 text-left"
                        >
                          <span className="font-inter font-medium text-foreground pr-4">{faq.question}</span>
                          <ChevronDown 
                            className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform duration-200 ${
                              openItems.includes(faq.id) ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                        {openItems.includes(faq.id) && (
                          <div className="px-6 pb-6 -mt-2">
                            <p className="text-muted-foreground font-lora leading-relaxed">{faq.answer}</p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                  {filteredFaqs.length === 0 && (
                    <div className="text-center py-12 bg-secondary rounded-2xl">
                      <p className="text-muted-foreground font-lora mb-4">No results found for your search.</p>
                      <Button 
                        variant="outline"
                        onClick={() => setSearchQuery("")}
                      >
                        Clear Search
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="section-padding bg-secondary">
            <div className="container-custom">
              <div className="text-center mb-12">
                <h2 className="mb-4">Still Have Questions?</h2>
                <p className="text-lg text-muted-foreground font-lora max-w-2xl mx-auto">
                  Can't find what you're looking for? Our support team is here to help.
                </p>
              </div>

              <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <a 
                  href="mailto:support@medrx.com"
                  className="bg-card rounded-2xl p-6 text-center hover-lift border border-border/50"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-7 h-7 text-primary" />
                  </div>
                  <h4 className="font-inter font-semibold text-foreground mb-2">Email Us</h4>
                  <p className="text-muted-foreground text-sm font-lora">support@medrx.com</p>
                </a>

                <a 
                  href="tel:1-800-MEDRX"
                  className="bg-card rounded-2xl p-6 text-center hover-lift border border-border/50"
                >
                  <div className="w-14 h-14 rounded-xl bg-accent/20 flex items-center justify-center mx-auto mb-4">
                    <Phone className="w-7 h-7 text-primary" />
                  </div>
                  <h4 className="font-inter font-semibold text-foreground mb-2">Call Us</h4>
                  <p className="text-muted-foreground text-sm font-lora">1-800-MEDRX</p>
                </a>

                <div className="bg-card rounded-2xl p-6 text-center hover-lift border border-border/50 cursor-pointer">
                  <div className="w-14 h-14 rounded-xl bg-sky/20 flex items-center justify-center mx-auto mb-4">
                    <MessageCircle className="w-7 h-7 text-primary" />
                  </div>
                  <h4 className="font-inter font-semibold text-foreground mb-2">Live Chat</h4>
                  <p className="text-muted-foreground text-sm font-lora">Available 24/7</p>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default FAQPage;
