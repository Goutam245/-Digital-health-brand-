import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Do I need insurance to use MedRx?",
      answer: "No, insurance is not required. We offer transparent, affordable pricing on all medications. Many patients find our prices competitive with or better than their insurance copays.",
    },
    {
      question: "How does the online consultation work?",
      answer: "After selecting your treatment, you'll complete a brief health questionnaire. A licensed healthcare provider reviews your information and, if appropriate, writes a prescription. The entire process typically takes 15-30 minutes.",
    },
    {
      question: "What is your shipping policy?",
      answer: "Most orders ship within 24 hours from our licensed pharmacy. Standard shipping is 2-3 business days, and we offer free shipping on orders over $50. All packages are shipped in discreet packaging.",
    },
    {
      question: "Are your medications FDA approved?",
      answer: "Yes, all medications dispensed by MedRx are FDA-approved and sourced from licensed US manufacturers. Our pharmacy is fully licensed and regularly inspected.",
    },
    {
      question: "How do I get started?",
      answer: "Simply browse our treatments, select the one that interests you, and start your free consultation. Our healthcare providers will review your information and determine if the treatment is right for you.",
    },
  ];

  return (
    <section id="faq" className="section-padding bg-card">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block text-sm font-inter font-semibold text-primary mb-4">
              FAQ
            </span>
            <h2 className="mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground font-lora">
              Find answers to common questions about our services.
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-secondary border border-border rounded-xl px-6 data-[state=open]:shadow-elegant transition-shadow duration-300"
              >
                <AccordionTrigger className="text-left font-inter font-semibold text-foreground hover:text-primary py-5 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground font-lora pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
