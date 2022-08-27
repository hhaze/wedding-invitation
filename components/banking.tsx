import React, {FunctionComponent} from 'react'
import {Accordion} from './accordion'

export const Banking: FunctionComponent = () => {
  return (
    <div className='w-4/5 p-2 text-center'>
      <div className='font-bold text-lg pt-20'>마음 전하실 곳</div>
      <div className='text-sm pt-2 pb-6'>
        <div>참석이 어려우신 분들을 위해</div>
        <div>계좌번호를 기재하였습니다.</div>
        <div>너그러운 마음으로 양해 부탁드립니다.</div>
      </div>
      <Accordion/>
    </div>
  )
}
