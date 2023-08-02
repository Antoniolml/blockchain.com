import { clsxm } from "@/utils";
import React from "react";

interface Callout extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

const Callout = ({ className, children, ...props }: Callout) => {
  return (
    <div
      className={clsxm(
        "my-4 inline-block rounded-md border border-l-4 border-slate-400 bg-slate-900 p-4"
      )}
      {...props}
    >
      <div className={clsxm("m-0 text-lg", className)}>{children}</div>
    </div>
  );
};

export default Callout;
