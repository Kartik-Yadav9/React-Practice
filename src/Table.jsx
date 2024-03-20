import axios from "axios";
import React, {useEffect, useState} from "react";
import { ToastContainer, toast } from 'react-toastify';


 
 function Table() {

  const[detail,setDetail]= useState()

  useEffect(()=>{
          axios.get("http://localhost:1800/data").then((res)=>{
            setDetail(res.data)
          }).catch((error)=>{
            console.log("error")
          })
        }, [])

        const but=(event)=>{
          axios.delete("http://localhost:1800/data/"+event).then((res)=>{
           toast.success("deleted")
          }).catch((err)=>{
            console.log(err)
          })
        }

   return (
    <section className="container">
      <table className="table table-dark table-striped">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
        {detail && detail.map((item)=>{
          return(
            <tr>
              <th>{item.id}</th>
              <th>{item.name}</th>
              <th>{item.email}</th>
              <th>
                <button>update</button>
                <button onClick={()=>but(item.id)}>delete</button>
              </th>

            </tr>
          )
        })}
        </tbody>
      </table>
      <ToastContainer/>
    </section>
   )
 }
 
 export default Table