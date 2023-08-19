
import React from "react";
export default function Card(tittle,img,info) {
  return (
    <>
   <div class="max-w-sm border border-gray-500 rounded-lg  ">
    <a href="#">
        <img class="rounded-t-lg" src="" alt="" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl ">{tittle}</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">"{info}"</p>
        <div className="btn mt-10">
      <button variant="text" className="flex items-center gap-2 sm:flex sm:items-center">
        Read More{" "} 
      </button>     
      </div>   
    </div>
</div>
    </>
  );
}
