import React from 'react';
import {useHorizontalScroll} from './hooks/useHorizontalScroll.js';
import './HorizontalScrollContainer.css';


const HorizontalScrollContainer = ({children}) => {
  const scrollRef = useHorizontalScroll();


  return (

      <div className="neon-glow-wrapper">
        <div className="horizontal-scroll-container" ref={scrollRef}>
          {children}
        </div>
      </div>
  );
};



export default HorizontalScrollContainer;