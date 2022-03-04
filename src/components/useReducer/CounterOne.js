import React, {useReducer} from 'react'

const initialState = 0
const reducer = (state, action) => {
    switch(action) {
      case 'increment' :
        return state + 1
      case 'decrement' :
        return state - 1
      case 'reset' :
        return initialState
      default :
        return state  
    }
}

function CounterOne() {
  /*
  reducer hook accepts 2 parameters (reducer function and initial state)
  useReducer returns current state and dispatch method, 
  diapatch method allows us to execute coresponding method to update state.
  */
  const [count, dispatch] = useReducer(reducer, initialState)
  return (
    <div>
        <div>Count - {count}</div>
        <button onClick={() => dispatch('increment')}>Increment</button>
        <button onClick={() => dispatch('decrement')}>Decrement</button>
        <button onClick={() => dispatch('reset')}>Reset</button>
    </div>
  )
}

export default CounterOne