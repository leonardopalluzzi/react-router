import { createContext, useContext, useState, useEffect } from "react";
import { useAlertContext } from "./AlertContext";

const endpoint = 'http://localhost:3000/api/v1/social'

const PostContext = createContext();

function PostProvider({ children }) {
    const [data, setData] = useState([])
    const { alert, setAlert } = useAlertContext();

    useEffect(() => {
        handleRefresh()
    }, [])

    function handleRefresh() {
        fetch(endpoint)
            .then(res => res.json())
            .then(response => {
                setData(response)
            })
            .catch(error => {
                console.error(error)
                setAlert({
                    type: 'bg-danger',
                    status: error.status,
                    message: 'Network error, you can download the server at the following link: https://github.com/leonardopalluzzi/backend-react-router'
                })

            })
    }

    return (
        <PostContext.Provider value={{ data, setData, handleRefresh }}>
            {children}
        </PostContext.Provider>
    )
}

function usePostContext() {
    const context = useContext(PostContext)
    return context
}

export { PostProvider, usePostContext }