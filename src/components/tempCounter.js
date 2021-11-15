//temperature counter test
import React, { useState, useEffect } from 'react';
import '../styles/temperature.css'
//import Cookies from 'universal-cookie';

const Counter = (defaultValue, temperature) => {
	const [temperatureValue, setTemperatureValue] = useState(75);
	const [temperatureColor, setTemperatureColor] = useState('cold');
  //const cookies = new Cookies();
	const [value, setValue] = useState(() => {

    const stickyValue = window.localStorage.getItem('temperature');
    return stickyValue !== null
      ? JSON.parse(stickyValue)
      : defaultValue;
  });

  
  //store the value of the temperature unpon clicking "set temperature" to the local storage
  useEffect(() => {
    //cookies.set('temperature', JSON.stringify(value), { path: '/' });
    window.localStorage.setItem('temperature', JSON.stringify(value));
  }, [temperature, value]);


	const increaseTemperature = () => {
		const newTemperature = temperatureValue + 1;
		setTemperatureValue(newTemperature);


    if (newTemperature > 70 ) {
			setTemperatureColor('neutral');
		}
		if (newTemperature >= 85) {
			setTemperatureColor('hot');
		}
    
    if (newTemperature >= 90) {
      setTemperatureValue(90)
		}
	};

	const decreaseTemperature = () => {
		const newTemperature = temperatureValue - 1;
		setTemperatureValue(newTemperature);
		
    if (newTemperature < 85 ) {
			setTemperatureColor('neutral');
		}    
    if (newTemperature < 70) {
			setTemperatureColor('cold');
		}
    if (newTemperature <= 65) {
			setTemperatureValue(65);
		}
	};

	//display the temp button and also include button to set the temperature
	return (
		<div className='temp-container'>
			<div className='temperature-display-container'>
				<div className={`temperature-display ${temperatureColor}`}>{temperatureValue}°F</div>
			</div>
			<div className='button-container'>
        <button className='temp-button' onClick={decreaseTemperature}>-</button>
				<button className='temp-button' onClick={increaseTemperature}>+</button>
				<button onClick={()=>setValue(temperatureValue)}> 
				Set Temperature
			</button>
			</div>
		</div>
	);
};

export default Counter;

