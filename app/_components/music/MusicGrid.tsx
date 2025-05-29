"use client";

import MusicModalContent from "@/app/_components/music/MusicModalContent";
import ClickableImage from "@/app/_components/ui/ClickableImage";
import { albums, Music } from "@/app/_lib/musicData";
import { useState } from "react";

function MusicGrid() {
  const [selectedAlbum, setSelectedAlbum] = useState<Music | null>(null);

  return (
    <div className="mx-auto w-full">
      {/* Music Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
        {albums.map((album) => (
          <ClickableImage
            key={album.id}
            src={album.smallSrc}
            alt={album.alt}
            ariaLabel={album.alt}
            width={600}
            height={600}
            onClick={() => setSelectedAlbum(album)}
          />
        ))}
      </div>

      {/* Music Modal Content */}
      {selectedAlbum && (
        <MusicModalContent
          album={selectedAlbum}
          onClose={() => setSelectedAlbum(null)}
        />
      )}
    </div>
  );
}

export default MusicGrid;
