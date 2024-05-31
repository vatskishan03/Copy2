import React from "react";

export type ImgProps = {
  className?: string;
  src?: string;
  alt?: string;
};

const Img: React.FC<ImgProps> = ({
  className,
  src = "defaultNoData.png",
  alt = "testImg",
  ...restProps
}) => {
  return <img className={className} src={src} alt={alt} {...restProps} loading="lazy" />;
};

export { Img };