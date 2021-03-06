import React, {useState} from 'react'

function HookCounterTwo() {
    const initialCount = 0
    const [count, setCount] = useState(initialCount)
    const incrementByFive = () => {
        for(let i=0; i<5; i++){
            //new state value depends on the previous state value.
            //pass a function to the setter function
            //(pass previous count as a parameter and return previous count + 1)
            setCount(prvCount => prvCount + 1)
        } 
    }
    return (
        <div>
           Count : {count} 
           <button onClick={() => setCount(initialCount)}>Reset</button>
           <button onClick={() => setCount(prvCount => prvCount + 1)}>Increment</button>
           <button onClick={() => setCount(prvCount => prvCount - 1)}>Decrement</button>
           <button onClick={incrementByFive}>Increment by 5</button>
        </div>
    )
}
//prvCount passed as a parameter to a arrow function and get a return value as call back in setCount() functions
export default HookCounterTwo
