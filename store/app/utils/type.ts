import type { SerializeFrom } from "@remix-run/server-runtime";
import type { PropsWithChildren } from "react";

export type Nullable<T> = T | null | undefined;
export type NullableObj<T extends Record<string, any>> = {
  [K in keyof T]: Nullable<T[K]>;
};

type PropsSerializeFrom<T extends Record<string, unknown>> = {
  [P in keyof T]: SerializeFrom<T[P]>;
};

export type PropsWithSerializeFrom<
  S extends Record<string, unknown>,
  T = {}
> = PropsWithChildren<T & PropsSerializeFrom<S>>;
