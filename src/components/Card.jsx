export default function Card() {
    return (
        <div class="col-4">
            <div className="card bg-transparent text-white">
                <div className="card-body d-flex flex-column m-auto">
                    <img src="https://picsum.photos/200/300" className="d-block w-100" alt="..." />
                    <h3>Titolo</h3>
                    <p>Breve descrizione</p>
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