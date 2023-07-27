import { clsxm } from "@/utils";
import React, { HTMLAttributes, ReactNode } from "react";

interface H1headingProps extends HTMLAttributes<HTMLHeadingElement> {
  children: ReactNode;
  className?: string;
}

export const H1Heading = ({
  className,
  children,
  ...props
}: H1headingProps) => {
  return (
    <h1
      className={clsxm(
        "text-4xl font-bold tracking-normal md:text-7xl lg:text-8xl",
        className
      )}
      {...props}
    >
      {children}
    </h1>
  );
};
