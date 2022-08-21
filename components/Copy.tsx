import {FunctionComponent, PropsWithChildren} from 'react'
import copy from 'copy-to-clipboard'

export const Copy: FunctionComponent<Props> = (props) => {
  const {text, onCopy, category, children} = props
  const click = () => {
    copy(text)

    if (onCopy) {
      onCopy(`${category}(${text})가 복사되었습니다.`)
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
  category: string
}>
