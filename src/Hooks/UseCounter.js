import {useState} from 'react'

function UseCounter(initialCount = 0 , value) {
    const [count, setCount] = useState(initialCount);

    const increment= ()=>{
        setCount(preCount => preCount + value)
    }

   const decrement = ()=>{
       setCount(preCount =>preCount -value)
   }

   const reset = () =>{
       setCount(initialCount)
   }

   return [count, increment ,decrement ,reset]
}

export default UseCounter