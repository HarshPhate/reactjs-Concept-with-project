import { useCallback, useState ,useEffect, useRef} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setLength] = useState(0)
  const [numallow, setNumallow] = useState(false)
  const [charallow, setCharallow] = useState(false)
  const [password, setPassword] = useState("")

//useRef Hook
let passref =useRef(null)

  const passgenerator = useCallback(
    () => {
     let pass = ""
     let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

      if (numallow) { str += "0123456789" }
      if (charallow) { str += "!@#$%^&*(){}[]~``" }
      for (let i = 1; i <= length; i++) {
       pass += str.charAt(Math.floor(Math.random() * str.length + 1))
      }
      setPassword(pass)
    },
    [length, numallow, charallow]
  )

  const copypassklipboard =useCallback(()=>{
    passref.current?.select()
    passref.current?.setSelectionRange(0,5)
    window.navigator.clipboard.writeText(password)
  },[])


  useEffect(() => {
    passgenerator()
  }, [length, numallow, charallow])
  

  return (
    <>
      <div className='w-full mx-auto max-w-md text-xl font-mono bg-gray-800 text-white items-center p-3'>
        <h1>Password Generator</h1>
        <div>
          <input type="text" value={password} placeholder='Password' readOnly ref={passref} className='text-black'/>
          <button onClick={copypassklipboard} className='bg-blue-700'>copy</button>
        </div>
        <div className='flex gap-2 text-sm'>
          <input type="range" min={6} max={100} value={length} className='cursor-pointer' onChange={(e) => { setLength(e.target.value) }} /><label>lenth:{length}</label>
          <input type="checkbox" defaultValue={numallow} id='numinput' onChange={() => { setNumallow(prev => !prev) }} /><label htmlFor="">Number</label>
          <input type="checkbox" defaultValue={charallow} id='charinput' onChange={() => { setCharallow(prev => !prev) }} /><label htmlFor="">charecter</label>
        </div>
      </div>
    </>
  )
}

export default App
