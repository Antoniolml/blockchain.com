import { clsxm } from "@/utils";
import Link, { LinkProps } from "next/link";
import React from "react";

export type ALink = {
  href: string;
  showIcon?: boolean;
  dottedLine?: boolean;
  animatedUnderline?: boolean;
  children?: React.ReactNode;
} & Omit<LinkProps, "href"> &
  React.HTMLAttributes<HTMLElement>;

const Alinks = ({
  showIcon = false,
  dottedLine = false,
  animatedUnderline = false,
  className,
  children,
  href,
  ...props
}: ALink) => {
  const isInternalLink =
    (href && href.startsWith("/")) || (href && href.startsWith("#"));
  if (isInternalLink) {
    return (
      <Link
        href={href}
        className={clsxm(
          dottedLine &&
            "border-b border-dotted border-white hover:border-white/0",
          animatedUnderline && "animated-underline",
          className
        )}
      >
        {children}
      </Link>
    );
  }
  return (
    <Link
      target="_blank"
      rel="noopener noreferrer"
      href={href}
      className={clsxm(
        dottedLine &&
          "border-b border-dotted border-white hover:border-white/0",
        showIcon && "after:ml-2 after:content-['_↗']",
        animatedUnderline && "animated-underline",
        className
      )}
      {...props}
    >
      {children}
    </Link>
  );
};

export default Alinks;
