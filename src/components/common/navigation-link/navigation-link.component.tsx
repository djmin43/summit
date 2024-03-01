import React, { ReactNode } from "react";
import Link from "next/link";
import { LinkProps } from "next/dist/client/link";

export type NavigationLinkProps = {
  children: ReactNode;
  props?: LinkProps;
  href: string;
};

export const NavigationLink = ({
  href,
  children,
  ...props
}: NavigationLinkProps) => {
  return (
    <Link href={href} {...props}>
      {children}
    </Link>
  );
};
