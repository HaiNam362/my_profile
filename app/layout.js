"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// const geistSans = Geist({
//     variable: "--font-geist-sans",
//     subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//     variable: "--font-geist-mono",
//     subsets: ["latin"],
// });

// export const metadata = {
//     title: "Profile Nguyễn Hải Nam",
//     description: "Profile Nguyễn Hải Nam",
// };

export default function RootLayout({ children }) {
    return (
        <html>
            <body
            // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                {children}
            </body>
        </html>
    );
}
