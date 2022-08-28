import React from "react";
import {NextPage} from "next";
import Image from "next/image";
import {Banking, Calendar, Location, Photo, Phrase, Title} from '../components'

const BrideParent: NextPage = () => {
  return (
    <div className='flex flex-col items-center justify-center m-4'>
      <Title isBride/>
      <Image src='/flower.jpg' width={120} height={60}/>
      <Phrase isBride/>
      <Photo/>
      <Calendar/>
      <Location/>
      <Image src='/flower.jpg' width={120} height={60}/>
      <Banking isGroom={false} isBride={true}/>
    </div>
  )
}

export default BrideParent
