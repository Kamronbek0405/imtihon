import React from 'react'
import StoreImg from './store-img/store-img.png'

export const Store = () => {
    return (
        <div className='w-[100%] h-[100vh]  flex text-slate-700 items-center justify-start relative '>
            <img className='w-[720px] h-[735px]' src={StoreImg} alt="storeImg" />
            <div className='w-[650px] h-[500px] bg-white p-14 left-[660px] rounded-3xl absolute'>
                <span className='italic text-green-500'>Eco Friendly</span>
                <h1 className='text-3xl w-[350px]  text-slate-700 py-2 font-bold'>Econis is a Friendly
                    Organic Store</h1>
                <div className='mt-4'>
                    <strong className='text-lg'>Start with Our Company First</strong>
                    <p className='text-gray-500 w-[600px]'>Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis.
                    </p>
                </div>
                <div className='py-5'>
                    <strong className='text-lg'>Learn How to Grow Yourself</strong>
                    <p className='text-gray-500 w-[600px]'>Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis.
                    </p>
                </div>
                <div>
                    <strong className='text-lg'>Farming Strategies of Today</strong>
                    <p className='text-gray-500 w-[600px]'>Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis.
                    </p>
                </div>

            </div>
        </div>
    )
}
