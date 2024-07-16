import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from '../header'
import { Footer } from '../footer'
export const MainLayout = () => {
    return (
        <div>
            <header className=' h-28 flex items-center justify-around shadow-lg shadow-gray-200 '>
                <Header />
            </header>
            <main>
                <Outlet />
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}
