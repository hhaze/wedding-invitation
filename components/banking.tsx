import React, {FunctionComponent} from 'react'
import {Accordion} from './accordion'

export const Banking: FunctionComponent = () => {
  return (
    <>
      <div className='font-bold text-lg pt-6'>마음 전하실 곳</div>
      <div className='flex flex-col items-center justify-center text-sm pt-2 pb-6'>
        <span>참석이 어려우신 분들을 위해</span>
        <span>계좌번호를 기재하였습니다.</span>
        <span>너그러운 마음으로 양해 부탁드립니다.</span>
      </div>
      <Accordion/>
    </>
  )
}