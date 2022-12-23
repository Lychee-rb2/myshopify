import type { FC, PropsWithChildren } from "react";
import { createContext, useCallback, useContext, useMemo } from "react";
import type zhCN from "~/locales/zh-CN";

type LocaleMap = Partial<Record<keyof typeof zhCN, string>>;

export const LocaleCtx = createContext<{
  t: (key: keyof typeof zhCN, replace?: LocaleMap) => string;
  locale: LocaleMap;
}>({
  t: () => "",
  locale: {},
});

export const LocaleProvider: FC<
  PropsWithChildren<{
    locale: LocaleMap;
  }>
> = ({ children, locale }) => {
  const t = useCallback(
    (key: keyof typeof zhCN, replace: Record<string, string> = {}) => {
      if (!locale[key]) return `${key}`;
      return (
        locale[key]?.replace(/{([^}]+)}/g, (ori, k) => replace[k] || ori) ||
        `${key}`
      );
    },
    [locale]
  );
  const value = useMemo(() => ({ t, locale }), [locale, t]);
  return <LocaleCtx.Provider value={value}>{children}</LocaleCtx.Provider>;
};

export const useLocale = () => useContext(LocaleCtx);
