import React, {useEffect, useState} from 'react';
import axios from 'axios'

function DataFetchingHook() {
    const [post, setPost] = useState([])
    const [id, setId] = useState(1)
    const [idFromInput, setIdFromInput] = useState(1)

    const fetchDataOnClickHandler = () => {
        setIdFromInput(id)
    }

    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${idFromInput}`;
        console.log(url)
        axios.get(url)
        .then(res => {
            setPost(res.data)
        })
        .catch(error => console.log(error))
    }, [idFromInput])

    return (
    <div>
        <input type="number" value={id} onChange={e => setId(e.target.value)}/>
        <button onClick={fetchDataOnClickHandler}>fetch data</button>

        <ul>
            {
                // posts.map(post => <li key = {post.id}>{post.title}</li>)
                post.title
            }
        </ul>
    </div>);
}

export default DataFetchingHook;
