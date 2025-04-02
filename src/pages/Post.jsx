import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from "react"

export default function Product({ data }) {

    const [post, setPost] = useState('')
    const [likes, setLikes] = useState(0)

    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        setPost(data.find(intem => intem.id == id))
    }, [])


    return (
        <>
            <section className='post'>
                <div className="container py-5">
                    <div className="row">
                        <div className="col-6 post_img">
                            <img className='post_content' src={post.image} alt="" />
                            <div className="likes">
                                <button onClick={() => setLikes(likes + 1)} className='btn btn-transparent text-white fs-1'>
                                    <i class="bi bi-heart"></i>
                                </button>
                                <span>{likes}</span>
                            </div>
                            <div>
                                <ul className="icons">
                                    <li><a href=""><i class="bi bi-share"></i></a></li>
                                    <li><a href=""><i class="bi bi-instagram"></i></a></li>
                                    <li><a href=""><i class="bi bi-facebook"></i></a></li>
                                    <li><a href=""><i class="bi bi-twitter-x"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-6">
                            <h1>{post.title}</h1>
                            <p className='my-5'>{post.content}</p>
                            <span>Likes: {likes} &hearts;</span>
                            <div className="comments">
                                <h4 className='my-4'>Comments</h4>
                                <div className="card bg-transparent text-white">
                                    <div className="card-header d-flex">
                                        <img className='profile_img' src="https://picsum.photos/200/300" alt="" />
                                        <h5 className='mx-3'>Nome Utente</h5>
                                    </div>
                                    <div className="card-body">
                                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi, repudiandae.</p>
                                    </div>
                                </div>

                                <form action="" className="add_comment">
                                    <h3>Add a Comment</h3>
                                    <textarea className='bg-transparent form-control w-100 text-white my-4' name="addComment" id="addComment"></textarea>
                                    <button type='submit' className='btn btn-primary'>Comment</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}