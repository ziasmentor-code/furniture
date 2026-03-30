import React from 'react';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: 'fa-paintbrush',
      title: 'Interior Design',
      desc: 'Expert interior design solutions for your home',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: 'fa-couch',
      title: 'Furnitures',
      desc: 'Premium quality furniture for every room',
      color: 'from-blue-500 to-indigo-500'
    },
    {
      icon: 'fa-border-all',
      title: 'Wall Paneling',
      desc: 'Elegant wall paneling designs',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: 'fa-chalkboard',
      title: 'False Ceiling',
      desc: 'Modern false ceiling solutions',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-orange-500 text-sm font-semibold tracking-wider uppercase mb-2 block">
            Why Choose Us
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            What Makes Us <span className="text-orange-500">Different</span>
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
          <p className="text-gray-500 max-w-2xl mx-auto">
            We provide complete home interior and furniture solutions with unmatched quality and service
          </p>
        </div>
        
        {/* Reasons Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, idx) => (
            <div 
              key={idx}
              className="group relative bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Background Gradient on Hover */}
              <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300"></div>
              
              {/* Icon Container */}
              <div className={`relative w-24 h-24 bg-gradient-to-r ${reason.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <i className={`fas ${reason.icon} text-4xl text-white`}></i>
                {/* Decorative Circle */}
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-orange-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              {/* Title */}
              <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-orange-500 transition-colors duration-300">
                {reason.title}
              </h3>
              
              {/* Description */}
              <p className="text-gray-500 leading-relaxed">
                {reason.desc}
              </p>
              
              {/* Learn More Link */}
              <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <a href="#" className="text-orange-500 text-sm font-semibold inline-flex items-center gap-1">
                  Learn More 
                  <i className="fas fa-arrow-right text-xs"></i>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-orange-500 mb-2">500+</div>
            <p className="text-gray-500 text-sm">Projects Completed</p>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-orange-500 mb-2">200+</div>
            <p className="text-gray-500 text-sm">Happy Clients</p>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-orange-500 mb-2">50+</div>
            <p className="text-gray-500 text-sm">Expert Designers</p>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-orange-500 mb-2">10+</div>
            <p className="text-gray-500 text-sm">Years Experience</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;