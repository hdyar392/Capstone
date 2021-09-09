import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
 
import HomePage from './pages/HomePage.js'
import Guide from './pages/Guide.js'
 
 
function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={HomePage}/>
        <Route path="/search" component={Guide}/>
      </div>
    </Router>
  );
}
 
export default App;


