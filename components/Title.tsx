import React, {FunctionComponent, PropsWithChildren} from 'react'

export const Title: FunctionComponent<Props> = (props) => {
  return (
    <div className='w-full'>
      <style jsx>
        {`
          img {
            max-width: 400px;
            width: 100%;
            height: auto;
            margin-left: auto;
            margin-right: auto;
          }
        `}
      </style>
      <img src='https://drive.google.com/uc?id=1XAPzfjfRjmHZzgU2RmsJZ3kvFkc64Hyb'/>
      <div id='bg-image-1' className=''>
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
      {props?.isBride !== undefined && (
        <div className='pt-4 text-center text-lg'>
          자랑스러운 우리 {props.isBride? `딸` : `아들`} 결혼합니다.
        </div>
      )}
    </div>
  )
}

type Props = PropsWithChildren<{
  isBride?: boolean
}>
