import {FunctionComponent, PropsWithChildren} from "react";

export const Border2: FunctionComponent<Props> = (props) => {
  return (
    <div className="p-2 my-1 border border-black">
      {props.children}
    </div>
  )
}

type Props = PropsWithChildren<{
}>
