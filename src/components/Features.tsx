
import { Brain, Heart, Microscope, Pill, Stethoscope, Users } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Diagnosis",
      description: "Advanced machine learning algorithms analyze symptoms and medical history for accurate preliminary diagnoses.",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: Heart,
      title: "Cardiovascular Analysis",
      description: "Specialized models for heart health assessment, ECG analysis, and cardiovascular risk prediction.",
      color: "bg-red-100 text-red-600"
    },
    {
      icon: Microscope,
      title: "Lab Result Interpretation",
      description: "Intelligent analysis of laboratory results with detailed explanations and recommendations.",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: Pill,
      title: "Drug Interaction Checker",
      description: "Comprehensive medication analysis to prevent dangerous drug interactions and optimize treatment.",
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: Stethoscope,
      title: "Clinical Decision Support",
      description: "Evidence-based recommendations to assist healthcare providers in making informed decisions.",
      color: "bg-yellow-100 text-yellow-600"
    },
    {
      icon: Users,
      title: "Patient Management",
      description: "Streamlined patient data management with AI-driven insights for personalized care plans.",
      color: "bg-indigo-100 text-indigo-600"
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Healthcare AI Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our advanced AI platform offers a complete suite of medical tools designed to enhance healthcare delivery and improve patient outcomes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 group"
            >
              <div className={`w-12 h-12 rounded-lg ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
