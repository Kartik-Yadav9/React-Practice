import React from 'react';
import './style.css'
import { Link, Route, Routes } from 'react-router-dom';
// import Sidebar from "./Sidebar"
import Home from './Home'
import Chat from './Chat';
import About from './About';
import Errorr from './Errorr';

const Sidebar = () => {

    return (
        <>
            <div className='side'>
                <ul>
                    <li><Link to="/"> Home</Link></li>
                    <li> <Link to="/About"> About</Link></li>
                    <li><Link to="/Chat">Chat</Link></li>
                    
 
                </ul>

            </div>
            <Routes>
                <Route path='/' Component={Home} />
                <Route path='/about' Component={About } />
                <Route path= '/chat' Component= {Chat}/>
                <Route path= "*" Component={Errorr}/>
            </Routes>
        </>
    )
}

export default Sidebar;