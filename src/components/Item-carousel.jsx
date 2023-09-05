import React, { useEffect, useState } from "react";
import Carousel from "./Carousel";
import Card from "./card";
useEffect(() => {
  axios.get('http://localhost:3000/api/cities')
    .then((response) => {
  
      setCities(response.data);
      setFilteredCities(response.data); 
    })
    .catch((error) => {
      console.error('Error al obtener datos:', error);
    });
}, []); 

export default function Itemcarousel() {

  

  let [step, setStep] = useState(0);

  const handlerCard = () => {
    setCard("");
    console.log("CARD");
  };

  //STEPS
  const handlerNext = () => {
    if (step != 2) {
      setStep(step + 1);
      console.log(step);
    }
  };

  const handlerBack = () => {
    console.log(step);
    if (step != 0) {
      setStep(step - 1);
    }
  };

  const handlerTimer = () => {
    if (step == 0) {
      setStep(step + 1);
    } else {
      setStep(step - 1);
    }
  };

   useEffect(() => {
     setInterval(() =>{
      handlerTimer()},
       30000)
   },[])

  //Timer carousel
  // setInterval(() =>{
  //        handlerTimer()},
  //        10000)

  //WORKING
  return (
    <>

<div className="flex flex-wrap justify-center items-center">
        {filteredCities.map((city) => (
          <a
            key={city._id}
            href={`/city/${city._id}`} 
            className="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md m-12"
          >
            <div className="relative mx-4 -mt-6 h-56 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
              <img
                src={city.img}
                layout="fill"
              />
            </div>
            <div className="p-6">
              <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                {city.name}
              </h5>
              <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                {city.info}
              </p>
            </div>
            <div className="p-6 pt-0">
              <button 
                className="select-none rounded-lg bg-pink-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
                data-ripple-light="true"
              >
                Read More
              </button>
            </div>
          </a>
        ))}
      </div>


 <div className="absolute flex justify-between -translate-y-1/2 left-72 right-72 top-full btn-carousel ">
      <a className="btn btn-circle" onClick={()=> handlerBack()}> Back</a> 
      <a  className="btn btn-circle" onClick={()=> handlerNext()}>Next </a>
    </div>
 </>



   
   


 
  
  ) }
