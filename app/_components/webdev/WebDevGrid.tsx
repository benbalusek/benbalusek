"use client";

import ClickableImage from "@/app/_components/ui/ClickableImage";
import WebDevModalContent from "@/app/_components/webdev/WebDevModalContent";
import { WebDev, websites } from "@/app/_lib/webDevData";
import { useState } from "react";

function WebDevGrid() {
  const [selectedWebsite, setSelectedWebsite] = useState<WebDev | null>(null);

  return (
    <div className="mx-auto w-full">
      {/* Web Dev Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
        {websites.map((website) => (
          <ClickableImage
            key={website.id}
            src={website.smallSrc}
            alt={website.alt}
            ariaLabel={website.alt}
            width={800}
            height={450}
            onClick={() => setSelectedWebsite(website)}
          />
        ))}
      </div>

      {/* Web Dev Modal Content */}
      {selectedWebsite && (
        <WebDevModalContent
          website={selectedWebsite}
          onClose={() => setSelectedWebsite(null)}
        />
      )}
    </div>
  );
}

export default WebDevGrid;
