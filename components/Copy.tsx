import {FunctionComponent, PropsWithChildren} from "react";
import copy from 'copy-to-clipboard'

export const Copy: FunctionComponent<Props> = (props) => {
    const {text, onCopy, children} = props
    const click = () => {
        copy(text)
        if (onCopy) {
            onCopy(`복사됨: ${text}`)
        }
    }

    return (
        <div onClick={click} className="cursor-pointer">{children}</div>
    )
}

type Props = PropsWithChildren<{
    text: string
    onCopy?(text: string): void
}>