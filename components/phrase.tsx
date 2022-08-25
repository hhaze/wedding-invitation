import React, {FunctionComponent} from 'react'

export const Phrase: FunctionComponent = props => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <div className='text-xl text-rose-300 font-bold py-6'>
        소중한 분들을 초대합니다.
      </div>
      <div className='flex flex-col items-center text-base'>
        <span>청명한 구월의 좋은 날,</span>
        <span>결혼합니다!</span>
      </div>
      <div className='py-6'>
        <div className='flex justify-center text-lg'>
          <span className='px-1'>이규석</span>
          <span className='px-1'>·</span>
          <span className='px-1'>이해자</span>
          <span className='px-1 text-sm py-1'>의</span>
          <span className='px-1 text-sm w-10 py-1'>아들</span>
          <span className='px-1 font-bold'>봉균</span>
        </div>
        <div className='flex justify-center text-lg'>
          <span className='px-1'>구성종</span>
          <span className='px-1'>·</span>
          <span className='px-1'>홍남숙</span>
          <span className='px-1 text-sm py-1'>의</span>
          <span className='px-1 text-sm w-10 py-1'>딸</span>
          <span className='px-1 font-bold'>지혜</span>
        </div>
      </div>
    </div>
  )
}