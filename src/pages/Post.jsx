import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { usePostContext } from "../contexts/PostContext"

export default function Product() {

    const { data } = usePostContext()

    const { id } = useParams()

    const [post, setPost] = useState('')
    const [likes, setLikes] = useState(0)
    const [currentId, setCurrentId] = useState(id)

    const navigate = useNavigate()


    //new comment
    const [commContent, setCommContent] = useState('')

    const newComment = {

        username: "Your Name",
        userImage: "https://picsum.photos/53/50",
        content: commContent,
        likes: 0

    }


    useEffect(() => {
        setPost(data.find(item => item.id == currentId))
    }, [currentId, data])

    function storeRouteFetch(e) {
        e.preventDefault()
        console.log('submit comment');

        console.log(newComment);
        fetch(`http://localhost:3000/api/v1/comments/${currentId}`, {
            method: 'POST',
            header: 'Content-Type: application/json',
            body: JSON.stringify(newComment)
        })
            .then(res => {
                console.log(res);
                res.json()
            })
            .then(response => {
                console.log(response);
            })
            .catch(err => console.error(err))
    }


    function nextId() {
        if (currentId < data.length) {
            setCurrentId(Number(currentId) + 1)
        } else {
            setCurrentId(data[0].id)
        }

    }

    function prevId() {
        if (currentId > data[0].id) {
            setCurrentId(Number(currentId) - 1)
        } else {
            setCurrentId(data[data.length - 1].id)
        }

    }

    if (data.length < 1) {
        return (
            <h1>Loading...</h1>
        )
    }

    return (
        <>
            <section className='post'>
                <div className="container py-5">
                    <div className="row">
                        <div className="col-6 post_img">
                            <img className='post_content' src={post?.image || 'cicciogamer.png'} alt="" />
                            <div className="likes">
                                <button onClick={() => setLikes(likes + 1)} className='btn btn-transparent text-white fs-1'>
                                    <i className="bi bi-heart"></i>
                                </button>
                                <span>{post?.likes || 'loading'}</span>
                            </div>
                            <div>
                                <ul className="icons">
                                    <li><a href=""><i className="bi bi-share"></i></a></li>
                                    <li><a href=""><i className="bi bi-instagram"></i></a></li>
                                    <li><a href=""><i className="bi bi-facebook"></i></a></li>
                                    <li><a href=""><i className="bi bi-twitter-x"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-6">
                            <Link onClick={() => navigate(-1)}>
                                <i className="bi bi-arrow-right float-right"></i>
                            </Link>
                            <h1>{post?.title || 'loading...'}</h1>
                            <p className='my-5'>{post?.content || 'Loading...'}</p>
                            <span>Likes: {post?.likes || 'Loading...'} &hearts;</span>
                            <div className="comments">
                                <h4 className='my-4'>Comments</h4>

                                {post && post.comments && post.comments.length > 0 ? post.comments.map(item => (
                                    <div key={item.likes} className="card bg-transparent text-white">
                                        <div className="card-header d-flex">
                                            <img className='profile_img' src={item.userImage} alt="user image" />
                                            <h5 className='mx-3'>{item.username}</h5>
                                            <span><button className='btn btn-transparent text-white'>&hearts;</button> {item.likes}</span>
                                        </div>
                                        <div className="card-body">
                                            <p>
                                                {item.content}
                                            </p>
                                        </div>
                                    </div>
                                )) : 'Be the first to leave a comment!'}




                                <form onSubmit={(e) => storeRouteFetch(e)} method='POST' className="add_comment">
                                    <h3>Add a Comment</h3>
                                    <textarea onChange={(e) => setCommContent(e.target.value)} value={commContent} className='bg-transparent form-control w-100 text-white my-4' name="addComment" id="addComment"></textarea>
                                    <button type='submit' className='btn btn-primary'>Comment</button>
                                </form>
                            </div>

                            <div className="navigation my-5 d-flex justify-content-between">
                                <button onClick={() => prevId()} className='btn btn-primary'>PREV</button>
                                <button onClick={() => nextId()} className='btn btn-primary'>NEXT</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section >

        </>
    )
}