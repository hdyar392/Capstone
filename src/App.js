import React from 'react';
import './App.css';
import {
  HashRouter as Router,
  Route,
} from 'react-router-dom';

import HomePage from './Pages/aHomePage.js';
import Guide from './Pages/bGuide.js';
import Monitor_Control from './Pages/cMonitor-Control.js';
import My_Aquarium from './Pages/dMy-Aquarium.js';
import User_Manual from './Pages/eUser-Manual';
 
function App() {
  return (
    <Router>
      <div>
      <div className ="App">
        <Route exact path="/" component={HomePage}/>
      </div>
        <Route path="/Guide" component={Guide}/>
        <Route path="/Monitor_Control" component={Monitor_Control}/>
        <Route path="/My_Aquarium" component={My_Aquarium}/>
        <Route path="/User_Manual" component={User_Manual}/>
      </div>
    </Router>
        
      
  );
}
 
export default App;


