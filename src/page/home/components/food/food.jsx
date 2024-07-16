import React from 'react'
import { Button } from '../../../../components/ui/button/button'
import { VectorIcon } from '../../../../assets/icon/vector-icon'
import { UserIcon } from '../../../../assets/icon/user-icon'

export const Food = () => {
    return (
        <div className='w-[100%] h-[110vh] flex items-center justify-center'>
            <div className='w-[1400px] '>
                <div className='flex items-center justify-between'>
                    <div>
                        <span className='text-lg italic text-green-500 '>News</span>
                        <h1 className='text-2xl text-slate-700 font-bold w-[400px]' >Discover weekly content about organic food, & more</h1>
                    </div>
                    <Button className="w-[190px] h-[70px] flex items-center justify-center rounded-xl  border-2 border-slate-500 hover:bg-slate-600 hover:text-white" endIcon={<VectorIcon />}>More News</Button>
                </div>
                <div className='flex gap-5 mt-8  '>
                    <div className=' w-[677px] h-[480px] relative bg-[url("/src/page/home/components/food/food-img/food-img1.png")] bg-no-repeat bg-cover rounded-3xl'>
                    <span className='w-[65px] h-[65px] px-5 bg-white rounded-full text-center flex font-medium ml-5 mt-5 text-slate-700 items-center justify-center'>25   Nov</span>
                    <div className='w-[613px] h-auto bg-white absolute p-10 shadow-lg shadow-gray-400 rounded-3xl bottom-[-60px] ml-8'>
                       <span className='text-slate-600 flex gap-2'> <UserIcon/> By Rachi Card</span>
                       <h1 className='font-bold text-xl text-slate-700 py-2'>The Benefits of Vitamin D & How to Get It</h1>
                       <p className='text-slate-600 w-[420px] py-1'>Simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
                       <Button className="w-[190px] h-[70px] mt-6 bg-yellow-300 text-slate-700 font-bold flex items-center justify-center rounded-xl hover:bg-white hover:border-2  hover:border-yellow-300" endIcon={<VectorIcon/>}>Read More</Button>
                    </div>
                    </div>

                    <div className=' w-[677px] h-[480px] relative bg-[url("/src/page/home/components/food/food-img/food-img2.png")] bg-no-repeat bg-cover rounded-3xl'>
                    <span className='w-[65px] h-[65px] px-5 bg-white rounded-full text-center flex font-medium ml-5 mt-5 text-slate-700 items-center justify-center'>25   Nov</span>
                    <div className='w-[613px] h-auto bg-white absolute p-10 shadow-lg shadow-gray-400 rounded-3xl bottom-[-60px] ml-8'>
                       <span className='text-slate-600 flex gap-2'> <UserIcon/> By Rachi Card</span>
                       <h1 className='font-bold text-xl text-slate-700 py-2'>Our Favourite Summertime Tommeto</h1>
                       <p className='text-slate-600 w-[420px] py-1'>Simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
                       <Button className="w-[190px] h-[70px] mt-6 bg-yellow-300 text-slate-700 font-bold flex items-center justify-center rounded-xl hover:bg-white hover:border-2  hover:border-yellow-300" endIcon={<VectorIcon/>}>Read More</Button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
