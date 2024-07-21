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
        <main className="flex-1 max-w-7xl m-auto h-full w-full">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
