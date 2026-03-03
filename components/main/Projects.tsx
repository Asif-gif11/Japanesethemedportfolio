import React from "react";
import ProjectCard from "../sub/ProjectCard";
import { Cinzel_Decorative } from "next/font/google";

const cinzelDecorative = Cinzel_Decorative({
    subsets: ["latin"],
    weight: ["700", "900"],
});

const Projects = () => {
    return (
        <section
            id="projects"
            className="flex flex-col items-center justify-center min-h-screen relative overflow-hidden py-20"
        >
            <div className="absolute inset-0 z-0">
                <video
                    className="w-full h-full object-cover opacity-35"
                    preload="auto"
                    playsInline
                    loop
                    muted
                    autoPlay
                >
                    <source src="https://drive.google.com/uc?export=download&id=1mDpyvh5IQ7YQyACXjIOm7_NAjzXHM3u1" type="video/mp4" />
                </video>
            </div>

            <div className="absolute inset-0 z-0 bg-black/25" />

            <div className="relative z-10 w-full flex flex-col items-center">
                <h1
                    className={`text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#E6C77A] to-[#D4AF37] py-16 ${cinzelDecorative.className}`}
                    style={{ textShadow: "0 6px 24px rgba(0,0,0,0.55)" }}
                >
                    My Projects
                </h1>
                <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
                    <ProjectCard
                        src="/pr1.png"
                        title="Ak Trademart"
                        description="Ak Trademart is a modern e-commerce web application developed using React, HTML, CSS, JavaScript, and advanced CSS techniques. The platform provides a seamless shopping experience with dynamic product listings, responsive design, interactive UI components, and optimized performance. The project demonstrates my understanding of frontend development, component-based architecture, and modern styling practices."
                    />
                    <ProjectCard
                        src="/pr2.png"
                        title="Japanese Themed Portfolio"
                        description="Japanese-Themed Portfolio is a visually immersive personal website built using Next.js and advanced CSS techniques. Inspired by traditional Japanese aesthetics, the design combines minimalism, soft color palettes, and smooth animations to create a calm yet impactful user experience. The project demonstrates my ability to build responsive, high-performance web applications with modern frontend architecture and refined UI design principles."
                    />
                    <ProjectCard
                        src="/pr3.png"
                        title="Sales Analysis Dahboard"
                        description="Sales Dashboard (Power BI) is an interactive business intelligence solution designed to analyze and visualize sales performance data. The dashboard provides insights into revenue trends, regional performance, product-wise sales, and key performance indicators (KPIs). It enables data-driven decision-making through dynamic filters, drill-down analysis, and clear visual storytelling."
                    />
                </div>
            </div>
        </section>
    );
};

export default Projects;
