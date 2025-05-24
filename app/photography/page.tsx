import FooterNav from "@/app/_components/layout/FooterNav";
import PhotoGrid from "@/app/_components/photography/PhotoGrid";
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

      <FooterNav
        previous={{ label: "Home", path: "/" }}
        next={{ label: "Music", path: "/music" }}
      />
    </div>
  );
}
export default Page;
