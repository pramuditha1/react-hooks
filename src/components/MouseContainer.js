import React, {useState} from 'react'
import UseEffectHookMouse from '../UseEffectHookMouse'

function MouseContainer() {
    const [display, setDisplay] = useState(true)
    return (
        <div>
            <button onClick={() => setDisplay(!display)}>Toggle display</button>
            {display && <UseEffectHookMouse/>}
        </div>
    )
}

export default MouseContainer
