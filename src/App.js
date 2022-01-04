import './App.css';
import ClassCounter from './components/ClassCounter';
import HookCounterThree from './components/HookCounterThree';
import HookCounterTwo from './components/HookCounterTwo';
import HooksArray from './components/HooksArray';
import HooksCounter from './components/HooksCounter';
import MouseContainer from './components/MouseContainer';
import UseEffectConditional from './components/UseEffectConditional';
import UseEffectOne from './components/UseEffectOne';
import UseEffectHookMouse from './UseEffectHookMouse';

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

      <MouseContainer/>

    </div>
  );
}

export default App;
