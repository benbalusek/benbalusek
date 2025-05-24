import AboutMe from "@/app/_components/about/AboutMe";
import ExternalLink from "@/app/_components/ui/ExternalLink";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
};

// About Page
export default function Page() {
  return (
    <div className="w-full">
      <div className="relative w-full">
        <Image
          src="/about/01-banner.jpg"
          alt="Pink hour in White Sands National Park, New Mexico"
          width={2500}
          height={800}
          className="w-full object-cover"
          priority
          unoptimized
        />
        <div className="absolute inset-0 flex items-start justify-center pt-6">
          <h1 className="text-4xl lg:text-5xl font-bold text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.7)]">
            About
          </h1>
        </div>
      </div>
      <div className="py-6">
        <AboutMe />
      </div>

      {/* About Footer */}
      <div className="flex flex-wrap gap-3 items-center justify-center mb-6">
        <ExternalLink href="https://www.instagram.com/sunandsilhouettes/">
          Instagram
        </ExternalLink>
        <ExternalLink href="https://open.spotify.com/artist/6LsIdsrIxqN3CDONwL9cVQ">
          Spotify
        </ExternalLink>
        <ExternalLink href="https://music.apple.com/us/artist/medvedi/1271007412">
          Apple Music
        </ExternalLink>
        <ExternalLink href="https://github.com/benbalusek">GitHub</ExternalLink>

        <span> / </span>
        <Link
          href={`mailto:${process.env.NEXT_PUBLIC_EMAIL_TO}`}
          aria-label="Get in touch by email"
        >
          {process.env.NEXT_PUBLIC_EMAIL_TO}
        </Link>
      </div>
    </div>
  );
}
