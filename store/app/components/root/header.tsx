import { Popover, Transition } from "@headlessui/react";

import { Container } from "~/components/atom/container";
import type { PropsWithChildren } from "react";
import { Fragment } from "react";
import { PageNavLink } from "~/components/atom/page-link";
import type { PageFragment } from "~/contentful/generated";
import { useGlobal } from "~/hooks/context/useGlobal";
import { typedBoolean } from "~/utils";
import type { PropsWithSerializeFrom } from "~/utils/type";
import { useLocale } from "~/hooks/context/useLocale";

const CloseIcon = (props: PropsWithChildren<{ className: string }>) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
    <path
      d="m17.25 6.75-10.5 10.5M6.75 6.75l10.5 10.5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ChevronDownIcon = (props: PropsWithChildren<{ className: string }>) => (
  <svg viewBox="0 0 8 6" aria-hidden="true" {...props}>
    <path
      d="M1.75 1.75 4 4.25l2.25-2.5"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const MobileNavItem = ({
  page,
  close,
}: PropsWithSerializeFrom<{ page: PageFragment }, { close: () => void }>) => (
  <li className="py-2">
    <PageNavLink page={page} onclick={() => close()} />
  </li>
);

const MobileNavigation = (props: PropsWithChildren<{ className: string }>) => {
  const {
    global: { headerMenuCollection },
  } = useGlobal();
  const { t } = useLocale();
  return (
    <Popover {...props}>
      <Popover.Button className="group flex items-center rounded-full px-4 py-2 text-sm font-medium shadow-lg shadow-zinc-800/5 ring-1 backdrop-blur bg-zinc-800/90 ring-white/10 hover:ring-white/20">
        {t("Menu")}
        <ChevronDownIcon className="ml-3 h-auto w-2 stroke-zinc-500 group-hover:stroke-zinc-400" />
      </Popover.Button>
      <Transition.Root>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="duration-150 ease-in"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Popover.Overlay className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm" />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-150 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="fixed inset-x-4 top-8 z-50 origin-top rounded-3xl p-8 ring-1 bg-zinc-900 ring-zinc-800"
          >
            {({ close }) => (
              <>
                <div className="flex flex-row-reverse items-center justify-between">
                  <button
                    onClick={() => close()}
                    aria-label="Close menu"
                    className="-m-1 p-1"
                  >
                    <CloseIcon className="h-6 w-6 text-zinc-400" />
                  </button>
                  <h2 className="text-sm font-medium text-zinc-400">
                    {t("Navigation")}
                  </h2>
                </div>
                <nav className="mt-6">
                  <ul className="-my-2 divide-y text-base divide-zinc-100/5 text-zinc-300">
                    {headerMenuCollection?.items
                      ?.filter(typedBoolean)
                      .map((page) => (
                        <MobileNavItem
                          page={page}
                          close={close}
                          key={page.slug}
                        />
                      ))}
                  </ul>
                </nav>
              </>
            )}
          </Popover.Panel>
        </Transition.Child>
      </Transition.Root>
    </Popover>
  );
};

const NavItem = ({ page }: PropsWithSerializeFrom<{ page: PageFragment }>) => {
  return (
    <li className="relative block px-3 py-2 transition">
      <PageNavLink page={page}>
        {({ isActive }) => (
          <>
            {isActive && (
              <span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-orange-400/0 via-orange-400/40 to-orange-400/0" />
            )}
          </>
        )}
      </PageNavLink>
    </li>
  );
};

const DesktopNavigation = (props: PropsWithChildren<{ className: string }>) => {
  const {
    global: { headerMenuCollection, seo },
  } = useGlobal();
  return (
    <nav {...props}>
      <div className="flex items-center rounded-full px-3 text-sm font-medium shadow-lg shadow-zinc-800/5 ring-1 backdrop-blur bg-zinc-800/90 ring-white/10">
        {seo?.title && <div className="mx-4 text-orange-400">{seo.title}</div>}
        <ul className="flex">
          {headerMenuCollection?.items?.filter(typedBoolean).map((page) => (
            <NavItem page={page} key={page.slug} />
          ))}
        </ul>
      </div>
    </nav>
  );
};

export function Header() {
  return (
    <>
      <header className="pointer-events-none relative z-50 flex flex-col">
        <div className="top-0 z-10 h-16 pt-6">
          <Container className="w-full">
            <div className="relative flex gap-4">
              <div className="flex flex-1 justify-end md:justify-center">
                <MobileNavigation className="pointer-events-auto md:hidden" />
                <DesktopNavigation className="pointer-events-auto hidden md:block" />
              </div>
            </div>
          </Container>
        </div>
      </header>
    </>
  );
}
