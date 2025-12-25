import { ArrowRight } from "lucide-react";

const ProductsGrid = () => {
  const products = [
    {
      name: "MIC+B12",
      subtitle: "for mood and energy",
      color: "bg-amber/20",
      iconColor: "text-amber",
    },
    {
      name: "Hormone Therapy",
      subtitle: "for women",
      color: "bg-coral/20",
      iconColor: "text-coral",
    },
    {
      name: "Glutathione",
      subtitle: "for antioxidant support",
      color: "bg-mint/20",
      iconColor: "text-primary",
    },
    {
      name: "Skin Care",
      subtitle: "with NAD+",
      color: "bg-sky/20",
      iconColor: "text-sky",
    },
  ];

  return (
    <section className="section-padding bg-card">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="mb-4">More Treatments</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-lora">
            Explore our full range of personalized healthcare solutions.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="group bg-card border border-border rounded-2xl p-6 hover-lift cursor-pointer animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Product Icon */}
              <div className={`w-16 h-16 ${product.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <div className={`w-8 h-10 bg-current ${product.iconColor} opacity-50 rounded-md`} />
              </div>

              {/* Content */}
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="text-lg font-semibold text-foreground font-inter mb-1">
                    {product.name}
                  </h4>
                  <p className="text-sm text-muted-foreground font-lora">
                    {product.subtitle}
                  </p>
                </div>
                <button className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground group-hover:border-primary group-hover:text-primary group-hover:bg-primary/5 transition-all duration-300">
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsGrid;
