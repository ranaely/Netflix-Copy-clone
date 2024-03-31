import React, { useEffect, useRef } from 'react';

import anime from 'animejs/lib/anime.es.js';



const Tag2=()=> {
 
    const textWrapperRef = useRef(null);
  
    
    
   
    useEffect(() => {
      // Wrap each letter in a span
      const textWrapper = textWrapperRef.current;
      textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
  
      // Anime.js animation timeline
      anime.timeline({loop: true})
        .add({
          targets: '.letter',
          opacity: [0, 1],
          easing: 'easeInOutQuad',
          duration: 2250,
          delay: (el, i) => 150 * (i+1)
        }).add({
          targets: textWrapper,
          opacity: 0,
          duration: 1000,
          easing: 'easeOutExpo',
          delay: 1000
        });
    }, []);
    return(
<div>


<h1 className='middle1'> <h1 className='middle' ref={textWrapperRef}>Top 10 New Netflix Series </h1></h1>

</div>

  )

}

export default Tag2