
import Navbar from "@/components/Navbar.js";

import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Todo List Next App",
    description: "Generated by create next app",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className="p-6">
            <body className={inter.className}>
                <Navbar/>
                {children}
            </body>
        </html>
    );
}
