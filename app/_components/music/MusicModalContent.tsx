"use client";

import ExternalLink from "@/app/_components/ui/ExternalLink";
import Modal from "@/app/_components/ui/Modal";
import ModalImage from "@/app/_components/ui/ModalImage";
import OverlayHint from "@/app/_components/ui/OverlayHint";
import { Spinner } from "@/app/_components/ui/Spinner";
import ToggleableOverlay from "@/app/_components/ui/ToggleableOverlay";
import { useModalDimensions } from "@/app/_hooks/useModalDimensions";
import type { Music } from "@/app/_lib/musicData";
import { useState } from "react";

type MusicModalProps = {
  album: Music;
  onClose: () => void;
};

function MusicModalContent({ album, onClose }: MusicModalProps) {
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);

  // Calculate container dimensions for modal
  const containerDimensions = useModalDimensions({
    imageWidth: 1000,
    imageHeight: 1000,
    maxModalWidth: 672,
  });

  if (!containerDimensions) return null;

  return (
    <Modal
      onClose={onClose}
      ariaLabel={`${album.alt} album details`}
      className="max-w-2xl"
    >
      <div className="flex flex-col max-h-[90vh] w-full">
        <ToggleableOverlay
          setShowOverlay={setShowOverlay}
          className="mb-4 flex-1 overflow-hidden"
        >
          <div
            className="relative group mx-auto"
            style={{
              width: containerDimensions.width,
              height: containerDimensions.height,
              maxHeight: "90vh",
            }}
          >
            {/* Show Overlay Hint */}
            {!showOverlay && <OverlayHint />}
            {/* Modal Image */}
            <ModalImage
              key={album.mediumSrc.src}
              src={album.mediumSrc}
              alt={album.alt}
              width={1000}
              height={1000}
              showOverlay={showOverlay}
              className="w-full h-full"
            />
            {/* Show Overlay Details */}
            {showOverlay && (
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 my-4">
                {/* Album Details */}
                <h2 className="text-xl sm:text-2xl font-bold">
                  {album.songTitle}
                </h2>
                <p className="text-xs sm:text-sm text-gray-700">{album.alt}</p>

                <div className="mt-4 max-h-[70vh] overflow-y-auto w-full px-4 mb-2">
                  <p className="text-sm italic whitespace-pre-line text-gray-700 mx-auto max-w-xs">
                    {album.lyrics}
                  </p>
                </div>

                {/* Music Links */}
                <div
                  onClick={(e) => e.stopPropagation()}
                  onKeyDown={(e) => e.stopPropagation()}
                  className="flex flex-wrap gap-3 justify-center"
                >
                  <ExternalLink
                    href={album.spotifyUrl}
                    className="text-sm sm:text-base"
                  >
                    Spotify
                  </ExternalLink>
                  <ExternalLink
                    href={album.appleMusicUrl}
                    className="text-sm sm:text-base"
                  >
                    Apple Music
                  </ExternalLink>
                  <ExternalLink
                    href={album.bandcampUrl}
                    className="text-sm sm:text-base"
                  >
                    Bandcamp
                  </ExternalLink>
                  <ExternalLink
                    href={album.youTubeUrl}
                    className="text-sm sm:text-base"
                  >
                    YouTube
                  </ExternalLink>
                </div>
              </div>
            )}
          </div>
        </ToggleableOverlay>

        {!iframeLoaded && <Spinner />}

        {/* Spotify Music Player */}
        <div className="w-full">
          <iframe
            title={`${album.songTitle} music player`}
            tabIndex={0}
            className={`rounded-xl w-full transition-opacity duration-300 ${
              iframeLoaded ? "opacity-100" : "opacity-0 h-0 overflow-hidden"
            }`}
            src={album.songUrl}
            onLoad={() => setIframeLoaded(true)}
            height="80"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          />
        </div>

        <button
          tabIndex={0}
          aria-hidden="true"
          className="sr-only"
          onFocus={() =>
            (
              document.querySelector("[data-autofocus]") as HTMLElement | null
            )?.focus()
          }
        >
          Reset Focus
        </button>
      </div>
    </Modal>
  );
}

export default MusicModalContent;
