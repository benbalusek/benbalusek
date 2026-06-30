import FooterNav from "@/app/_components/layout/FooterNav";
import PhotoGrid from "@/app/_components/photography/PhotoGrid";
import ExternalLink from "@/app/_components/ui/ExternalLink";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Photography",
};

// Photography Page
function Page() {
  return (
    <div>
      <h1 className="text-3xl lg:text-4xl font-bold text-center mb-9">
        Photography
      </h1>
      <PhotoGrid />

      <div className="mt-10 text-center hover:underline">
        <ExternalLink href="https://instagram.com/benbalusek">
          Follow on Instagram →
        </ExternalLink>
      </div>

      <FooterNav
        previous={{ label: "Home", path: "/" }}
        next={{ label: "Music", path: "/music" }}
      />
    </div>
  );
}
export default Page;
