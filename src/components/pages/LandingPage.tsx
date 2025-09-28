import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Calendar, Heart, Star, CheckCircle } from 'lucide-react';

const LandingPage = () => {
  const features = [
    {
      icon: <Users className="w-12 h-12 text-primary-500" />,
      title: "Expert Doctors",
      description: "Connect with qualified healthcare professionals across various specializations."
    },
    {
      icon: <Calendar className="w-12 h-12 text-teal-500" />,
      title: "Easy Scheduling",
      description: "Book and manage your appointments with our intuitive scheduling system."
    },
    {
      icon: <Heart className="w-12 h-12 text-green-500" />,
      title: "Wellness Tips",
      description: "Get personalized health tips and wellness recommendations for a better lifestyle."
    }
  ];

  const testimonials = [
    {
      quote: "HealthCare Plus has transformed how I manage my health appointments. The interface is intuitive and the doctors are excellent.",
      author: "Sarah Johnson",
      role: "Patient"
    },
    {
      quote: "As a busy professional, I appreciate the convenience of scheduling appointments online and accessing my health history.",
      author: "Michael Chen",
      role: "Business Executive"
    },
    {
      quote: "The health tips section has helped me maintain a healthier lifestyle. Highly recommend this platform!",
      author: "Emily Davis",
      role: "Teacher"
    }
  ];

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-50 to-teal-50 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 animate-slide-up">
              Your Health, <span className="text-primary-600">Our Priority</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto animate-slide-up">
              Experience seamless healthcare management with our comprehensive platform. 
              Connect with doctors, schedule appointments, and take control of your wellness journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
              <Link
                to="/signup"
                className="inline-flex items-center px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors duration-200 transform hover:scale-105"
              >
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/doctors"
                className="inline-flex items-center px-8 py-4 border border-primary-600 text-primary-600 font-semibold rounded-lg hover:bg-primary-50 transition-colors duration-200"
              >
                Find Doctors
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose HealthCare Plus?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We provide comprehensive healthcare solutions designed to make your wellness journey simple and effective.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="text-center p-8 rounded-xl bg-gray-50 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="flex justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-white mb-2">500+</div>
              <div className="text-primary-100">Expert Doctors</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-white mb-2">10k+</div>
              <div className="text-primary-100">Happy Patients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-white mb-2">50+</div>
              <div className="text-primary-100">Specializations</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-white mb-2">24/7</div>
              <div className="text-primary-100">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              What Our Patients Say
            </h2>
            <p className="text-lg text-gray-600">
              Real experiences from our valued community members
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.author}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-primary-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Take Control of Your Health?
          </h2>
          <p className="text-xl text-white mb-8 opacity-90">
            Join thousands of users who trust HealthCare Plus for their wellness needs.
          </p>
          <Link
            to="/signup"
            className="inline-flex items-center px-8 py-4 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200 transform hover:scale-105"
          >
            Start Your Journey
            <CheckCircle className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;