import type { Metadata } from "next";
import { ReactNode } from "react";
import "@/src/index.css";

export const metadata: Metadata = {
  title: "VitalAI - Health & Fitness",
  description: "Your personal health and fitness companion",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
