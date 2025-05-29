import InvertibleVideo from "@/app/_components/ui/InvertibleVideo";
import background from "@/public/photos/17-large.jpg";
import Image from "next/image";
import Link from "next/link";

//  Home Page
function Page() {
  return (
    <div className="max-h-screen flex flex-col justify-center items-center text-center mt-9">
      <Image
        src={background}
        className="object-cover object-left z-[-1]"
        alt="Sunrise from Sunrise, Washington in Mount Rainier National Park"
        fill
        priority
        unoptimized
      />
      <div className="max-w-3xl flex flex-col items-center gap-6 text-center">
        <InvertibleVideo />

        <h1 className="text-3xl sm:text-4xl 2xl:text-5xl font-bold">
          Hi, I&apos;m Ben Balusek
        </h1>

        <p className="text-sm sm:text-base 2xl:text-lg text-neutral-700 font-light leading-tight drop-shadow-md">
          a photographer, musician, and web developer
        </p>

        <div className="flex gap-4 justify-center flex-wrap">
          <Link
            href="/photography"
            className="bg-black text-white text-sm sm:text-base 2xl:text-lg px-6 py-2 rounded hover:bg-gray-800 transition"
          >
            View Photography
          </Link>
          <Link
            href="/about"
            className="bg-gray-100/50 border border-black text-sm sm:text-base 2xl:text-lg px-6 py-2 rounded hover:bg-gray-100 transition"
          >
            About Me
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Page;
