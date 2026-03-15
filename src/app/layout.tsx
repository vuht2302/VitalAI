import type { Metadata } from "next";
import "../index.css";

export const metadata: Metadata = {
  title: "Vital.ai",
  description: "AI-powered fitness and wellness dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
