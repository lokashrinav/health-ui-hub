
import { ArrowRight, Shield, Zap, Users } from "lucide-react";

const Hero = () => {
  const handleTryModel = () => {
    // Replace this URL with your actual model site URL
    window.open("https://your-model-site.com", "_blank");
  };

  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-blue-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Revolutionary
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800"> AI Healthcare</span>
            <br />
            at Your Fingertips
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Experience the future of medical diagnosis and treatment recommendations with our cutting-edge AI model. 
            Trusted by healthcare professionals worldwide.
          </p>
          
          {/* Main CTA Button */}
          <button
            onClick={handleTryModel}
            className="group bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg inline-flex items-center space-x-3 mb-12"
          >
            <span>Try Our AI Model</span>
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-500">
            <div className="flex items-center space-x-2">
              <Shield className="h-5 w-5 text-green-500" />
              <span>HIPAA Compliant</span>
            </div>
            <div className="flex items-center space-x-2">
              <Zap className="h-5 w-5 text-yellow-500" />
              <span>Instant Results</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="h-5 w-5 text-blue-500" />
              <span>10,000+ Healthcare Professionals</span>
            </div>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-blue-100">
            <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Zap className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Lightning Fast</h3>
            <p className="text-gray-600">Get accurate medical insights in seconds, not hours. Our AI processes complex medical data instantly.</p>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-blue-100">
            <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Shield className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Secure & Private</h3>
            <p className="text-gray-600">Your medical data is protected with enterprise-grade security and full HIPAA compliance.</p>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-blue-100">
            <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Users className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Expert Validated</h3>
            <p className="text-gray-600">Trained on millions of medical cases and validated by leading healthcare professionals worldwide.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
