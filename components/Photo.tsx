import React, {FunctionComponent} from 'react'

export const Photo: FunctionComponent = () => {
  return (
    <div className='flex flex-col items-center'>
      <style jsx>
        {`
          img {
            max-width: 400px;
            width: 100%;
            height: auto;
          }
        `}
      </style>
      <img src='https://drive.google.com/uc?id=1FeSuSNF2ElA276t0VrE11D_850ikdplG'/>
      <img src='https://drive.google.com/uc?id=1lSGX2Hkrce-Fw9GJh6YvcB5qgzF5FH2y'/>
      <img src='https://drive.google.com/uc?id=1RmW4YRomn58S9wEZvReNkZr_ZwYkhfG6'/>
    </div>
  )
}
