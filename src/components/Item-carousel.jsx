import React, { useEffect, useState } from "react";
import Carousel from "./Carousel";
import Card from "./card";

export default function Itemcarousel() {

  //WITHOUT DATABASE
  const cities1 = [
    { title: "Buenos aires", info: "asdasd", img: "./bsas.jpg" },
    { title: "Japan", info: "asdasd", img: "./japan.jpg" },
    { title: "New York", info: "asdasd", img: "./NewYork.jpg" },
    { title: "Australia", info: "asdasd", img: "./australia.jpg" },
  ];
  const cities2 = [
    { title: "New York", info: "asdasd", img: "./NewYork.jpg" },
    { title: "Germany", info: "asdasd", img: "./germany.webp" },
    { title: "Australia", info: "asdasd", img: "./australia.jpg" },
    { title: "Buenos aires", info: "asdasd", img: "./bsas.jpg" },
  ];
  const cities3 = [
    { title: "Japan", info: "asdasd", img: "./bsas.jpg" },
    { title: "New York", info: "asdasd", img: "./NewYork.jpg" },
     { title: "New York", info: "asdasd", img: "./NewYork.jpg" },
    { title: "Germany", info: "asdasd", img: "./germany.webp" },
  ];

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
 {step == 0 &&
 <>
   {cities1.map ((each,i) => 
    <>
   <div key={i} class="max-w-sm border border-gray-500 rounded-lg  w-3/12 ">
    <a href="#">
        <img class="rounded-t-lg sm:h-64" src={each.img} alt="" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl ">{each.title}</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{each.info}</p>
        <div className="btn mt-10">
      <button variant="text" className="text-white flex items-center gap-2 sm:flex sm:items-center">
        Read More{" "} 
      </button>     
      </div>   
    </div>
  </div>    
   </>
 )}
 </>
 }
 

 {step == 1 &&
 <>
   {cities2.map ((each,i) => 
    <>
   <div key={i} class="max-w-sm border border-gray-500 rounded-lg  w-3/12 ">
    <a href="#">
        <img class="rounded-t-lg sm:h-64" src={each.img} alt="" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl ">{each.title}</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{each.info}</p>
        <div className="btn mt-10">
      <button variant="text" className="text-white flex items-center gap-2 sm:flex sm:items-center">
        Read More{" "} 
      </button>     
      </div>   
    </div>
  </div>    
   </>
 )}
 </>
 }

{step == 2 &&
 <>
   {cities3.map ((each,i) => 
    <>
   <div key={i} class="max-w-sm border border-gray-500 rounded-lg  w-3/12 ">
    <a href="#">
        <img class="rounded-t-lg sm:h-64" src={each.img} alt="" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl ">{each.title}</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{each.info}</p>
        <div className="btn mt-10">
      <button variant="text" className="text-white flex items-center gap-2 sm:flex sm:items-center">
        Read More{" "} 
      </button>     
      </div>   
    </div>
  </div>    
   </>
 )}
 </>
 }

     <div className="absolute flex justify-between -translate-y-1/2 left-72 right-72 top-full btn-carousel ">
      <a className="btn btn-circle" onClick={()=> handlerBack()}> Back</a> 
      <a  className="btn btn-circle" onClick={()=> handlerNext()}>Next </a>
    </div>

   </>
   
  );

 
  
 
}
