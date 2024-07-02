import { useState } from 'react'

function App() {
  const [count, setCount] = useState(15);

  const countIncrease = () => {
      if(count === 20) setCount(20);
      else setCount(count + 1);
  }

  const countDecrease = () => {
    if(count === 0) setCount(0);
    else setCount(count - 1);
}

  return (
    <>
    <div className='w-auto h-72 flex flex-col justify-center items-center text-white bg-black m-40'>
      <h1 className='mb-8'>My Counter</h1>
      <button className='w-36 h-10 bg-white text-black w-10 h-10' onClick={countIncrease}>Counter Increase</button>
      counter : {count}
      <button className='w-36 h-10 bg-white text-black w-10 h-10' onClick={countDecrease}>Count Decrease</button>
    </div>      
    </>
  )
}

export default App




// Here we learnt that - 
// We can't simply create Variables like JS and update them using a function. If we do that the value will change as it used to be in JS but it will not reflect to UI. So for UI updation we will require HOOKS.

//  What are Hooks?
// Hooks are special function in react that allow us to make changes in the UI. 
// Hooks are a way to tell react that this is the change I am making(as a developer) and since we made it through hook react will take care of it in case of any updation and do as per the code.
// Without using Hooks reflecting changes in UI is hassle full process and is nearly impossible.'
// Hooks also provide other functionlities and there are other functionalities also and we have other hooks for them.
// IN ALL Hooks are special functions of react.



