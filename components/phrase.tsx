import React, {FunctionComponent} from 'react'

export const Phrase: FunctionComponent = props => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <div className='text-xl text-yellow-500 py-6'>
        소중한 분들을 초대합니다.
      </div>
      <div className='flex flex-col items-center text-base'>
        <span>청명한 구월의 좋은 날,</span>
        <span>결혼합니다!</span>
      </div>
      <div className='py-6'>
        <div className='flex justify-center text-lg font-bold'>
          <span className='px-1'>이규석</span>
          <span className='px-1'>·</span>
          <span className='px-1'>이해자</span>
          <span className='px-1 text-sm'>의</span>
          <span className='px-1 text-sm w-10'>아들</span>
          <span className='px-1'>봉균</span>
        </div>
        <div className='flex justify-center text-lg font-bold'>
          <span className='px-1'>구성종</span>
          <span className='px-1'>·</span>
          <span className='px-1'>홍남숙</span>
          <span className='px-1 text-sm'>의</span>
          <span className='px-1 text-sm w-10'>딸</span>
          <span className='px-1'>지혜</span>
        </div>
      </div>
    </div>
  )
}