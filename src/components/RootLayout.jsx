
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

function RootLayout() {
    return (
        <main>
            <Navbar/>
        <Outlet />
        </main>
    )
}

export default RootLayout