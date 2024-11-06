import Image from "next/image";

export default function Img({
  className,
  src,
  style,
  alt,
  action,
  placeholder,
}) {
  return !placeholder ? (
    <Image
      sizes="100%"
      width={1080}
      height={1080}
      onClick={action}
      alt={alt}
      src={src}
      style={style}
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
