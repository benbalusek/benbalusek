import FooterNav from "@/app/_components/layout/FooterNav";
import MusicGrid from "@/app/_components/music/MusicGrid";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Music",
};

// Music Page
function Page() {
  return (
    <div>
      <h1 className="text-3xl lg:text-4xl font-bold text-center mb-9">Music</h1>
      <MusicGrid />

      <FooterNav
        previous={{ label: "Photography", path: "/photography" }}
        next={{ label: "Web Dev", path: "/webdev" }}
      />
    </div>
  );
}
export default Page;
