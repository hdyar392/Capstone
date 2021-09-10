import React from 'react';
import './App.css';
import { Route, Link } from "react-router-dom";

import HomePage from './Pages/aHomePage.js';
import Guide from './Pages/bGuide.js';
import Monitor_Control from './Pages/cMonitor-Control.js';
import My_Aquarium from './Pages/dMy-Aquarium.js';
 
function App() {
  return (
      <div className="App">
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/Guide" component={Guide}/>
        <Route exact path="/Monitor_Control" component={Monitor_Control}/>
        <Route exact path="/My_Aquarium" component={My_Aquarium}/>
      </div>
  );
}
 
export default App;


