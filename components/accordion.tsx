import React, {FunctionComponent, useState} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAngleDown, faAngleUp} from '@fortawesome/free-solid-svg-icons'
import {ToastCopy} from "./ToastCopy";

export const Accordion: FunctionComponent = () => {
  const [groomShow, setGroomShow] = useState(false)
  const [brideShow, setBrideShow] = useState(false)
  const handleGroomOpen = () => setGroomShow(!groomShow)
  const handleBrideOpen = () => setBrideShow(!brideShow)

  return (
    <>
      <div className='groom-header' onClick={handleGroomOpen}>
        <div className='w-full rounded-lg bg-rose-200 px-8 py-4'>
          <button>신랑측 계좌번호</button>
          <span className='pl-4'>
            {groomShow
              ? <FontAwesomeIcon icon={faAngleDown}/>
              : <FontAwesomeIcon icon={faAngleUp}/>
            }
          </span>
        </div>
      </div>
      {groomShow && (
        <div className=''>
          <ToastCopy text="0000-0004">신랑 아버지 123-456-789</ToastCopy>
          <ToastCopy text="0000-0005">신랑 어머니 123-456-789</ToastCopy>
          <ToastCopy text="0000-0006">신랑 123-456-789</ToastCopy>
        </div>
      )}
      <div className='bride-header pt-2' onClick={handleBrideOpen}>
        <div className='w-full rounded-lg bg-rose-200 px-8 py-4'>
          <button>신부측 계좌번호</button>
          <span className='pl-4'>
            {brideShow
              ? <FontAwesomeIcon icon={faAngleDown}/>
              : <FontAwesomeIcon icon={faAngleUp}/>
            }
          </span>
        </div>
      </div>
      {brideShow && (
        <div className=''>
          <ToastCopy text="0000-0001">신부 아버지 123-456-789</ToastCopy>
          <ToastCopy text="0000-0002">신부 어머니 123-456-789</ToastCopy>
          <ToastCopy text="0000-0003">신부 123-456-789</ToastCopy>
        </div>
      )}
    </>
  )
}