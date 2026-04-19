import { JetBrains_Mono, Inter } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

const inter = Inter({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "dulguun.purevtseren — software developer",
  description: "Developer at Sendly NBFI, Mongolia. I build Odoo ERP and web systems that automate loan workflows, using React, Next.js, Python, and JavaScript.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${jetbrainsMono.variable} ${inter.variable}`}>
      <body style={{ fontFamily: "var(--font-jetbrains), 'JetBrains Mono', ui-monospace, Consolas, monospace" }}>
        {children}
      </body>
    </html>
  );
}
