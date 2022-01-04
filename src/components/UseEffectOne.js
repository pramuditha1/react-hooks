import React, { useEffect, useState } from 'react'

function UseEffectOne() {
    const [count, setcount] = useState(0)

    useEffect(
        () => {
            document.title = `You clicked ${count} times`
        }, [count]
    )
    return (
        <div>
            <button onClick={() => setcount(count + 1)}>Clicked {count} times</button>
        </div>
    )
}

export default UseEffectOne
