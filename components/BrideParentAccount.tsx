import React, {FunctionComponent} from 'react'
import {ColoredToastCopy} from './ColoredToastCopy'

export const BrideParentAccount: FunctionComponent = () => {
  return (
    <div className='text-center'>
      <div className='font-bold text-lg'>마음 전하실 곳</div>
      <ColoredToastCopy text='16901142615' category='계좌번호'>
        <meta name='format-detection' content='telephone=no'/>
        농협 169-01-142615 구성종
      </ColoredToastCopy>
      <ColoredToastCopy text='16702594010' category='계좌번호'>
        <meta name='format-detection' content='telephone=no'/>
        농협 167-02-594010 홍남숙
      </ColoredToastCopy>
    </div>
  )
}
