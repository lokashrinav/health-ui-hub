import { ArrowRight, Play, Shield, Star, Users, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Hero = () => {
  const handleTryModel = () => {
    window.open("https://your-model-site.com", "_blank");
  };

  const handleWatchDemo = () => {
    // Add video player logic here
  };

  return (
    <section className="bg-gradient-to-b from-blue-50/50 via-white to-white py-20 sm:py-28">
      <div className="container mx-auto px-4 text-center">
        <Badge
          variant="outline"
          className="mb-6 border-blue-200 bg-blue-50 text-blue-700 font-medium py-1.5 px-4 rounded-full"
        >
          <Star className="h-4 w-4 mr-2 text-blue-500" />
          Trusted by 10,000+ Healthcare Professionals
        </Badge>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-tight tracking-tighter">
          Revolutionary{" "}
          <span className="text-blue-600">AI Healthcare</span>
          <br />
          at Your Fingertips
        </h1>

        <p className="mt-6 mx-auto max-w-3xl text-lg sm:text-xl text-gray-600 leading-relaxed">
          Experience the future of medical diagnosis and treatment
          recommendations with our cutting-edge AI model. Trusted by healthcare
          professionals worldwide for accurate, instant, and secure medical
          insights.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            onClick={handleTryModel}
            size="lg"
            className="group bg-blue-600 hover:bg-blue-700 text-white font-semibold py-6 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center space-x-3"
          >
            <span>Try Our AI Model</span>
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>

          <Button
            onClick={handleWatchDemo}
            variant="outline"
            size="lg"
            className="group border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 font-semibold py-6 px-8 rounded-full text-lg transition-all duration-300 inline-flex items-center space-x-3"
          >
            <Play className="h-5 w-5 text-gray-500 group-hover:text-gray-700 transition-colors" />
            <span>Watch Demo</span>
          </Button>
        </div>

        <div className="mt-20 flex flex-wrap justify-center items-center gap-x-8 sm:gap-x-12 gap-y-4 text-sm text-gray-500">
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
    </section>
  );
};

export default Hero;
