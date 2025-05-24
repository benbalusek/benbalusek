"use client";

import ExternalLink from "@/app/_components/ui/ExternalLink";
import ImageCarouselArrows from "@/app/_components/ui/ImageCarouselArrows";
import Modal from "@/app/_components/ui/Modal";
import ModalImage from "@/app/_components/ui/ModalImage";
import OverlayHint from "@/app/_components/ui/OverlayHint";
import ToggleableOverlay from "@/app/_components/ui/ToggleableOverlay";
import { useImageCarousel } from "@/app/_hooks/useImageCarousel";
import type { WebDev } from "@/app/_lib/webDevData";
import { useState } from "react";

type WebDevModalProps = {
  website: WebDev;
  onClose: () => void;
};

function WebDevModalContent({ website, onClose }: WebDevModalProps) {
  const [showOverlay, setShowOverlay] = useState(false);
  const imageList = website.mediumSrcs;
  const { currentIndex, nextImage, prevImage } = useImageCarousel(
    imageList,
    onClose
  );

  return (
    <Modal
      onClose={onClose}
      ariaLabel={`${website.alt} project details`}
      className="max-h-[90vh] w-full max-w-6xl flex flex-col"
    >
      <ToggleableOverlay setShowOverlay={setShowOverlay}>
        {/* Show Overlay Hint and Image Carousel Arrows */}
        {!showOverlay && (
          <>
            <OverlayHint />
            <ImageCarouselArrows onPrev={prevImage} onNext={nextImage} />
          </>
        )}

        {/* Modal Image */}
        <ModalImage
          src={imageList[currentIndex]}
          alt={website.alt}
          width={1600}
          height={900}
          showOverlay={showOverlay}
        />

        {/* Show Overlay Details */}
        {showOverlay && (
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
            {/* Website Details */}
            <h2 className="text-xl xl:text-2xl font-bold mb-2">
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
