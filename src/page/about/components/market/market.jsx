import React from 'react'
import MarketImg from './market-img/marketImg.png'
import { Policy } from '../../../../assets/icon/policy'
import { Fresh } from '../../../../assets/icon/fresh'
import { Support } from '../../../../assets/icon/support'
import { Paynet } from '../../../../assets/icon/paynet'

export const Market = () => {
    return (
        <div className='w-[100%] h-[150vh] flex items-center justify-around flex-col'>
            <div className='flex'>
            <div className='w-[530px] h-[550px]  '>
                <span className='text-lg italic text-green-500'>Why Choose us?</span>
                <h1 className='text-3xl font-bold text-slate-600 w-[400px]'>We do not buy from the
                    open market & traders.</h1>
                <p className='text-gray-500 py-3'>Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard  the 1500s, when an unknown</p>

                <div className='mt-5'>
                    <di className=" w-[300px] h-[80px] flex items-center justify-center rounded-full bg-slate-100">
                        <span className='w-[17px] h-[17px] border-4 border-green-500 rounded-full mr-3'></span>
                        <h1 className='text-xl font-medium text-slate-600'>100% Natural Product</h1>
                    </di>
                    <p className='text-slate-600 ml-10 w-[400px] mt-3'>Simply dummy text of the printing and typesetting industry Lorem Ipsum</p>
                </div>

                <div className='mt-7'>
                    <di className=" w-[300px] h-[80px] flex items-center justify-center rounded-full  bg-slate-100">
                        <span className='w-[17px] h-[17px] border-4 border-green-500 rounded-full mr-3'></span>
                        <h1 className='text-xl font-medium text-slate-600'> Increases resistance</h1>
                    </di>
                    <p className='text-slate-600 ml-10 mt-3 w-[400px]'>Filling, and temptingly healthy, our Biona Organic Granola with Wild Berries is just the thing</p>
                </div>
            </div>
            <img className='w-[600px] h-[550px] rounded-3xl' src={MarketImg} alt="img" />
            </div>

            <div className='w-[1118px] h-[335px]  flex items-center justify-center gap-7'>
                <div className='w-[257px] h-[335px] shadow-lg rounded-xl shadow-gray-400 hover:shadow-md border-2 border-gray-200 flex items-center justify-center flex-col'>
                    
                    <span className='py-2'>
                    <Policy/>
                    </span>
                    
                    <h1 className='text-xl font-bold py-2 text-slate-600'>Return Policy</h1>
                    <p className='text-gray-500  text-center w-[160px]'>Simply dummy text of the printintypesetting industry.</p>
                </div>

                <div className='w-[257px] h-[335px] shadow-lg rounded-xl shadow-gray-400 hover:shadow-md border-2 border-gray-200 flex items-center justify-center flex-col'>
                    
                    <span className='py-2'>
                    <Fresh/>
                    </span>
                    
                    <h1 className='text-xl font-bold py-2 text-slate-600'>100% Fresh</h1>
                    <p className='text-gray-500  text-center w-[160px]'>Simply dummy text of the printintypesetting industry.</p>
                </div>

                <div className='w-[257px] h-[335px] shadow-lg rounded-xl shadow-gray-400 hover:shadow-md border-2 border-gray-200  flex items-center justify-center flex-col'>
                    
                    <span className='py-2'>
                   <Support/>
                    </span>
                    
                    <h1 className='text-xl font-bold py-2 text-slate-600'>Support 24/7</h1>
                    <p className='text-gray-500  text-center w-[160px]'>Simply dummy text of the printintypesetting industry.</p>
                </div>
                <div className='w-[257px] h-[335px] shadow-lg rounded-xl shadow-gray-400 hover:shadow-md border-2 border-gray-200  flex items-center justify-center flex-col'>
                    
                    <span className='py-2'>
                    <Paynet/>
                    </span>
                    
                    <h1 className='text-xl font-bold py-2 text-slate-600'>Secured Payment</h1>
                    <p className='text-gray-500  text-center w-[160px]'>Simply dummy text of the printintypesetting industry.</p>
                </div>
            </div>
        </div>
    )
}
