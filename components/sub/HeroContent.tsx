"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    slideInFromLeft,
    slideInFromRight,
} from "@/utils/motion";
import Image from "next/image";
import { InView } from "react-intersection-observer";
import { Cinzel_Decorative } from "next/font/google";

const cinzelDecorative = Cinzel_Decorative({
    subsets: ["latin"],
    weight: ["700", "900"],
});

const HeroContent = () => {
    return (
        <InView triggerOnce={false}>
            {({ inView, ref }) => (
                <motion.div
                    ref={ref}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    className="flex md:flex-row flex-col-reverse items-center justify-center gap-10 md:gap-0 md:px-20 px-5 mt-40 w-full z-20"
                >
                    <div className="h-full w-full md:w-3/6 flex flex-col gap-5 justify-center text-start">

                        <InView triggerOnce={false}>
                            {({ inView, ref }) => (
                                <motion.div
                                    ref={ref}
                                    initial="hidden"
                                    animate={inView ? "visible" : "hidden"}
                                    variants={slideInFromLeft(0.5)}
                                    className={`flex flex-col gap-6 mt-6 md:text-5xl text-4xl font-bold text-[#E6C77A] max-w-[600px] w-auto h-auto z-20 ${cinzelDecorative.className} garden-headline`}
                                >
                                    <span>
                                        Jack of
                                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E6C77A] to-[#D4AF37]">
                                            {" "}
                                            All Trades{" "}
                                        </span>
                                        Master of
                                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E6C77A] to-[#D4AF37]">
                                            {" "}
                                            None{" "}
                                        </span>
                                        
                                    </span>
                                </motion.div>
                            )}
                        </InView>

                        <InView triggerOnce={false}>
                            {({ inView, ref }) => (
                                <motion.div
                                    ref={ref}
                                    initial="hidden"
                                    animate={inView ? "visible" : "hidden"}
                                    variants={slideInFromLeft(0.8)}
                                    className="text-sm md:text-md text-[#F5F5F5] my-5 z-30 garden-subtext inline-block w-fit max-w-[650px] bg-white/10 backdrop-blur-md border border-[#FFB6D599] rounded-xl px-4 py-3 shadow-[0_8px_24px_rgba(0,0,0,0.35)] drop-shadow-[0_0_8px_rgba(255,182,213,0.55)]"
                                >
                                    <li>
                                        I have participated in one national Hackathons
                                    </li>
                                    <li>
                                        Participated in Techfest and ITfest events 
                        
                                    </li>
                                    <li>
                                        Has a Youtube Channel with 12000+ subscribers
                                        
                                    </li>
                                    <li>
                                        Served as a Good Team Member
                                        
                                    </li>
                                </motion.div>
                            )}
                        </InView>
                    </div>

                    <InView triggerOnce={false}>
                        {({ inView, ref }) => (
                            <motion.div
                                ref={ref}
                                initial="hidden"
                                animate={inView ? "visible" : "hidden"}
                                variants={slideInFromRight(0.8)}
                                className="w-full md:w-3/6 h-full flex justify-center items-center z-40"
                            >
                                <Image
                                    src="/mainIconsdark.svg"
                                    alt="work icons"
                                    height={650}
                                    width={650}
                                />
                            </motion.div>
                        )}
                    </InView>
                </motion.div>
            )}
        </InView>
    );
};

export default HeroContent;
