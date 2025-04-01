export default function Card({ img, content, title }) {
    return (
        <div class="col-4">
            <div className="card bg-transparent text-white">
                <div className="card-body d-flex flex-column m-auto">
                    <img src={img} className="d-block w-100" alt="..." />
                    <h3>{title}</h3>
                    <p>{content}</p>
                    <a
                        name=""
                        id=""
                        class="btn btn-primary"
                        href="#"
                        role="button"
                    >vai al post</a
                    >

                </div>
            </div>
        </div>
    )
}