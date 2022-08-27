import {FunctionComponent, PropsWithChildren} from "react";
import copy from 'copy-to-clipboard'

export const Copy: FunctionComponent<Props> = (props) => {
    const click = () => {
        copy(props.text)
    }

    return (
        <div onClick={click}>{props.children}</div>
    )
}

type Props = PropsWithChildren<{
    text: string
}>