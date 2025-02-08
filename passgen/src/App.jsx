import { useCallback, useEffect, useState } from 'react';

function App() {
  const [length, setLength] = useState(8); // by default 8
  const [number, setNumber] = useState(false);
  const [character, setCharacter] = useState(false);
  const [password, setPassword] = useState('');

  const passwordGenerator = useCallback(() => {
    let pass = '';
    let string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let num = '1234567890';
    let char = '@#$%&^';

    if (number) {
      string += num;
    }
    if (character) {
      string += char;
    }
    for (let i = 0; i < length; i++) { // Use `< length` instead of `<= length`
      pass += string.charAt(Math.floor(Math.random() * string.length));
    }
    setPassword(pass);
  }, [length, number, character ]);
useEffect(()=>{
  passwordGenerator();
},[number,character,length,passwordGenerator])
  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-600'>
        <h1 className='text-white text-center'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input
            type='text'
            value={password}
            className='outline-none w-full py-1 px-3 mt-4 rounded-lg mb-4'
            placeholder='password'
            readOnly
          />
          <button className='outline-none bg-blue-500 text-white hover:bg-white hover:text-blue-800 ease-in-out delay-100 px-4 py-0.5 shrink-0 rounded-md'>
            Copy
          </button>
        </div>
        <div className='flex flex-row gap-4'>
          <div>
            <input
              type='range'
              min={6}
              max={100}
              value={length}
              onChange={(e) => setLength(Number(e.target.value))}
              className='cursor-pointer'
            />
            <label className='block text-white'>
              Length: {length}
            </label>
          </div>
          <div>
            <input
            type='checkbox'
            checked={number}
            onChange={(e)=>{setNumber(e.target.checked)}}
            className='cursor-pointer'

            />
            <label className=' text-white mx-2'>
              Number
            </label>
          </div>
          <div>
            <input
            type='checkbox'
            checked={character}
            onChange={(e)=>{setCharacter(e.target.checked)}}
            className='cursor-pointer'

            />
            <label className=' text-white mx-2'>
             special  character
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
