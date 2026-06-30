import FooterNav from "@/app/_components/layout/FooterNav";
import SoftwareGrid from "@/app/_components/software/SoftwareGrid";
import ExternalLink from "@/app/_components/ui/ExternalLink";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Software",
};

// Web Dev Page
function Page() {
  return (
    <div>
      <h1 className="text-3xl lg:text-4xl font-bold text-center mb-9">
        Software
      </h1>
      <SoftwareGrid />

      <div className="mt-10 text-center hover:underline">
        <ExternalLink href="https://github.com/benbalusek">
          View more on GitHub →
        </ExternalLink>
      </div>

      <FooterNav
        previous={{ label: "Music", path: "/music" }}
        next={{ label: "About", path: "/about" }}
      />
    </div>
  );
}
export default Page;
