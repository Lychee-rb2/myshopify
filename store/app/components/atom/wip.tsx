import { useLocale } from "~/hooks/context/useLocale";

export const Wip = () => {
  const { t } = useLocale();
  return (
    <div className="relative block w-full rounded-lg border-2 border-dashed border-gray-300 p-12 text-center hover:border-orange-400 ">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1"
        stroke="currentColor"
        className="mx-auto h-12 w-12 text-gray-400 animate-spin"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
        />
      </svg>
      <span className="mt-2 block text-lg font-medium text-orange-400">
        {t("Working in progress")}
      </span>
    </div>
  );
};
