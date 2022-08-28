import React from 'react'
import type { NextPage } from 'next'
import Image from 'next/image'
import {Banking, Calendar, Location, Phrase, Title} from '../components'

const Home: NextPage = () => {
  return (
    <div className='flex flex-col items-center justify-center p-4'>
      <Title/>
      <Image src='/flower.jpg' width={120} height={60}/>
      <Phrase/>
      <Calendar/>
      <Location/>
      <Image src='/flower.jpg' width={120} height={60}/>
      <Banking isGroom isBride/>
    </div>
  )
}

export default Home
