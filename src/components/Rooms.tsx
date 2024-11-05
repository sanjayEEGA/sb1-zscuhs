import React from 'react';

const rooms = [
  {
    title: 'Deluxe Suite',
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    price: '599',
    description: 'Spacious suite with city views and premium amenities'
  },
  {
    title: 'Presidential Suite',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    price: '1,299',
    description: 'Ultimate luxury with panoramic views and private terrace'
  },
  {
    title: 'Ocean View Room',
    image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    price: '799',
    description: 'Breathtaking ocean views with premium comfort'
  }
];

export default function Rooms() {
  return (
    <section id="rooms" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif mb-4">Rooms & Suites</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Experience the perfect blend of luxury and comfort in our carefully curated rooms and suites
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {rooms.map((room) => (
            <div key={room.title} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
              <div className="relative h-64">
                <img 
                  src={room.image} 
                  alt={room.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-serif mb-2">{room.title}</h3>
                <p className="text-gray-600 mb-4">{room.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl">${room.price}</span>
                  <button className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}