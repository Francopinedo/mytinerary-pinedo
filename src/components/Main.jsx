import React from "react";
import Carousel from "./Carousel";
export default function Main() {
  return (
    <main className="m-20">
      <div className="flex">

      <div className="m-10">
      <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
        Find the perfect destination
      </h1>
      <p className="mt-6 text-xl text-neutral-600">
       Our app will help you find the perfect path for your next trip, WIth an easy-to-use interface and a host of itinerary options, planning your next trip has never been easier
      </p>
      <div className="btn mt-10">
        <a className="text-white" href="#carousel-section">
        <button variant="text" className=" text-2xl font-semibold border px-5 py-2 rounded-lg hover:text-purple-600 hover:border-purple-600">
        Read More{" "} 
      </button> 
        </a>
          
      </div>
      </div>
      <div className="">
      <img className="rounded-full h-auto max-w-lg " src="./bsas.jpg" alt="jpn" />
      </div>
      
      </div>
      <div className="">
      <Carousel></Carousel>
      </div>
      
    </main>
  );
}
