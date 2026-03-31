import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      text: 'Lucas India did a wonderful job transforming our new home into a space we love. I would recommend Lucas India Home Interiors without hesitation.',
      name: 'Ramesh Kumar'
    },
    {
      id: 2,
      text: 'They inspired us, guided us, and taken the project as if it was their own home. They stayed within our budget and gave us great options.',
      name: 'Priya Sharma'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          What Our Customers Say
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-white p-8 rounded-lg shadow-lg relative"
            >
              <i className="fas fa-quote-left text-4xl text-orange-200 absolute top-4 left-4"></i>
              <p className="text-gray-700 leading-relaxed pt-6">
                {testimonial.text}
              </p>
              <h4 className="text-orange-500 font-bold mt-4">
                - {testimonial.name}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;