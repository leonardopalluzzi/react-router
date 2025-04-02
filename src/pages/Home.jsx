import { useState, useEffect } from "react"
import Jumbo from '../components/Jumbo'
import Card from '../components/Card'

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
                    <div id="carousel" className="carousel slide w-100 m-auto py-5">
                        <div className="carousel-inner w-100">

                            {/* post  */}
                            {data.map(item => (
                                <div key={item.id} className={`carousel-item ${item.id == 1 ? 'active' : ''}`}>
                                    <div className="feed_card_container">
                                        <Card img={item.image} title={item.title} content={item.content} />
                                    </div>
                                </div>

                            ))}
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