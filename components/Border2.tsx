import {FunctionComponent, PropsWithChildren} from "react";
import {ToastCopy} from "./ToastCopy";

export const Border2: FunctionComponent<Props> = (props) => {
  return (
    <div className="p-2 my-1 border border-black">
      {props.children}
    </div>
  )
}

type Props = PropsWithChildren<{
}>
