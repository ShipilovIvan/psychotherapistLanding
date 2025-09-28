import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://www.asyaberezovskaya.net"),
  title: "Ася Березовская — психотерапевт",
  description:
    "Психотерапевт Ася Березовская. Онлайн и офлайн сессии, интегративный подход, поддержка в кризисах, отношениях, эмиграции.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Ася Березовская — психотерапия",
    description:
      "Интегративная терапия, поддержка в кризисах, работе с травмой, отношениях и адаптации. Нью-Йорк, онлайн по всему миру.",
    url: "https://www.asyaberezovskaya.net/",
    siteName: "Ася Березовская",
    locale: "ru_RU",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
