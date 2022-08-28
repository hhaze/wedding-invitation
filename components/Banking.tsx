import React, {FunctionComponent} from 'react'
import {Accordion} from './Accordion'

export const Banking: FunctionComponent = () => {
  return (
    <div className='w-full px-4 text-center'>
      <div className='font-bold text-lg py-4'>마음 전하실 곳</div>
      <Accordion/>
    </div>
  )
}
