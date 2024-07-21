// Main Stylesheets
import "./globals.css";
// Main Layout Requirements
import type { Metadata } from "next";
// Layout Metadata
export const metadata: Metadata = {
  title: "Ramsés Solano Portfolio",
  description: "This is my portfolio, my digital me",
};
// Main Layout Function
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
