import React from "react";
import Image from "next/image";

type PropsType = {
  src: string;
  description: string;
  width: number;
  height: number;
  caption?: string;
};

const ImageWithCaption = ({
  src,
  description,
  width,
  height,
  caption,
}: PropsType) => {
  return (
    <div>
      <figure>
        <Image
          src={src}
          alt={description}
          loading="lazy"
          width={width}
          height={height}
          className="mb-1 mx-auto"
        />
        <figcaption className="text-center palanquin-regular">
          {caption}
        </figcaption>
      </figure>
    </div>
  );
};

export default ImageWithCaption;
