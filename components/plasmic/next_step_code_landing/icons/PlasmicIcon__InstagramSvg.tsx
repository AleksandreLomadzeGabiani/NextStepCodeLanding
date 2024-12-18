// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type InstagramSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function InstagramSvgIcon(props: InstagramSvgIconProps) {
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
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M22.172 4H11.538c-3.67 0-6.647 2.985-6.647 6.667v10.666c0 3.682 2.976 6.667 6.647 6.667h10.634c3.671 0 6.647-2.985 6.647-6.667V10.667C28.82 6.985 25.843 4 22.173 4zm4.32 17.333a4.34 4.34 0 01-4.32 4.334H11.538a4.34 4.34 0 01-4.32-4.334V10.667a4.34 4.34 0 014.32-4.334h10.634a4.34 4.34 0 014.32 4.334v10.666zM23.17 11c.735 0 1.33-.597 1.33-1.333 0-.737-.595-1.334-1.33-1.334-.734 0-1.329.597-1.329 1.334 0 .736.595 1.333 1.33 1.333zm-6.314-1c-3.303 0-5.982 2.686-5.982 6s2.679 6 5.982 6c3.304 0 5.982-2.686 5.982-6a5.996 5.996 0 00-1.748-4.247A5.96 5.96 0 0016.855 10zM13.2 16a3.661 3.661 0 003.655 3.667A3.661 3.661 0 0020.511 16a3.661 3.661 0 00-3.656-3.667A3.661 3.661 0 0013.2 16z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default InstagramSvgIcon;
/* prettier-ignore-end */
