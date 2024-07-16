import React from 'react'
import AboutImg1 from '../../about-img/aboutPhoto.png'
import { Equipment } from '../../../../assets/icon/equipment'
import { Hormone } from '../../../../assets/icon/hormone'
import { Button } from '../../../../components/ui/button/button'
import { VectorIcon } from '../../../../assets/icon/vector-icon'

export const Creative = () => {
    return (
        <div className='flex items-center justify-around'>
            <img className='w-[660px] h-[600px] mr-20 mt-10' src={AboutImg1} alt="img" />
            <div className='w-[600px] h-[500px] bg-white'>
                <span className='text-lg italic text-green-400'>About Us</span>
                <h1 className='text-2xl font-bold text-slate-600 w-[250px]'>We do Creative
                    Things for Success</h1>
                <p className='text-slate-600 w-[550px]'>Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
                <p className='text-slate-600 w-[560px] mt-3'>Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
                <div className='flex mt-5'>
                    <div className='flex items-center'>
                        <Equipment />
                        <h1 className='text-slate-600 mt-2 ml-3 text-xl font-semibold w-[200px]'>Modern Agriculture
                            Equipment
                        </h1>
                    </div>

                    <div className='flex items-center ml-5'>
                        <Hormone/>
                        <h1 className='text-slate-600 mt-2 ml-4 text-xl font-semibold w-[180px] '>No growth hormones are used
                        </h1>
                    </div>
                </div>
                <Button endIcon={<VectorIcon/>} className="w-[190px] h-[70px] hover:border-2 hover:border-slate-700 hover:bg-transparent hover:text-slate-700 mt-12 flex items-center justify-center rounded-xl bg-slate-600 text-white">Explore More</Button>
            </div>
        </div>
    )
}
