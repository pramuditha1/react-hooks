import React, {useReducer} from 'react';
import './App.css';
import ClassCounter from './components/useStateHook/ClassCounter';
import HookCounterThree from './components/useStateHook/HookCounterThree';
import HookCounterTwo from './components/useStateHook/HookCounterTwo';
import HooksArray from './components/useStateHook/HooksArray';
import HooksCounter from './components/useStateHook/HooksCounter';
import MouseContainer from './components/useEffectHook/MouseContainer';
import UseEffectConditional from './components/useEffectHook/UseEffectConditional';
import UseEffectOne from './components/useEffectHook/UseEffectOne';
import UseEffectHookMouse from './components/useEffectHook/UseEffectHookMouse';
import DataFetchingHook from './components/useEffectHook/DataFetchingHook';
import ComponentA from './components/useContext/ComponentA';
import CounterOne from './components/useReducer/CounterOne';
import CounterTwo from './components/useReducer/CounterTwo';
import CounterThree from './components/useReducer/CounterThree';
import ComponentA1 from './components/useReducer/maintain-global-state/ComponentA'
import ComponentB1 from './components/useReducer/maintain-global-state/ComponentB'
import ComponentC1 from './components/useReducer/maintain-global-state/ComponentC'

export const UserContext = React.createContext()
export const ChannelContext = React.createContext()

/* maintain global state using useContext + useReducer 
   create count context*/
export const CountContext = React.createContext();

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

function App() {
  /* maintain global state using useContext + useReducer 
  passe reducer function and initial state to useReducer hook and returned count state and dispatch action*/
  const [count, dispatch] = useReducer(reducer, initialState)

  return (
    <div className="App">
      {/* *************** useState examples *********** */}
      {/* <ClassCounter/>
      <HooksCounter/> */}

      {/* <HookCounterTwo/> */}

      {/* <HookCounterThree/> */}

      {/* <HooksArray/> */}

      {/* *************** useEffect examples *********** */}
      {/* <UseEffectOne/> */}

      {/* <UseEffectConditional/> */}

      {/* <UseEffectHookMouse/> */}
      {/* <MouseContainer/> */}

      {/* <DataFetchingHook/> */}

      {/* *************** useContext examples ************* */}
      {/* <UserContext.Provider value={'Pramuditha'}>
          <ChannelContext.Provider value={'React hooks channel'}>
              <ComponentA/>
          </ChannelContext.Provider>
      </UserContext.Provider> */}

      {/* *************** useReducer examples ***************** */}
      {/* <CounterOne/> */}

      {/* <CounterTwo/> */}

      {/* <CounterThree/> */}

      {/* maintain global state using useContext + useReducer */}
      <CountContext.Provider value={{countState: count, countDispatch: dispatch}}>
          <div>Count - {count}</div>
          <ComponentA1/>
          <ComponentB1/>
          <ComponentC1/>
      </CountContext.Provider>

    </div>
  );
}

export default App;
