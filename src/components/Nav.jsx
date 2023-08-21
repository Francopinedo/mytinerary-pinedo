import React from 'react'
import Anchor from './Anchor'
import { Link as Anchor } from 'react-router-dom'
export default function Nav() {
    let data = [
        {href:'/',contenido:'Home'},
        {href:'/cities',contenido:'Cities'}  
    ]

    return (
    
    <nav>
    <Anchor to='/'>Home</Anchor>
    <Anchor to='/cities'>Cities</Anchor>
    {/* {data.map(each=> <Anchor href={each.href} contenido={each.contenido}></Anchor>)} */}
    </nav>
        
   
   
    
  )
}
