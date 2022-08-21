import React, {FunctionComponent, PropsWithChildren} from 'react'
import Image from 'next/image'

export const Phrase: FunctionComponent<Props> = (props) => {
  return (
    <div className=''>
      <div className='text-center text-xl text-rose-300 font-bold pb-4'>
        <div>소중한 분들을 초대합니다.</div>
      </div>
      <Image src='marry.jpg' width={400} height={250}/>
      {props.isBride
        ? (
          <div className='pt-4'>
            <div className='flex justify-center text-lg'>
              <span className='px-1'>구성종</span>
              <span className='px-1'>·</span>
              <span className='px-1'>홍남숙</span>
              <span className='px-1 text-sm py-1'>의</span>
              <span className='px-1 text-sm w-10 py-1'>딸</span>
              <span className='px-1 font-bold'>지혜</span>
            </div>
            <div className='flex justify-center text-lg'>
              <span className='px-1'>이규석</span>
              <span className='px-1'>·</span>
              <span className='px-1'>이해자</span>
              <span className='px-1 text-sm py-1'>의</span>
              <span className='px-1 text-sm w-10 py-1'>아들</span>
              <span className='px-1 font-bold'>봉균</span>
            </div>
          </div>
        )
        : (
          <div className='pt-4'>
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
        )
      }
    </div>
  )
}

type Props = PropsWithChildren<{
  isBride?: boolean
}>
