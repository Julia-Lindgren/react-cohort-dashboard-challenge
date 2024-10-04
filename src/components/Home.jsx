import { useContext } from 'react'
import { UsersContext } from '../App'
function Dashboard() {
    const { users } = useContext(UsersContext);
    return (
        <main >
            <section className="dashboard-layout">
                <p>hi</p>
            </section>
        </main>
    )
}
export default Dashboard