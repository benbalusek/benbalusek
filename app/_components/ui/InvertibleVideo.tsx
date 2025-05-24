"use client";

import { useState } from "react";

function InvertibleVideo() {
  const [isInverted, setIsInverted] = useState(false);

  return (
    <div
      className="w-[80px] h-[80px] xl:w-[95px] xl:h-[95px] 2xl:w-[150px] 2xl:h-[150px] overflow-hidden rounded-full cursor-pointer"
      onClick={() => setIsInverted(!isInverted)}
    >
      <video
        src="/videos/01-video.mp4"
        autoPlay
        loop
        muted
        playsInline
        aria-label="Purple flower in the Southwest"
        className={`w-full h-full object-cover transition duration-300 ${
          isInverted ? "filter invert" : ""
        }`}
      />
    </div>
  );
}

export default InvertibleVideo;
