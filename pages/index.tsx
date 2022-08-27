import React from 'react'
import type { NextPage } from 'next'
import {Title} from '../components/title'
import {Phrase} from '../components/phrase'
import {Calendar} from '../components/calendar'
import {Location} from '../components/location'
import {Banking} from '../components/banking'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div className='flex flex-col items-center justify-center m-4'>
      <Title/>
      <Image src='/flower.jpg' width={120} height={60}/>
      <Phrase/>
      <Calendar/>
      <Location/>
      <Image src='/flower.jpg' width={120} height={60}/>
      <Banking/>
    </div>
  )
}

export default Home
