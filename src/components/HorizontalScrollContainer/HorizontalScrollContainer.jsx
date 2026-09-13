import React, { useRef, useEffect } from 'react';
import './HorizontalScrollContainer.css';

const HorizontalScrollContainer = ({ children }) => {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const handleWheel = (event) => {
      if (scrollContainerRef.current) {
        const isHovering = scrollContainerRef.current.contains(event.target);

        if (isHovering) {
          event.preventDefault();
          scrollContainerRef.current.scrollLeft += event.deltaY;
        }
      }
    };

    const currentRef = scrollContainerRef.current;
    if (currentRef) {
      currentRef.addEventListener('wheel', handleWheel, { passive: false });
    }

    return () => {
      if (currentRef) {
        currentRef.removeEventListener('wheel', handleWheel);
      }
    };
  }, []);

  return (
    <div className="horizontal-scroll-container" ref={scrollContainerRef}>
      {children}
    </div>
  );
};

export default HorizontalScrollContainer;