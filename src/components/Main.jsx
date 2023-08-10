import React from "react";
import Card from "./Card";
import Carousel from "./Carousel";
export default function Main() {
  return (
    <main className="">
      <h1 class="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
        Find the perfect destination
      </h1>
      <p class="mt-6 text-xl text-neutral-600">
       Our app will help you find the perfect path for your next trip, WIth an easy-to-use interface and a host of itinerary options, planning your next trip has never been easier
      </p>
      <div className="btn mt-10">
      <button variant="text" className="flex items-center gap-2 sm:flex sm:items-center">
        Read More{" "} 
      </button>     
      </div>
      <Card/>
      <Carousel/>
    </main>
  );
}
