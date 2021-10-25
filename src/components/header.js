import React from 'react'
import '../App.css'
import {Link} from 'react-router-dom';
import logo from '../images/logo.png'
 
function Header() {
    return (
        <div className="App"> 
            <header className="App-header">  
                <img src={logo} className="App-logo" alt="capstone logo"/>
            </header>
            <div className="menu-bar">
                <h4 className="menu-item">
                    <li><Link to= "/">Home</Link></li>
                </h4>
                <h4 className="menu-item">
                    <li><Link to= "/Guide">Guide</Link></li>
                </h4>
                <h4 className="menu-item">
                    <li><Link to= "/Monitor_Control">Monitor and Control</Link></li>
                </h4>
                <h4 className="menu-item">
                    <li><Link to= "/My_Aquarium">My Aquarium</Link></li>
                </h4>
                <h4 className="menu-item">
                    <li><Link to= "/User_Manual">User Manual</Link></li>
                </h4>
            </div>
        </div>
    )
}
 
export default Header