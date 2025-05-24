import { useCallback, useEffect, useState } from "react";

export function useImageCarousel<T>(imageList: T[], onClose: () => void) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Next Button
  const nextImage = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % imageList.length);
  }, [imageList.length]);

  // Previous Button
  const prevImage = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? imageList.length - 1 : prev - 1));
  }, [imageList.length]);

  // Keyboard
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "ArrowRight") nextImage();
      else if (e.key === "ArrowLeft") prevImage();
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextImage, prevImage, onClose]);

  return { currentIndex, nextImage, prevImage };
}
