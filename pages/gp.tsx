import React from 'react'
import {NextPage} from 'next'
import Image from 'next/image'
import {Banking, Calendar, Location, Photo, Phrase, Title} from '../components'

const GroomParent: NextPage = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-20'>
      <Title/>
      <Image src='/flower.jpg' width={120} height={60}/>
      <Phrase isBride={false}/>
      <Photo/>
      <Calendar/>
      <Location/>
      <Image src='/flower.jpg' width={120} height={60}/>
      <Banking isGroom={true} isBride={false}/>
    </div>
  )
}

export default GroomParent
