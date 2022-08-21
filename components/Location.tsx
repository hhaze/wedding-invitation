import React, {FunctionComponent} from 'react'
import Image from 'next/image'
import {ColoredToastCopy} from "./ColoredToastCopy";
import {Border2} from './Border2';

export const Location: FunctionComponent = () => {
  return (
    <div className='text-center px-4'>
      <div className='font-bold text-lg p-4'>오시는 길</div>
      <Image src='royal_location.png' width={400} height={300}/>
      <div className='text-sm text-left py-2'>
        <div className='font-bold text-lg'>주소</div>
        서울특별시 중구 명동길 61
        <div>
          <ColoredToastCopy text='서울특별시 중구 명동길 61' category='주소'>
            주소 복사하기
          </ColoredToastCopy>
          <a
            href='https://naver.me/GpJxzduT'
            target='_blank'
            rel='noreferrer'
          >
            <Border2>네이버 지도</Border2>
          </a>
          <a
            href='https://map.kakao.com/?urlX=496821&urlY=1129084&urlLevel=3&itemId=17135751&q=서울로얄호텔%20그랜드볼룸&srcid=17135751&map_type=TYPE_MAP'
            target='_blank'
            rel='noreferrer'
          >
            <Border2>카카오 맵</Border2>
          </a>
        </div>
        <div>
          02-756-1112
        </div>
        <a href='tel:02-756-1112'>
          <Border2>전화 걸기</Border2>
        </a>
      </div>
      <div className='text-sm text-left py-2'>
        <div className='font-bold text-lg'>🚇 지하철</div>
        <div>2호선 을지로입구역 하차 5번 출구 (도보 5분 소요)</div>
        <div>4호선 명동역 하차 8번 출구 (도보 5분 소요)</div>
      </div>
      <div className='text-sm text-left py-2'>
        <div className='font-bold text-lg'>🚌 버스</div>
        <div>남대문세무서.서울백병원 하차 (도보 4분)</div>
        <div>간선<span className='text-blue-600'>(파랑)</span> 470, 472, 741</div>
        <div>직행<span className='text-red-600'>(빨강)</span> 1150, 3201, 4108, 5000A, 5000B 외 다수</div>
        <div>광역<span className='text-red-600'>(빨강)</span> 9401, M4101, M4102, M4108 외 다수</div>
      </div>
      <div className='text-sm text-left py-2'>
        <div className='font-bold text-lg'>🚗 자가용</div>
        <div>· 명동성당주차장 이용 ( <span className='underline'>2시간 무료</span> )</div>
        <div className='indent-3'>주소: 서울특별시 중구 명동길 74</div>
        <div>· 주차장 출구에서 왼편으로 20미터 로얄호텔서울.</div>
        <div className='indent-3'>호텔주차장 및 명동성당주차장 이용시</div>
        <div className='indent-3'>KEB하나은행 옆길로 진입하여 주시기 바랍니다.</div>
      </div>
    </div>
  )
}
