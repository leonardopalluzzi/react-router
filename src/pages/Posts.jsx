import Card from '../components/Card'
import { usePostContext } from "../contexts/PostContext"

export default function Posts() {

    const { data } = usePostContext()
    return (
        <>
            <section className="posts py-5">
                <div className="container">
                    <h1>posts</h1>
                    <div className="row">
                        {data.map(item => (
                            <Card key={item.id} item={item} />
                        ))}
                    </div>
                </div>
            </section>

        </>
    )
}