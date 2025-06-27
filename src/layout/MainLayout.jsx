import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'
const MainLayout = () => {
  return (
    <>
        <Navbar/>
        <main>
            <div className='px-4 md:px-6 pt-12 pb-24 w-full xl:w-[45%] space-y-6'>
                <Outlet/>
            </div>
        
        </main>
        <Footer/>
    </>
  )
}

export default MainLayout