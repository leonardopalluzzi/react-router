import { createContext, useContext, useState, useEffect } from "react";
const endpoint = 'http://localhost:3000/api/v1/social'

const PostContext = createContext();

function PostProvider({ children }) {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch(endpoint)
            .then(res => res.json())
            .then(response => {
                console.log(response);
                setData(response)
            })
            .catch(error => console.error(error))
    }, [])

    return (
        <PostContext.Provider value={{ data, setData }}>
            {children}
        </PostContext.Provider>
    )
}

function usePostContext() {
    const context = useContext(PostContext)
    return context
}

export { PostProvider, usePostContext }