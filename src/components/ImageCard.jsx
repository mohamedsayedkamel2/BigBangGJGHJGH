import React from 'react';

const ImageCard = ({ src, alt, title, description }) => {
  const handleImageError = (e) => {
    e.target.src = '/api/placeholder/400/300';
    e.target.alt = 'Image not available';
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative">
        <img
          src={src}
          alt={alt}
          className="w-full h-64 sm:h-72 md:h-80 object-cover"
          onError={handleImageError}
          loading="lazy"
        />
      </div>
      
      {(title || description) && (
        <div className="p-4 sm:p-6">
          {title && (
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2 sm:mb-3">
              {title}
            </h3>
          )}
          {description && (
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              {description}
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default ImageCard;