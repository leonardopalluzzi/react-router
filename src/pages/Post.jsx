import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from "react"

export default function Product({ data }) {

    const [post, setPost] = useState('')

    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        setPost(data.find(intem => intem.id == id))
    }, [])


    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <img src={post.image} alt="" />
                    </div>
                    <div className="col-6">
                        <h1>{post.title}</h1>
                        <h2>{post.content}</h2>
                    </div>
                </div>
            </div>
        </>
    )
}