import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { type NavItemConfig, NavItems } from "../components/nav";
import { Frame } from "@/components/frame";

const navItemConfigs: NavItemConfig[] = [
  {
    href: "/",
    text: "Home (recent photos)",
  },
  {
    href: "/top-photos",
    text: "Top photos",
  },
  {
    href: "/best-photo",
    text: "Best photo",
  },
  {
    href: "/photo?id=123",
    text: "Photo #123",
  },
];
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Frame
          borderClassName="border-green-200 m-4"
          textClassName="text-green-400"
          text="app/layout.tsx"
        >
          <NavItems configs={navItemConfigs} />
          <Frame
            borderClassName="border-green-200"
            textClassName="text-green-400"
            text="{children}"
            type="slot"
          >
            {children}
          </Frame>
        </Frame>
      </body>
    </html>
  );
}
