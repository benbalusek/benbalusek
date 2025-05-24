type ImageCarouselArrowProps = {
  onPrev: () => void;
  onNext: () => void;
};

function ImageCarouselArrows({ onPrev, onNext }: ImageCarouselArrowProps) {
  return (
    <>
      {/* Previous Image Button */}
      <div
        role="button"
        aria-label="Previous image"
        tabIndex={0}
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            e.stopPropagation();
            onPrev();
          }
        }}
        className="absolute left-0 top-0 h-full w-1/7 flex items-center justify-start hover:bg-black/10 hover:backdrop-blur-sm transition duration-200 cursor-pointer z-20"
      >
        <span className="text-white text-6xl px-6 select-none transition-all duration-300 hover:scale-105">
          ‹
        </span>
      </div>

      {/* Next Image Button */}
      <div
        role="button"
        aria-label="Next image"
        tabIndex={0}
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            e.stopPropagation();
            onNext();
          }
        }}
        className="absolute right-0 top-0 h-full w-1/7 flex items-center justify-end hover:bg-black/10 hover:backdrop-blur-sm transition duration-200 cursor-pointer z-20"
      >
        <span className="text-white text-6xl px-6 select-none transition-all duration-300 hover:scale-105">
          ›
        </span>
      </div>
    </>
  );
}

export default ImageCarouselArrows;
