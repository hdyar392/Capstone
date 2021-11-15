import React, { useState, useEffect } from "react";
import Active from "../images/lighton.png";
import Inactive from "../images/lightoff.png";

function Light(defaultValue2, lights) {

  const [lightStatus, setLightStatus] = useState(() => {

    const stickyValue2 = localStorage.getItem('lights');
    return stickyValue2 !== null
      ? JSON.parse(stickyValue2)
      : defaultValue2;
       
  });

  //store string value of the status of the light in the local storage
  useEffect(() => {
    localStorage.setItem('lights', JSON.stringify(lightStatus));
  }, [lights, lightStatus]);

  const [active, setActive] = useState(false);

  //function to change lightbulb image on click from on to off and vice versa
  const handleChangeActive = () => {
    setActive((previousStar) => {
      return !previousStar;
    });
  }
  return (
    <>
      <div>
        {active ? (
          <img
            className="active"
            src={Active}
            alt="light on"
            onClick={() => handleChangeActive() &
              setLightStatus('off')} //if the light is on then turn it off
           
          />
        ) : (
          <img
            className="inactive"
            src={Inactive}
            alt="light off"
            onClick={() => handleChangeActive() &
              setLightStatus('on')} //if the light is off then turn it on
            
          />
        )}
      </div>
    </>
  );
}

export default Light;


