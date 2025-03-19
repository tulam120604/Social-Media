/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from "react-router-dom";

export default function No_data_component({ props }: any) {
  return (
    <div className="w-full h-full grid place-content-center">
      <div className="flex flex-col gap-2 items-center">
        {props?.icon && <props.icon />}
        {props?.span && <span>{props?.span}</span>}
        {props?.link && <Link to={props?.link?.path}>{props?.link?.name}</Link>}
      </div>
    </div>
  );
}
