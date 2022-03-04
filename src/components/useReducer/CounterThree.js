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

function CounterThree() {
  /*
  reducer hook accepts 2 parameters (reducer function and initial state)
  useReducer returns current state and dispatch method, 
  diapatch method allows us to execute coresponding method to update state.

  Can we implement multiple useReducers
  Answer : yes, using same state transition and reducer we can use multiple useReducers.
          this will prevent us from duplicating reducer functions and merging states.
  */
  const [state1, dispatch] = useReducer(reducer, initialState)
  const [state2, dispatch2] = useReducer(reducer, initialState)
  return (
    <>
        <div>
            <div>Count 1 - {state1}</div>
            <button onClick={() => dispatch('increment')}>Increment</button>
            <button onClick={() => dispatch('decrement')}>Decrement</button>
            <button onClick={() => dispatch('reset')}>Reset</button>
        </div>
        <div>
            <div>Count 2 - {state2}</div>
            <button onClick={() => dispatch2('increment')}>Increment</button>
            <button onClick={() => dispatch2('decrement')}>Decrement</button>
            <button onClick={() => dispatch2('reset')}>Reset</button>
        </div>
    </>
  )
}

export default CounterThree