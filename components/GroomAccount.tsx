import React, {FunctionComponent, useState} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAngleDown, faAngleUp} from '@fortawesome/free-solid-svg-icons'
import {ToastCopy} from './ToastCopy'

export const GroomAccount: FunctionComponent = () => {
  const [groomShow, setGroomShow] = useState(true)
  const handleGroomOpen = () => setGroomShow(!groomShow)

  return (
    <>
      <div onClick={handleGroomOpen}>
        <div className='w-full rounded-lg bg-rose-200 px-8 py-4 items-center'>
          <button>신랑측 계좌번호</button>
          <span className='pl-4'>
              {groomShow
                ? <FontAwesomeIcon icon={faAngleUp}/>
                : <FontAwesomeIcon icon={faAngleDown}/>
              }
            </span>
        </div>
      </div>
      {groomShow && (
        <div className='text-left divide-y divide-rose-300'>
          <div className='w-full py-4'>
            <ToastCopy text="123-456-789">
              <div className='px-4'>농협 123-456-789</div>
              <div className='px-4'>이규석</div>
            </ToastCopy>
          </div>
          <div className='w-full py-4'>
            <ToastCopy text='16702594010'>
              <div className='px-4'>농협 123-456-789</div>
              <div className='px-4'>이해자</div>
            </ToastCopy>
          </div>
          <div className='w-full py-4'>
            <ToastCopy text='52604454301019'>
              <div className='px-4'>농협 123-456-789</div>
              <div className='px-4'>이봉균</div>
            </ToastCopy>
          </div>
        </div>
      )}
    </>
  )
}
