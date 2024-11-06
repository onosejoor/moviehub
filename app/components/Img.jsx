import Image from "next/image";

export default function Img({ className, src, style, alt, action }) {
  return (
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
