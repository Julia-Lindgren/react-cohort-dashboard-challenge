import { useContext } from 'react'
import { PostContext } from '../App'
import PostList from './PostList';
function Dashboard() {
    const { posts } = useContext(PostContext);
    return (
        <main >
            <section className="dashboard-layout">
                <PostList />
            </section>
        </main>
    )
}
export default Dashboard