function OverlayHint() {
  return (
    <div className="absolute inset-0 flex items-center justify-center text-white text-sm font-semibold bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      Click image for details
    </div>
  );
}

export default OverlayHint;
