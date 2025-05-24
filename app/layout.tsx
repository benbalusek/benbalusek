import Header from "@/app/_components/layout/Header";
import "@/app/globals.css";
import { Metadata } from "next";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Ben Balusek",
    default: "Portfolio | Ben Balusek ",
  },
  description: "Portfolio of photography, music, and web development",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr">
      <body className={`${montserrat.variable} antialiased`}>
        <div className="mx-auto w-full max-w-[1650px] p-6">
          <Header />
          <main role="main">{children}</main>
        </div>
      </body>
    </html>
  );
}
