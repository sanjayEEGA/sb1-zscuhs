import React, { useState } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="hidden lg:flex justify-between items-center px-8 py-2 border-b text-sm">
        <div className="flex gap-6">
          <a href="tel:+1234567890" className="flex items-center gap-2 hover:text-gold-600">
            <Phone size={14} />
            <span>+1 (234) 567-890</span>
          </a>
          <a href="mailto:info@luxestay.com" className="flex items-center gap-2 hover:text-gold-600">
            <Mail size={14} />
            <span>info@luxestay.com</span>
          </a>
        </div>
        <div className="flex gap-4">
          <a href="#" className="hover:text-gold-600">Guest Portal</a>
          <a href="#" className="hover:text-gold-600">Careers</a>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <a href="/" className="text-2xl font-serif">LuxeStay</a>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#rooms" className="hover:text-gold-600">Rooms & Suites</a>
            <a href="#dining" className="hover:text-gold-600">Dining</a>
            <a href="#spa" className="hover:text-gold-600">Spa & Wellness</a>
            <a href="#experiences" className="hover:text-gold-600">Experiences</a>
            <button className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition">
              Book Now
            </button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2">
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#rooms" className="block px-3 py-2 hover:bg-gray-50">Rooms & Suites</a>
            <a href="#dining" className="block px-3 py-2 hover:bg-gray-50">Dining</a>
            <a href="#spa" className="block px-3 py-2 hover:bg-gray-50">Spa & Wellness</a>
            <a href="#experiences" className="block px-3 py-2 hover:bg-gray-50">Experiences</a>
            <button className="w-full text-center bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition">
              Book Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}