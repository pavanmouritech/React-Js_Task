// import React,{useState} from 'react'


// const Basicform = () => {
//     const[name,setName]=useState("");
//     const[age,setAge]=useState("");

//     const[allEntry,setAllEntry]=useState([]);
//     const submitForm=(e) => {
//         e.preventDefault();

//         const newEntry = {id: new Date().getTime().toString, name , age};
//         setAllEntry([...allEntry,newEntry]);
//         console.log(allEntry);

//          setName("");
//         setAge("reset");
//     }
    
//   return (
//       render(
//     <>
//     <center>
//     <form action="" onSubmit={submitForm}>
//         <div>
//             <label html="name">name:</label>
//             <input type="text" name="name" id="name" autoComplete="off" value={name} onChange={(e)=>setName(e.target.value)}/>
//             <label html="age">age:</label>
//             <input type="text" name="age" id="age" autoComplete="off" valu={age}   onChange={(e)=>setAge(e.target.value)}/>
//         </div>
//         <button type="submit"  > submit </button>
//     </form> 
//     <div>
//         {
//             allEntry.map((curElem) => {
//                 const { id, name, age} = curElem;
//                return(
//                    <div className="showDataStyles" key={id}>
//                        <p>{name} ({age+"years old"})  </p>
                       
//                     </div>
//                )
//             }
//             )
//         }
//     </div>
//     </center>
//     </>    
//   ))
// }

// export default Basicform

// import React from "react";
// import './App.css';
// import { Login } from "./components/forms/login";
// // import Basicform from "./components/forms/basicform";

// const App=()=>{
//     return(
//         <div>
//             {/* <Basicform/> */}
//             <Login/>
//         </div>
//     )
// }
// export default App