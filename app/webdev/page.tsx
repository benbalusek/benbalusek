import FooterNav from "@/app/_components/layout/FooterNav";
import WebDevGrid from "@/app/_components/webdev/WebDevGrid";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web Development",
};

// Web Dev Page
function Page() {
  return (
    <div>
      <h1 className="text-3xl lg:text-4xl font-bold text-center mb-9">
        Web Development
      </h1>
      <WebDevGrid />

      <FooterNav
        previous={{ label: "Music", path: "/music" }}
        next={{ label: "About", path: "/about" }}
      />
    </div>
  );
}
export default Page;
