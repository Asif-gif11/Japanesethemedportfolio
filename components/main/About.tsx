"use client";
import React from "react";

import { motion } from "framer-motion";
import { slideInFromBottom, slideInFromLeft, slideInFromRight, slideInFromTop } from "@/utils/motion";
import { InView } from "react-intersection-observer";

const About = () => {
    return (
        <section
            id="about"
            className="flex flex-col md:flex-row relative items-center justify-center min-h-screen w-full h-full"
        >
            <div className="md:absolute w-auto h-auto md:top-[55px] z-[5]">
                <InView triggerOnce={false}>
                    {({ inView, ref }) => (
                        <motion.div
                            ref={ref}
                            initial="hidden"
                            animate={inView ? "visible" : "hidden"}
                            variants={slideInFromTop}
                            className="text-[40px] pt-[5rem] pb-3 md:p-0 font-medium text-center text-[#e4ecd5] z-50"
                        >
                            About
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f2ffd0] to-[#a6c98d]">
                                {" "}
                                Me{" "}
                            </span>
                        </motion.div>
                    )}
                </InView>
            </div>

            <div className="flex flex-col items-center justify-start relative md:mt-[90px] lg:mt-12 z-[20] w-auto h-auto">
                <InView triggerOnce={false}>
                    {({ inView, ref }) => (
                        <motion.div
                            ref={ref}
                            initial="hidden"
                            animate={inView ? "visible" : "hidden"}
                            variants={slideInFromLeft(0.5)}
                            className="flex flex-col items-center w-auto h-auto rounded-full overflow-hidden border-[6px] border-[#9abf8b9c] bg-gradient-to-r from-[#6e8f62] to-[#314d30]"
                        >
                            <img src="/jenin.jpg" alt="profile" width={250} />
                        </motion.div>
                    )}
                </InView>

                <InView triggerOnce={false}>
                    {({ inView, ref }) => (
                        <motion.div
                            ref={ref}
                            initial="hidden"
                            animate={inView ? "visible" : "hidden"}
                            variants={slideInFromRight(0.5)}
                            className="Welcome-box px-[15px] py-[8px] z-[20] brder my-[20px] border-[#9abf8b9c] opacity-[0.95]"
                        >
                            <h1 className="about-name text-[20px] font-bold">
                                Mohammed Asif M
                            </h1>
                        </motion.div>
                    )}
                </InView>

                <InView triggerOnce={false}>
                    {({ inView, ref }) => (
                        <motion.div
                            ref={ref}
                            initial="hidden"
                            animate={inView ? "visible" : "hidden"}
                            variants={slideInFromBottom}
                            className="Welcome-box px-[15px] w-[90%] md:w-3/4 py-[8px] z-[20] brder mb-[20px] border-[#9abf8b9c] opacity-[0.95]"
                        >
                            <h1 className="about-body text-[16px] w-full text-justify">
                                First-year BCA student and aspiring Full-Stack Web Developer
                                with hands-on experience in Html,Css,JavaScript
                                React,Angular Js,Firebase and SQL. Passionate about
                                building scalable web applications and exploring
                                data analytics using Power BI. Dedicated to continuous
                                learning and real-world project development.
                                
                            </h1>
                        </motion.div>
                    )}
                </InView>
            </div>
            <div className="absolute z-[20] bottom-[-4rem] md:bottom-[10px] px-[5px]">
                <div className="cursive text-[20px] font-medium text-center text-[#e0ebd4]">
                    Shaping Tomorrow with Code and Creativity
                </div>
            </div>

            <div className="w-full hidden md:flex items-start justify-center absolute top-[1px]">
                <video
                    loop
                    muted
                    autoPlay
                    playsInline
                    preload="false"
                    className="h-full"
                    src="/aboutme.mp4"
                />
            </div>
        </section>
    );
};

export default About;
