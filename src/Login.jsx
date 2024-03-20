import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Table from './Table';

const Login= () => {

    const[get, setGet]= useState(null)
    const[store, setStore]= useState([])


    const submit=()=>{
        setStore((prev)=>([...prev, get]));
        setGet("")
    }

    return(
        <>
        <section className='container'>
            
            <div className="input-group flex-nowrap">
                <span className="input-group-text" id="addon-wrapping">name</span>
                <input type="text" className="form-control" placeholder="Username" value={get} onInput={(e)=>setGet(e.target.value)}/>
            </div>

            <button className='bg-danger text-light my-5' onClick={submit}>submit</button>
            <div className='mt-2  '>
                <ul>
                    {store.map((item)=>{
                        return(
                            <>
                            <li>{item}</li>
                            <button className='bg-alert '>edit</button>
                            <button className='bg-alert'>delete</button>
                            </>
                        )
                    })
                    }
                </ul>
               

            </div>
            </section>
        </>
    )
}

    
    

export default Login