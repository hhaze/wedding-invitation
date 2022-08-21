import React, {FunctionComponent} from 'react'
import {ColoredToastCopy} from './ColoredToastCopy'

export const GroomParentAccount: FunctionComponent = () => {
  return (
    <div className='text-center'>
      <div className='font-bold text-lg'>마음 전하실 곳</div>
      <ColoredToastCopy text='43632587040104' category='계좌번호'>
        <meta name='format-detection' content='telephone=no'/>
        국민 4363-25-87-040104 이해자
      </ColoredToastCopy>
    </div>
  )
}
