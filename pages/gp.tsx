import React from 'react'
import {NextPage} from 'next'
import Image from 'next/image'
import {Calendar, Location, Meta, Photo, Phrase, Title} from '../components'

const GroomParent: NextPage = () => {
  return (
    <>
      <Meta/>
      <div className='flex flex-col items-center justify-center gap-20 pb-20'>
        <Title isBride={false}/>
        <Image src='flower.jpg' width={120} height={60}/>
        <Phrase isBride={false}/>
        <Photo/>
        <Calendar/>
        <Location/>
      </div>
    </>
  )
}

export default GroomParent
