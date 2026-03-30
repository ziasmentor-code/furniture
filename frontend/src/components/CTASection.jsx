import React from 'react';
import { Link } from 'react-router-dom';

const CTASection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-orange-500 to-orange-600">
      <div className="container mx-auto px-4 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Transform Your Home?
        </h2>
        <p className="text-xl mb-8">
          Get a free consultation from our interior design experts.
        </p>
        <Link 
          to="/contact"
          className="bg-white text-orange-500 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold inline-block transition"
        >
          Book Free Consultation
        </Link>
      </div>
    </section>
  );
};

export default CTASection;