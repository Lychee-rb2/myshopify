import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { renderPageOptions } from "~/contentful/render";
import type { PropsWithSerializeFrom } from "~/utils/type";
import type { Scalars } from "~/contentful/generated";
import classNames from "classnames";

const Rich = ({
  json,
  onlyParagraph,
  className,
}: PropsWithSerializeFrom<{
  json: Scalars["JSON"];
  onlyParagraph?: boolean;
  className?: string;
}>) => {
  if (!json) return null;
  return (
    <article className={classNames(className, "space-y-4 indent-8")}>
      {documentToReactComponents(json, renderPageOptions({ onlyParagraph }))}
    </article>
  );
};

export default Rich;
