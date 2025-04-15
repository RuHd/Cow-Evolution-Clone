import { Geist, Geist_Mono, Tiny5, Hanalei, Barrio} from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const tiny5 = Tiny5({
  variable: "--font-tiny5",
  subsets: ["latin"],
  weight: "400"
});

const barrio = Barrio({
  variable: "--font-barrio",
  subsets: ["latin"],
  weight: "400"
});

export const metadata = {
  title: "Cow Evolution",
  description: "Created By Ruan Mesquita",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${tiny5.variable} ${barrio.variable}`}>
        {children}
      </body>
    </html>
  );
}
