type ToggleableOverlayProps = {
  setShowOverlay: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
  className?: string;
};

function ToggleableOverlay({
  setShowOverlay,
  children,
  className = "",
}: ToggleableOverlayProps) {
  return (
    <div
      role="button"
      tabIndex={0}
      className={`w-full relative cursor-pointer ${className}`}
      onClick={() => setShowOverlay((prev) => !prev)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") setShowOverlay((prev) => !prev);
      }}
    >
      {children}
    </div>
  );
}

export default ToggleableOverlay;
