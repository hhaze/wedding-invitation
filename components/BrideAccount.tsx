import React, {FunctionComponent, useState} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAngleDown, faAngleUp} from '@fortawesome/free-solid-svg-icons'
import {ToastCopy} from './ToastCopy'

export const BrideAccount: FunctionComponent = () => {
  const [brideShow, setBrideShow] = useState(true)
  const handleBrideOpen = () => setBrideShow(!brideShow)

  return (
    <>
      <div onClick={handleBrideOpen}>
        <div className='w-full rounded-lg bg-rose-200 px-8 py-4'>
          <button>신부측 계좌번호</button>
          <span className='pl-4'>
            {brideShow
              ? <FontAwesomeIcon icon={faAngleUp}/>
              : <FontAwesomeIcon icon={faAngleDown}/>
            }
          </span>
        </div>
      </div>
      {brideShow && (
        <div className='text-left divide-y divide-rose-300'>
          <div className='w-full py-4'>
            <ToastCopy category='계좌번호' text='123456789'>
              <div className='px-4'>농협 123-456-789</div>
              <div className='px-4'>홍길동</div>
            </ToastCopy>
          </div>
          <div className='w-full py-4'>
            <ToastCopy category='계좌번호' text='123456789'>
              <div className='px-4'>농협 123-456-789</div>
              <div className='px-4'>홍길동</div>
            </ToastCopy>
          </div>
        </div>
      )}
    </>
  )
}
