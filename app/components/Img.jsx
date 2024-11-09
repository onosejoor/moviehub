"use client";
import Image from "next/image";
import { useState } from "react";

export default function Img({
  className,
  src,
  style,
  alt,
  action,
  placeholder,
}) {
  const [fSrc, setFSrc] = useState(src);
  return !placeholder ? (
    <Image
      sizes="100%"
      width={1080}
      height={1080}
      onClick={action}
      alt={alt}
      src={fSrc}
      style={style}
      onError={() => {
        setFSrc("/placeholder.jpeg");
      }}
      quality={100}
      placeholder="blur"
      blurDataURL="/placeholder.jpeg"
      className={className}
      priority={true}
    />
  ) : (
    <Image
      sizes="100%"
      width={"10"}
      height={"10"}
      onClick={action}
      alt={alt}
      src={src}
      style={style}
      className={className}
      priority={true}
    />
  );
}
