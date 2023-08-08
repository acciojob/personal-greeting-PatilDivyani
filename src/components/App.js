
import React from "react";
import './../styles/App.css';
import {useState} from 'react'

const App = () => {
  let [name, setName] = useState('');
  return (
    <div>
         <h1>Enter your name : </h1>
  <input type='text' onChange={(event)=>setName(event.target.value) } />
  {name.length>0 && 
  <h2>Hello {name}!</h2>}
    </div>
  )
}

export default App
