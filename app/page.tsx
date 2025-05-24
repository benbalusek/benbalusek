import InvertibleVideo from "@/app/_components/ui/InvertibleVideo";
import Image from "next/image";
import Link from "next/link";

//  Home Page
function Page() {
  return (
    <div className="max-h-screen flex flex-col justify-center items-center text-center mt-9">
      <Image
        src="/photos/17-large.jpg"
        className="object-cover object-top z-[-1]"
        alt="Sunset over the dunes in White Sands National Park, New Mexico"
        fill
        priority
        unoptimized
      />
      <div className="max-w-3xl flex flex-col items-center gap-6 text-center">
        <InvertibleVideo />
        <h1 className="text-3xl 2xl:text-4xl font-bold">
          Hi, I&apos;m Ben Balusek
        </h1>
        <p className="text-neutral-700 text-sm xl:text-md 2xl:text-lg font-light leading-tight">
          a photographer, musician, and web developer
        </p>

        <div className="flex gap-4 justify-center">
          <Link
            href="/photography"
            className="bg-black text-white 2xl:text-lg px-6 py-2 rounded hover:bg-gray-800 transition"
          >
            View Photography
          </Link>
          <Link
            href="/about"
            className="border border-black 2xl:text-lg px-6 py-2 rounded hover:bg-gray-100 transition"
          >
            About Me
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Page;
