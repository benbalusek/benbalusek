"use client";

import PhotoModalContent from "@/app/_components/photography/PhotoModalContent";
import ClickableImage from "@/app/_components/ui/ClickableImage";
import { images, Photo } from "@/app/_lib/photoData";
import { useState } from "react";

function PhotoGrid() {
  const [selectedImage, setSelectedImage] = useState<Photo | null>(null);

  return (
    <div className="mx-auto w-full">
      {/* Photo Grid */}
      <div className="columns-2 md:columns-3 xl:columns-4 gap-4 space-y-4">
        {images.map((image) => (
          <ClickableImage
            key={image.id}
            src={image.smallSrc}
            alt={`${image.title} in ${image.location}, ${image.state}`}
            ariaLabel={`${image.title} in ${image.location}, ${image.state}`}
            width={image.smallWidth}
            height={image.smallHeight}
            onClick={() => setSelectedImage(image)}
          />
        ))}
      </div>

      {/* Photo Modal Content */}
      {selectedImage && (
        <PhotoModalContent
          image={selectedImage}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </div>
  );
}

export default PhotoGrid;
