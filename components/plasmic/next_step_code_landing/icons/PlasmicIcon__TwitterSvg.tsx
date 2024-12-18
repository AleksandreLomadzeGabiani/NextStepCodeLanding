// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type TwitterSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function TwitterSvgIcon(props: TwitterSvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 33 32"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M28.686 8.957a9.572 9.572 0 01-2.21 2.133v.66a14.65 14.65 0 01-4.331 10.43 14.547 14.547 0 01-10.446 4.218 14.578 14.578 0 01-6.51-1.51.3.3 0 01-.18-.276v-.131c0-.173.14-.312.311-.312a10.562 10.562 0 006.116-2.206 5.22 5.22 0 01-4.647-3.069.313.313 0 01.311-.431c.61.061 1.227.004 1.816-.168a5.22 5.22 0 01-4.122-4.567.31.31 0 01.43-.312 4.763 4.763 0 001.888.407 5.14 5.14 0 01-2.043-5.921.646.646 0 011.087-.216 14.744 14.744 0 0010.047 4.651 4.824 4.824 0 01-.144-1.199 5.226 5.226 0 013.31-4.778 5.196 5.196 0 015.662 1.254c.995-.19 1.957-.525 2.855-.995a.203.203 0 01.215 0 .205.205 0 010 .216 5.233 5.233 0 01-2.103 2.397 10.222 10.222 0 002.39-.575.19.19 0 01.214 0 .204.204 0 01.084.3z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default TwitterSvgIcon;
/* prettier-ignore-end */
