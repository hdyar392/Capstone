import React, { useState, useEffect } from 'react';
import { render } from '@testing-library/react';

function GetData() {

    const [data,setData]=useState([]);
    const getData=()=>{
      fetch('output.json'
      ,
      )
        .then(function(response){
          return response.json();
        })
        .then(function(myJson) {
          setData(myJson)
        });
    }
    useEffect(()=>{
      getData()
    },[])

    //rerenders getData every 5 seconds to see updated values
    setTimeout(getData, 5000)

    //print the current values of the system using data.map
    render(); {
      return (
        <div>
          The current temperature of your tank is: {data.map((data)=><div>{data.temperature}</div>)}
          pH: {data.map((data)=><div>{data.pH}</div>)} 
          Salinity: {data.map((data)=><div>{data.salinity}</div>)}
          SG: {data.map((data)=><div>{data.specificGravity}</div>)}  
          Light Status: {data.map((data)=><div>{data.lightStatus}</div>)} 
          Heater Status: {data.map((data)=><div>{data.heaterStatus}</div>)} 
          Pump Status: {data.map((data)=><div>{data.pumpStatus}</div>)}
        </div>
      );
    }
  }
  
  export default GetData;





