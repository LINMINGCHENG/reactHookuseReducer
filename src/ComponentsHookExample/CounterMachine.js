import React  from 'react'
import UseCounter from '../Hooks/UseCounter';

function CounterMachine() {
    
   const[count, increment,decrement,reset] = UseCounter(0,1)


    return (
        <div>
           <h1>count:{count}</h1> 
            <button onClick={increment}>increment</button>
            <button onClick={decrement}>decrement</button>
            <button onClick={reset}>reset</button>
        </div>
    )
}

export default CounterMachine