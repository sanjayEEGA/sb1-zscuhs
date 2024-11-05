import React from 'react';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-serif mb-4">LuxeStay</h3>
            <p className="text-gray-400">
              Experience luxury living at its finest with our world-class accommodations and services.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#rooms" className="text-gray-400 hover:text-white">Rooms & Suites</a></li>
              <li><a href="#dining" className="text-gray-400 hover:text-white">Dining</a></li>
              <li><a href="#spa" className="text-gray-400 hover:text-white">Spa & Wellness</a></li>
              <li><a href="#experiences" className="text-gray-400 hover:text-white">Experiences</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Phone size={16} className="mr-2" />
                <span className="text-gray-400">+1 (234) 567-890</span>
              </li>
              <li className="flex items-center">
                <Mail size={16} className="mr-2" />
                <span className="text-gray-400">info@luxestay.com</span>
              </li>
              <li className="flex items-center">
                <MapPin size={16} className="mr-2" />
                <span className="text-gray-400">123 Luxury Ave, City, Country</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-400"><Facebook /></a>
              <a href="#" className="hover:text-gray-400"><Twitter /></a>
              <a href="#" className="hover:text-gray-400"><Instagram /></a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} LuxeStay. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}