import React, {FunctionComponent, PropsWithChildren} from 'react'
import {GroomAccount} from './GroomAccount'
import {BrideAccount} from './BrideAccount'

export const Accordion: FunctionComponent<Props> = (props) => {
  return (
    <div className='pb-8'>
      {props?.isGroom && <GroomAccount/>}
      {props?.isBride && <BrideAccount/>}
    </div>
  )
}

type Props = PropsWithChildren<{
  isGroom?: boolean
  isBride?: boolean
}>
