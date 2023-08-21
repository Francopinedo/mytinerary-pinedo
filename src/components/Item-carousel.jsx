import React ,{useEffect, useState} from 'react'
import Carousel from './Carousel'
import Card from './card';

export default function Itemcarousel(){
 
let [step,setStep] = useState(0);
let [data,setCard] = useState("");

const handlerCard = () => {
setCard("");
console.log("CARDDDDDDDDDDDDDDD")
}

//Verificar maximo de step despues
const handlerNext = () => {
  if (step != 1 ){
  setStep(step+1);
  console.log(step)
}}

const handlerBack = () => {
  console.log(step)
  if (step != 0 ){
    setStep(step-1);
  }
}

useEffect(() =>
handlerCard()
 ),[];

const handlerTimer = () => {
  if (step == 0 ){
    setStep(step+1);
  }else{
    setStep(step-1);
  }
}

// useEffect(() => {
//   setInterval(() =>{
//     handlerTimer()},
//     10000)
// },[])

//Timer carousel
// setInterval(() =>{
//        handlerTimer()},
//        10000)
//    }

  return (
    <>
   
    <div id="slide1" className="carousel-item relative w-full">
   
    <div className="absolute flex justify-between -translate-y-1/2 left-5 right-5 top-1/2 btn-carousel">
      <a className="btn btn-circle" onClick={()=> handlerBack()}> B</a> 
      <a  className="btn btn-circle" onClick={()=> handlerNext()}>N </a>
    </div>
    </div> 
   
   
  </>
  )
}
