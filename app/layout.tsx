import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {3
  title: "Asya berezovskaya",
  description:
    "Психотерапевт Ася Березовская — консультации и психотерапия для взрослых онлайн и в Нью-Йорке.",

};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
