import React, { useState } from 'react'

function HookCounterThree() {
    const [name, setName] = useState({firstName: '', lastName: ''})
    return (
        <div>
            {/* spread name and override first name*/}
            <input type='text' value= {name.firstName} onChange={(e) => setName({...name, firstName: e.target.value })} />

            <input type='text' value= {name.lastName} onChange={(e) => setName({...name, lastName: e.target.value })} />
            <h1> {JSON.stringify(name)} </h1>
        </div>
    )
}

export default HookCounterThree

