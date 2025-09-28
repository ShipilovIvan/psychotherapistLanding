import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Asya Berezovskaya Psychotherapy",
  description:
    "Landing page for Asya Berezovskaya, LMHC – psychotherapy services in Brooklyn and Manhattan.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
