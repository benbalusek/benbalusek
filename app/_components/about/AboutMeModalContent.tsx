"use client";

import ImageCarouselArrows from "@/app/_components/ui/ImageCarouselArrows";
import Modal from "@/app/_components/ui/Modal";
import { useImageCarousel } from "@/app/_hooks/useImageCarousel";
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

  return (
    <Modal onClose={onClose} ariaLabel={image.alt} className="max-w-4xl">
      <div className="w-full relative">
        {/* Image Carousel Arrows */}
        <ImageCarouselArrows onPrev={prevImage} onNext={nextImage} />

        {/* Modal Image */}
        <Image
          src={imageList[currentIndex]}
          alt={image.alt}
          width={image.width}
          height={image.height}
          className="object-contain w-full max-h-[85vh] shadow"
          unoptimized
        />
      </div>
    </Modal>
  );
}

export default AboutMeModalContent;
