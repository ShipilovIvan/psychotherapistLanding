import "./globals.css";

export const metadata = {
  title: "Asya berezovskaya",
  description:
    "Психотерапевт Ася Березовская — консультации и психотерапия для взрослых онлайн и в Нью-Йорке.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
