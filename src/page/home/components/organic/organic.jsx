import React from 'react'
import { useParams } from 'react-router-dom'
import { organicData } from '../../../data/product-data'
import { Link } from 'react-router-dom'

export const Organic = () => {
    const obj = useParams()
    const data = organicData.find((list) => list.id === obj.id)
  return (
    <div className='w-[200px] h-[200px] bg-slate-500'>
        <h1>{data?.name}</h1>
        <img src={data.img} alt="img" />
        <Link to={"/"}>ortga</Link>
    </div>
  )
}
