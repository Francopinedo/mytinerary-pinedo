
import React from 'react'
import Itemcarousel from './Item-carousel';
export default function Carousel() {
  let data = [
   {tittle:"Buenos aires",info:"asdasd",img:"./bsas.jpg",link:""},
   {tittle:"Germany",info:"asdasd",img:"./bsas.jpg",link:""},
   {tittle:"Japan",info:"asdasd",img:"./bsas.jpg",link:""},
   {tittle:"New York",info:"asdasd",img:"./bsas.jpg",link:""},
   {tittle:"Buenos aires",info:"asdasd",img:"./bsas.jpg",link:""},
   {tittle:"Germany",info:"asdasd",img:"./bsas.jpg",link:""},
   {tittle:"Japan",info:"asdasd",img:"./bsas.jpg",link:""},
   {tittle:"asdasd",info:"asdasd",img:"./bsas.jpg",link:""},
  ];
  let source = ""
  const handlerImg = () => {
    console.log("FUNCIONNNNNNN")
    
  }

  return (

<>

<div className="carousel rounded-box h-20 w-full">

{/* <div id="slide4" className="carousel-item relative w-full">
    <img src="/images/stock/photo-1665553365602-b2fb8e5d1707.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a> */}


<button onClick={()=> handlerImg()} className='hover:text-purple-600 text-white btnCarousel'> Back </button>   
 <Itemcarousel></Itemcarousel>
 <button onClick={()=> handlerImg()}className='hover:text-purple-600 text-white btnCarousel p-5'> Next </button>  
</div>


</>
        


  )
}