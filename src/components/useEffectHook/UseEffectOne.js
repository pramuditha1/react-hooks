import React, { useEffect, useState } from 'react'

function UseEffectOne() {
    const [count, setcount] = useState(0)

    //in here useEffect replaces componetDidMount and componentDidUpdate life cycle methods.
    //componentDidMount :- set initial count to document title
    //componentDidUpdate :- when button click increment count will be shown in document title
    useEffect(
        //useEffect executes after every render of component, hence we can add watch values
        //suppose there is a text box, on type on text box count value does not changes, it only change on button click.
        //so we can use watch value by passing to useEffect to reduce unwated useEffect executions
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
