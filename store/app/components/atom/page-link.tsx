import type { PropsWithoutRef } from "react";
import type { RemixNavLinkProps } from "@remix-run/react/dist/components";
import { Link, NavLink } from "@remix-run/react/dist/components";
import type { PageFragment } from "~/contentful/generated";
import { pageResolve } from "~/contentful/resolve";
import classNames from "classnames";
import type { SerializeFrom } from "@remix-run/server-runtime";
import type { PropsWithSerializeFrom } from "~/utils/type";
import { motion } from "framer-motion";

export const PageLink = ({
  page,
  children,
  className,
}: PropsWithSerializeFrom<{ page: PageFragment; className?: string }>) => {
  const href = pageResolve(page);
  return href ? (
    <Link
      to={href}
      className={classNames(className, "transition hover:text-orange-400")}
    >
      <motion.span
        className="inline-block"
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
      >
        {page.title}
        {children}
      </motion.span>
    </Link>
  ) : (
    <span className={className}>
      {page.title}
      {children}
    </span>
  );
};

export const PageNavLink = ({
  page,
  children,
  onclick,
  className,
}: PropsWithoutRef<{
  page: SerializeFrom<PageFragment>;
  children?: RemixNavLinkProps["children"];
  onclick?: RemixNavLinkProps["onClick"];
  className?: string;
}>) => {
  const href = pageResolve(page);
  return href ? (
    <NavLink
      to={href}
      onClick={onclick}
      className={({ isActive }) =>
        classNames(
          className,
          isActive ? "text-orange-400" : "hover:text-orange-400",
          "transition hover:text-orange-400"
        )
      }
    >
      {(props) => (
        <motion.span
          className="inline-block"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          {page.title}
          {typeof children === "function" ? children(props) : children}
        </motion.span>
      )}
    </NavLink>
  ) : (
    <span className={className}>
      <>
        {page.title}
        {typeof children === "function"
          ? children({ isActive: false, isPending: false })
          : children}
      </>
    </span>
  );
};
