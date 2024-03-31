import React from 'react'
import Navbar1 from '../navbar/navbar'
import Hdata from './Hdata'
import Cards from '../Cards/cards'
import '../../App.css'


function Holloywood() {
  return (
    <div>
        <Navbar1/>
        
        <div>{
 
 Hdata.map((e,index)=>{
 
   return(
 
 
   <Cards
   
   key={index}
   sname ={e.sname}
   link ={e.slink}
   blink={e.blink}
   text={e.text}
   
   />)
 })
 
 }  </div>
        
       </div>
  )
}

export default Holloywood
