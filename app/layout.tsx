import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StarsCanvas from "@/components/main/StarBackground";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Portfolio",
    description: "My portfolio",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body
                className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden max-w-[1855px] mx-auto relative`}
            >
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="fixed inset-0 w-full h-full object-cover -z-20"
                >
                    <source src="/Japanesegarden.mp4" type="video/mp4" />
                </video>
                <div className="fixed inset-0 bg-[#030014]/45 -z-10" />

                <StarsCanvas />
                <Navbar />
                {children}
                {/* <Footer /> */}
            </body>
        </html>
    );
}
