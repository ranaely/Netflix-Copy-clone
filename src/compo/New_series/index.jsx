import React from 'react'
import Navbar1 from '../navbar/navbar'
import '../../App.css'
import Cards from '../Cards/cards'
import SSdata from './SSdata'
function Index() {
  return (
    <div >
        
        <Navbar1/>
            
        <div>{
 
 SSdata.map((e,index)=>{
 
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

export default Index