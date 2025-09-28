import React from 'react';
import { Heart, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Heart className="w-8 h-8 text-primary-400" />
              <span className="text-xl font-bold">HealthCare Plus</span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Your trusted partner in wellness and healthcare management. 
              Connecting you with the best doctors and healthcare services.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-primary-400" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/dashboard" className="text-gray-400 hover:text-white transition-colors duration-200">Dashboard</a></li>
              <li><a href="/doctors" className="text-gray-400 hover:text-white transition-colors duration-200">Find Doctors</a></li>
              <li><a href="/schedule" className="text-gray-400 hover:text-white transition-colors duration-200">Appointments</a></li>
              <li><a href="/health-tips" className="text-gray-400 hover:text-white transition-colors duration-200">Health Tips</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <Mail className="w-4 h-4 text-primary-400 mt-1" />
                <span className="text-sm text-gray-400">support@healthcareplus.com</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-primary-400 mt-1" />
                <span className="text-sm text-gray-400">
                  123 Healthcare Street<br />
                  Medical District, NY 10001
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              © 2025 HealthCare Plus. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors duration-200">Privacy Policy</a>
              <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors duration-200">Terms of Service</a>
              <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors duration-200">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;