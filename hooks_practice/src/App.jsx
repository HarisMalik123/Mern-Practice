import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setcounter]=useState(0)
  
 const addvalue=()=>{
  counter++;
  setcounter(counter)
console.log(`Counter = ${counter}`)
 }
 const decvalue=()=>{
  counter--;
  if(counter<0)
  {
    counter=0;
    setcounter(0)
    alert('Counter Value Can not be less than zero')
  }
  else{
     setcounter(counter)
  }
console.log(`Counter = ${counter}`)
 }

  return (
    <>
      <h1>Counter</h1>
      <h2>Counter Value = {counter} </h2>
       <button onClick={addvalue}>Increment {counter}</button>
       <br/>
       <button onClick={decvalue}>Decrement {counter}</button>
      

    </>
  )
}

export default App
