
import { Heart, Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-blue-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-2 rounded-lg">
              <Heart className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">MediCore AI</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium">
              Home
            </a>
            <a href="#features" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium">
              Features
            </a>
            <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium">
              About
            </a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium">
              Contact
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-blue-100 animate-fade-in">
            <nav className="flex flex-col space-y-3">
              <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium px-2 py-1">
                Home
              </a>
              <a href="#features" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium px-2 py-1">
                Features
              </a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium px-2 py-1">
                About
              </a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium px-2 py-1">
                Contact
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
