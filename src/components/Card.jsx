import { Link } from "react-router-dom"

export default function Card({ item }) {

    return (
        <div className="col-4">
            <div className="card bg-transparent text-white">
                <div className="card-body position-relative d-flex flex-column m-auto">
                    <img src={item.image} className="d-block w-100" alt={item.title} />
                    <div className="card_titles">
                        <h3>{item.title}</h3>
                        <p>{item.content}</p>
                        <Link className="btn btn-primary" to={`/posts/${item.id}`}>
                            vai al post
                        </Link>

                    </div>


                </div>
            </div>
        </div>
    )
}