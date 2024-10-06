import { useContext } from 'react'
import { PostContext } from '../App'
import PostList from './PostList';
import PostForm from './PostForm';
function Dashboard() {
    const { posts } = useContext(PostContext);
    return (
        <main >
            <section className="dashboard-layout">
                <PostForm />
                <PostList />
            </section>
        </main>
    )
}
export default Dashboard