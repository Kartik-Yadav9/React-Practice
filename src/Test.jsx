import React, { useState } from "react";
import Header from "./Header";
import App from "./App";
import Sidebar from "./Sidebar";
import Table from "./Table";


//  writing hello world, which should show only one word while clicking. "Hello" is alresdy printed, so when clicked 
// it is asking not true condition so it will print false i.e "World".

  const Test=()=>{

    const[click,clicko]= useState(null)

    

    return(
        <>
            
            <button onClick={()=>clicko(!click)}>{click ? <p>Show form</p> : <p>Show site</p>}</button>

            {click ?
                <Table/>
                :
                <App/>
            }
            

        </>
    )
}

export default Test



























// Using colours with the help of input, whatever we type in it 

// const Test=()=>{

//     const[getData, setGetData]= useState("")

//     const inputHandle=(e)=>{
//         setGetData(e.target.value)
//     }

//     return(
//         <>
//         <div className=" text-center">
//             <input type="text" className="w-50 my-5 " onChange={inputHandle}/>
//         </div>
        
//         <p className={getData}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae amet maiores assumenda commodi alias officia inventore? Obcaecati consequuntur, dolore provident aspernatur voluptate culpa officiis voluptatem reiciendis, non ipsa sapiente ab.
//         Ipsam reprehenderit optio dicta distinctio illo atque consequuntur eos. Delectus debitis magni tenetur blanditiis dolorem dolorum in modi. Magnam voluptatum similique</p>    
//         </>
//     )
// }

// export default Test



















// putting values in input and executing at onclick

// const Test=()=> {

//     const[getData, setGetData]= useState({



//     })

//     const inputHandle=(e)=> {
//         console.log(e.target);
//     }



//     return(
//         <form>
//             <input type="text"  placeholder="Your Name" name="name"  onChange={inputHandle}/>
//             <input type="email" placeholder="Your Email" name="email"  onChange={inputHandle}/>
//             <input type="number" placeholder="Your Number" name="number"  onChange={inputHandle}/>
//             <input type="Password" placeholder="Your Password" name=""  onChange={inputHandle}/>
//             <button type="submit">Click me</button>
//         </form>
//     )
// }

// export default Test












// putting values in input and executing at onclick....different way


// const Test=()=>{

//     const[small, big]= useState(null)
//     const[smal, bigg]= useState(null)


//    const inputhandle=(e)=>{
//         return big(e.target.value);
//     }

//     const inputhandle2=(f)=>{
//         return bigg(f.target.value);
//     }

//     const but=()=>{
//         let result= (small+" "+ smal)
//         console.log(result);
//     }


//     return(
//         <>
//         <input type="text" placeholder="Name" onChange={inputhandle}/>,
//         <input type="number" placeholder="numb"  onChange={inputhandle2}/>,
//         <button onClick={but}>Click</button>
//         </>
//     )
// }

// export default Test;















// putting values in input and executing at onclick....different way


// const Test = () => {

//     const but = () => {
//         var sum1 = document.getElementById("first").value;
//         var sum2 = document.getElementById("second").value;

//         console.log(sum1 + " "+ sum2);
//     }


//     return (
//         <>
//             <div></div><input type="text" placeholder="Name" id="first" />,
//             <div></div><input type="number" placeholder="numb" id="second" />,
//             <div></div><button onClick={but}>Click</button>
//         </>
//     )
// }

// export default Test;