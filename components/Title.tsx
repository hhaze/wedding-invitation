import React, {FunctionComponent, PropsWithChildren} from 'react'

export const Title: FunctionComponent<Props> = (props) => {
  return (
    <div className="w-full">
      <style jsx>
        {`
          #bg-image-1 {
            background-image: url("/1.JPG");
          }
        `}
      </style>
      <div id="bg-image-1" className="w-full h-96 bg-cover top-0 left-0">
      </div>
      <div className='text-center py-16 text-2xl'>
        {props?.isBride
          ? `구지혜 | 이봉균`
          : `이봉균 | 구지혜`
        }
      </div>
      <div className='flex flex-col items-center text-lg'>
        <span>2022년 09월 24일 토요일 낮 12시</span>
        <span>로얄호텔서울 3층 그랜드 볼룸</span>
      </div>
    </div>
  )
}

type Props = PropsWithChildren<{
  isBride?: boolean
}>
