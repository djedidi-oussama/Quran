import localFont from "next/font/local";
import "./globals.css";

const cairoFont = localFont({
  src: [
    {
      path: "./fonts/Cairo-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Cairo-Bold.ttf",
      weight: "700",
      style: "bold",
    },
  ],
  variable: "--font-cairo",
});

export const metadata = {
  title: "Quranic Website",
  description: "An elegant Quranic website using Amiri font.",
  icons: {
    icon: "/logo.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${cairoFont.variable} antialiased bg-background text-text`}>
        {children}
      </body>
    </html>
  );
}
