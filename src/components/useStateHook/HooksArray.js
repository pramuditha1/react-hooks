import React, {useState} from 'react'

function HooksArray() {
    const [items, setItems] = useState([])

    const addItem = () => {
        //spread the items array(unpack items) & add new item object to the array
        setItems([
            ...items, 
            {
                id: items.length,
                value: Math.floor(Math.random() *20 + 1)
            }
        ])
    }
    return (
        <div>
            <button onClick={addItem}>Add number to array</button>
            <ul>
                {items.map(item => (
                    <li key={item.id}>{item.value}</li>
                ))}
            </ul>
        </div>
    )
}

export default HooksArray
