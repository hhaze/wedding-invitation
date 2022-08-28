import React, {FunctionComponent, PropsWithChildren} from 'react'
import Image from 'next/image'

export const Title: FunctionComponent<Props> = (props) => {
  return (
    <>
      <div className='text-center py-8 text-2xl font-bold'>
        {props?.isBride
          ? `구지혜 | 이봉균`
          : `이봉균 | 구지혜`
        }
      </div>
      <Image
        src="https://images.unsplash.com/photo-1520854221256-17451cc331bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
        width={400}
        height={600}
        className="rounded-2xl"
      />
      <div className='flex flex-col items-center pt-8 pb-20 text-lg'>
        <span>2022년 09월 24일 토요일 낮 12시</span>
        <span>로얄호텔서울 3층 그랜드 볼룸</span>
      </div>
    </>
  )
}

type Props = PropsWithChildren<{
  isBride?: boolean
}>
