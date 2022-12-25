import type {
  CommonSliceFragment,
  PeopleFragment,
} from "~/contentful/generated";
import type { PropsWithSerializeFrom } from "~/utils/type";
import { PeopleSlice } from "~/components/slice/people-slice";
import { createContext, useContext, useMemo } from "react";
import { IntroSlice } from "~/components/slice/intro-slice";
import { motion } from "framer-motion";

export type Slice = PeopleFragment | CommonSliceFragment;

export interface SliceState {
  peopleSliceLayout: ("left" | "right" | null)[];
}
export type SliceProps<T extends Slice = Slice> = PropsWithSerializeFrom<{
  slice: T;
  slices: Slice[];
  index: number;
}>;
const SliceCtx = createContext<SliceState>({
  peopleSliceLayout: [],
});
export const useSliceCtx = () => useContext(SliceCtx);
export const SliceResolve = ({ slice, slices, index }: SliceProps) => {
  switch (slice.__typename) {
    case "People":
      return <PeopleSlice slice={slice} slices={slices} index={index} />;
    case "CommonSlice":
      switch (slice.type) {
        case "introduction":
          return <IntroSlice slice={slice} slices={slices} index={index} />;
      }
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
          <motion.div
            key={index}
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              delay: index * 0.5,
              type: "spring",
              bounce: 0.4,
              duration: 0.8,
            }}
          >
            <SliceResolve slices={slices} slice={slice} index={index} />
          </motion.div>
        ))}
      </div>
    </SliceCtx.Provider>
  );
};
