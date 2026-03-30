import React, { useState, useEffect } from 'react';

const ProductSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const products = [
  
    {
      id: 2,
      name: 'King Size Bed with Storage',
      originalPrice: 9800,
      salePrice: 7501,
      image: '/images/storage.jpg',
      category: 'Office Chair',
    },
    {
      id: 3,
      name: 'Dressing Table with Stool',
      originalPrice: 12000,
      salePrice: 9372,
      image: '/images/stool.jpg',
      category: 'Office Chair',
    },
    
    // Sofa Collection
    {
      id: 4,
      name: 'Bedside Table Set of 2',
      originalPrice: 35000,
      salePrice: 28900,
      image: '/images/beside.jpg',
      category: 'Sofa',
    },
    {
      id: 5,
      name: 'L-Shaped Corner Sofa',
      originalPrice: 48000,
      salePrice: 39900,
      image: '/images/lshape.jpg',
      category: 'Sofa',
    },
    
    {
      id: 6,
      name: 'Wooden 2 Seater Sofa',
      originalPrice: 28000,
      salePrice: 22000,
      image: '/images/2seat.jpg',
      category: 'Sofa',
    },
    

  ];

  const discount = (orig, sale) => Math.round(((orig - sale) / orig) * 100);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        setIsAnimating(true);
        setCurrentIndex((prev) => (prev + 1) % products.length);
        setTimeout(() => setIsAnimating(false), 500);
      }
    }, 4000);
    return () => clearInterval(interval);
  }, [isAnimating, products.length]);

  const goToSlide = (index) => {
    if (isAnimating || index === currentIndex) return;
    setIsAnimating(true);
    setCurrentIndex(index);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % products.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const current = products[currentIndex];

  return (
    <div className="py-16 bg-gradient-to-r from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Hot Deals <span className="text-orange-500">🔥</span>
        </h2>
        <p className="text-center text-gray-500 mb-10">
          Limited time offers! Grab them before they're gone.
        </p>

        {/* Main Slider */}
        <div className="relative max-w-5xl mx-auto">
          <div className="relative overflow-hidden rounded-2xl shadow-2xl">
            <div
              className={`transition-all duration-500 ease-in-out ${
                isAnimating ? 'scale-95 opacity-0' : 'scale-100 opacity-100'
              }`}
            >
              {/* Fixed height container */}
              <div className="w-full h-[500px] bg-gray-900">
                <img
                  src={current.image}
                  alt={current.name}
                  className="w-full h-full object-cover"
                  style={{ objectPosition: 'center 30%' }}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://placehold.co/1200x800/2d2d2d/ffffff?text=' + encodeURIComponent(current.name);
                  }}
                />
              </div>

              {/* Product Info Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/70 to-transparent p-6 md:p-8">
                <div className="mb-2">
                  <span className="bg-orange-500 text-white text-xs px-3 py-1 rounded-full">
                    {current.category}
                  </span>
                </div>
                <h3 className="text-xl md:text-3xl font-bold text-white mb-2">
                  {current.name}
                </h3>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-2xl md:text-3xl font-bold text-orange-400">
                    ₹{current.salePrice.toLocaleString()}
                  </span>
                  <span className="text-gray-300 line-through text-sm md:text-base">
                    ₹{current.originalPrice.toLocaleString()}
                  </span>
                  <span className="bg-red-500 text-white px-2 py-1 rounded text-xs md:text-sm font-semibold animate-pulse">
                    {discount(current.originalPrice, current.salePrice)}% OFF
                  </span>
                </div>
                <button className="mt-4 bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg text-sm md:text-base font-semibold transition transform hover:scale-105">
                  Shop Now
                </button>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition hover:scale-110"
          >
            <i className="fas fa-chevron-left text-sm md:text-base"></i>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition hover:scale-110"
          >
            <i className="fas fa-chevron-right text-sm md:text-base"></i>
          </button>
        </div>

        {/* Thumbnails */}
        <div className="flex justify-center gap-2 md:gap-3 mt-6 overflow-x-auto pb-2">
          {products.map((p, idx) => (
            <button
              key={idx}
              onClick={() => goToSlide(idx)}
              className={`flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                currentIndex === idx
                  ? 'border-orange-500 scale-105 shadow-lg'
                  : 'border-transparent opacity-60 hover:opacity-100 hover:scale-105'
              }`}
            >
              <img
                src={p.image}
                alt={p.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://placehold.co/100x100/4a4a4a/ffffff?text=Img';
                }}
              />
            </button>
          ))}
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-6">
          {products.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToSlide(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentIndex === idx
                  ? 'bg-orange-500 w-8'
                  : 'bg-gray-300 hover:bg-gray-400 w-2'
              }`}
            />
          ))}
        </div>

        {/* Slide Counter */}
        <div className="text-center mt-4 text-sm text-gray-500">
          {currentIndex + 1} / {products.length}
        </div>
      </div>
    </div>
  );
};

export default ProductSlider;