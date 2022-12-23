import type { PropsWithChildren } from "react";
import { createElement } from "react";
import classNames from "classnames";

const map = {
  1: "text-4xl md:text-5xl",
  2: "text-2xl md:text-3xl",
  3: "text-xl md:text-2xl",
  4: "text-lg md:text-xl",
  5: "text-base md:text-lg",
  6: "text-md md:text-base",
} as const;

export const Heading = ({
  as,
  lv,
  className,
  children,
}: PropsWithChildren<{
  className?: string;
  as?: string;
  lv: 1 | 2 | 3 | 4 | 5 | 6;
}>) => {
  const _className = classNames(
    map[lv],
    "font-bold tracking-tight text-zinc-100",
    className
  );
  const el = as || `h${lv}`;
  return createElement(el, { className: _className }, children);
};
