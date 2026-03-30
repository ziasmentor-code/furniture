import React from 'react';
import { Link } from 'react-router-dom';

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: 'Blair Office Chair',
      price: '₹8,203',
      features: 'Mesh back • PU arms • Synchro tilt',
      image: 'frontend/public/table.jpg'
    },
    {
      id: 2,
      name: 'Apex Office Chair',
      price: '₹7,501',
      features: 'Mesh back • PU arms • Push back',
      image: '/images/products/product2.jpg'
    },
    {
      id: 3,
      name: 'Aqqua Office Chair',
      price: '₹9,372',
      features: 'Metal frame • Knee tilt • Chrome base',
      image: '/images/products/product3.jpg'
    },
    {
      id: 4,
      name: 'Slovenia Office Chair',
      price: '₹8,189',
      features: 'PVC upholstered • Centre tilt',
      image: '/images/products/product4.jpg'
    },
    {
      id: 5,
      name: 'Vento Office Chair',
      price: '₹13,064',
      features: 'PU cushioned • Knee tilt',
      image: '/images/products/product5.jpg'
    },
    {
      id: 6,
      name: 'Full Cover Sofa',
      price: '₹22,000',
      features: 'Off White • Premium fabric',
      image: '/images/products/product6.jpg'
    }
  ];

  return (
    <>
      {/* Google Font import — add this once in your index.html if not already */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500&family=Jost:wght@300;400;500&display=swap');

        .ep-section { font-family: 'Jost', sans-serif; }

        .ep-card-img img {
          transition: transform 0.5s ease;
        }
        .ep-card:hover .ep-card-img img {
          transform: scale(1.05);
        }
        .ep-overlay {
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .ep-card:hover .ep-overlay {
          opacity: 1;
        }
        .ep-overlay-btn {
          background: transparent;
          border: 1px solid rgba(255,255,255,0.85);
          color: #fff;
          font-family: 'Jost', sans-serif;
          font-size: 11px;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          padding: 12px 28px;
          cursor: pointer;
          transition: background 0.2s ease;
        }
        .ep-overlay-btn:hover {
          background: rgba(255,255,255,0.18);
        }
      `}</style>

      <section className="ep-section py-20 bg-[#f5f3f0]">
        <div className="container mx-auto px-4">

          {/* Section Header */}
          <div className="mb-12">
            <p style={{
              fontSize: '11px',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#999',
              marginBottom: '0.75rem'
            }}>
              Collections
            </p>
            <h2 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: '36px',
              fontWeight: 300,
              color: '#1a1a1a',
              letterSpacing: '0.02em',
              marginBottom: '0.5rem'
            }}>
              Featured Products
            </h2>
            <p style={{ fontSize: '14px', fontWeight: 300, color: '#888' }}>
              Discover our premium furniture collection
            </p>
          </div>

          {/* Products Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '1px',
              background: '#d8d4ce',
            }}
            className="sm:grid-cols-2 md:grid-cols-3 grid-cols-1"
          >
            {products.map((product) => (
              <div
                key={product.id}
                className="ep-card"
                style={{ background: '#f0ede8', position: 'relative', overflow: 'hidden', cursor: 'pointer' }}
              >
                {/* Image */}
                <div
                  className="ep-card-img"
                  style={{
                    aspectRatio: '4 / 3',
                    background: '#e8e4de',
                    overflow: 'hidden',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = 'https://placehold.co/400x300/e8e4de/6b6560?text=No+Image';
                    }}
                  />
                </div>

                {/* Info */}
                <div style={{ padding: '1rem 1.25rem 1.5rem', borderTop: '0.5px solid #d0ccc6' }}>
                  <p style={{ fontSize: '10px', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#aaa', marginBottom: '4px' }}>
                    Chair
                  </p>
                  <h3 style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: '20px',
                    fontWeight: 400,
                    color: '#1a1a1a',
                    marginBottom: '4px'
                  }}>
                    {product.name}
                  </h3>
                  <p style={{ fontSize: '12px', fontWeight: 300, color: '#888', marginBottom: '10px' }}>
                    {product.features}
                  </p>
                  <span style={{ fontSize: '15px', fontWeight: 400, color: '#3a3a3a' }}>
                    {product.price}
                  </span>
                </div>

                {/* Hover Overlay */}
                <div
                  className="ep-overlay"
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'rgba(0,0,0,0.42)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <button className="ep-overlay-btn">View Product</button>
                </div>
              </div>
            ))}
          </div>

          {/* View All */}
          <div className="mt-12 flex justify-center">
            <Link
              to="/products"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                border: '1px solid #1a1a1a',
                color: '#1a1a1a',
                background: 'transparent',
                padding: '12px 36px',
                fontFamily: "'Jost', sans-serif",
                fontSize: '11px',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                transition: 'background 0.2s, color 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = '#1a1a1a'; e.currentTarget.style.color = '#fff'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#1a1a1a'; }}
            >
              View All Products
              <span style={{ fontSize: '14px' }}>→</span>
            </Link>
          </div>

        </div>
      </section>
    </>
  );
};

export default FeaturedProducts;
