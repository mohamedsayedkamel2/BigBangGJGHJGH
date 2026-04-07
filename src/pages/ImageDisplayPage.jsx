import React from 'react';
import { Link } from 'react-router-dom';
import { Image as ImageIcon, ArrowLeft } from 'lucide-react';
import ImageCard from '../components/ImageCard';

const ImageDisplayPage = () => {
  const imageData = {
    src: '{{DEPLOYMENT_URL}}/uploads/ba9a53a9-288a-4762-a339-c264ab70e1b7/God_of_War_4_cover_20260329_180628_925309.jpg',
    alt: 'God of War 4 cover',
    title: 'God of War 4',
    description: 'The iconic cover art from God of War 4, showcasing the epic adventure of Kratos and his son Atreus in the Norse mythology setting.'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 sm:py-12 md:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <div className="mb-4 sm:mb-6">
            <ImageIcon className="w-12 h-12 sm:w-16 sm:h-16 text-indigo-600 mx-auto" />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4 sm:mb-6">
            Featured Image
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover the visual content that brings our site to life
          </p>
        </div>

        {/* Image Display Section */}
        <div className="mb-8 sm:mb-12">
          <ImageCard
            src={imageData.src}
            alt={imageData.alt}
            title={imageData.title}
            description={imageData.description}
          />
        </div>

        {/* Additional Info Section */}
        <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 md:p-10 mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 sm:mb-6">
            About This Image
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-6 leading-relaxed">
              This is the official cover art for God of War (2018), the eighth installment in the God of War series. 
              The game marks a significant shift in the franchise, moving from Greek to Norse mythology and focusing 
              on the relationship between Kratos and his son Atreus.
            </p>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              The cover art beautifully captures the essence of the game's themes - family, growth, and the journey 
              of a father and son through the dangerous yet magnificent world of Norse gods and creatures.
            </p>
          </div>
        </div>

        {/* Navigation Section */}
        <div className="text-center">
          <Link
            to="/"
            className="inline-flex items-center bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
          >
            <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6 mr-2" />
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ImageDisplayPage;