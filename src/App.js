import React from 'react';
import './App.css';
import ClassCounter from './components/useStateHook/ClassCounter';
import HookCounterThree from './components/useStateHook/HookCounterThree';
import HookCounterTwo from './components/useStateHook/HookCounterTwo';
import HooksArray from './components/useStateHook/HooksArray';
import HooksCounter from './components/useEffectHook/HooksCounter';
import MouseContainer from './components/useEffectHook/MouseContainer';
import UseEffectConditional from './components/useEffectHook/UseEffectConditional';
import UseEffectOne from './components/useEffectHook/UseEffectOne';
import UseEffectHookMouse from './components/useEffectHook/UseEffectHookMouse';
import DataFetchingHook from './components/useEffectHook/DataFetchingHook';
import ComponentA from './components/useContext/ComponentA';
import CounterOne from './components/useReducer/CounterOne';
import CounterTwo from './components/useReducer/CounterTwo';
import CounterThree from './components/useReducer/CounterThree';

export const UserContext = React.createContext()
export const ChannelContext = React.createContext()

function App() {
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

      <CounterThree/>

    </div>
  );
}

export default App;
