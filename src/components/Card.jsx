import { Link } from "react-router-dom"

export default function Card({ img, content, title, id }) {

    return (
        <div className="col-4">
            <div className="card bg-transparent text-white">
                <div className="card-body position-relative d-flex flex-column m-auto">
                    <img src={img} className="d-block w-100" alt="..." />
                    <div className="card_titles">
                        <h3>{title}</h3>
                        <p>{content}</p>
                        <Link className="btn btn-primary" to={`/posts/${id}`}>
                            vai al post
                        </Link>

                    </div>


                </div>
            </div>
        </div>
    )
}