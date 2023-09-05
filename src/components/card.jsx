import Itemcarousel from "./Item-carousel";
import React from "react";
export default function Card(name,info,img) {


  


  return (
    <>
    

      <div className="max-w-md mx-auto bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
      <img className="w-full h-48 object-cover" src={city.img} alt={city.name} />
      <div className="p-6">
        <h2 className="text-2xl font-semibold text-gray-800">{city.name}</h2>
        <p className="text-gray-600 mt-2">{city.description}</p>
        <div className="mt-4">
          <a
            href={`/city/:${city.id}`}
            className="bg-indigo-500 text-white py-2 px-4 rounded-full inline-block hover:bg-indigo-600 transition duration-300"
          >
            Enter
          </a>
        </div>
      </div>
    </div>

    </>
  );
}
