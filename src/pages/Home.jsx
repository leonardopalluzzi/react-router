import { useState, useEffect } from "react"
import Jumbo from '../components/Jumbo'

export default function Home({ data }) {
    const [timer, setTimer] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setTimer((prevTimer) => (prevTimer >= 9 ? 0 : prevTimer + 1));
        }, 3000);


        // Pulizia dell'intervallo quando il componente viene smontato
        return () => clearInterval(interval);
    }, []);
    console.log(timer);
    return (
        <>
            <Jumbo data={data} timer={timer} />
            <section className='feed py-5'>
                <div className="container">
                    <h1 className='text-center'>Feed</h1>
                    <div id="carousel" className="carousel slide w-50 m-auto py-5">
                        <div className="carousel-inner">

                            {/* post  */}
                            <div className="carousel-item active">
                                <div className="card bg-transparent text-white">
                                    <div className="card-body d-flex m-auto position-relative">
                                        <img src={data[timer].image} className="d-block feed_img" alt="..." />
                                        <div className="position-absolute feed_title">
                                            <h4>{data[timer].title}</h4>
                                            <p className="fs-6">{data[timer].content}</p>
                                            <a
                                                name=""
                                                id=""
                                                className="btn btn-primary"
                                                href="#"
                                                role="button"
                                            >vai al post</a>
                                        </div>


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