import Card from '../components/Card'

export default function Jumbo() {
    return (
        <>
            <section className="jumbotron ">
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
                            <div class='mobile-phone'>
                                <div class='brove'><span class='speaker'></span></div>
                                <div class='screen'>
                                    <img className='phone_img' src="https://picsum.photos/200/300" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}