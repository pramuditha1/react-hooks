import React, {useEffect, useState} from 'react'

function UseEffectConditional() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('')

    useEffect(() => {
        console.log('useEffect - updating document title')
        document.title = `You clicked ${count} times`
    }, [count])

    return (
        <div>
            <input type='text' value={name} onChange={ e => setName(e.target.value) } />
            {/* on button click title updates & log will print. But it should not do when we type something on text box
            for that we pass watch array parameter as second argument to the useEffect function.
            we do pass count in this array. only if props or state specified in this array got changed useEffect executes*/}
            <button onClick={() => setCount(count + 1)}>Click {count} times</button>
        </div>
    )
}

export default UseEffectConditional
