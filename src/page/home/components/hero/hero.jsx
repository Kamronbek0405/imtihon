import React from 'react'
import Photo from './hero-img/hero-img.png'
import { Button } from '../../../../components/ui/button/button'
import { VectorIcon } from '../../../../assets/icon/vector-icon'

export const Hero = () => {
    return (
        <div className='flex flex-col w-[100%] h-[160vh] justify-center '>
            <div className=' w-[100%] h-[90vh] bg-[url("/public/BackgroundPatterns.png")]  bg-no-repeat bg-cover flex items-center justify-center rounded-xl'>
                <div className='w-[500px] ml-32'>
                    <span className=' italic text-green-500 text-lg  '>100% Natural Food</span>
                    <h1 className='text-6xl text-slate-700 font-bold w-[455px] mt-3 '>Choose the best
                        healthier way
                        of life</h1>
                    <Button className="bg-yellow-300 rounded-xl w-[200px] h-[69px] font-medium  mt-6 text-slate-700 flex items-center justify-center hover:border-2 hover:border-yellow-300 hover:bg-transparent" type="submit" endIcon={<VectorIcon />}>Explore Now</Button>


                </div>
                <img className='w-[700px] h-[650px] ml-20 ' src={Photo} alt="" />


            </div>

            <div className='flex items-center justify-around  mt-28'>
                <div className=' w-[682px] h-[367px]  bg-[url("/src/page/home/components/hero/hero-img/Image2.png")] flex items-center '>
                    <div className='ml-16'>
                        <span className='italic text-white text-xl'>Natural!!</span>
                        <h1 className='text-4xl font-bold text-white w-[200px]'>Get Garden Fresh Fruits</h1>
                    </div>
                </div>
                <div className=' w-[682px] h-[367px]  bg-[url("/src/page/home/components/hero/hero-img/Image3.png")] flex items-center '>
                    <div className='ml-16'>
                        <span className='italic text-green-500 text-xl'>Offer!!</span>
                        <h1 className='text-4xl font-bold  w-[240px] mt-2'>Get 10% off
                            on Vegetables</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}
