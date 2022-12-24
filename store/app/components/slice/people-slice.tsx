import type { PropsWithSerializeFrom } from "~/utils/type";
import type { PeopleFragment } from "~/contentful/generated";
import type { FC, PropsWithChildren, SVGAttributes } from "react";
import classNames from "classnames";
import { typedBoolean } from "~/utils";
import { SliceContainer } from "~/components/slice/slice-container";
import type { Slice } from "~/components/slice/slices-resolve";
import { useSliceCtx } from "~/components/slice/slices-resolve";
import { GithubIcon } from "~/components/icon/github";
import { MailIcon } from "~/components/icon/mail";
import { PhoneIcon } from "~/components/icon/phone";
import Rich from "~/components/atom/rich";
import { Heading } from "~/components/atom/heading";

const map: Record<
  string,
  FC<PropsWithChildren<SVGAttributes<SVGElement> & { className?: string }>>
> = {
  github: GithubIcon,
  email: MailIcon,
  phone: PhoneIcon,
};
const SocialLink = ({
  className,
  href,
  children,
  Icon,
}: PropsWithChildren<{
  className?: string;
  href: string;
  Icon?: FC<
    PropsWithChildren<SVGAttributes<SVGElement> & { className?: string }>
  >;
}>) => {
  return (
    <li className={classNames(className, "flex mt-4")}>
      <a
        target="_blank"
        href={href}
        className="group flex items-center text-xs font-medium transition text-zinc-200 hover:text-orange-500"
        rel="noreferrer"
      >
        {Icon ? (
          <Icon
            width={36}
            height={36}
            className="h-6 w-6 flex-none zinc-500 transition group-hover:orange-500"
          />
        ) : (
          <span className="h-6 w-6 block"></span>
        )}
        <span className="ml-4">{children}</span>
      </a>
    </li>
  );
};
export const PeopleSlice = ({
  slice,
  index,
}: PropsWithSerializeFrom<{
  slice: PeopleFragment;
  slices: Slice[];
  index: number;
}>) => {
  const { peopleSliceLayout } = useSliceCtx();
  const isRight = peopleSliceLayout[index] === "right";
  return (
    <SliceContainer
      spacing={slice.sliceSpacing}
      className={classNames("flex flex-wrap md:-mx-2", {
        "flex-row-reverse": !isRight,
      })}
    >
      <div className="w-full md:w-1/2 md:px-2">
        <div className="flex flex-wrap -mx-2 mx-0 items-start">
          <div className="w-1/3 md:w-full px-2 md:px-0">
            <div className="md:px-5">
              <img
                loading="lazy"
                src={slice.avatar?.url || ""}
                alt={slice.avatar?.title || slice.name || ""}
                className={classNames(
                  "aspect-square rounded-2xl bg-zinc-100 object-cover bg-zinc-800 md:rotate-3 w-full h-full",
                  isRight ? "md:-rotate-3" : ""
                )}
              />
            </div>
          </div>
          <div
            className={classNames(
              isRight ? "md:justify-end" : "",
              "w-2/3 md:w-full px-4 md:px-0 flex"
            )}
          >
            <ul className="md:mt-8 md:px-5 -mt-4">
              {slice.socialCollection?.items.filter(typedBoolean).map((i) => {
                const Icon = i.type ? map[i.type] : undefined;
                return (
                  <SocialLink href={i.link || ""} key={i.sys.id} Icon={Icon}>
                    {i.label}
                  </SocialLink>
                );
              })}
            </ul>
          </div>
        </div>
      </div>

      <div className="w-full md:w-1/2 md:px-2">
        <div className="mt-6 md:mt-0 text-base text-zinc-400 flex-wrap flex">
          <Heading className="w-auto md:w-full" lv={1}>
            {slice.title}
          </Heading>
          {slice.job && (
            <Heading
              className="w-auto md:w-full mt-4 pl-2 md:pl-0 italic"
              lv={5}
            >
              {slice.job}
            </Heading>
          )}
          <Rich
            className="mt-8 w-full"
            json={slice.description?.json}
            onlyParagraph
          />
        </div>
      </div>
    </SliceContainer>
  );
};
