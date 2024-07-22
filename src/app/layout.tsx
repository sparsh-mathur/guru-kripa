import { Footer, Header } from "@/components";
import classNames from "classnames";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GKRCSS",
  description: "Guru Kripa R.C Security Services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={classNames(inter.className, "flex flex-col")}>
        <Header />
        <main className="flex-1 m-auto w-full">{children}</main>
        <Footer />
        <script
          src="https://cdn.jsdelivr.net/npm/flowbite@2.4.1/dist/flowbite.min.js"
          async
        ></script>
      </body>
    </html>
  );
}
