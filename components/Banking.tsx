import React, {FunctionComponent, PropsWithChildren} from 'react'
import {Accordion} from './Accordion'

export const Banking: FunctionComponent<Props> = (props) => {
  return (
    <div className='w-full px-4 py-20 text-center'>
      <div className='font-bold text-lg py-4'>마음 전하실 곳</div>
      <Accordion isGroom={props?.isGroom} isBride={props?.isBride}/>
    </div>
  )
}

type Props = PropsWithChildren<{
  isGroom?: boolean
  isBride?: boolean
}>
