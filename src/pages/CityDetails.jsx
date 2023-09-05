
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function CityDetails() {
  const { id } = useParams(); 
  const [cityDetails, setCityDetails] = useState({});

  useEffect(() => {
    
    axios
      .get(`http://localhost:3000/api/city/${id}`)
      .then((response) => {
        console.log("EFFECT");
        setCityDetails(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener detalles de la ciudad:", error);
      });
  }, [id]);

  
  return (
    <>
      <div>
        <div>
          <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 sm:text-7xl m-8">
            {cityDetails.name}
          </h1>
          <h2 className="font-display text-5xl  tracking-tight text-neutral-950 sm:text-7xl m-10">
            {cityDetails.info}
          </h2>
          <button
            className="select-none rounded-lg bg-pink-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
            data-ripple-light="true"
          >
            Itineraries
          </button>
        </div>

        <div>
          <img
            className="object-cover rounded-full 2xl:h-4/6 h-auto max-w-full"
            src={cityDetails.img}
            alt="IMG"
          />
        </div>
      </div>

      <div>
        <h2 className="font-display  tracking-tight text-neutral-950  ">
        ⚙️ITINERARIES SOON⚙️
        </h2>
        <a className="text-white" href="http://localhost:5173/cities">
        <button variant="text" className=" text-2xl font-semibold border px-5 py-2 rounded-lg hover:text-purple-600 hover:border-purple-600">
        Back to Cities{" "} 
      </button> 
        </a>
      </div>
    </>
  );
}

export default CityDetails;
