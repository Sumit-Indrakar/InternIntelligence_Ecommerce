
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 pt-12 pb-8 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-brand-navy">SwiftStore</h3>
            <p className="text-sm text-gray-600 max-w-xs">
              Your one-stop destination for premium products with fast delivery and exceptional customer service.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-brand-purple transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="text-gray-500 hover:text-brand-purple transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="text-gray-500 hover:text-brand-purple transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="text-gray-500 hover:text-brand-purple transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-600">Shop</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/products" className="text-sm text-gray-600 hover:text-brand-purple transition-colors">
                  All Products
                </Link>
              </li>
              <li>
                <Link to="/products?category=Electronics" className="text-sm text-gray-600 hover:text-brand-purple transition-colors">
                  Electronics
                </Link>
              </li>
              <li>
                <Link to="/products?category=Fashion" className="text-sm text-gray-600 hover:text-brand-purple transition-colors">
                  Fashion
                </Link>
              </li>
              <li>
                <Link to="/products?category=Home%20%26%20Kitchen" className="text-sm text-gray-600 hover:text-brand-purple transition-colors">
                  Home & Kitchen
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-600">Customer Service</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/contact" className="text-sm text-gray-600 hover:text-brand-purple transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-brand-purple transition-colors">
                  Shipping Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-brand-purple transition-colors">
                  Returns & Refunds
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-brand-purple transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-600">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-start space-x-2">
                <MapPin size={18} className="text-gray-500 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-600">
                  123 Commerce Street, Shopping District, NY 10001
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={18} className="text-gray-500 flex-shrink-0" />
                <a href="tel:+1234567890" className="text-sm text-gray-600 hover:text-brand-purple transition-colors">
                  (123) 456-7890
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={18} className="text-gray-500 flex-shrink-0" />
                <a href="mailto:support@swiftstore.com" className="text-sm text-gray-600 hover:text-brand-purple transition-colors">
                  support@swiftstore.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-600">
              &copy; {new Date().getFullYear()} SwiftStore. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0 flex space-x-6">
              <a href="#" className="text-sm text-gray-600 hover:text-brand-purple transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-gray-600 hover:text-brand-purple transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-sm text-gray-600 hover:text-brand-purple transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
