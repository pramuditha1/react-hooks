import React, { useReducer, useEffect } from 'react'
import axios from 'axios'

const initialState = {
    loading: true,
    error: '',
    posts: {}
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_SUCCESS':   
        return {
                loading: false,
                posts: action.payload,
                error: ''
            }
        case 'FETCH_ERROR':
            return {
                loading: false,
                posts: [],
                error: action.payload
            }
        default:
            return state;
    }
}

function DataFetching() {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
            axios
            .get('https://jsonplaceholder.typicode.com/posts/1')
            .then(response => {
                dispatch({type: 'FETCH_SUCCESS', payload: response.data})
            })
            .catch(err => {
                dispatch({type: 'FETCH_ERROR', payload: err})
            })
        }
    , []);
    return (
        <div>
            {state.loading ? 'loading' : state.posts.title}
            {state.error ? state.error : ''}
        </div>
    )
}

export default DataFetching