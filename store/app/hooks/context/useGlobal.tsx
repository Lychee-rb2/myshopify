import type { Dispatch, SetStateAction } from "react";
import { createContext, useContext, useMemo, useState } from "react";
import type { GlobalFragment } from "~/contentful/generated";
import type { PropsWithSerializeFrom } from "~/utils/type";
import type { SerializeFrom } from "@remix-run/server-runtime";

interface GlobalState {
  global: SerializeFrom<GlobalFragment>;
  header: string;
  setHeader: Dispatch<SetStateAction<string>>;
}

const GlobalCtx = createContext<GlobalState>({
  global: {},
  header: "",
  setHeader: () => "",
});
export const GlobalProvider = ({
  global,
  children,
}: PropsWithSerializeFrom<{
  global: GlobalFragment;
}>) => {
  const [header, setHeader] = useState("");
  const value = useMemo(
    () => ({ global, header, setHeader }),
    [global, header]
  );

  return <GlobalCtx.Provider value={value}>{children}</GlobalCtx.Provider>;
};

export const useGlobal = () => useContext(GlobalCtx);
