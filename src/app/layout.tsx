import { MainLayout } from "@/layout/main.layout";
import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";

const VazirMatn = localFont({
  src: [
    {
      path: "./fonts/vazir/Vazirmatn-Thin.woff2",
      style: "normal",
      weight: "100",
    },
    {
      path: "./fonts/vazir/Vazirmatn-ExtraLight.woff2",
      style: "normal",
      weight: "200",
    },
    {
      path: "./fonts/vazir/Vazirmatn-Light.woff2",
      style: "normal",
      weight: "300",
    },
    {
      path: "./fonts/vazir/Vazirmatn-Medium.woff2",
      style: "normal",
      weight: "400",
    },
    {
      path: "./fonts/vazir/Vazirmatn-Regular.woff2",
      style: "normal",
      weight: "500",
    },
    {
      path: "./fonts/vazir/Vazirmatn-SemiBold.woff2",
      style: "normal",
      weight: "600",
    },
    {
      path: "./fonts/vazir/Vazirmatn-Bold.woff2",
      style: "normal",
      weight: "700",
    },
    {
      path: "./fonts/vazir/Vazirmatn-ExtraBold.woff2",
      style: "normal",
      weight: "800",
    },
    {
      path: "./fonts/vazir/Vazirmatn-Black.woff2",
      style: "normal",
      weight: "900",
    },
  ],
  variable: "--font-vazir",
  preload: true,
});

export const metadata: Metadata = {
  title: "توالت هوشمند",
  description: "یک وبسایت دیگر با نکست جی‌اس فارسی.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="fa"
      dir="rtl"
      data-theme="bumblebee"
      className={`${VazirMatn.variable}`}
    >
      <body className={`${VazirMatn.variable}`}>{children}</body>
    </html>
  );
}
