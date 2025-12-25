import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "The process was incredibly easy. I had my consultation done in 15 minutes and my medication arrived two days later. Life-changing service!",
      author: "Sarah M.",
      condition: "Weight Management",
      rating: 5,
    },
    {
      quote: "Finally, affordable healthcare without the hassle. The pharmacists are knowledgeable and the customer service is exceptional.",
      author: "Michael R.",
      condition: "Hormone Therapy",
      rating: 5,
    },
    {
      quote: "I was skeptical at first, but MedRx exceeded my expectations. Professional, discreet, and genuinely caring about my health.",
      author: "Jennifer L.",
      condition: "Wellness",
      rating: 5,
    },
  ];

  return (
    <section className="section-padding bg-secondary">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-inter font-semibold text-primary mb-4">
            TESTIMONIALS
          </span>
          <h2 className="mb-4">What Our Patients Say</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-lora">
            Join thousands of satisfied patients who trust MedRx for their healthcare needs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-8 shadow-elegant hover-lift animate-fade-in-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Quote Icon */}
              <Quote className="w-10 h-10 text-primary/20 mb-4" />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber text-amber" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-foreground font-lora mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-inter font-semibold">
                    {testimonial.author.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <p className="font-inter font-semibold text-foreground">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.condition}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
