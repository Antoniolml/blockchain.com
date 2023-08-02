import { clsxm } from "@/utils";
import { useMDXComponent } from "next-contentlayer/hooks";
import React from "react";
import Callout from "@/components/Callout";
import CodeTitle from "@/components/CodeTitle";
import Aimage from "@/components/Aimage";
import Alinks from "@/components/Alinks";
import Pre from "./Pre";

const components = {
  Callout,
  CodeTitle,
  Aimage,
  Alinks,
  a: ({ ...props }: React.HTMLAttributes<HTMLAnchorElement>) => (
    <a
      {...props}
      className="animated-underline border-b border-dotted border-white hover:border-white/0"
      {...props}
    />
  ),
  p: ({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p
      className={clsxm(
        "text-xl leading-7 [&:not(:first-child)]:mt-6",
        className
      )}
      {...props}
    />
  ),
  ul: ({ ...props }) => (
    <ul className="my-6 ml-6 list-outside list-disc text-xl" {...props} />
  ),
  ol: ({ ...props }) => (
    <ol className="my-6 ml-6 list-outside list-decimal text-xl" {...props} />
  ),
  li: ({ ...props }) => <li className="mt-2" {...props} />,
  blockquote: ({
    className,
    ...props
  }: React.BlockquoteHTMLAttributes<HTMLQuoteElement>) => (
    <blockquote
      className="mt-6 border-l-4 border-white pl-6 italic text-white [&>*]:text-zinc-600"
      {...props}
    />
  ),
  table: ({ ...props }: React.HTMLAttributes<HTMLTableElement>) => (
    <div className="my-6 min-w-full overflow-y-auto rounded-md">
      <table className="min-w-full divide-y divide-gray-400" {...props} />
    </div>
  ),
  tr: ({ ...props }: React.HTMLAttributes<HTMLTableRowElement>) => (
    <tr className="m-0 p-0 even:bg-white" {...props} />
  ),
  th: ({ ...props }) => (
    <th
      className="border border-gray-400 bg-white px-4 py-2 text-left font-semibold [&[align=center]]:text-center [&[align=right]]:text-right"
      {...props}
    />
  ),
  td: ({ ...props }) => (
    <td
      className="border border-gray-400 px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right"
      {...props}
    />
  ),

  pre: Pre,
};

interface MDXComponents {
  code: string;
}

const MDXComponents = ({ code }: MDXComponents) => {
  const Component = useMDXComponent(code);
  return <Component components={components} />;
};

export default MDXComponents;
