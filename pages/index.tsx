import React from 'react'
import type { NextPage } from 'next'
import {Title} from '../components/title'
import {Phrase} from '../components/phrase'
import {Photo} from '../components/photo'
import {Calendar} from '../components/calendar'
import {Location} from '../components/location'
import {Banking} from '../components/banking'
import {Rsvp} from '../components/rsvp'

const Home: NextPage = () => {
  return (
    <div className="flex flex-col items-center justify-center font-['Noto+Serif+KR']">
      <Title/>
      <Phrase/>
      <Photo/>
      <Calendar/>
      <Location/>
      <Banking/>
      <Rsvp/>
    </div>
  )
}

export default Home
