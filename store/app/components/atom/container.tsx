import type { PropsWithChildren } from "react";
import classNames from "classnames";
import { Wip } from "~/components/atom/wip";
import { motion } from "framer-motion";

const OuterContainer = ({
  className,
  children,
  ...props
}: PropsWithChildren<{ className?: string }>) => (
  <div className={classNames("sm:px-8", className)} {...props}>
    <div className="mx-auto max-w-7xl lg:px-8">{children}</div>
  </div>
);

const InnerContainer = ({ children }: PropsWithChildren) => (
  <div className="relative px-4 sm:px-8 lg:px-12">
    <div className="mx-auto max-w-2xl lg:max-w-5xl">{children}</div>
  </div>
);

export const Container = ({
  children,
  ...props
}: PropsWithChildren<{
  className?: string;
}>) => (
  <OuterContainer {...props}>
    <InnerContainer>{children}</InnerContainer>
  </OuterContainer>
);
export const PageContainer = ({
  className,
  ...props
}: PropsWithChildren<{
  className?: string;
}>) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.5 }}
    >
      <Container
        className={classNames(className, "relative z-1 mt-8 sm:mt-16")}
        {...props}
      />
    </motion.div>
  );
};
export const WipContainer = ({
  className,
  ...props
}: PropsWithChildren<{
  className?: string;
}>) => (
  <Container className={classNames(className, "mt-10")} {...props}>
    <Wip />
  </Container>
);
Container.Outer = OuterContainer;
Container.Inner = InnerContainer;
Container.Page = PageContainer;
Container.Wip = WipContainer;
