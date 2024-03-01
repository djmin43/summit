import React, { ReactNode } from "react";
import Link from "next/link";
import { LinkProps } from "next/dist/client/link";

export type NavigationLinkComponentProps = {
  children: ReactNode;
  props: LinkProps;
};

export const NavigationLinkComponent = ({
  children,
  props,
}: NavigationLinkComponentProps) => {
  return <Link {...props}>{children}</Link>;
};
