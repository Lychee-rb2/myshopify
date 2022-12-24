import type { PeopleFragment } from "~/contentful/generated";
import type { PropsWithSerializeFrom } from "~/utils/type";
import { PeopleSlice } from "~/components/slice/people-slice";
import { createContext, useContext, useMemo } from "react";

export type Slice = PeopleFragment;

export interface SliceState {
  peopleSliceLayout: ("left" | "right" | null)[];
}

const SliceCtx = createContext<SliceState>({
  peopleSliceLayout: [],
});
export const useSliceCtx = () => useContext(SliceCtx);
export const SliceResolve = ({
  slice,
  slices,
  index,
}: PropsWithSerializeFrom<{
  slice: Slice;
  slices: Slice[];
  index: number;
}>) => {
  switch (slice.__typename) {
    case "People":
      return <PeopleSlice slice={slice} slices={slices} index={index} />;
  }
  return null;
};
export const SlicesResolve = ({
  slices,
}: PropsWithSerializeFrom<{
  slices?: Slice[];
}>) => {
  const context = useMemo<SliceState>(() => {
    return {
      peopleSliceLayout:
        slices?.reduce<SliceState["peopleSliceLayout"]>(
          (pre, cur) => [
            ...pre,
            cur.__typename === "People"
              ? pre.at(-1) === "left"
                ? "right"
                : "left"
              : null,
          ],
          []
        ) || [],
    };
  }, [slices]);
  return (
    <SliceCtx.Provider value={context}>
      <div>
        {slices?.map((slice, index) => (
          <SliceResolve
            key={index}
            slices={slices}
            slice={slice}
            index={index}
          />
        ))}
      </div>
    </SliceCtx.Provider>
  );
};
