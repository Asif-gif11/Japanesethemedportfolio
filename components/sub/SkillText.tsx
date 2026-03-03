"use client";
import React from "react";
import { motion } from "framer-motion";
import { Cinzel_Decorative } from "next/font/google";
import {
	slideInFromLeft,
    slideInFromRight,
    slideInFromTop,
} from "@/utils/motion";
import { InView } from "react-intersection-observer";

const cinzelDecorative = Cinzel_Decorative({
    subsets: ["latin"],
    weight: ["700", "900"],
});

const SkillText = () => {
    return (
        <div className="w-full h-auto pt-20 flex flex-col items-center justify-center">
            <InView triggerOnce={false}>
                {({ inView, ref }) => (
                    <motion.div
                        ref={ref}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        variants={slideInFromTop}
                        className={`text-[40px] pt-[5rem] pb-3 md:p-0 font-medium text-center text-[#F3EFEA] z-50 ${cinzelDecorative.className}`}
                        style={{ textShadow: "0 6px 24px rgba(0,0,0,0.55)" }}
                    >
                        My
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E6C77A] to-[#D4AF37]">
                            {" "}
                            Skills{" "}
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
                        variants={slideInFromLeft(0.5)}
                        className="cursive text-[20px] text-[#F3EFEA] mb-10 mt-[10px] text-center"
                    >
                        Never miss a task, deadline or idea
                    </motion.div>
                )}
            </InView>
        </div>
    );
};

export default SkillText;
