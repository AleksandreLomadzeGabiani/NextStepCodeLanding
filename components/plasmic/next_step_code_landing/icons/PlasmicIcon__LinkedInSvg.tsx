// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type LinkedInSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function LinkedInSvgIcon(props: LinkedInSvgIconProps) {
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
          "M7.357 4h18.61a2.663 2.663 0 012.66 2.667v18.666A2.663 2.663 0 0125.966 28H7.358A2.663 2.663 0 014.7 25.333V6.667A2.663 2.663 0 017.357 4zm3.988 20a.666.666 0 00.665-.667V14a.666.666 0 00-.665-.667H9.351a.666.666 0 00-.664.667v9.333c0 .369.297.667.664.667h1.994zm-.997-12a1.997 1.997 0 01-1.994-2c0-1.105.893-2 1.994-2 1.102 0 1.994.895 1.994 2s-.892 2-1.994 2zm13.626 12a.666.666 0 00.665-.667V17.2a4.13 4.13 0 00-3.616-4.187 3.984 3.984 0 00-3.696 1.787V14a.666.666 0 00-.664-.667h-1.994a.666.666 0 00-.665.667v9.333c0 .369.298.667.665.667h1.994a.666.666 0 00.664-.667v-5c0-1.104.893-2 1.994-2s1.994.896 1.994 2v5c0 .369.298.667.665.667h1.994z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default LinkedInSvgIcon;
/* prettier-ignore-end */
