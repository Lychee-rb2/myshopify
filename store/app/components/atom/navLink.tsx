import type { PropsWithChildren } from "react";
import * as React from "react";
import type { Nullable } from "~/utils/type";
import { Link as RemixLink } from "@remix-run/react";
import classNames from "classnames";

export const Link = ({
  href,
  children,
  className,
  ...props
}: PropsWithChildren<
  {
    href: Nullable<string>;
    className?: string;
  } & React.AnchorHTMLAttributes<HTMLAnchorElement>
>) => {
  return href ? (
    <RemixLink
      to={href}
      className={classNames("transition hover:text-orange-400", className)}
      {...props}
    >
      {children}
    </RemixLink>
  ) : (
    <span className={className}>{children}</span>
  );
};
