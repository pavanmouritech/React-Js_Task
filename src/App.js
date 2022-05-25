import React,{useState} from 'react';
import './App.css';


function App() {
    const[name,setName]=useState("");
    const[age,setAge]=useState("");
    const[allEntry,setAllEntry]=useState([]);
    const submitForm=(e) => {
        e.preventDefault();
        const newEntry = {id: new Date().getTime().toString, name , age};
        setAllEntry([...allEntry,newEntry]);
        console.log(allEntry);
         setName("");
        setAge("");
    }
  return (
    <div >
      <center>
      <form onSubmit = {submitForm}>
          <label html="name"> name: </label>
          <input type="text" name="name" id="name" autoComplete="off" value={name} onChange={(e)=>setName(e.target.value)}/>
          <label html="age"> age: </label>
          <input type="text" name="age" id="age" autoComplete="off" value={age} onChange={(e)=>setAge(e.target.value)}/>
          <input  type="submit"  name="submit"/>
    <div>
        {
            allEntry.map((curElem) => {
                const { id, name, age} = curElem;                    //curElem=currentelement
               return(
                   <div className="showDataStyles" key={id}>
                       <p>{name} ({age+"years old"})  </p>
                       
                    </div>
               )
            }
            )
        }
    </div>
    </form>
      </center>
    </div>
  );
}
export default App;