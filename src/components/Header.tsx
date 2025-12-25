import { useState, useEffect } from "react";
import { Menu, X, Phone, User, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Treatments", href: "/treatments" },
    { name: "How It Works", href: "/how-it-works" },
    { name: "About", href: "/about" },
    { name: "FAQ", href: "/faq" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-card/95 backdrop-blur-md shadow-elegant py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl font-inter">M</span>
            </div>
            <span className="text-xl font-bold font-inter text-foreground">MedRx</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="font-inter font-medium text-foreground/80 hover:text-primary transition-colors duration-200"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:1-800-MEDRX"
              className="flex items-center gap-2 text-foreground/70 hover:text-primary transition-colors font-inter"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm">1-800-MEDRX</span>
            </a>
            <Button variant="ghost" size="icon">
              <User className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <ShoppingBag className="w-5 h-5" />
            </Button>
            <Button variant="hero" size="default">
              Start Consultation
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-card border-t border-border shadow-lifted animate-fade-in">
            <nav className="container-custom py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="font-inter font-medium text-foreground/80 hover:text-primary transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <hr className="border-border my-2" />
              <a
                href="tel:1-800-MEDRX"
                className="flex items-center gap-2 text-foreground/70 hover:text-primary transition-colors font-inter py-2"
              >
                <Phone className="w-4 h-4" />
                <span>1-800-MEDRX</span>
              </a>
              <Button variant="hero" className="mt-2 w-full">
                Start Consultation
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
