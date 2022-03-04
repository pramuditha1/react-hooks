/*
execute useEffect only once
pass empty array as watch array and tell react to execute useEffect only 
on rendering and don't execute on any props or state change
*/
import React, { useState, useEffect} from 'react'

function UseEffectHookMouse() {

    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    useEffect(
        () => {
            console.log('useEffect called')
            window.addEventListener('mousemove', logMousePosition)

            /*
            implement clean up function(same behaviour as componentWillUnmount in classes)
            in here mouseMove function removed when toggle button clicked
            if you don't unsubscribe events when component unmont there will be a memory leak. hence keep in
            mind to unsubscribe them when unmounting component.
            */
            return () => {
                console.log('hapenning componentwillUnmount')
                window.removeEventListener('mousemove', logMousePosition)
            }
        }, []
    )

    const logMousePosition = e => {
        setX(e.clientX)
        setY(e.clientY)
    }

    return (
        <div>
            Hooks X - {x} Y - {y}
        </div>
    )
}

export default UseEffectHookMouse
