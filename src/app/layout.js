// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Providers from "./utils/Providers";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata = {
  title: "E-com",
  description: " E-commerce product website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body cz-shortcut-listen="true">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
