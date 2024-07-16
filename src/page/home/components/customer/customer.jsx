import React from 'react'
import { StarIcon } from '../../../../assets/icon/star-icon/star-icon'
import CustomerPhoto from './customer-img/CustomerPhoto.png'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

export const Customer = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,           
        autoplaySpeed: 1000,
        

    };
    return (
        <div className='w-[100%] h-[135vh] flex items-center justify-center'>
            <div className='w-[1540px] h-[110vh] flex items-center justify-around  flex-col  bg-[url("src/page/home/components/customer/customer-img/customerBgImg.png")] bg-no-repeat bg-cover'>
                <div className='w-[850px] h-[500px]  text-center   flex  items-center justify-center flex-col '>
                    <span className='italic text-green-500 text-lg'>Testimonial</span>
                    <h1 className='text-2xl text-slate-700 font-bold '>What Our Customer Saying?</h1>

                    <Slider className='w-[640px] mt-9' {...settings}>
                        <div >
                            <div className='ml-[250px] w-[150px] flex items-center justify-center flex-col mt-2 '>
                                <img className='rounded-full  ' src={CustomerPhoto} alt="img" />
                                <span className=' mt-5 '><StarIcon /></span>
                            </div>
                            <p className='text-gray-500 mt-5'>Simply dummy text of the printing and typesetting industry. Lorem Ipsum simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.</p>
                            <h1 className='text-xl font-bold mt-5 text-slate-700'>Sara Taylor</h1>
                            <span className='font-light text-slate-600'>Consumer</span>
                        </div>

                        <div >
                            <div className='ml-[250px] w-[150px] flex items-center justify-center flex-col mt-2 '>
                                <img className='rounded-full  ' src={CustomerPhoto} alt="img" />
                                <span className=' mt-5 '><StarIcon /></span>
                            </div>
                            <p className='text-gray-500 mt-5'>Simply dummy text of the printing and typesetting industry. Lorem Ipsum simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.</p>
                            <h1 className='text-xl font-bold mt-5 text-slate-700'>Sara Taylor</h1>
                            <span className='font-light text-slate-600'>Consumer</span>
                        </div>

                        <div >
                            <div className='ml-[250px] w-[150px] flex items-center justify-center flex-col mt-2 '>
                                <img className='rounded-full  ' src={CustomerPhoto} alt="img" />
                                <span className=' mt-5 '><StarIcon /></span>
                            </div>
                            <p className='text-gray-500 mt-5'>Simply dummy text of the printing and typesetting industry. Lorem Ipsum simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.</p>
                            <h1 className='text-xl font-bold mt-5 text-slate-700'>Sara Taylor</h1>
                            <span className='font-light text-slate-600'>Consumer</span>
                        </div>

                    </Slider>
                </div>
                <div className='flex gap-10'>
                    <div className='w-[180px] h-[180px] border-4 border-green-500 rounded-full flex items-center justify-center flex-col'>
                        <h1 className='text-5xl font-bold text-slate-700'>100%</h1>
                        <span className='text-lg font-medium text-slate-700'>Organic</span>
                    </div>
                    <div className='w-[180px] h-[180px] border-4 border-green-500 rounded-full flex items-center justify-center flex-col'>
                        <h1 className='text-5xl font-bold text-slate-700'>285</h1>
                        <span className='text-lg font-medium text-slate-700'>Active Product</span>
                    </div>
                    <div className='w-[180px] h-[180px] border-4 border-green-500 rounded-full flex items-center justify-center flex-col'>
                        <h1 className='text-5xl font-bold text-slate-700'>350+</h1>
                        <span className='text-lg font-medium text-slate-700'>Organic Orchads</span>
                    </div>
                    <div className='w-[180px] h-[180px] border-4 border-green-500 rounded-full flex items-center justify-center flex-col'>
                        <h1 className='text-5xl font-bold text-slate-700'>25+</h1>
                        <span className='text-lg font-medium text-slate-700'>Years of Farming</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
