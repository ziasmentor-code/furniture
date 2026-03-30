import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">LUCAS INDIA</h3>
            <p className="text-gray-400 text-sm">
              Complete Home Interior and Furniture Solutions under one single roof!
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-gray-400 hover:text-orange-500 transition">Home</Link></li>
              <li><Link to="/products" className="text-gray-400 hover:text-orange-500 transition">Products</Link></li>
              <li><Link to="/interior" className="text-gray-400 hover:text-orange-500 transition">Interior Design</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-orange-500 transition">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Products</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-400">Office Chairs</li>
              <li className="text-gray-400">Sofas</li>
              <li className="text-gray-400">Mattresses</li>
              <li className="text-gray-400">Dining Tables</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <p className="text-gray-400 text-sm mb-2">
              <i className="fas fa-phone mr-2"></i> +91 12345 67890
            </p>
            <p className="text-gray-400 text-sm">
              <i className="fas fa-envelope mr-2"></i> info@lucasindiaindustries.com
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6 text-center text-gray-400 text-sm">
          <p>&copy; 2024 Lucas India Industries. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;