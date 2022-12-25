import type { PropsWithChildren } from "react";
import { Header } from "~/components/root/header";
import { Footer } from "~/components/root/footer";
import { motion, useScroll, useSpring } from "framer-motion";

export const navigation = [
  { name: "Dashboard", href: "#", current: true },
  { name: "Team", href: "#", current: false },
  { name: "Projects", href: "#", current: false },
  { name: "Calendar", href: "#", current: false },
  { name: "Reports", href: "#", current: false },
];
export { meta } from "~/server/meta";

export const Layout = ({ children }: PropsWithChildren) => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
    duration: 5,
  });

  return (
    <>
      <div className="fixed inset-0 flex justify-center sm:px-8">
        <div className="flex w-full max-w-7xl lg:px-8">
          <div className="w-full bg-zinc-900 ring-1 ring-zinc-300/20" />
        </div>
      </div>
      <div className="relative">
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
      <motion.div
        className="fixed left-0 right-0 top-0 z-5 bg-pink-300 h-1"
        style={{ scaleX }}
      />
    </>
  );
};
