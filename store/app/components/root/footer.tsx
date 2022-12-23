import { Container } from "~/components/atom/container";
import { useGlobal } from "~/hooks/context/useGlobal";
import { typedBoolean } from "~/utils";
import { PageLink } from "~/components/atom/page-link";

export const Footer = () => {
  const {
    global: { footerMenuCollection },
  } = useGlobal();
  return (
    <footer className="mt-32">
      <Container.Outer>
        <div className="border-t border-zinc-700/40 pt-10 pb-16">
          <Container.Inner>
            <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
              <div className="flex gap-6 text-sm font-medium">
                {footerMenuCollection?.items
                  ?.filter(typedBoolean)
                  .map((page) => (
                    <PageLink page={page} key={page.slug} />
                  ))}
              </div>
              <p className="text-sm text-zinc-500">
                &copy; {new Date().getFullYear()} Spencer Sharp. All rights
                reserved.
              </p>
            </div>
          </Container.Inner>
        </div>
      </Container.Outer>
    </footer>
  );
};
