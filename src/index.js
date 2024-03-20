import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './Header'
import Sidebar from "./Sidebar"
import { BrowserRouter } from "react-router-dom";
import Test from './Test'
import App from './App'
import Useeffect from './Useeffect';
import Login from './Login';
import Weddindsite from './Weddindsite';

 



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
   <Sidebar/> 
    {/* <Header/>}
   
    {/* <App/> */}
    {/* <Test/> */}
    {/* <Useeffect/> */}
    {/* <Login/> */}

    {/* <Weddindsite/> */}
  </BrowserRouter>
)


