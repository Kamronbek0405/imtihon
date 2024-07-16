import React from 'react'
import { useParams } from 'react-router-dom'
import { productData } from '../../../data/product-data'
import { StarIcon } from '../../../../assets/icon/star-icon/star-icon'
import { Button } from '../../../../components/ui/button/button'
import { VectorIcon } from '../../../../assets/icon/vector-icon'
import { Link } from 'react-router-dom'



export const Malumot = () => {
  const obj = useParams();
  const data = productData.find((item) => item.id == obj.id)
  return (
    <div>
      <div className='w-[100%] h-[70vh] flex items-center justify-center  bg-[url("/src/page/shop/components/malumot/single-img/Banner.png")] bg-no-repeat '>
        <h1 className='text-4xl font-bold text-slate-700'>Shop Single</h1>
      </div>

      <div className='w-[100%] h-[60vh] flex items-center justify-center'>
        <img className='w-[400px] h-[400px]' src={data.img} alt="img" />
        <div className='p-5'>
          <h1 className='text-3xl  font-bold text-slate-600 py-3'>Health Pistachios</h1>
          <StarIcon />
          <div className='py-3'>
            <span className='text-gray-500 line-through'>{data.price2}</span>
            <span className='text-xl text-slate-600 font-medium ml-3'>{data.price}</span>
          </div>
          <p className='w-[550px] py-3'>Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
          <div className='flex items-center py-3 mt-3'>
            <span className=''>Quantity :</span>
            <Button className="w-[124px] h-[70px] ml-5 border-2 border-slate-700 rounded-xl flex items-center justify-center">1</Button>
            <Button endIcon={<VectorIcon />} className="w-[190px] h-[70px] ml-6 hover:border-2 font-medium hover:border-slate-700 hover:bg-transparent hover:text-slate-700 bg-slate-600 flex items-center justify-center rounded-xl text-white">Add To Cart</Button>
          </div>
        </div>
      </div>

      <div className='w-[100%] h-auto flex items-center justify-center'>
        <div className='w-[1137px] h-[197px]  flex justify-between items-center flex-col  '>
          <div className='flex gap-10'>
            <Button className="w-[300px] h-[80px] hover:bg-green-100  hover:text-slate-600 bg-slate-600 flex items-center justify-center rounded-xl text-white text-xl font-bold">Product Description</Button>
            <Button className="w-[300px] h-[80px] hover:bg-slate-600 hover:text-white bg-green-100 flex items-center justify-center rounded-xl text-xl font-bold text-slate-600">Product Description</Button>
          </div>
          <p className='text-center text-slate-600'>Welcome to the world of natural and organic. Here you can discover the bounty of nature. We have grown on the principles of health, ecology, and care. We aim to give our customers a healthy chemical-free meal for perfect nutrition. It offers about 8–10% carbs. Simple sugars — such as glucose and fructose — make up 70% and 80% of the carbs in raw.</p>
        </div>
      </div>

      <section className='flex flex-col items-center justify-center mt-20'>
        <h1 className='text-4xl font-bold text-slate-700 py-10'>Related Products</h1>
      <div className='flex flex-wrap items-center justify-center  '>
      {productData.slice(0, 4).map((item) => (
            <Link className=' flex  items-center  h-[75vh]  ' to={`/malumot/${item.id}`} key={item.id}>
              <div className='w-[330px] h-[460px] shadow-xl shadow-gray-300 border-2 hover:shadow-md rounded-2xl flex items-center justify-center flex-col ml-6  '>
              <img className='w-[250px] h-[250px]' src={item.img} alt="img" />
              <h1 className='text-xl font-medium text-slate-600 border-b-2 border-gray-400    w-[260px] py-5'>{item.name}</h1>
              <div className='mt-3'>
                <span className='text-gray-400 px-3 line-through'>{item.price2}</span>
                <span className='text-lg font-medium text-slate-500 '>{item.price}</span>
                <span className='ml-5 px-5'>{item.star}</span>
              </div>
            </div>
              
            </Link>
          ))}
      </div>
      </section>
    </div>
  )
}
