import type { Options as RendererOptions } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES, MARKS } from "@contentful/rich-text-types";
import { Heading } from "~/components/atom/heading";
import { Paragraph } from "~/components/atom/paragraph";

export function renderPageOptions({
  onlyParagraph,
}: { onlyParagraph?: boolean } = {}): RendererOptions {
  return {
    renderMark: {
      [MARKS.BOLD]: (text) => <span className="font-bold">{text}</span>,
    },
    renderNode: {
      // other options...
      //TODO INLINES
      // [INLINES.ASSET_HYPERLINK]: (node, _children) => (
      //   <p className="bg-green">{_children}</p>
      // ),

      // External link ---- hyperlink
      [INLINES.HYPERLINK]: (node, _children) => (
        <span>
          <a
            className="underline"
            href={node.data.uri}
            target="_blank"
            rel="noreferrer"
          >
            {_children}
          </a>
        </span>
      ),
      [BLOCKS.DOCUMENT]: (node, _children) => {
        return <>{_children}</>;
      },
      [BLOCKS.HEADING_1]: (node, _children) => {
        return onlyParagraph ? (
          <Paragraph>{_children}</Paragraph>
        ) : (
          <Heading lv={1}>{_children}</Heading>
        );
      },
      [BLOCKS.HEADING_2]: (node, _children) => {
        return onlyParagraph ? (
          <Paragraph>{_children}</Paragraph>
        ) : (
          <Heading lv={2}>{_children}</Heading>
        );
      },
      [BLOCKS.HEADING_3]: (node, _children) => {
        return onlyParagraph ? (
          <Paragraph>{_children}</Paragraph>
        ) : (
          <Heading lv={3}>{_children}</Heading>
        );
      },
      [BLOCKS.HEADING_4]: (node, _children) => {
        return onlyParagraph ? (
          <Paragraph>{_children}</Paragraph>
        ) : (
          <Heading lv={4}>{_children}</Heading>
        );
      },
      [BLOCKS.HEADING_5]: (node, _children) => {
        return onlyParagraph ? (
          <Paragraph>{_children}</Paragraph>
        ) : (
          <Heading lv={5}>{_children}</Heading>
        );
      },
      [BLOCKS.HEADING_6]: (node, _children) => {
        return onlyParagraph ? (
          <Paragraph>{_children}</Paragraph>
        ) : (
          <Heading lv={6}>{_children}</Heading>
        );
      },
      [BLOCKS.PARAGRAPH]: (node, _children) => (
        <Paragraph>{_children}</Paragraph>
      ),
      [BLOCKS.HR]: () => <hr />,

      // TODO: QUOTE
      [BLOCKS.QUOTE]: (node, _children) => _children,
      [BLOCKS.OL_LIST]: (node, _children) => (
        <ol className="!list-decimal pl-5">{_children}</ol>
      ),
      [BLOCKS.UL_LIST]: (node, _children) => (
        <ul className="!list-disc pl-4">{_children}</ul>
      ),
      [BLOCKS.LIST_ITEM]: (node, _children) => <li>{_children}</li>,
    },
  };
}
