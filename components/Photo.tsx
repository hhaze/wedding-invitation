import React, {FunctionComponent} from "react";
import Image from "next/image";

export const Photo: FunctionComponent = () => {
  return (
    <div className='flex flex-col gap-1'>
      <Image
        src="https://images.unsplash.com/photo-1520854221256-17451cc331bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
        width={300}
        height={300}
      />
      <Image
        src="https://images.unsplash.com/photo-1520854221256-17451cc331bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
        width={300}
        height={300}
      />
      <Image
        src="https://images.unsplash.com/photo-1520854221256-17451cc331bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
        width={300}
        height={300}
      />
    </div>
  )
}
