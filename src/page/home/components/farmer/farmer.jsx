import React from 'react'
import FramerPhoto from './farmer-img/FramerPhoto.png'
import { OrganicIcon } from '../../../../assets/icon/organic-icon'
import { QualityIcon } from '../../../../assets/icon/quality-icon'
import {Button} from '../../../../components/ui/button/button'
import { VectorIcon } from '../../../../assets/icon/vector-icon'


export const Farmer = () => {
    return (
        <div className='w-[100%] h-[125vh] flex items-center justify-center'>
           <div className='w-[100%] h-[100vh] flex items-center justify-center bg-slate-100'>
           <img className='w-[700px] h-[700px] mr-5' src={FramerPhoto} alt="img" />
            <div className='w-[530px] h-[530px] px-6 '>
                <span className='italic text-xl text-green-500'>About Us</span>
                <h1 className='text-4xl text-slate-700 font-bold w-[500px] mt-4'>We Believe in Working
                    Accredited Farmers</h1>
                <p className='font- text-gray-500 mt-5'>Simply dummy text of the printing and typesetting industry. Lorem had ceased to
                    been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
                    <div>
                        <div className='flex items-center  mt-8 w-[530px]'>
                            <span className='w-[80px] h-[80px] rounded-lg flex items-center justify-center bg-white'><OrganicIcon/></span>
                            <div className='ml-5'>
                            <h1 className='text-xl font-medium text-slate-600'>Organic Foods Only</h1>
                            <p className='text-gray-500 w-[400px]'>Simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
                            </div>
                        </div>
                        <div className='flex items-center w-[530px] mt-5 '>
                            <span className='w-[80px] h-[80px] rounded-lg flex items-center justify-center bg-white'><QualityIcon/></span>
                            <div className='ml-5'>
                            <h1 className='text-xl font-medium text-slate-600'>Quality Standards</h1>
                            <p className='text-gray-500 w-[400px]'>Simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
                            </div>
                        </div>
                    </div>
                    <Button className="w-[180px] h-[65px] flex items-center justify-center rounded-xl bg-slate-600 font-medium  mt-9 text-white hover:border-2 hover:border-slate-600 hover:bg-transparent hover:text-slate-600"  endIcon={<VectorIcon/>}>Shop Now</Button>
            </div>
           </div>
        </div>
    )
}
