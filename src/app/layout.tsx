import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";

const inter = Inter({ subsets: ["latin"] });

const mademellow = localFont({
  src: [
    {
      path: "../../public/made-mellow/MADEMellowPERSONALUSE-Bold.otf",
      weight: "700",
      style: "bold",
    },
    {
      path: "../../public/made-mellow/MADEMellowPERSONALUSE-SemiBold.otf",
      weight: "600",
      style: "semibold",
    },
    {
      path: "../../public/made-mellow/MADEMellowPERSONALUSE-Medium.otf",
      weight: "500",
      style: "medium",
    },
    {
      path: "../../public/made-mellow/MADEMellowPERSONALUSE-Regular.otf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--heading-font",
});

const aeonik = localFont({
  src: [
    {
      path: "../../public/New Aeonik Trials/AeonikTRIAL-Bold.otf",
      weight: "700",
      style: "bold",
    },
    {
      path: "../../public/New Aeonik Trials/AeonikTRIAL-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/New Aeonik Trials/AeonikTRIAL-Light.otf",
      weight: "300",
      style: "light",
    },
  ],
  variable: "--body-font",
});

export const metadata: Metadata = {
  title: "Eazipay - Run your payroll in seconds",
  description: 'Eazipay web app for managing your payroll in Seconds',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${mademellow.variable} ${aeonik.variable}`}>
       <head>
        <link rel='icon' href='/favicon.ico'/>
      </head>
      <body className="font-body">{children}</body>
    </html>
  );
}
