import React from 'react';
import { Link } from 'react-router-dom';

const ProductCards = () => {
  const products = [
    { id: 1, image: '/images/cusion.png' },
    { id: 2, image: '/images/table.png' },
    { id: 3, image: '/images/chair1.jpg' },
    { id: 4, image: '/images/sofa4.jpg' }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">Our Collection</h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div 
              key={product.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300 group cursor-pointer"
            >
              <div className="h-80 overflow-hidden bg-gray-100">
                <img 
                  src={product.image}
                  alt="Product"
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            to="/products" 
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductCards;