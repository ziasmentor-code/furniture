import React from 'react';

const ImageCheck = () => {
  return (
    <div className="pt-32 container mx-auto px-4 text-center">
      <h1 className="text-2xl font-bold mb-4">Image Test</h1>
      
      <div className="grid grid-cols-3 gap-4">
        <div>
          <img 
            src="/images/f1.jpg" 
            alt="f1" 
            className="w-full h-48 object-cover border rounded"
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/300x200?text=NOT+FOUND';
              console.log('f1.jpg not found');
            }}
          />
          <p className="mt-2">f1.jpg</p>
        </div>
        
        <div>
          <img 
            src="/images/f2.jpg" 
            alt="f2" 
            className="w-full h-48 object-cover border rounded"
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/300x200?text=NOT+FOUND';
              console.log('f2.jpg not found');
            }}
          />
          <p className="mt-2">f2.jpg</p>
        </div>
        
        <div>
          <img 
            src="/images/f3.jpg" 
            alt="f3" 
            className="w-full h-48 object-cover border rounded"
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/300x200?text=NOT+FOUND';
              console.log('f3.jpg not found');
            }}
          />
          <p className="mt-2">f3.jpg</p>
        </div>
      </div>
    </div>
  );
};

export default ImageCheck;