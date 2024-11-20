import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-[#34A853]">Fighting Hunger</h3>
            <p className="text-gray-300">
              Building a future where no one goes hungry through sustainable solutions
              and community action.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-[#34A853]">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/solutions" className="text-gray-300 hover:text-[#34A853]">
                  Our Solutions
                </Link>
              </li>
              <li>
                <Link to="/get-involved" className="text-gray-300 hover:text-[#34A853]">
                  Get Involved
                </Link>
              </li>
              <li>
                <Link to="/stories" className="text-gray-300 hover:text-[#34A853]">
                  Success Stories
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <MapPin size={18} className="text-[#34A853]" />
                <span className="text-gray-300">123 Hunger St, City, Country</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={18} className="text-[#34A853]" />
                <span className="text-gray-300">+1 234 567 890</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={18} className="text-[#34A853]" />
                <span className="text-gray-300">info@fightinghunger.org</span>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-300 hover:text-[#34A853] transition-colors"
              >
                <Facebook size={24} />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-[#34A853] transition-colors"
              >
                <Twitter size={24} />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-[#34A853] transition-colors"
              >
                <Instagram size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} Fighting Hunger Together. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}