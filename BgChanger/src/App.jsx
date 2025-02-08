import { useState } from 'react'
import CenteredBox from './Centerbox'

function App() {
  const [color, setColor] = useState('brown')

  return (
    <>
      <CenteredBox color={color} />
      <div className="flex space-x-4 p-4">
        <button
          className='bg-red-500 text-white px-4 py-2 rounded shadow hover:opacity-75'
          onMouseEnter={() => setColor('red')}
          onMouseLeave={() => setColor('brown')} // optional: to reset the color on mouse leave
        >
          Red
        </button>
        <button
          className='bg-blue-500 text-white px-4 py-2 rounded shadow hover:opacity-75'
          onMouseEnter={() => setColor('blue')}
          onMouseLeave={() => setColor('brown')}
        >
          Blue
        </button>
        <button
          className='bg-green-500 text-white px-4 py-2 rounded shadow hover:opacity-75'
          onMouseEnter={() => setColor('green')}
          onMouseLeave={() => setColor('brown')}
        >
          Green
        </button>
        <button
          className='bg-black text-white px-4 py-2 rounded shadow hover:opacity-75'
          onMouseEnter={() => setColor('black')}
          onMouseLeave={() => setColor('brown')}
        >
          Black
        </button>
      </div>
    </>
  )
}

export default App
