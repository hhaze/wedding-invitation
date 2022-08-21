import React, {FunctionComponent} from 'react'
import {ColoredToastCopy} from './ColoredToastCopy'

export const Account: FunctionComponent = () => {
  return (
    <div className='text-center'>
      <div className='font-bold text-lg'>마음 전하실 곳</div>
      <ColoredToastCopy text='01006530501014' category='계좌번호'>
        <meta name='format-detection' content='telephone=no'/>
        IBK기업 010-065305-01-014 이봉균
      </ColoredToastCopy>
      <ColoredToastCopy text='52604454301019' category='계좌번호'>
        <meta name='format-detection' content='telephone=no'/>
        IBK기업 526-044543-01-019 구지혜
      </ColoredToastCopy>
    </div>
  )
}
