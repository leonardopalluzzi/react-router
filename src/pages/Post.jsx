import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { usePostContext } from "../contexts/PostContext"
import { useAlertContext } from '../contexts/AlertContext'
import PostUi from '../components/Post.ui'


export default function Product() {

    //states
    const { id: currentId } = useParams()

    const [state, setState] = useState({
        state: 'loading'
    })

    const { data, handleRefresh } = usePostContext()

    const { Alert, setAlert } = useAlertContext();

    const navigate = useNavigate()


    //effects
    useEffect(() => {

        if (currentId && data && data.length) {
            const currentPost = data.find(item => item.id == currentId)

            if (currentPost) {
                setState({
                    state: 'success',
                    post: data.find(item => item.id == currentId)
                })
            } else {
                setState({
                    state: 'error'
                })
                setAlert({
                    status: '404 Not found',
                    message: 'Post not Found'
                })
            }
        }
    }, [currentId, data])


    //funcitons
    function handleLikeClick() {
        //gestire like lato server
    }

    function handlePrevClick() {
        if (currentId > data[0].id) {
            navigate(`/posts/${Number(currentId) - 1}`)
        } else {
            navigate(`/posts/${data[data.length - 1].id}`)
        }

    }

    function handleNextClick() {
        if (currentId < data.length) {
            navigate(`/posts/${Number(currentId) + 1}`)
        } else {
            navigate(`/posts/${data[0].id}`)
        }
    }

    function handleBackClick() {
        navigate('/posts')
    }

    function handleCommentChange(value) {
        setCommContent(value)

    }

    function handleCommentSubmit() {
        console.log('submit comment');

        console.log(newComment);
        fetch(`http://localhost:3000/api/v1/comments/${currentId}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newComment)
        })
            .then(res => {
                console.log(res);
                return res.json()
            })
            .then(response => {
                console.log(response);
                // optimistic update diciamo: update che viene displayato a prescindere dall'esito dell'oprazione
                setState({
                    state: 'success',
                    post: {
                        ...state.post,
                        comments: [
                            ...state.post.comments,
                            response
                        ]
                    }
                })
                //handleRefresh()
            })
            .catch(err => console.error(err))

    }

    //new comment
    const [commContent, setCommContent] = useState('')

    const newComment = {

        username: "Your Name",
        userImage: "https://picsum.photos/53/50",
        content: commContent,
        likes: 0
    }

    switch (state.state) {
        case 'loading':
            return (
                <>
                    <h1>Loading...</h1>
                </>
            )
        case 'error':
            return (
                <>
                    <h1>error</h1>
                </>
            )
        case 'success':
            return (
                <PostUi
                    onCommentSubmit={handleCommentSubmit}
                    onCommentChange={handleCommentChange}
                    commContent={commContent}
                    onPrevClick={handlePrevClick}
                    onNextClick={handleNextClick}
                    onBackClick={handleBackClick}
                    onLikeClick={handleLikeClick}
                    post={state.post}
                />
            )
    }

}