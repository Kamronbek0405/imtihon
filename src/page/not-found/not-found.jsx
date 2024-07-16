import React from 'react'
import NotFoundImg from './notFound-img/404.png'
import { Button } from '../../components/ui/button/button'
import { VectorIcon } from '../../assets/icon/vector-icon'
import { Link } from 'react-router-dom'

export const NotFound = () => {
  return (
    <div className=' w-[100%] h-[90vh] flex items-center justify-end  bg-[url("/src/page/not-found/notFound-img/not-found.png")] bg-no-repeat bg-cover'>
        <div className='text-slate-600 w-[500px] h-[400px] mr-24'>
        <img src={NotFoundImg} alt="404" />
        <h1 className='text-5xl font-bold text-slate-700 '>Page not found</h1>
        <p className='py-4'>The page you are looking for doesn't exist or has been moved</p>
        <Link to={"/"}><Button className="w-[190px] h-[70px] mt-5 bg-slate-700 text-white font-medium flex items-center justify-center rounded-xl hover:text-slate-700 hover:bg-transparent hover:border-slate-700 hover:border-2" endIcon={<VectorIcon/>}>Go to Homepage</Button></Link>
        </div>
    </div>
  )
}
