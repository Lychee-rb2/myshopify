import type { PropsWithChildren } from "react";
import classNames from "classnames";

export const Paragraph = ({
  className,
  ...props
}: PropsWithChildren<{ className?: string }>) => (
  <p className={classNames(className, "leading-6 text-zinc-400")} {...props} />
);
