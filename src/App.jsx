import { useState } from 'react'

import './App.css'

function App() {

  const [count, setCount] = useState(0)

  // const incresHandler = () => {
  //   setCount(count + 1)
  // }

  if (count < 0) {
    setCount(0)
  } else if (count > 10) {  
    setCount(10)
  }
  function incresHandler() {
    setCount(count + 1)
  }
  // const decresHandler = () => {
  //   setCount(count - 1)
  // }
function decresHandler() {
  setCount(count - 1)
}
  // const restHandler = () => {
  //   setCount(0)
  // }
  function restHandler() {
    setCount(0)
  }
  return (
    <div className="W-[100vw] h-[100vh] flex justify-center items-center  bg-[#344151] flex-col gap-3 ">
      <div className='text-[#0398d4] font-medium text-2xl'>
        Increment && Decrement
      </div>
      <div className='bg-white flex justify-center gap-12 py-3 rounded-sm text-[25px] text-[#344151]' >
        <button onClick={decresHandler} className=' border-r-2 text-center w-20 border- [#bfbfbf] text-5xl'>
          -
        </button>
         <div className='font-bold gap-12 text-4xl text-center'>
             {count}
         </div>
         <button onClick={incresHandler} className=' border-l-2 text-center w-20 border- [#bfbfbf] text-5xl'>
          +
        </button>

      </div>
     
      
      <button onClick={restHandler} className='bg-[#0398d4] text-white py-2 px-4 rounded-sm text-lg' >
        Reset
      </button>
    </div>
  )
}

export default App
