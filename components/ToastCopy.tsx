import {FunctionComponent, PropsWithChildren} from "react";
import {Copy} from "./Copy"
import {toast} from "react-toastify"

export const ToastCopy: FunctionComponent<Props> = (props) => {
    return (
        <Copy text="123-456-789" onCopy={toast}>신부 123-456-789</Copy>
    )
}

type Props = PropsWithChildren<{
    text: string
}>