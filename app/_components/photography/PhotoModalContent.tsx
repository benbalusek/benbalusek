"use client";

import ExternalLink from "@/app/_components/ui/ExternalLink";
import Modal from "@/app/_components/ui/Modal";
import ModalImage from "@/app/_components/ui/ModalImage";
import OverlayHint from "@/app/_components/ui/OverlayHint";
import ToggleableOverlay from "@/app/_components/ui/ToggleableOverlay";
import type { Photo } from "@/app/_lib/photoData";
import Link from "next/link";
import { useState } from "react";

type PhotoModalProps = {
  image: Photo;
  onClose: () => void;
};

function PhotoModalContent({ image, onClose }: PhotoModalProps) {
  const [showOverlay, setShowOverlay] = useState(false);

  return (
    <Modal
      onClose={onClose}
      ariaLabel={`${image.title} photo details`}
      className="max-w-4xl"
    >
      <ToggleableOverlay setShowOverlay={setShowOverlay}>
        {/* Show Overlay Hint */}
        {!showOverlay && <OverlayHint />}

        {/* Modal Image */}
        <ModalImage
          src={image.mediumSrc}
          alt={`${image.title} in ${image.location}, ${image.state}`}
          width={image.width}
          height={image.height}
          className="w-full max-h-[85vh]"
          showOverlay={showOverlay}
        />

        {/* Show Overlay Details */}
        {showOverlay && (
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
            {/* Photo Details */}
            <h2 className="text-xl xl:text-2xl font-bold mb-2">
              {image.title}
            </h2>
            <p className="text-sm xl:text-base text-gray-700 mb-2">
              {image.location}, {image.state}
            </p>
            <p className="text-xs xl:text-sm italic text-gray-700 mb-8">
              {image.camera} on {image.film}
            </p>

            {/* Photography Links */}
            <div
              onClick={(e) => e.stopPropagation()}
              onKeyDown={(e) => e.stopPropagation()}
            >
              <ExternalLink
                href="https://www.instagram.com/sunandsilhouettes/"
                className="inline-block text-sm xl:text-base mb-1.5"
              >
                Instagram
              </ExternalLink>

              <p className="text-sm xl:text-base text-gray-600 italic">
                Interested in a print?{" "}
                <Link
                  href={`mailto:${process.env.NEXT_PUBLIC_EMAIL_TO}`}
                  className="underline text-blue-600"
                  aria-label="Get in touch by email"
                >
                  Get in touch
                </Link>
              </p>
            </div>
          </div>
        )}
      </ToggleableOverlay>
    </Modal>
  );
}

export default PhotoModalContent;
