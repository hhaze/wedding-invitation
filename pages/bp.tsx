import React from "react";
import {NextPage} from "next";
import Image from "next/image";
import {BrideParentAccount, Calendar, Location, Meta, Photo, Phrase, Title} from '../components'
import { subpath } from "../constant";

const BrideParent: NextPage = () => {
  return (
    <>
      <Meta/>
      <div className='flex flex-col items-center justify-center gap-20 pb-20'>
        <Title isBride/>
        <Image src={`${subpath}/flower.jpg`} width={120} height={60}/>
        <Phrase isBride/>
        <Photo/>
        <Calendar/>
        <Location/>
        <Image src={`${subpath}/flower.jpg`} width={120} height={60}/>
        <BrideParentAccount/>
      </div>
    </>
  )
}

export default BrideParent
