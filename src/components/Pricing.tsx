import { Check, Star, Zap, Shield, Users, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(true);

  const plans = [
    {
      name: "Starter",
      description: "Perfect for individual healthcare professionals",
      price: isAnnual ? 29 : 39,
      features: [
        "AI-powered diagnosis support",
        "Basic lab result interpretation",
        "Up to 100 patient records",
        "Email support",
        "HIPAA compliance",
        "Mobile app access"
      ],
      icon: Shield,
      popular: false,
      color: "border-blue-200 bg-blue-50"
    },
    {
      name: "Professional",
      description: "Ideal for small clinics and medical practices",
      price: isAnnual ? 99 : 129,
      features: [
        "Everything in Starter",
        "Advanced cardiovascular analysis",
        "Drug interaction checker",
        "Up to 1,000 patient records",
        "Priority support",
        "Custom integrations",
        "Analytics dashboard",
        "Team collaboration tools"
      ],
      icon: Users,
      popular: true,
      color: "border-blue-500 bg-blue-100"
    },
    {
      name: "Enterprise",
      description: "For large hospitals and healthcare systems",
      price: isAnnual ? 299 : 399,
      features: [
        "Everything in Professional",
        "Unlimited patient records",
        "Custom AI model training",
        "24/7 dedicated support",
        "Advanced analytics & reporting",
        "API access",
        "White-label solutions",
        "On-premise deployment",
        "Custom compliance features"
      ],
      icon: Crown,
      popular: false,
      color: "border-purple-200 bg-purple-50"
    }
  ];

  const handleGetStarted = (planName: string) => {
    // Add your signup logic here
    console.log(`Starting signup for ${planName} plan`);
  };

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-200 border-green-200">
            <Zap className="h-3 w-3 mr-1" />
            Save 25% with Annual Plans
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Choose Your Plan
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Flexible pricing options designed for healthcare professionals at every level. 
            Start free and scale as you grow.
          </p>
        </div>

        {/* Billing Toggle */}
        <div className="flex justify-center items-center space-x-4 mb-12">
          <span className={`text-sm font-medium ${!isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>
            Monthly
          </span>
          <Switch
            checked={isAnnual}
            onCheckedChange={setIsAnnual}
            className="data-[state=checked]:bg-blue-600"
          />
          <span className={`text-sm font-medium ${isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>
            Annual
          </span>
          {isAnnual && (
            <Badge className="bg-green-100 text-green-800 border-green-200">
              Save 25%
            </Badge>
          )}
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative ${plan.popular ? 'scale-105 shadow-2xl border-blue-500' : 'hover:shadow-xl'} transition-all duration-300 ${plan.color}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-blue-600 text-white border-blue-600">
                    <Star className="h-3 w-3 mr-1" />
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4">
                  <div className={`w-12 h-12 rounded-lg ${plan.popular ? 'bg-blue-600' : 'bg-gray-200'} flex items-center justify-center`}>
                    <plan.icon className={`h-6 w-6 ${plan.popular ? 'text-white' : 'text-gray-600'}`} />
                  </div>
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900">{plan.name}</CardTitle>
                <CardDescription className="text-gray-600">{plan.description}</CardDescription>
              </CardHeader>
              
              <CardContent>
                {/* Price */}
                <div className="text-center mb-6">
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-gray-900">${plan.price}</span>
                    <span className="text-gray-500 ml-1">/month</span>
                  </div>
                  {isAnnual && (
                    <p className="text-sm text-green-600 mt-1">Billed annually</p>
                  )}
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button 
                  onClick={() => handleGetStarted(plan.name)}
                  className={`w-full ${plan.popular 
                    ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                    : 'bg-white hover:bg-gray-50 text-gray-900 border border-gray-300'
                  }`}
                >
                  {plan.popular ? 'Get Started' : 'Start Free Trial'}
                </Button>

                {/* Additional Info */}
                {plan.name === "Starter" && (
                  <p className="text-xs text-gray-500 text-center mt-3">
                    14-day free trial, no credit card required
                  </p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto text-left">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Can I change plans anytime?</h4>
              <p className="text-gray-600">Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Is there a setup fee?</h4>
              <p className="text-gray-600">No setup fees. Start your free trial today and only pay when you're ready to continue.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">What about data security?</h4>
              <p className="text-gray-600">We're HIPAA compliant and use enterprise-grade security to protect all patient data.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Do you offer custom plans?</h4>
              <p className="text-gray-600">Yes, contact our sales team for custom enterprise solutions tailored to your needs.</p>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">Need a custom solution for your organization?</p>
          <Button variant="outline" size="lg" className="border-2 border-blue-500 text-blue-600 hover:bg-blue-50">
            Contact Sales Team
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Pricing; 