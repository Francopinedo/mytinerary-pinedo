import React from 'react';

const CityCard = ({ city }) => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="max-w-md bg-white shadow-lg rounded-lg overflow-hidden">
        <img src={city.img} alt={city.name} className="w-full h-64 object-cover" />
        <div className="px-6 py-4">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">{city.name}</h2>
          <p className="text-gray-600 text-sm">{city.info}</p>
        </div>
      </div>
    </div>
  );
};

export default CityCard;