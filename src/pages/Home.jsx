import Jumbo from '../components/Jumbo'

export default function Home() {
    return (
        <>
            <Jumbo />
            <section className='feed'>
                <div className="container">
                    <h1>FEED</h1>
                    <div id="carousel" className="carousel slide w-50 m-auto py-5">
                        <div className="carousel-inner">

                            {/* post  */}
                            <div className="carousel-item active">
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
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>

                </div>
            </section>

        </>
    )
}