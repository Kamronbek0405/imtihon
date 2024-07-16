import React from 'react'
import { Input } from '../../components/ui/input'
import { Button } from '../../components/ui/button/button'
import { Logo } from '../../assets/icon/logo'
import { Instagram } from '../../assets/icon/instagram'
import { Facebook } from '../../assets/icon/facebook'
import { Twitter } from '../../assets/icon/twitter'
import { Gmail } from '../../assets/icon/gmail-icon'

export const Footer = () => {
    return (
        <div className='w-[100%] h-[120vh]  flex items-center justify-between flex-col'>
            <div className='w-[1400px] h-[323px] mt-10 flex items-center justify-center bg-[url("/src/layout/footer/footer-img/BackgroundFooter.png")] bg-no-repeat bg-cover'>
                <div className='w-[1258px] h-[113px] flex items-center justify-between'>
                    <h1 className='text-5xl text-white font-bold w-[350px]'>Subscribe to
                        our Newsletter
                    </h1>
                    <div className='flex w-[580px]  justify-between items-end '>
                        <Input className="w-[349px] h-[70px] rounded-xl px-4" placeholder="Your Email Address" />
                        <Button className="w-[200px] h-[70px] bg-slate-600 rounded-lg font-bold text-white">Subscribe</Button>
                    </div>
                </div>
            </div>
            <div className='w-[100%] h-[400px] mt-10  flex  justify-center items-center'>
                <ul className='w-[285px] h-[307px] text-slate-400 flex items-end flex-col mr-10'>
                    <strong className='text-2xl text-slate-600'>Contact Us</strong>
                    <li className=' flex flex-col items-end'>
                        <span className='text-lg font-medium text-slate-600  mt-3'>Email</span>
                        <a href="">needhelp@Organia.com</a>
                    </li>
                    <li className='flex flex-col items-end'>
                        <span className='text-lg font-medium text-slate-600 mt-3'>Phone</span>

                        <a href="Phone:998912345678">666 888 888</a>
                    </li>
                    <li className='flex flex-col items-end'>
                        <span className='text-lg font-medium text-slate-600 mt-3'>Address</span>

                        <a  href="">88 road, borklyn street, USA</a>
                    </li>
                </ul>

                <div className='w-[580px] h-[300px]  border-r-2 border-gray-400 border-l-2 flex items-start justify-center '>
                    <div className='w-[543px] h-[245px] flex items-center text-center justify-start flex-col'>
                        <span className='flex items-center'><Logo /> <h1 className='text-xl text-slate-500 font-bold ml-2'>Organick</h1></span>
                        <p className='text-slate-400 w-[460px] mt-5'>Simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum simply dummy text of the printing </p>
                        <div className='flex mt-14 gap-2'>
                            <span className='w-[45px] h-[45px] bg-green-100 rounded-full flex items-center justify-center'><Instagram /></span>
                            <span className='w-[45px] h-[45px] bg-green-100 rounded-full flex items-center justify-center'><Facebook /></span>
                            <span className='w-[45px] h-[45px] bg-green-100 rounded-full flex items-center justify-center'><Twitter /></span>
                            <span className='w-[45px] h-[45px] bg-green-100 rounded-full flex items-center justify-center'><Gmail /></span>
                        </div>
                    </div>
                </div>


                <ul className='w-[285px] h-[307px] flex items-start flex-col text-slate-500 ml-10'>
                    <strong className='text-2xl text-slate-600'>Utility Pages</strong>
                    <li className='py-5'>
                        <a  href="">Style Guide</a>
                    </li>
                    <li>
                        <a href="">404 Not Found</a>
                    </li>
                    <li className='py-5'>
                        <a href="">Password Protected</a>
                    </li>
                    <li>
                        <a href="">Licences</a>
                    </li>
                    <li className='py-5'>
                        <a href="">Changelog</a>
                    </li>

                </ul>
            </div>
            
            <span className=' w-[100%] h-[50px] flex items-center justify-center border-t-2 border-gray-300'>Copyright © Organick | Designed by VictorFlow Templates - Powered by Webflow</span>
        </div>
    )
}
