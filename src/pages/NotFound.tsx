import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Home, ArrowLeft, Heart, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 flex items-center justify-center px-4">
      <Card className="w-full max-w-md shadow-xl border-0">
        <CardContent className="p-8 text-center">
          {/* Error Icon */}
          <div className="mx-auto w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mb-6">
            <AlertTriangle className="h-10 w-10 text-red-600" />
          </div>

          {/* Error Code */}
          <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
          
          {/* Error Message */}
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">
            Page Not Found
          </h2>
          
          <p className="text-gray-600 mb-6 leading-relaxed">
            The page you're looking for doesn't exist or has been moved. 
            Let's get you back to health and wellness.
          </p>

          {/* Healthcare Branding */}
          <div className="flex items-center justify-center space-x-2 mb-8 text-blue-600">
            <Heart className="h-5 w-5" />
            <span className="font-medium">MediCore AI</span>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <Button asChild className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800">
              <Link to="/" className="flex items-center justify-center space-x-2">
                <Home className="h-4 w-4" />
                <span>Go to Homepage</span>
              </Link>
            </Button>
            
            <Button 
              variant="outline" 
              className="w-full"
              onClick={() => window.history.back()}
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Go Back
            </Button>
          </div>

          {/* Additional Help */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-500 mb-2">Need help?</p>
            <div className="flex justify-center space-x-4 text-sm">
              <a 
                href="#contact" 
                className="text-blue-600 hover:text-blue-800 transition-colors"
              >
                Contact Support
              </a>
              <a 
                href="#features" 
                className="text-blue-600 hover:text-blue-800 transition-colors"
              >
                Explore Features
              </a>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default NotFound;
