import Image from "next/image";
import Link from "next/link";

function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-4"
      aria-label="Go to homepage"
    >
      <Image
        src="/icons/01-icon.png"
        alt="White flower double exposed with the coast, Oregon"
        width={60}
        height={60}
        unoptimized
      />
      <h1 className="text-xl font-semibold ">Ben Balusek</h1>
    </Link>
  );
}

export default Logo;
