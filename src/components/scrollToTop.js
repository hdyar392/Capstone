import React, { useEffect, useState } from "react";
import BacktoTop from '../images/BacktoTop.png'

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  //show button when page is scorlled upto given distance
  const toggleVisibility = () => {
    if (window.pageYOffset > 150) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  //set the top cordinate to 0
  //make scrolling smooth
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="scroll-to-top">
      {isVisible && 
        <div onClick={scrollToTop}>
          <img src= {BacktoTop} alt='Go to top'/>
        </div>}
    </div>
  );
}



