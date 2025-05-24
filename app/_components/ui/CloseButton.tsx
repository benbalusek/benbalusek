import { forwardRef } from "react";

type CloseButtonProps = {
  onClose: () => void;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const CloseButton = forwardRef<HTMLButtonElement, CloseButtonProps>(
  function CloseButton({ onClose, ...props }, ref) {
    return (
      <button
        ref={ref}
        aria-label="Close modal"
        onClick={onClose}
        className="absolute top-0 right-1 text-black text-3xl cursor-pointer"
        {...props}
      >
        &times;
      </button>
    );
  }
);

CloseButton.displayName = "CloseButton";
export default CloseButton;
