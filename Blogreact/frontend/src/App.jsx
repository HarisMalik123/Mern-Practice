import React, { useState, useEffect } from 'react';
import axios from 'axios';
import reactLogo from './assets/react.svg'
import BlogCard from './components/Blog'
import Forms from './components/Forms'

function App() {
  const [blogs, setCount] = useState([])
  const [loading,setloading]=useState(true)


  return (
    <>
      <Forms/>
    </>
  )
}

export default App
