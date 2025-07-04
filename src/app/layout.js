import "./globals.css";
import Providers from "./utils/Providers";

// ✅ Add built-in fonts

import { Inter, Poppins, Roboto } from "next/font/google";

// Inter for body text
const inter = Inter({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-inter",
});

// Poppins for headings
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-poppins",
});

// Roboto for buttons or other UI
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400"], // Or ["400", "500", "700"] if you want multiple
  variable: "--font-roboto",
});

export const metadata = {
  title: "E-com",
  description: "E-commerce product website",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${roboto.variable} ${inter.variable} ${poppins.variable}`}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
