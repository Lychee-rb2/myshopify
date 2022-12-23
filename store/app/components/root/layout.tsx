import type { PropsWithChildren } from "react";
import { Header } from "~/components/root/header";
import { Footer } from "~/components/root/footer";

export const navigation = [
  { name: "Dashboard", href: "#", current: true },
  { name: "Team", href: "#", current: false },
  { name: "Projects", href: "#", current: false },
  { name: "Calendar", href: "#", current: false },
  { name: "Reports", href: "#", current: false },
];
export { meta } from "~/server/meta";

export const Layout = ({ children }: PropsWithChildren) => {
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
    </>
  );
};
