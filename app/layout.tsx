"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "@fontsource/roboto/300.css";
import HeaderLayout from "@/layouts/Header";
import { UserProvider } from "@/lib/app/contexts/user";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }} className={inter.className}>
        <UserProvider>
          <HeaderLayout>{children}</HeaderLayout>
        </UserProvider>
      </body>
    </html>
  );
}
