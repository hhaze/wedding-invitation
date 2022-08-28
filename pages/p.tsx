import React from "react";
import {NextPage} from "next";
import {Title} from "../components/Title";
import Image from "next/image";
import {Phrase} from "../components/Phrase";
import {Calendar} from "../components/Calendar";
import {Location} from "../components/Location";
import {Banking} from "../components/Banking";
import {Photo} from "../components/Photo";

const Parent: NextPage = () => {
  return (
    <div className='flex flex-col items-center justify-center m-4'>
      <Title/>
      <Image src='/flower.jpg' width={120} height={60}/>
      <Phrase/>
      <Photo/>
      <Calendar/>
      <Location/>
      <Image src='/flower.jpg' width={120} height={60}/>
      <Banking/>
    </div>
  )
}

export default Parent
