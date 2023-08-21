import Itemcarousel from "./Item-carousel";
import React from "react";
export default function Card(tittle,info,img,link) {

  let data_array = [
    {tittle:"Buenos aires",info:"asdasd",img:"./bsas.jpg",link:""},
    {tittle:"Germany",info:"asdasd",img:"./japan.jpg",link:""},
    {tittle:"Japan",info:"asdasd",img:"./bsas.jpg",link:""},
    {tittle:"New York",info:"asdasd",img:"./japan.jpg",link:""},
    {tittle:"Buenos aires",info:"asdasd",img:"./NewYork.jpg",link:""},
    {tittle:"Germany",info:"asdasd",img:"./japan.jpg",link:""},
    {tittle:"Japan",info:"asdasd",img:"./NewYork.jpg",link:""},
    {tittle:"asdasd",info:"asdasd",img:"./bsas.jpg",link:""},
   ];



  return (
    <>
   <div class="max-w-sm border border-gray-500 rounded-lg  w-3/12 ">
    <a href="#">
        <img class="rounded-t-lg " src={data_array[1].img} alt="" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl ">{data_array[1].tittle}</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{data_array[1].info}</p>
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
