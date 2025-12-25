import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    treatments: [
      { name: "Weight Loss", href: "#" },
      { name: "Hormone Therapy", href: "#" },
      { name: "Wellness", href: "#" },
      { name: "Skin Care", href: "#" },
    ],
    company: [
      { name: "About Us", href: "#" },
      { name: "How It Works", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Careers", href: "#" },
    ],
    support: [
      { name: "FAQ", href: "#faq" },
      { name: "Contact Us", href: "#" },
      { name: "Shipping Info", href: "#" },
      { name: "Returns", href: "#" },
    ],
    legal: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "Refund Policy", href: "#" },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: "#" },
    { icon: Twitter, href: "#" },
    { icon: Instagram, href: "#" },
    { icon: Linkedin, href: "#" },
  ];

  return (
    <footer className="bg-foreground text-primary-foreground">
      {/* Main Footer */}
      <div className="container-custom py-16 lg:py-20">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl font-inter">M</span>
              </div>
              <span className="text-xl font-bold font-inter">MedRx</span>
            </div>
            <p className="text-primary-foreground/60 font-lora mb-6 max-w-xs">
              Making healthcare accessible, affordable, and convenient for everyone.
            </p>
            <div className="space-y-3">
              <a href="tel:1-800-MEDRX" className="flex items-center gap-3 text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                <Phone className="w-4 h-4" />
                <span className="font-inter text-sm">1-800-MEDRX</span>
              </a>
              <a href="mailto:support@medrx.com" className="flex items-center gap-3 text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                <Mail className="w-4 h-4" />
                <span className="font-inter text-sm">support@medrx.com</span>
              </a>
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h5 className="font-inter font-semibold mb-4 text-sm uppercase tracking-wide">Treatments</h5>
            <ul className="space-y-3">
              {footerLinks.treatments.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-primary-foreground/60 hover:text-primary-foreground transition-colors text-sm font-lora">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="font-inter font-semibold mb-4 text-sm uppercase tracking-wide">Company</h5>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-primary-foreground/60 hover:text-primary-foreground transition-colors text-sm font-lora">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="font-inter font-semibold mb-4 text-sm uppercase tracking-wide">Support</h5>
            <ul className="space-y-3">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-primary-foreground/60 hover:text-primary-foreground transition-colors text-sm font-lora">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="font-inter font-semibold mb-4 text-sm uppercase tracking-wide">Legal</h5>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-primary-foreground/60 hover:text-primary-foreground transition-colors text-sm font-lora">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container-custom py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/50 text-sm font-lora text-center md:text-left">
            © {new Date().getFullYear()} MedRx. All rights reserved. This site provides information only. Consult your healthcare provider.
          </p>
          
          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center text-primary-foreground/60 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
