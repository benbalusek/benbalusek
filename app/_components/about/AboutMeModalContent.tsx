"use client";

import ImageCarouselArrows from "@/app/_components/ui/ImageCarouselArrows";
import Modal from "@/app/_components/ui/Modal";
import { useImageCarousel } from "@/app/_hooks/useImageCarousel";
import { useModalDimensions } from "@/app/_hooks/useModalDimensions";
import type { About } from "@/app/_lib/aboutData";
import Image from "next/image";

type AboutMeModalProps = {
  image: About;
  onClose: () => void;
};

function AboutMeModalContent({ image, onClose }: AboutMeModalProps) {
  const imageList = image.mediumSrcs;
  const { currentIndex, nextImage, prevImage } = useImageCarousel(
    imageList,
    onClose
  );

  // Calculate container dimensions for modal
  const containerDimensions = useModalDimensions({
    imageWidth: image.mediumWidth,
    imageHeight: image.mediumHeight,
  });

  if (!containerDimensions) return null;

  return (
    <Modal onClose={onClose} ariaLabel={image.alt} className="max-w-4xl">
      <div
        className="relative"
        style={{
          width: containerDimensions.width,
          height: containerDimensions.height,
          maxWidth: "100%",
          maxHeight: "85vh",
        }}
      >
        {/* Image Carousel Arrows */}
        <ImageCarouselArrows onPrev={prevImage} onNext={nextImage} />

        {/* Modal Image */}
        <Image
          key={currentIndex}
          src={imageList[currentIndex]}
          alt={image.alt}
          width={image.mediumWidth}
          height={image.mediumHeight}
          className="object-contain w-full max-h-[85vh] shadow cursor-pointer"
          placeholder="blur"
          loading="eager"
          quality={80}
          onClick={onClose}
        />
      </div>
    </Modal>
  );
}

export default AboutMeModalContent;
