import { Heart, Mail, Phone, MapPin, Twitter, Linkedin, Facebook, Instagram, Github, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const footerLinks = {
    product: [
      { name: "AI Diagnosis", href: "#features" },
      { name: "Lab Analysis", href: "#features" },
      { name: "Drug Interactions", href: "#features" },
      { name: "Patient Management", href: "#features" },
      { name: "API Access", href: "#pricing" }
    ],
    company: [
      { name: "About Us", href: "#about" },
      { name: "Careers", href: "#" },
      { name: "Press", href: "#" },
      { name: "Partners", href: "#" },
      { name: "Blog", href: "#" }
    ],
    support: [
      { name: "Help Center", href: "#" },
      { name: "Documentation", href: "#" },
      { name: "Contact Support", href: "#contact" },
      { name: "Training", href: "#" },
      { name: "Status", href: "#" }
    ],
    legal: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "HIPAA Compliance", href: "#" },
      { name: "Security", href: "#" },
      { name: "GDPR", href: "#" }
    ]
  };

  const socialLinks = [
    { name: "Twitter", icon: Twitter, href: "#" },
    { name: "LinkedIn", icon: Linkedin, href: "#" },
    { name: "Facebook", icon: Facebook, href: "#" },
    { name: "Instagram", icon: Instagram, href: "#" },
    { name: "GitHub", icon: Github, href: "#" }
  ];

  return (
    <footer className="bg-gray-900 text-white relative">
      {/* Back to top button */}
      <Button
        onClick={scrollToTop}
        variant="ghost"
        size="sm"
        className="absolute top-4 right-4 text-gray-400 hover:text-white hover:bg-gray-800"
      >
        <ArrowUp className="h-4 w-4" />
      </Button>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-2 rounded-lg">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold">MediCore AI</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              Empowering healthcare professionals with advanced AI technology for better patient outcomes 
              and more efficient medical practice management.
            </p>
            
            {/* Trust Badges */}
            <div className="flex flex-wrap gap-2 mb-6">
              <Badge className="bg-green-900 text-green-100 border-green-700">
                HIPAA Compliant
              </Badge>
              <Badge className="bg-blue-900 text-blue-100 border-blue-700">
                SOC 2 Type II
              </Badge>
              <Badge className="bg-purple-900 text-purple-100 border-purple-700">
                FDA Cleared
              </Badge>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-gray-400 hover:text-white transition-colors duration-200 p-2 hover:bg-gray-800 rounded-lg"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Product</h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Support</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Section */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex items-center space-x-3">
              <Phone className="h-5 w-5 text-blue-400 flex-shrink-0" />
              <div>
                <p className="text-sm text-gray-400">Phone</p>
                <p className="text-white">+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="h-5 w-5 text-blue-400 flex-shrink-0" />
              <div>
                <p className="text-sm text-gray-400">Email</p>
                <p className="text-white">contact@medicore.ai</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="h-5 w-5 text-blue-400 flex-shrink-0" />
              <div>
                <p className="text-sm text-gray-400">Address</p>
                <p className="text-white">123 Healthcare Ave, Medical District, NY 10001</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                © {currentYear} MediCore AI. All rights reserved. Designed for healthcare excellence.
              </p>
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <span className="text-gray-400">Made with</span>
              <Heart className="h-4 w-4 text-red-500" />
              <span className="text-gray-400">for healthcare professionals</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 