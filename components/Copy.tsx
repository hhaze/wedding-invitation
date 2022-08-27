import {FunctionComponent, PropsWithChildren} from "react";
import copy from 'copy-to-clipboard'

export const Copy: FunctionComponent<Props> = (props) => {
  const {text, onCopy, children} = props
  const click = () => {
    copy(text)

    if (onCopy) {
      onCopy(`계좌번호(${text})가 복사되었습니다.`)
    }
  }

  return (
    <div onClick={click} className="cursor-pointer">
      {children}
    </div>
  )
}

type Props = PropsWithChildren<{
  text: string
  onCopy?(text: string): void
}>