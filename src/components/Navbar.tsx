import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import DonationForm from './DonationForm';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showDonationForm, setShowDonationForm] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Solutions', path: '/solutions' },
    { name: 'Get Involved', path: '/get-involved' },
    { name: 'Stories', path: '/stories' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <nav className="bg-white shadow-lg fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="flex items-center">
                <span className="text-2xl font-bold text-[#34A853]">Fighting Hunger</span>
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`${
                    isActive(item.path)
                      ? 'text-[#34A853] font-semibold'
                      : 'text-gray-600 hover:text-[#34A853]'
                  } transition-colors duration-200`}
                >
                  {item.name}
                </Link>
              ))}
              <button
                onClick={() => setShowDonationForm(true)}
                className="bg-[#FF9800] text-white px-4 py-2 rounded-md hover:bg-[#F57C00] transition-colors duration-200"
              >
                Donate Now
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-600 hover:text-[#34A853]"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`${
                    isActive(item.path)
                      ? 'text-[#34A853] font-semibold'
                      : 'text-gray-600'
                  } block px-3 py-2 rounded-md text-base`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <button
                onClick={() => {
                  setIsOpen(false);
                  setShowDonationForm(true);
                }}
                className="w-full text-center bg-[#FF9800] text-white px-4 py-2 rounded-md hover:bg-[#F57C00] transition-colors duration-200"
              >
                Donate Now
              </button>
            </div>
          </div>
        )}
      </nav>

      <DonationForm
        isOpen={showDonationForm}
        onClose={() => setShowDonationForm(false)}
      />
    </>
  );
}