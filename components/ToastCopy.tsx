import {FunctionComponent, PropsWithChildren} from 'react'
import {Copy} from './Copy'
import {toast} from 'react-toastify'

export const ToastCopy: FunctionComponent<Props> = (props) => {
  return (
    <Copy text={props.text} onCopy={toast} category={props.category}>
      {props.children}
    </Copy>
  )
}

type Props = PropsWithChildren<{
  text: string
  category: string
}>
