import type { PeopleFragment } from "~/contentful/generated";
import type { PropsWithSerializeFrom } from "~/utils/type";
import { PeopleSlice } from "~/components/slice/people-slice";

export type Slice = PeopleFragment;
export const SliceResolve = ({
  slice,
  slices,
}: PropsWithSerializeFrom<{ slice: Slice; slices: Slice[] }>) => {
  switch (slice.__typename) {
    case "People":
      return <PeopleSlice slice={slice} slices={slices} />;
  }
  return null;
};
export const SlicesResolve = ({
  slices,
}: PropsWithSerializeFrom<{
  slices?: Slice[];
}>) => {
  return (
    <div>
      {slices?.map((slice, index) => (
        <SliceResolve key={index} slices={slices} slice={slice} />
      ))}
    </div>
  );
};
