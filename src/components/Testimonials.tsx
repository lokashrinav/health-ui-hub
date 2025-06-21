
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Dr. Sarah Chen",
      role: "Chief of Cardiology",
      hospital: "Metropolitan Medical Center",
      content: "This AI platform has revolutionized our diagnostic process. The accuracy and speed of analysis have significantly improved patient outcomes in our cardiac unit.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Dr. Michael Rodriguez",
      role: "Emergency Medicine Physician",
      hospital: "City General Hospital",
      content: "In emergency situations, every second counts. This AI model helps us make faster, more informed decisions that save lives.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Dr. Emily Watson",
      role: "Internal Medicine Specialist",
      hospital: "Regional Health Network",
      content: "The clinical decision support is exceptional. It's like having a team of specialists available 24/7 to consult on complex cases.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1594824797530-a8e5c9d95b1e?w=100&h=100&fit=crop&crop=face"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Trusted by Healthcare Professionals
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See what leading medical professionals are saying about our AI healthcare platform.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-blue-100"
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  <p className="text-sm text-blue-600">{testimonial.hospital}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
