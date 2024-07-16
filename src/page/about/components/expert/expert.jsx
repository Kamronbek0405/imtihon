import React from 'react'
import Expert1 from './expert-img/expert1.png'
import Expert2 from './expert-img/expert2.png'
import Expert3 from './expert-img/expert3.png'
import { Facebook } from '../../../../assets/icon/facebook'
import { Twitter } from '../../../../assets/icon/twitter'
import { Instagram } from '../../../../assets/icon/instagram'

export const Expert = () => {
  return (
    <div className='w-[1200px] h-[700px]  flex flex-col items-center justify-between'>
        <div className='w-[700px] h-[184px] text-center '>
            <span className='italic text-green-500 font-medium text-xl'>Team</span>
            <h1 className='text-4xl font-bold text-slate-700 py-3 '>Our Organic Experts</h1>
            <p className='text-gray-600 '>Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
        </div>
        <div className='w-[1180px] h-[500px]  flex items-center justify-center gap-12'>
            <div className='w-[350px] h-[480px] border-2 flex flex-col items-center justify-center  hover:shadow-md  rounded-xl shadow-lg shadow-gray-400'>
                <img className='w-[300px] h-[350px] mb-5' src={Expert1} alt="img" />
                <div className='flex w-[300px] items-center justify-between'>
                    <div>
                    <h1 className='text-slate-600 text-xl font-bold '>Giovani Bacardo</h1>
                    <span className='text-green-500 italic '>Farmer</span>
                    </div>
                    <div className='flex w-[55px] items-center justify-between'>
                        <Facebook/>
                        <Twitter/>
                    </div>
                </div>
            </div>
            <div className='w-[350px] h-[480px] border-2 flex flex-col items-center justify-center hover:shadow-md  rounded-xl shadow-lg shadow-gray-400'>
                <img className='w-[300px] h-[350px] mb-5 rounded-t-3xl' src={Expert2} alt="img" />
                <div className='flex w-[300px] items-center justify-between'>
                    <div>
                    <h1 className='text-slate-600 text-xl font-bold '>Marianne Loreno</h1>
                    <span className='text-green-500 italic '>Designer</span>
                    </div>
                    <div className='flex w-[90px] items-center justify-between'>
                        <Instagram/>
                        <Facebook/>
                        <Twitter/>
                    </div>
                </div>
            </div>
            <div className='w-[350px] h-[480px] border-2 flex flex-col items-center justify-center  hover:shadow-md rounded-xl shadow-lg shadow-gray-400'>
                <img className='w-[300px] h-[350px] mb-5 rounded-t-3xl' src={Expert3} alt="img" />
                <div className='flex w-[300px] items-center justify-between'>
                    <div>
                    <h1 className='text-slate-600 text-xl font-bold '>Riga Pelore</h1>
                    <span className='text-green-500 italic '>Farmer</span>
                    </div>
                    <div className='flex w-[90px] items-center justify-between'>
                        <Instagram/>
                        <Facebook/>
                        <Twitter/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
