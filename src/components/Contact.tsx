import { Mail, Phone, MapPin, Send, Clock, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    phone: "",
    message: "",
    department: "general"
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({
      name: "",
      email: "",
      organization: "",
      phone: "",
      message: "",
      department: "general"
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Support",
      description: "Get help via email",
      value: "support@medicore.ai",
      color: "text-blue-600"
    },
    {
      icon: Phone,
      title: "Phone Support",
      description: "Call us directly",
      value: "+1 (555) 123-4567",
      color: "text-green-600"
    },
    {
      icon: Clock,
      title: "Business Hours",
      description: "When we're available",
      value: "Mon-Fri: 9AM-6PM EST",
      color: "text-purple-600"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200 border-blue-200">
            <MessageSquare className="h-3 w-3 mr-1" />
            Get in Touch
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Transform Your Healthcare Practice?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our team of healthcare technology experts is here to help you implement 
            AI solutions that improve patient outcomes and streamline your practice.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-xl border-0">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900">
                Send us a Message
              </CardTitle>
              <CardDescription>
                Fill out the form below and we'll get back to you within 24 hours.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Dr. John Smith"
                      className="border-gray-300 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="john.smith@hospital.com"
                      className="border-gray-300 focus:border-blue-500"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-2">
                      Organization
                    </label>
                    <Input
                      id="organization"
                      name="organization"
                      type="text"
                      value={formData.organization}
                      onChange={handleInputChange}
                      placeholder="City General Hospital"
                      className="border-gray-300 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+1 (555) 123-4567"
                      className="border-gray-300 focus:border-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="department" className="block text-sm font-medium text-gray-700 mb-2">
                    Department
                  </label>
                  <select
                    id="department"
                    name="department"
                    value={formData.department}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="general">General Inquiry</option>
                    <option value="sales">Sales & Pricing</option>
                    <option value="support">Technical Support</option>
                    <option value="partnership">Partnership</option>
                    <option value="enterprise">Enterprise Solutions</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your healthcare practice and how we can help..."
                    rows={5}
                    className="border-gray-300 focus:border-blue-500 resize-none"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3"
                >
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="border-gray-200 hover:border-blue-300 transition-colors duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className={`p-3 rounded-lg bg-gray-100 ${info.color}`}>
                        <info.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">{info.title}</h3>
                        <p className="text-gray-600 text-sm mb-2">{info.description}</p>
                        <p className="font-medium text-gray-900">{info.value}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Office Location */}
            <Card className="border-gray-200">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-lg bg-gray-100 text-blue-600">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Office Location</h3>
                    <p className="text-gray-600 text-sm mb-2">Visit our headquarters</p>
                    <p className="font-medium text-gray-900">
                      123 Healthcare Ave<br />
                      Medical District<br />
                      New York, NY 10001
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Response Time */}
            <Card className="bg-blue-50 border-blue-200">
              <CardContent className="p-6">
                <div className="text-center">
                  <h3 className="font-semibold text-blue-900 mb-2">Quick Response Time</h3>
                  <p className="text-blue-700 text-sm">
                    We typically respond to all inquiries within 24 hours during business days.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 