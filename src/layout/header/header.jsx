import React from 'react'
import { Link } from 'react-router-dom'
import { Input } from '../../components/ui/input'
import { SearchIcon } from '../../assets/icon/search-icon'
import { Korzinka } from '../../assets/icon/korzinka'
import { Logo } from '../../assets/icon/logo'


export const Header = () => {
    return (
        <>
        <span className='flex items-center gap-3 text-3xl font-bold text-slate-600'><Logo/>Organick</span>
       <div className='flex items-center justify-between w-[28%] gap-4 ml-8'>
       <Link className="w-[90px] h-[40px] hover:shadow-md hover:text-slate-600 flex items-center justify-center shadow-lg shadow-gray-300" to={'/'}>Home</Link>
        <Link className="w-[90px] h-[40px] hover:shadow-md hover:text-slate-600 flex items-center justify-center shadow-lg shadow-gray-300" to={'/about'}>About</Link>
        <Link className="w-[90px] h-[40px] hover:shadow-md hover:text-slate-600 flex items-center justify-center shadow-lg shadow-gray-300" to={'/shop'}>Shop</Link>
        <Link className="w-[90px] h-[40px] hover:shadow-md hover:text-slate-600 flex items-center justify-center shadow-lg shadow-gray-300" to={'/projects'}>Projects</Link>
        <Link className="w-[90px] h-[40px] hover:shadow-md hover:text-slate-600 flex items-center justify-center shadow-lg shadow-gray-300" to={'/news'}>News</Link>

       </div>
        
       
        
       <div className='flex items-center'>
       <div className='w-[376px] h-[66px] rounded-full bg-white flex items-center justify-between'>
            <Input className="mb-3" type="text" placeholder="" />
            <SearchIcon  />
        </div>
       <div className='w-[159px] h-[66px] border-gray-400  flex items-center justify-around bg-slate-200 rounded-full ml-3 '>
       <span className='w-[56px] h-[56px] bg-slate-800 rounded-full flex items-center justify-center '>
            <Korzinka/>
        </span>
        <span className='px-2'>Cart (0)</span>
        </div> 
       </div>
        </>
    )
}
