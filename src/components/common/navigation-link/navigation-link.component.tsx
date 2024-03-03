import React, { ReactNode } from "react";
import Link from "next/link";
import { LinkProps } from "next/dist/client/link";

export type NavigationLinkProps = LinkProps & {
  children: ReactNode;
  href: string;
  customClass?: string;
};

export const NavigationLink = ({
  href,
  children,
  customClass,
  ...props
}: NavigationLinkProps) => {
  return (
    <Link href={href} className={customClass} {...props}>
      {children}
    </Link>
  );
};
