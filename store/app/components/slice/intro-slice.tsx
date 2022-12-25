import type { SliceProps } from "~/components/slice/slices-resolve";
import type { CommonSliceFragment } from "~/contentful/generated";
import { Heading } from "~/components/atom/heading";
import Rich from "../atom/rich";
import { SliceContainer } from "./slice-container";

export const IntroSlice = ({ slice }: SliceProps<CommonSliceFragment>) => {
  const image = slice.imageCollection?.items[0];
  const we =
    slice.referenceCollection?.items
      .filter((i) => i?.__typename === "People")
      .map((i) => ({ src: i?.avatar?.url || "", alt: i?.name || "" }))
      .filter((i) => i.src) || [];
  return (
    <SliceContainer
      spacing={slice.sliceSpacing}
      className="flex flex-wrap lg:-mx-4"
    >
      {we && (
        <div className="w-full lg:px-4 mb-8">
          <ul className="flex space-x-8">
            {we.map((i) => (
              <li key={i.alt}>
                <img
                  src={i.src}
                  alt={i.alt}
                  className="h-16 w-16 rounded-full"
                />
              </li>
            ))}
          </ul>
        </div>
      )}
      <div className="w-full lg:px-4">
        <Heading lv={1} className="text-zinc-100">
          {slice.title}
        </Heading>
      </div>

      <div className="lg:px-4 lg:w-8/12 mt-8 lg:mt-0">
        <Rich
          className="mt-6 w-full"
          json={slice.description?.json}
          onlyParagraph
        />
      </div>
      <div className="lg:px-4 lg:w-4/12 lg:mt-0 mt-8">
        {image && (
          <img
            className="rounded-2xl"
            src={image.url || ""}
            alt={image.title || slice.title || ""}
          />
        )}
      </div>
    </SliceContainer>
  );
};
