"use client";

import { FocusTrap } from "focus-trap-react";
import { useEffect } from "react";
import CloseButton from "./CloseButton";

type ModalProps = {
  onClose: () => void;
  ariaLabel: string;
  children: React.ReactNode;
  className?: string;
};

function Modal({ onClose, ariaLabel, children, className = "" }: ModalProps) {
  // Modal Keyboard ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 bg-white/40 backdrop-blur-sm flex items-center justify-center z-50 cursor-pointer"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      {/* Modal Focus Trap */}
      <FocusTrap
        focusTrapOptions={{
          clickOutsideDeactivates: true,
          escapeDeactivates: true,
          returnFocusOnDeactivate: true,
          initialFocus: () =>
            document.querySelector("[data-autofocus]") as HTMLElement,
        }}
      >
        <div
          role="dialog"
          aria-modal="true"
          aria-label={ariaLabel}
          className={`relative mx-auto p-6 bg-white border border-white rounded-lg shadow-lg cursor-auto ${className}`}
        >
          <CloseButton onClose={onClose} data-autofocus />
          {children}
        </div>
      </FocusTrap>
    </div>
  );
}

export default Modal;
