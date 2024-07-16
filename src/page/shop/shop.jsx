import React from 'react'
import { VectorIcon } from '../../assets/icon/vector-icon'
import { Button } from '../../components/ui/button/button'
import { productData } from '../data/product-data'
import { Link } from 'react-router-dom'
export const Shop = () => {
  return (
    <div>
      <div className='w-[100%] h-[60vh] flex items-center justify-center bg-[url("/src/page/shop/shop-img/shop-img.png")] bg-no-repeat bg-[-200px] mt-10 '>
        <h1 className='text-5xl font-bold  text-slate-700'>Shop</h1>
      </div>
      <section className='w-[100%] h-[180vh]  flex flex-wrap items-center justify-center '>
      {productData.map((item) => (
            <Link className=' flex  items-center ' to={`/malumot/${item.id}`} key={item.id}>
              <div className='w-[330px] h-[460px] shadow-xl shadow-gray-300 border-2 hover:shadow-md rounded-2xl flex items-center justify-center flex-col ml-6  '>
              <img className='w-[250px] h-[250px]' src={item.img} alt="img" />
              <h1 className='text-xl font-medium text-slate-600 border-b-2 border-gray-400    w-[260px] py-5'>{item.name}</h1>
              <div className='mt-3'>
                <span className='text-gray-400 px-3'>{item.price2}</span>
                <span className='text-lg font-medium text-slate-500'>{item.price}</span>
                <span className='ml-5 px-5'>{item.star}</span>
              </div>
            </div>
            </Link>
          ))}
        <div className='w-[190px] h-[60px] border-2 bg-slate-600 rounded-xl flex items-center justify-center'>
          <Button className="flex items-center text-white text-lg font-medium" endIcon={<VectorIcon />}>Load More</Button>
        </div>
      </section>

      
    </div>
  )
}
