import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/hero';
import ProductCard from './components/productcard';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import ProductGallery from './components/productgallery';
import ProductSlider from './components/productslider';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <ProductCard />
            <WhyChooseUs />
            <ProductGallery />
            <ProductSlider />
            <Testimonials />
            <CTASection />
            <Footer />
           
          </>
        } />
        <Route path="/products" element={<div className="pt-32 container mx-auto px-4"><h1 className="text-3xl">Products Page</h1></div>} />
        <Route path="/interior" element={<div className="pt-32 container mx-auto px-4"><h1 className="text-3xl">Interior Design Page</h1></div>} />
        <Route path="/contact" element={<div className="pt-32 container mx-auto px-4"><h1 className="text-3xl">Contact Page</h1></div>} />
      </Routes>
    </div>
  );
}

export default App;