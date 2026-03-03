"use client";

import {
    Backend_skill,
    DevTools,
    Frontend_skill,
	libraries,
} from "@/constants";
import React from "react";
import SkillDataProvider from "../sub/SkillDataProvider";
import SkillText from "../sub/SkillText";
import { InView } from "react-intersection-observer";
import { slideInFromLeft, slideInFromRight } from "@/utils/motion";
import { motion } from "framer-motion";

const Skills = () => {
    return (
        <section
            id="skills"
            className="flex flex-col items-center justify-center gap-3 min-h-screen relative overflow-hidden py-20"
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
                    <source src="/skills.mp4" type="video/mp4" />
                </video>
            </div>

            <div className="absolute inset-0 z-0 bg-black/25" />

            <div className="relative z-10 w-full flex flex-col items-center">
            <SkillText />

            <div className="flex flex-col items-center justify-center w-[95%] gap-4">
                <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-4">
                    <div className="w-full lg:w-1/2 h-full">
                        <InView triggerOnce={false}>
                            {({ inView, ref }) => (
                                <motion.div
                                    ref={ref}
                                    initial="hidden"
                                    animate={inView ? "visible" : "hidden"}
                                    variants={slideInFromLeft(0.5)}
                                    className="rounded-md text-[white] w-full my-auto py-[8px] px-[10px] border border-[#E6C77A66] bg-[#00000033] opacity-[0.95]"
                                >
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E6C77A] to-[#D4AF37] text-2xl font-bold">
                                        Frontend{" "}
                                    </span>
                                    <br />
                                    <div className="flex flex-row justify-around flex-wrap my-4 gap-5 items-center">
                                        {Frontend_skill.map((image, index) => (
                                            <SkillDataProvider
                                                key={index}
                                                src={image.Image}
                                                width={image.width}
                                                height={image.height}
                                                index={index}
                                            />
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </InView>
                    </div>
                    <div className="w-full lg:w-1/2 h-full">
                        <InView triggerOnce={false}>
                            {({ inView, ref }) => (
                                <motion.div
                                    ref={ref}
                                    initial="hidden"
                                    animate={inView ? "visible" : "hidden"}
                                    variants={slideInFromRight(0.5)}
                                    className="rounded-md text-[white] w-full h-full py-[8px] px-[10px] border border-[#E6C77A66] bg-[#00000033] opacity-[0.95]"
                                >
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E6C77A] to-[#D4AF37] text-2xl font-bold">
                                        Backend{" "}
                                    </span>
                                    <br />
                                    <div className="flex flex-row justify-start flex-wrap my-4 gap-8 items-center">
                                        {Backend_skill.map((image, index) => (
                                            <SkillDataProvider
                                                key={index}
                                                src={image.Image}
                                                width={image.width}
                                                height={image.height}
                                                index={index}
                                            />
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </InView>
                    </div>
                </div>
                <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-4">
                    <div className="w-full lg:w-1/2 h-full">
                        <InView triggerOnce={false}>
                            {({ inView, ref }) => (
                                <motion.div
                                    ref={ref}
                                    initial="hidden"
                                    animate={inView ? "visible" : "hidden"}
                                    variants={slideInFromLeft(0.5)}
                                    className="rounded-md text-[white] w-full my-auto py-[8px] px-[10px] border border-[#E6C77A66] bg-[#00000033] opacity-[0.95]"
                                >
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E6C77A] to-[#D4AF37] text-2xl font-bold">
                                        Dev Tools{" "}
                                    </span>
                                    <br />
                                    <div className="flex flex-row justify-around flex-wrap my-4 gap-3 items-center">
                                        {DevTools.map((image, index) => (
                                            <SkillDataProvider
                                                key={index}
                                                src={image.Image}
                                                width={image.width}
                                                height={image.height}
                                                index={index}
                                            />
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </InView>
                    </div>
                    <div className="w-full lg:w-1/2 h-full">
                        <InView triggerOnce={false}>
                            {({ inView, ref }) => (
                                <motion.div
                                    ref={ref}
                                    initial="hidden"
                                    animate={inView ? "visible" : "hidden"}
                                    variants={slideInFromRight(0.5)}
                                    className="rounded-md text-[white] w-full h-full py-[8px] px-[10px] border border-[#E6C77A66] bg-[#00000033] opacity-[0.95]"
                                >
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E6C77A] to-[#D4AF37] text-2xl font-bold">
                                        Libraries{" "}
                                    </span>
                                    <br />
                                    <div className="flex flex-row justify-start flex-wrap my-4 gap-5 items-center">
                                        {libraries.map((image, index) => (
                                            <SkillDataProvider
                                                key={index}
                                                src={image.Image}
                                                width={image.width}
                                                height={image.height}
                                                index={index}
                                            />
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </InView>
                    </div>
                </div>
            </div>
            </div>
        </section>
    );
};

export default Skills;
