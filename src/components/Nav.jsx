import React from 'react'
import Anchor from './Anchor'

export default function Nav() {
    let data = [
        {href:'#',contenido:'Home'},
        {href:'#',contenido:'Cities'}  
    ]

    return (
    
    <nav>
    {data.map(each=> <Anchor href={each.href} contenido={each.contenido}></Anchor>)}
    </nav>
        
   
   
    
  )
}
