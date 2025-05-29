import { useEffect, useState } from "react";

type ModalDimensionsConfig = {
  imageWidth: number;
  imageHeight: number;
  maxModalWidth?: number;
  modalPadding?: number;
  maxHeight?: number;
};

type ContainerDimensions = {
  width: number;
  height: number;
} | null;

type MobileContainerDimensions = {
  width: number;
  height: number;
  singleImageHeight: number;
} | null;

// Modal Dimensions
export function useModalDimensions({
  imageWidth,
  imageHeight,
  maxModalWidth = 896,
  modalPadding = 26,
  maxHeight = 0.85,
}: ModalDimensionsConfig): ContainerDimensions {
  const [containerDimensions, setContainerDimensions] =
    useState<ContainerDimensions>(null);

  useEffect(() => {
    const calculateDimensions = () => {
      const vw = window.innerWidth;
      const vh = window.innerHeight;

      const maxModalContentWidth = maxModalWidth - modalPadding * 2;
      const availableWidth = Math.min(
        maxModalContentWidth,
        vw - modalPadding * 2
      );

      const availableHeight = vh * maxHeight;
      const imageAspectRatio = imageWidth / imageHeight;
      let finalWidth, finalHeight;

      const widthConstrainedHeight = availableWidth / imageAspectRatio;
      const heightConstrainedWidth = availableHeight * imageAspectRatio;

      if (widthConstrainedHeight <= availableHeight) {
        finalWidth = availableWidth;
        finalHeight = widthConstrainedHeight;
      } else {
        finalWidth = heightConstrainedWidth;
        finalHeight = availableHeight;
      }

      setContainerDimensions({
        width: finalWidth,
        height: finalHeight,
      });
    };
    calculateDimensions();

    window.addEventListener("resize", calculateDimensions);
    return () => window.removeEventListener("resize", calculateDimensions);
  }, [imageWidth, imageHeight, maxModalWidth, modalPadding, maxHeight]);

  return containerDimensions;
}

// Mobile Modal Dimensions for Web Dev Modal
export function useMobileModalDimensions({
  imageWidth,
  imageHeight,
  modalPadding = 26,
  maxHeight = 0.85,
  spacing = 16,
}: ModalDimensionsConfig & { spacing?: number }): MobileContainerDimensions {
  const [containerDimensions, setContainerDimensions] =
    useState<MobileContainerDimensions>(null);

  useEffect(() => {
    const calculateDimensions = () => {
      const vw = window.innerWidth;
      const vh = window.innerHeight;

      const availableWidth = vw - modalPadding * 2;
      const availableHeight = vh * maxHeight;
      const imageAspectRatio = imageWidth / imageHeight;

      const singleImageHeight = availableWidth / imageAspectRatio;
      const totalNeededHeight = singleImageHeight * 2 + spacing;

      let finalWidth = availableWidth;
      let finalHeight = totalNeededHeight;
      let finalSingleImageHeight = singleImageHeight;

      if (totalNeededHeight > availableHeight) {
        finalSingleImageHeight = (availableHeight - spacing) / 2;
        finalWidth = finalSingleImageHeight * imageAspectRatio;
        finalHeight = availableHeight;
      }

      setContainerDimensions({
        width: finalWidth,
        height: finalHeight,
        singleImageHeight: finalSingleImageHeight,
      });
    };

    calculateDimensions();

    window.addEventListener("resize", calculateDimensions);
    return () => window.removeEventListener("resize", calculateDimensions);
  }, [imageWidth, imageHeight, modalPadding, maxHeight, spacing]);

  return containerDimensions;
}
