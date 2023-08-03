import { clsxm } from "@/utils";
import React from "react";

interface Skeleton extends React.HTMLAttributes<HTMLDivElement> {}

const skeleton = ({ className, ...props }: Skeleton) => {
  return (
    <div className={clsxm("animate-pulse bg-gray-300", className)} {...props} />
  );
};

export default skeleton;
