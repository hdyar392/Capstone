import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom';
import logo from '../images/logo.png'
 
function Header() {
    return (
        <div > 
            <header className="App-header">  
                <img src={logo} className="App-logo" alt="logo"/>
            </header>
            <div className="menu-bar">
                <h4 className="menu-item">
                    <a><Link to= "/">HomePage</Link></a>
                </h4>
                <h4 className="menu-item">
                    <li><Link to= "/Guide">Guide</Link></li>
                </h4>
                <h4 className="menu-item">
                    <li><Link to= "/Monitor_Control">Monitor_Control</Link></li>
                </h4>
                <h4 className="menu-item">
                    <li><Link to= "/My_Aquarium">My_Aquarium</Link></li>
                </h4>
            </div>
        </div>
    )
}
 
export default Header