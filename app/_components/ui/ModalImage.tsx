import Image from "next/image";

type ModalImageProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  showOverlay: boolean;
  className?: string;
};

function ModalImage({
  src,
  alt,
  width,
  height,
  showOverlay,
  className = "",
}: ModalImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={`object-contain shadow transition duration-300 hover:opacity-50 ${
        showOverlay ? "opacity-30 blur-sm" : ""
      } ${className}`}
      quality={80}
    />
  );
}

export default ModalImage;
