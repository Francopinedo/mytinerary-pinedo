import React ,{useEffect, useState} from 'react'
import Carousel from './Carousel'
export default function Itemcarousel(){
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
let [step,setStep] = useState(0);

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

const handlerTimer = () => {
  if (step == 0 ){
    setStep(step+1);
  }else{
    setStep(step-1);
  }
}

useEffect(() => {
  setInterval(() =>{
    handlerTimer()},
    10000)
},[])

  return (
    <>
 {console.log(data_array[step].img)}
 
    <div id="slide1" className="carousel-item relative w-full">
    <img src={data_array[step].img} className="w-3/12 object-cover" />
    <img src={data_array[step].img} className="w-3/12 object-cover" />
    <img src={data_array[step].img} className="w-3/12 object-cover" />
    <img src={data_array[step].img} className="w-3/12 object-cover" />
    <div className="absolute flex justify-between -translate-y-1/2 left-5 right-5 top-1/2 btn-carousel">
      <a className="btn btn-circle" onClick={()=> handlerBack()}> B</a> 
      <a  className="btn btn-circle" onClick={()=> handlerNext()}>N </a>
    </div>
    </div> 
   
   
  </>
  )
}
