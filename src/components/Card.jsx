import { Link } from "react-router-dom"

export default function Card({ img, content, title, id }) {
    return (
        <div class="col-4">
            <div className="card bg-transparent text-white">
                <div className="card-body position-relative d-flex flex-column m-auto">
                    <img src={img} className="d-block w-100" alt="..." />
                    <div className="card_titles">
                        <h3>{title}</h3>
                        <p>{content}</p>
                        <Link to={`/posts/${id}`}>
                            <a
                                name=""
                                id=""
                                class="btn btn-primary"
                                href="#"
                                role="button"
                            >vai al post</a
                            >
                        </Link>

                    </div>


                </div>
            </div>
        </div>
    )
}