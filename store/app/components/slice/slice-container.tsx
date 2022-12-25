import type { PropsWithChildren } from "react";
import classNames from "classnames";
import type { Slice } from "~/components/slice/slices-resolve";

const map: Record<string, string> = {
  Both: "my-10 md:my-20",
  Top: "mt-10 md:mt-20",
  Bottom: "mb-10 md:mb-20",
  None: "my-0 md:my-0",
};
export const SliceContainer = ({
  className,
  spacing,
  ...props
}: PropsWithChildren<{
  className: string;
  spacing: Slice["sliceSpacing"];
}>) => (
  <div
    className={classNames(map[spacing || "Both"] || map.Both, className)}
    {...props}
  />
);
