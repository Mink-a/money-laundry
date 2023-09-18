import "../../../app/globals.css";
import type { Metadata } from "next";
import { Jost } from "next/font/google";

const inter = Jost({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "KBZ Blog",
  description: "KBZ Blog",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
