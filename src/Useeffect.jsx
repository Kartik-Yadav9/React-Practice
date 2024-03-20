import axios from "axios";
import React, {useEffect, useState} from "react";




function Useeffect() {
  return (
    <div>Useeffect</div>
  )
}

export default Useeffect












































// function Useeffect() {

//     const[date, getDate]= useState([])

//     useEffect(()=>{
//       axios.get("http://localhost:1800/data").then((res)=>{
//       console.log(res)
//       getDate(res.data)
//     })
      
//     },[])
//   return (
//     <>
//     Useeffect
//     {date.map((item)=>{
//         return(
//             <div>{item.name}</div>
//         )
//     }) }
//    </>
//   )
// }

// export default Useeffect





















// const Useeffect=()=>{

//     const[data, getData]=useState(0)

//     useEffect(()=>{
        
//         console.log("THIS IS " , data)
        
//     }, [data])

//     return(
//         <>
//         <button onClick={()=>getData(data+ 1)}>Increase</button>
//         <div>The current number is {data}</div>
//         <button onClick={()=>getData(data- 1)}>Decrease</button>
//         </>
//     )
// }

// export default Useeffect