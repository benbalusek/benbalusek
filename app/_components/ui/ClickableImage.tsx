import Image, { StaticImageData } from "next/image";

type ClickableImageProps = {
  src: StaticImageData;
  alt: string;
  width: number;
  height: number;
  onClick: () => void;
  className?: string;
  tabIndex?: number;
  ariaLabel?: string;
};

function ClickableImage({
  src,
  alt,
  width,
  height,
  onClick,
  className = "",
  tabIndex = 0,
  ariaLabel,
}: ClickableImageProps) {
  return (
    <div
      role="button"
      tabIndex={tabIndex}
      aria-label={ariaLabel}
      className={`cursor-pointer w-full ${className}`}
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") onClick();
      }}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="w-full object-cover hover:opacity-60 shadow"
        placeholder="blur"
        quality={80}
      />
    </div>
  );
}

export default ClickableImage;
