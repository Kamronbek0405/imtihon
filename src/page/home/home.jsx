import React from 'react'
import { Hero } from './components/hero'
import { Farmer } from './components/farmer'
import { productData } from '../data/product-data'
import { Link, NavLink } from 'react-router-dom'
import { Button } from '../../components/ui/button/button'
import { VectorIcon } from '../../assets/icon/vector-icon'
import { Customer } from './components/customer'
import { organicData } from '../data/product-data'
import { Store } from './components/store'
import { OrganicCard } from './components/organic-card'
import { Food } from './components/food'

export const Home = () => {
  return (
    <>
      <section>
      <Hero />
      </section>
      <section>
      <Farmer />
      </section>
      
      <div className='w-[100%] h-[150vh]  flex flex-wrap items-center justify-center '>
        
        {productData.map((item) => (
          <Link to={`/malumot/${item.id}`} key={item.id}>
            <div className='w-[330px] h-[460px] shadow-xl shadow-gray-300 border-2 hover:shadow-md rounded-2xl flex items-center justify-center flex-col ml-6  '>
              <img className='w-[250px] h-[250px]' src={item.img} alt="img" />
              <h1 className='text-xl font-medium text-slate-600 border-b-2 border-gray-400    w-[260px] py-5'>{item.name}</h1>
              <div className='mt-3'>
                <span className='text-gray-400 px-3 line-through'>{item.price2}</span>
                <span className='text-lg font-medium text-slate-500'>{item.price}</span>
                <span className='ml-5 px-5'>{item.star}</span>
              </div>
            </div>
          </Link>
        ))}
        <div className='w-[190px] h-[70px] border-2 bg-slate-600 rounded-xl flex items-center justify-center  hover:border-2 hover:bg-transparent  hover:border-slate-600'>
          <Button className=" w-[190px] h-[70px] flex items-center justify-center hover:text-slate-600 text-white text-lg font-medium " endIcon={<VectorIcon />}>Load More</Button>
        </div>
      </div>
      <Customer />
      <section className='w-[100%] h-[100vh] bg-slate-700 flex items-center justify-center flex-col  '>
        <div className=' w-[88%] h-[550px] mt-20 flex flex-col '>
          <div className='flex items-center justify-between h-[80px] '>
          <div >
                    <span className='italic text-green-400'>Offer</span>
                    <h1 className='text-3xl font-bold text-white'>We Offer Organic For You</h1>
                </div>
                <Button className=" flex items-center justify-center w-[190px] h-[67px] bg-yellow-300 rounded-xl    hover:bg-white" endIcon={<VectorIcon/>}>View All Product</Button>

          </div>
          
        </div>
        <div className='flex gap-5 mb-20'>
        {organicData.map((item) => (
          <div className='w-[320px] h-[440px] rounded-xl  bg-white border-2 border-white flex items-center flex-col'>
            <span className='text-white w-[96px] h-[32px] mr-[200px] mt-3 rounded-xl bg-slate-700 flex items-center justify-center'>{item.vegeteble}</span>
            <img className='w-[250px] h-[250px] mt-5' src={item.img} alt="img" />
            <h1 className='w-[280px] h-10 text-xl font-bold text-slate-600 border-b-2 border-gray-300'>{item.name}</h1>
            <div className='mt-3 flex w-[285px]'>
              <span className='text-gray-400 line-through mr-3'>{item.price2}</span>
              <span className='text-lg text-slate-600 font-medium '>{item.price}</span>
              <span className='ml-12'>{item.star}</span>
            </div>
          </div>
        ))}
        </div>
      </section>
      <Store/>
      <section>
      <OrganicCard/>
      </section>
      <section>
      <Food/>
      </section>
      
     
    </>
  )
}
