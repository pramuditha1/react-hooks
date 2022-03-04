import React, {useReducer} from 'react'

const initialState = {
  firstCounter: 0,
  secondCounter: 10
}
const reducer = (state, action) => {
    switch(action.type) {
      case 'increment' :
        return {...state, firstCounter: state.firstCounter + action.payload}
      case 'decrement' :
        return {...state, firstCounter: state.firstCounter - action.payload}
      case 'increment2' :
        return {...state, secondCounter: state.secondCounter + action.payload}
      case 'decrement2' :
        return {...state, secondCounter: state.secondCounter - action.payload}
      case 'reset' :
        return initialState
      default :
        return state
    }
}

function CounterTwo() {
  /*
  reducer hook accepts 2 parameters (reducer function and initial state)
  useReducer returns current state and dispatch method, 
  diapatch method allows us to execute coresponding method to update state based on action type
  state object updates based on the dispatching action type.

  ************ what is the advantage of using payload values and actions types both with state objects over counterOne example
  answer : this pattern can dispatch action along with payload value. based on action and value store updates
  practical scenario : Add 2 more buttons(increment by 5, decrement by 5)

  *********** why use spread operator in reducer function
  answer : state can have multiple objects, by using spread operator we can spread out elements of state object

  *********** is it possible to add another counter
  answer : yes, just add new 2 buttons to increment and decrement and add state object value to hold the second 
  counter value, and implement reducer switch options to catch dispatching actions for new 2 buttons.
  */
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <div>
        <div>Count 1 - {state.firstCounter}</div>
        <div>Count 2 - {state.secondCounter}</div>
        <button onClick={() => dispatch({type: 'increment', payload: 1})}>Increment by 1</button>
        <button onClick={() => dispatch({type: 'decrement', payload: 1})}>Decrement by 1</button>
        <button onClick={() => dispatch({type: 'increment', payload: 5})}>Increment by 5</button>
        <button onClick={() => dispatch({type: 'decrement', payload: 5})}>Decrement by 5</button>

        <div>
          <button onClick={() => dispatch({type: 'increment2', payload: 15})}>conter 2 - Increment by 15</button>
          <button onClick={() => dispatch({type: 'decrement2', payload: 15})}>counter 2 - Decrement by 15</button>
        </div>

        <button onClick={() => dispatch({type: 'reset'})}>Reset</button>
    </div>
  )
}

export default CounterTwo