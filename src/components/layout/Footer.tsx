import React from 'react';
import { Link } from 'react-router-dom';
import { Crown, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Crown className="h-8 w-8 text-gold-600" />
              <span className="font-display text-2xl font-bold">Rajasthan Jeweler</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Crafting exquisite gold and silver jewelry for over 50 years. 
              Experience the finest traditional craftsmanship with modern elegance.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center space-x-2 text-sm text-gray-300">
                <Phone className="h-4 w-4" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-300">
                <Mail className="h-4 w-4" />
                <span>info@rajasthanjeweler.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-gold-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-300 hover:text-gold-400 transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/account" className="text-gray-300 hover:text-gold-400 transition-colors">
                  My Account
                </Link>
              </li>
              <li>
                <Link to="/cart" className="text-gray-300 hover:text-gold-400 transition-colors">
                  Cart
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h3 className="font-semibold mb-4">Customer Care</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-gold-400 transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-gold-400 transition-colors">
                  Return Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-gold-400 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-gold-400 transition-colors">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 Rajasthan Jeweler. All rights reserved.
          </p>
          <div className="flex items-center space-x-2 text-sm text-gray-400 mt-4 md:mt-0">
            <MapPin className="h-4 w-4" />
            <span>Jaipur, Rajasthan, India</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;