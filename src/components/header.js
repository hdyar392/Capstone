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
                <h4 className="menu-item"><Link to="/">Home</Link></h4>
                <h4 className="menu-item"><Link to="/">Guide</Link></h4>
                <h4 className="menu-item"><Link to="/">Monitor/Control</Link></h4>
                <h4 className="menu-item"><Link to="/">My Aquarium</Link></h4>
                <h4 className="menu-item"><Link to="/">Help</Link></h4>
                <h4 className="menu-item"><Link to="/">FAQ</Link></h4>
            </div>
        </div>
    )
}
 
export default Header