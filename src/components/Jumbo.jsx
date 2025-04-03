import Card from '../components/Card'

export default function Jumbo({ data, timer }) {
    return (
        <>
            <section className="jumbotron">
                <div className="container">
                    <div className="row align-items-md-center">
                        <div className="col-md-6">
                            <div
                                className="h-100 p-5 text-white bg-transparent"
                            >
                                <h1>Dive into a world of content</h1>
                                <p>
                                    redifine imagination
                                </p>
                                <button
                                    className="btn btn-primary"
                                    type="button"
                                >
                                    Example button
                                </button>
                            </div>
                        </div>
                        <div className="col-md-6 phone_mockup">
                            <div className='mobile-phone'>
                                <div className='brove'><span className='speaker'></span></div>
                                <div className='screen'>
                                    <div className="position-absolute phone_title">
                                        <h1 className=''>{data[timer].title}</h1>
                                        <p>{data[timer].content}</p>
                                    </div>

                                    <img className='phone_img' src={data[timer].image} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}