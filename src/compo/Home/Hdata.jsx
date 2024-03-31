import React from "react";
import Sdata from "../../Sdata";
import Cards from "../Cards/cards";


export const Hdata = () => {
  return <div>
{
Sdata.map((e,index)=>{
        
        return(
      
      
        <Cards
        
        key={index}
        sname ={e.sname}
        link ={e.slink}
        blink={e.blink}
        text={e.text}
        
        />
        
        )
      })
}



  </div>;
};
