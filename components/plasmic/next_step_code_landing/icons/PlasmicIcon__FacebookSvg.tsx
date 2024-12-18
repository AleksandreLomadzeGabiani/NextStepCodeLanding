// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type FacebookSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function FacebookSvgIcon(props: FacebookSvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 32 32"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M21.934 8h-3.988c-.734 0-1.33.597-1.33 1.333v4h5.318a.465.465 0 01.452.614l-.984 2.933a.665.665 0 01-.625.453h-4.16v10a.666.666 0 01-.665.667h-3.323a.666.666 0 01-.665-.667v-10H9.97a.666.666 0 01-.665-.666V14c0-.368.298-.667.665-.667h1.994v-4C11.964 6.388 14.344 4 17.28 4h4.653c.367 0 .664.298.664.667v2.666a.666.666 0 01-.664.667z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default FacebookSvgIcon;
/* prettier-ignore-end */
