export default function PostUi({ post, onLikeClick, onBackClick, onPrevClick, onNextClick, onCommentChange, onCommentSubmit, commContent }) {
    return (
        <>
            <section className='post'>
                <div className="container py-5">
                    <div className="row">
                        <div className="col-6 post_img">
                            <img className='post_content' src={post.image} alt="" />
                            <div className="likes">
                                <button onClick={() => onLikeClick()} className='btn btn-transparent text-white fs-1'>
                                    <i className="bi bi-heart"></i>
                                </button>
                                <span>{post.likes}</span>
                            </div>
                            <div>
                                <ul className="icons">
                                    <li><a href=""><i className="bi bi-share"></i></a></li>
                                    <li><a href=""><i className="bi bi-instagram"></i></a></li>
                                    <li><a href=""><i className="bi bi-facebook"></i></a></li>
                                    <li><a href=""><i className="bi bi-twitter-x"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-6">
                            <button className="btn btn-transparent" onClick={() => onBackClick()}>
                                <i className="bi bi-arrow-right float-right btn_back"></i>
                            </button>
                            <h1>{post.title}</h1>
                            <p className='my-5'>{post.content}</p>
                            <span>Likes: {post.likes} &hearts;</span>
                            <div className="comments">
                                <h4 className='my-4'>Comments</h4>

                                {post && post.comments && post.comments.length > 0 ? post.comments.map(item => (
                                    <div key={item.commId} className="card bg-transparent text-white">
                                        <div className="card-header d-flex">
                                            <img className='profile_img' src={item.userImage} alt="user image" />
                                            <h5 className='mx-3'>{item.username}</h5>
                                            <span><button className='btn btn-transparent text-white'>&hearts;</button> {item.likes}</span>
                                        </div>
                                        <div className="card-body">
                                            <p>
                                                {item.content}
                                            </p>
                                        </div>
                                    </div>
                                )) : 'Be the first to leave a comment!'}

                                <form onSubmit={(e) => { e.preventDefault(); onCommentSubmit() }} method='POST' className="add_comment">
                                    <h3>Add a Comment</h3>
                                    <textarea onChange={(e) => onCommentChange(e.target.value)} value={commContent} className='bg-transparent form-control w-100 text-white my-4' name="addComment" id="addComment"></textarea>
                                    <button type='submit' className='btn btn-primary'>Comment</button>
                                </form>
                            </div>

                            <div className="navigation my-5 d-flex justify-content-between">
                                <button onClick={() => onPrevClick()} className='btn btn-primary'>PREV</button>
                                <button onClick={() => onNextClick()} className='btn btn-primary'>NEXT</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}