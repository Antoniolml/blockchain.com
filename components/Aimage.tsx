import { clsxm } from "@/utils";
import Image, { ImageProps } from "next/image";
import React from "react";

export interface Image extends ImageProps {
  blogImage?: boolean;
  caption?: string;
  captionClassName?: string;
}

const Aimage = ({
  src,
  alt,
  className,
  blogImage,
  caption,
  width,
  height,
  captionClassName,
  ...rest
}: Image) => {
  if (blogImage) {
    return (
      <figure>
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={clsxm(
            "h-auto w-full rounded-md object-cover object-center",
            className
          )}
        />
        <figcaption
          className={clsxm(
            "mx-auto mt-2 max-w-xl text-center text-base italic text-gray-600"
          )}
        >
          <span>{caption}</span>
        </figcaption>
      </figure>
    );
  }

  return (
    <Image
      className={clsxm("object-cover object-center", className)}
      src={src}
      alt={alt}
      width={width}
      height={height}
      {...rest}
    />
  );
};

export default Aimage;
