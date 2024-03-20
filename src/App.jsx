import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React, { useState } from "react";
import { Button } from "bootstrap";





const App=()=>{

    const[getData, setGetData]= useState({
        name:null,
        email:null,
        password: null,
        gender: null,
    })

    const inputHandle=(e)=>{
        setGetData((prevState)=>({...prevState,[e.target.id] :e.target.value}));
    }

    const but=()=>{
        axios.post("http://localhost:1800/data",getData).then((res)=>
        {console.log(res)
        toast.success("submitted")})
        .catch((err)=>{console.log(err)
        toast.error("error")})
    }     


  return (
    <>
 
        <label htmlFor="name">Name</label>        
        <input type="text" id="name" placeholder="your name" onInput={inputHandle}/><br/><br/>

        <label htmlFor="email">Email</label>
        <input type="email" id="email" placeholder="your email" onInput={inputHandle}/><br/><br/>

        <label htmlFor="password">Password</label>
        <input type="password" id="password" placeholder="your password" onInput={inputHandle}/><br/><br/>

        <label>Gender</label><br/><br/>

        <label>Male</label>
        <input type="radio" name="gender"  value= "male" id="gender" onInput={inputHandle}/><br/>
        <label>female</label>
        <input type="radio" name="gender" value= "female"  id="gender" onInput={inputHandle}/><br/>


        <button onClick={but}>Submit</button>
        <ToastContainer/>

    
    </>
  )
}

export default App







































// const App=()=>{
//     const[getData, setGetData]= useState({
//         Name:null,
//         Comment: null,
//     })

//     const inputHandle=(e)=>{
//         setGetData((prevState)=>({...prevState,[e.target.id]: e.target.value}))
//     }

//     const but=()=>{
//         axios.post("http://localhost:900/data",getData).then((res)=>
//         {console.log(res)
//         toast("done")})
//         .catch((err)=>
//         {console.log(err)})

//     }    
    
   

//     return(
//         <>
//         <form>
//             <label htmlFor="Name">Name: </label>
//             <input type="text" placeholder="your name" id="Name" onInput={inputHandle}/><br/><br/>
//             <label>Comment: </label>
//             <textarea cols="20" rows="5" id="Comment" onInput={inputHandle}/>
//             <button onClick={but}>Click me</button>
//         </form>
//         <ToastContainer/>
        
//         </>
//     )
// }

// export default App;

