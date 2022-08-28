import React from 'react'
import type { NextPage } from 'next'
import {Title} from '../components/Title'
import {Phrase} from '../components/Phrase'
import {Calendar} from '../components/Calendar'
import {Location} from '../components/Location'
import {Banking} from '../components/Banking'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-20'>
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
