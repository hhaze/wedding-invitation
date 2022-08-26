import React, {FunctionComponent} from 'react'
import Image from 'next/image'

export const Photo: FunctionComponent = () => {
  return (
    <div className='flex flex-row py-4'>
      <Image
        src='https://images.unsplash.com/photo-1597172984973-fa1a221fe91d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2Fyb3VzZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60'
        width={300}
        height={300}
      />
      <Image
        src='https://images.unsplash.com/photo-1577774438656-768f1e5d9ed6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2Fyb3VzZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60'
        width={300}
        height={300}
      />
      <Image
        src='https://images.unsplash.com/photo-1605457867610-e990b192418e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2Fyb3VzZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60^'
        width={300}
        height={300}
      />
    </div>
  );
}