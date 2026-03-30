import React, { useState } from 'react';

const ProductGallery = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });

  // Using your actual images from public folder
  const products = [
    {
      id: 1,
      name: 'Blair Office Chair',
      originalPrice: 10500,
      salePrice: 8203,
      image: '/images/BLAIR.jpg',
      category: 'Chair',
    },
    {
      id: 2,
      name: 'Apex Office Chair',
      originalPrice: 9800,
      salePrice: 7501,
      image: '/images/APEX.jpg',
      category: 'Chair',
    },
    {
      id: 3,
      name: 'Aqqua Office Chair',
      originalPrice: 12000,
      salePrice: 9372,
      image: '/images/aqqa.jpg',
      category: 'Chair',
    },
  ];

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for joining!');
    setFormData({ name: '', email: '', phone: '' });
  };

  const discount = (orig, sale) =>
    Math.round(((orig - sale) / orig) * 100);

  return (
    <div className="bg-[#f5f3f0]">
      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-orange-500 to-red-600 text-white py-20 text-center">
        <div className="container mx-auto px-4">
          <p className="text-sm tracking-[0.22em] uppercase mb-2">New Arrival</p>
          <h1 className="text-5xl md:text-7xl font-light mb-4">Sofa Collection</h1>
          <p className="text-xl mb-6">Our new website is live</p>
          <span className="inline-block border border-white/50 px-8 py-3 text-sm tracking-wide">
            Use Code NEWS & Get Extra 5% Off
          </span>
        </div>
      </div>

      {/* Newsletter */}
      <div className="bg-white py-12 border-b border-gray-200">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-light text-center mb-2">Join our FW Family</h2>
          <p className="text-center text-gray-500 mb-6">Get access to exclusive benefits and early access to new collections.</p>
          <form onSubmit={handleSubmit} className="flex flex-wrap gap-3 justify-center">
            <input
              type="text" name="name" placeholder="Your name"
              value={formData.name} onChange={handleChange}
              className="flex-1 min-w-[180px] px-4 py-3 border border-gray-300 bg-gray-50 rounded"
              required
            />
            <input
              type="email" name="email" placeholder="Email address"
              value={formData.email} onChange={handleChange}
              className="flex-1 min-w-[180px] px-4 py-3 border border-gray-300 bg-gray-50 rounded"
              required
            />
            <div className="relative flex-1 min-w-[180px]">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">+91</span>
              <input
                type="tel" name="phone" placeholder="Phone"
                value={formData.phone} onChange={handleChange}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 bg-gray-50 rounded"
              />
            </div>
            <button type="submit" className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded text-sm tracking-wide">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Product Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-10">
          <p className="text-xs tracking-[0.2em] uppercase text-gray-400 mb-2">Featured</p>
          <h2 className="text-3xl md:text-4xl font-light">New Arrivals</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p) => (
            <div key={p.id} className="bg-[#f0ede8] rounded-lg overflow-hidden shadow-md hover:shadow-xl transition group">
              <div className="aspect-[4/3] overflow-hidden bg-gray-200">
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-10px h-100% object-cover group-hover:scale-105 transition duration-500"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://placehold.co/600x450/e8e4de/6b6560?text=No+Image';
                  }}
                />
              </div>
              <div className="p-5">
                <p className="text-xs tracking-[0.18em] uppercase text-gray-400 mb-1">{p.category}</p>
                <h3 className="text-xl font-medium mb-2">{p.name}</h3>
                <div className="flex items-center gap-3">
                  <span className="text-xl font-bold text-orange-600">Rs. {p.salePrice.toLocaleString()}</span>
                  <span className="text-sm text-gray-400 line-through">Rs. {p.originalPrice.toLocaleString()}</span>
                  <span className="bg-red-500 text-white text-xs px-2 py-1 rounded">{discount(p.originalPrice, p.salePrice)}% off</span>
                </div>
                <button className="mt-4 w-full bg-gray-800 hover:bg-orange-500 text-white py-2 rounded transition">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Category Cards */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { label: 'Bedroom Collection', image: '/images/bedroom.jpg' },
            { label: 'Dining Room Collection', image: '/images/room.jpg' },
          ].map((cat, idx) => (
            <div key={idx} className="relative h-80 rounded-lg overflow-hidden group cursor-pointer">
              <img
                src={cat.image}
                alt={cat.label}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://placehold.co/800x500/e8e4de/6b6560?text=' + cat.label;
                }}
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition flex items-end p-8">
                <h3 className="text-2xl md:text-3xl font-light text-white">{cat.label}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Luxury Banner */}
      <div className="bg-gray-900 text-white py-20 text-center">
        <div className="container mx-auto px-4">
          <p className="text-xs tracking-[0.22em] uppercase text-gray-400 mb-2">Premium Furniture</p>
          <h2 className="text-4xl md:text-6xl font-light mb-4">Experience Luxury Within Reach</h2>
          <p className="text-gray-400 mb-8">Discover premium furniture that elevates your lifestyle</p>
          <button className="border border-white/60 hover:bg-white hover:text-gray-900 px-8 py-3 rounded transition">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductGallery;