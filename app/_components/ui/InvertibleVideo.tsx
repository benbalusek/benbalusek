"use client";

import { useState } from "react";

function InvertibleVideo() {
  const [isInverted, setIsInverted] = useState(false);

  return (
    <div
      className="w-[75px] h-[75px] sm:w-[85px] sm:h-[85px] md:w-[95px] md:h-[95px] lg:w-[105px] lg:h-[105px] xl:w-[115px] xl:h-[115px] 2xl:w-[125px] 2xl:h-[125px] overflow-hidden rounded-full cursor-pointer"
      onClick={() => setIsInverted(!isInverted)}
    >
      <video
        src="/videos/01-video.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        aria-label="Purple flower in the Southwest"
        className={`w-full h-full object-cover transition duration-300 ${
          isInverted ? "filter invert" : ""
        }`}
      />
    </div>
  );
}

export default InvertibleVideo;
