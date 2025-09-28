import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://www.asyaberezovskaya.net"),
  title: "Ася Березовская — психотерапевт", 
  description:
    "Психотерапевт Ася Березовская: интегративная терапия для взрослых в Нью-Йорке и онлайн по всему миру.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Ася Березовская — психотерапевт",
    description:
      "Интегративная терапия для работы с кризисами, отношениями, эмиграцией и хроническим стрессом. Онлайн и офлайн сессии.",
    url: "https://www.asyaberezovskaya.net/",
    siteName: "Ася Березовская",
    locale: "ru_RU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ася Березовская — психотерапевт",
    description:
      "Онлайн и офлайн психотерапия на русском и английском языках. Индивидуальные и групповые форматы.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
