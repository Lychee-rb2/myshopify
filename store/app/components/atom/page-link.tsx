import type { PropsWithoutRef } from "react";
import type { RemixNavLinkProps } from "@remix-run/react/dist/components";
import { Link, NavLink } from "@remix-run/react/dist/components";
import type { PageFragment } from "~/contentful/generated";
import { pageResolve } from "~/contentful/resolve";
import classNames from "classnames";
import type { SerializeFrom } from "@remix-run/server-runtime";
import type { PropsWithSerializeFrom } from "~/utils/type";

export const PageLink = ({
  page,
  children,
}: PropsWithSerializeFrom<{ page: PageFragment }>) => {
  const href = pageResolve(page);
  return href ? (
    <Link to={href} className="transition hover:text-orange-400">
      {page.title}
      {children}
    </Link>
  ) : (
    <span>
      {page.title}
      {children}
    </span>
  );
};

export const PageNavLink = ({
  page,
  children,
  onclick,
}: PropsWithoutRef<{
  page: SerializeFrom<PageFragment>;
  children?: RemixNavLinkProps["children"];
  onclick?: RemixNavLinkProps["onClick"];
}>) => {
  const href = pageResolve(page);
  return href ? (
    <NavLink
      to={href}
      onClick={onclick}
      className={({ isActive }) =>
        classNames(
          isActive ? "text-orange-400" : "hover:text-orange-400",
          "transition hover:text-orange-400"
        )
      }
    >
      {(props) => (
        <>
          {page.title}
          {typeof children === "function" ? children(props) : children}
        </>
      )}
    </NavLink>
  ) : (
    <span>
      <>
        {page.title}
        {typeof children === "function"
          ? children({ isActive: false, isPending: false })
          : children}
      </>
    </span>
  );
};
