import React from 'react'
import { offersData } from '../../../data/product-data'
export const Offer = () => {
  return (
    <div className='w-[1399px] h-[516px]  '>
        <div className='w-[100%] text-center'>
            <span className='italic text-xl text-green-500'>About Us</span>
            <h1 className='text-4xl mt-3 font-bold text-white'>What We Offer for You</h1>
        </div>
        <div className='flex gap-5 items-center justify-center mt-10'>
            {offersData.map((item) =>(
                <div className='flex items-center flex-col '>
                    <img className='w-[320px] h-[300px] rounded-xl' src={item.img} alt="" />
                    <h1 className='text-lg text-white mt-3'>{item.name}</h1>
                </div>
            ))}
        </div>
    </div>
  )
}
