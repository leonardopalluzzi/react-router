import { Link, NavLink } from "react-router-dom"

const menu = [
    {
        id: 1,
        title: 'Home',
        link: '/'
    },
    {
        id: 2,
        title: 'Posts',
        link: '/posts'
    },
    {
        id: 3,
        title: 'About',
        link: '/about'
    }
]

export default function Header() {
    return (
        <>
            <nav
                className="navbar navbar-expand-sm navbar-dark bg-dark"
            >
                <div className="container">
                    <NavLink className="navbar-brand" to={'/'} >Posts</NavLink>
                    <button
                        className="navbar-toggler d-lg-none"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapsibleNavId"
                        aria-controls="collapsibleNavId"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavId">
                        <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                            {menu.map(item => (
                                <NavLink className={`nav-link`} to={item.link}>{item.title}</NavLink>
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}