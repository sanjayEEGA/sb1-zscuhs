import React from 'react';
import { Wifi, Coffee, Dumbbell, Utensils, Car, Flower2 } from 'lucide-react';

const amenities = [
  { icon: <Wifi size={24} />, title: 'Free Wi-Fi', description: 'High-speed internet throughout' },
  { icon: <Coffee size={24} />, title: '24/7 Room Service', description: 'Anytime dining options' },
  { icon: <Dumbbell size={24} />, title: 'Fitness Center', description: 'State-of-the-art equipment' },
  { icon: <Utensils size={24} />, title: 'Fine Dining', description: 'Award-winning restaurants' },
  { icon: <Car size={24} />, title: 'Valet Parking', description: 'Complimentary service' },
  { icon: <Flower2 size={24} />, title: 'Luxury Spa', description: 'Full-service wellness center' }
];

export default function Amenities() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif mb-4">Hotel Amenities</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our range of premium services and facilities designed for your comfort
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {amenities.map((amenity) => (
            <div key={amenity.title} className="p-6 border rounded-lg hover:shadow-lg transition">
              <div className="flex items-center mb-4">
                <div className="mr-4">{amenity.icon}</div>
                <h3 className="text-xl font-semibold">{amenity.title}</h3>
              </div>
              <p className="text-gray-600">{amenity.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}