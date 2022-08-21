import React, {FunctionComponent} from 'react'
import Image from 'next/image'
import {subpath} from "../constant";

export const Calendar: FunctionComponent = () => <Image src={`${subpath}/calendar.jpg`} width={400} height={400}/>
