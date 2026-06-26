"use client";

import ClickableImage from "@/app/_components/ui/ClickableImage";
import SoftwareModalContent from "@/app/_components/software/SoftwareModalContent";
import { Software, software } from "@/app/_lib/softwareData";
import { useState } from "react";

function SoftwareGrid() {
  const [selectedSoftware, setSelectedSoftware] = useState<Software | null>(
    null,
  );

  return (
    <div className="mx-auto w-full">
      {/* Software Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
        {[...software].reverse().map((software) => (
          <ClickableImage
            key={software.id}
            src={software.smallSrc}
            alt={software.alt}
            ariaLabel={software.alt}
            width={800}
            height={450}
            onClick={() => setSelectedSoftware(software)}
          />
        ))}
      </div>

      {/* Software Modal Content */}
      {selectedSoftware && (
        <SoftwareModalContent
          software={selectedSoftware}
          onClose={() => setSelectedSoftware(null)}
        />
      )}
    </div>
  );
}

export default SoftwareGrid;
