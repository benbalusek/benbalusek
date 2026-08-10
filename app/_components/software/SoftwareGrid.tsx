"use client";

import ClickableImage from "@/app/_components/ui/ClickableImage";
import SoftwareModalContent from "@/app/_components/software/SoftwareModalContent";
import { Software, software } from "@/app/_lib/softwareData";
import { useState } from "react";

function SoftwareGrid() {
  const [selectedSoftware, setSelectedSoftware] = useState<Software | null>(
    null,
  );

  const independentProjects = [...software]
    .filter((s) => s.category === "independent")
    .reverse();
  const learningProjects = [...software]
    .filter((s) => s.category === "learning")
    .reverse();

  return (
    <div className="mx-auto w-full">
      {/* Independent Projects */}
      <h2 className="text-2xl text-neutral-500 mb-4">Independent Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
        {independentProjects.map((s) => (
          <ClickableImage
            key={s.id}
            src={s.smallSrc}
            alt={s.alt}
            ariaLabel={s.alt}
            width={800}
            height={450}
            onClick={() => setSelectedSoftware(s)}
          />
        ))}
      </div>

      {/* Learning Projects */}
      <h2 className="text-2xl text-neutral-500 mt-12 mb-4">
        Learning Projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
        {learningProjects.map((s) => (
          <ClickableImage
            key={s.id}
            src={s.smallSrc}
            alt={s.alt}
            ariaLabel={s.alt}
            width={800}
            height={450}
            onClick={() => setSelectedSoftware(s)}
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
