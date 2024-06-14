import type { Metadata } from "next";
import { Roboto_Slab } from "next/font/google";
import "./globals.css";

const font = Roboto_Slab({
  subsets: ["latin", "cyrillic", "cyrillic-ext"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  fallback: ["Roboto"],
});

export const metadata: Metadata = {
  title: "Cashify",
  icons: [
    { rel: "icon", url: "./favicon.ico" },
    { rel: "apple-touch-icon", url: "./favicon.ico" },
  ],
  description: "Web App to track your finances",
  applicationName: "Cashify",
  authors: [{ name: "Xavtso", url: "https://github.com/Xavtso" }],
  openGraph: {
    type: "website",
    title: "Cashify",
    description: "Web App to track your finances",
    siteName: "Cashify",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-US">
      <body className={font.className}>{children}</body>
    </html>
  );
}
