"use client";

import ExternalLink from "@/app/_components/ui/ExternalLink";
import ImageCarouselArrows from "@/app/_components/ui/ImageCarouselArrows";
import Modal from "@/app/_components/ui/Modal";
import ModalImage from "@/app/_components/ui/ModalImage";
import OverlayHint from "@/app/_components/ui/OverlayHint";
import ToggleableOverlay from "@/app/_components/ui/ToggleableOverlay";
import { useImageCarousel } from "@/app/_hooks/useImageCarousel";
import {
  useMobileModalDimensions,
  useModalDimensions,
} from "@/app/_hooks/useModalDimensions";
import type { WebDev } from "@/app/_lib/webDevData";
import { useCallback, useEffect, useState } from "react";

type WebDevModalProps = {
  website: WebDev;
  onClose: () => void;
};

function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < breakpoint);
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [breakpoint]);
  return isMobile;
}

function WebDevModalContent({ website, onClose }: WebDevModalProps) {
  const [showOverlay, setShowOverlay] = useState(false);
  const imageList = website.mediumSrcs;
  const { setCurrentIndex, currentIndex, nextImage, prevImage } =
    useImageCarousel(imageList, onClose);

  const isMobile = useIsMobile();
  const isOdd = imageList.length % 2 === 1;

  // Prevent last image on carousel from being alone on mobile
  const handleNextImage = useCallback(() => {
    // Apply the “avoid lonely last image” rule only on mobile with odd count
    if (isMobile && isOdd) {
      const maxPairIndex = imageList.length - 2; // last full pair start
      if (currentIndex >= maxPairIndex) {
        setCurrentIndex(0);
        return;
      }
    }
    // Normal advance (works for 2 images too)
    if (currentIndex >= imageList.length - 1) setCurrentIndex(0);
    else nextImage();
  }, [
    isMobile,
    isOdd,
    currentIndex,
    imageList.length,
    nextImage,
    setCurrentIndex,
  ]);

  const handlePrevImage = useCallback(() => {
    if (isMobile && isOdd) {
      const maxPairIndex = imageList.length - 2;
      if (currentIndex === 0) {
        setCurrentIndex(maxPairIndex); // last full pair
        return;
      }
      prevImage();
      return;
    }
    // Normal prev
    if (currentIndex === 0) setCurrentIndex(imageList.length - 1);
    else prevImage();
  }, [
    isMobile,
    isOdd,
    currentIndex,
    imageList.length,
    prevImage,
    setCurrentIndex,
  ]);

  // Calculate container dimensions for modal
  const containerDimensions = useModalDimensions({
    imageWidth: 1600,
    imageHeight: 900,
    maxModalWidth: 1152,
  });

  // Calculate container dimensions for mobile modal
  const mobileContainerDimensions = useMobileModalDimensions({
    imageWidth: 1600,
    imageHeight: 900,
  });

  if (!containerDimensions || !mobileContainerDimensions) return null;

  return (
    <Modal
      onClose={onClose}
      ariaLabel={`${website.alt} project details`}
      className="max-w-6xl flex flex-col"
    >
      <ToggleableOverlay setShowOverlay={setShowOverlay}>
        {/* Show Overlay Hint and Image Carousel Arrows */}
        <div className="hidden md:block">
          {!showOverlay && (
            <ImageCarouselArrows
              onPrev={handlePrevImage}
              onNext={handleNextImage}
            />
          )}
        </div>

        {/* Desktop: One image */}
        <div
          className="relative group hidden md:block"
          style={{
            width: containerDimensions.width,
            height: containerDimensions.height,
            maxWidth: "100%",
            maxHeight: "85vh",
          }}
        >
          {!showOverlay && <OverlayHint />}
          <ModalImage
            key={currentIndex}
            src={imageList[currentIndex]}
            alt={website.alt}
            width={1600}
            height={900}
            showOverlay={showOverlay}
            className="w-full max-h-[85vh]"
          />
        </div>

        {/* Mobile: Two stacked images */}
        <div
          className="relative block md:hidden space-y-4 group"
          style={{
            width: mobileContainerDimensions.width,
            height: mobileContainerDimensions.height,
            maxWidth: "100%",
          }}
        >
          {!showOverlay && <OverlayHint />}
          <ModalImage
            key={`${currentIndex}-0`}
            src={imageList[currentIndex]}
            alt={website.alt}
            width={1600}
            height={900}
            showOverlay={showOverlay}
            className="w-full group-hover:opacity-50 transition duration-300"
          />
          {imageList[currentIndex + 1] && (
            <ModalImage
              key={`${currentIndex}-1`}
              src={imageList[currentIndex + 1]}
              alt={website.alt}
              width={1600}
              height={900}
              showOverlay={showOverlay}
              className="w-full group-hover:opacity-50 transition duration-300"
            />
          )}
        </div>

        {/* Show Overlay Details */}
        {showOverlay && (
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
            {/* Website Details */}
            <h2 className="text-lg sm:text-xl xl:text-2xl font-bold mb-2">
              {website.alt}
            </h2>
            <p className="text-sm xl:text-base text-gray-700 mb-8">
              {website.tech}
            </p>

            {/* Website Links */}
            <div
              onClick={(e) => e.stopPropagation()}
              onKeyDown={(e) => e.stopPropagation()}
              className="flex flex-wrap gap-3"
            >
              {website.websiteUrl && (
                <ExternalLink
                  href={website.websiteUrl}
                  className="text-sm xl:text-base"
                >
                  Live Site
                </ExternalLink>
              )}
              <ExternalLink
                href={website.gitHubUrl}
                className="text-sm xl:text-base"
              >
                GitHub
              </ExternalLink>
            </div>
          </div>
        )}
      </ToggleableOverlay>
    </Modal>
  );
}

export default WebDevModalContent;
