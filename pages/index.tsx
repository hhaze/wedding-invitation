import React from 'react'
import type { NextPage } from 'next'
import Image from 'next/image'
import {Account, Calendar, Location, Meta, Phrase, Title} from '../components'

const Home: NextPage = () => {
  return (
    <>
      <Meta/>
      <div className='flex flex-col items-center justify-center gap-20 pb-20'>
        <Title/>
        <Image src='flower.jpg' width={120} height={60}/>
        <Phrase/>
        <Calendar/>
        <Location/>
        <Image src='flower.jpg' width={120} height={60}/>
        <Account/>
      </div>
    </>
  )
}

export default Home
