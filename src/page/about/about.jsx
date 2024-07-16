import React from 'react'
import { AboutHero } from './components/about-hero'
import { Creative } from './components/creative'
import { Market } from './components/market'
import { Offer } from './components/offer'
import { Expert } from './components/expert'

export const About = () => {
  return (
    <div>
      <section>
        <AboutHero/>
      </section>
      <section className='w-[100%] h-[100vh]   flex items-center justify-center'>
        <Creative/>
      </section>
      <section>
        <Market/>
      </section>
      <section className='w-[100%] h-[130vh]  flex items-center justify-center'>
        <Expert/>
      </section>
      <section className='w-[100%] h-[892px] bg-slate-700 flex items-center justify-center'>
        <Offer/>
      </section>
    </div>
  )
}
