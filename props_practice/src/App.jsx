import { useState } from 'react';
import './App.css';
import Card from './components/Card';

function App() {
  const [count, setCount] = useState(0);
  let myobj = {
    name: "sai",
    age: 20
  };
  let newarr = [1, 2, 3];

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl'>Hello World</h1>
      <Card channel="chai aur code" someobj={myobj} array={newarr} />
      <Card />
    </>
  );
}

export default App;
