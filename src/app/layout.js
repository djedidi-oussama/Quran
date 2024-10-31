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
      <head >
        <meta name="viewport" content="width=device-width, initial-scale=1.0" charSet="UTF-8" />
      </head>
      <body
        className={`${cairoFont.variable} antialiased bg-background text-text`}
      >
        {children}
      </body>
    </html>
  );
}
