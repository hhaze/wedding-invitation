import {FunctionComponent, PropsWithChildren} from "react";
import {ToastCopy} from "./ToastCopy";
import {Border2} from "./Border2";

export const ColoredToastCopy: FunctionComponent<Props> = (props) => {
  return (
    <ToastCopy text={props.text} category={props.category}>
      <Border2>
        {props.children}
      </Border2>
    </ToastCopy>
  )
}

type Props = PropsWithChildren<{
  text: string
  category: string
}>
