import { useRef } from "react";
import { SignaturesTemplate } from "./SignaturesTemplate";
import { motion, useInView } from "framer-motion";
import { NeonLink } from "./common";

export const About = () => {
    //Animation
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const getInView = (delay) => ({
        transform: isInView ? "translateY(0)" : "translateY(100px)",
        opacity: isInView ? 1 : 0,
        transition: `all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) ${delay}`,
    })

    return (
        <article id="about" ref={ref} className="min-h-screen flex flex-col max-w-[900px]">
            <motion.div style={getInView('0.5s')}>
                <SignaturesTemplate signature1={'h2'}>
                    <h3 className="text-m-2xl text-green">About me</h3>
                </SignaturesTemplate>
            </motion.div>

            <SignaturesTemplate mStyles={'flex flex-col text-m-md'} signature1={'p'}>
                <motion.p style={getInView('0.7s')} >I’m a <span className="font-bold">Front-End Developer</span> located in Ukraine. I have
                    a serious passion for UI effects, animations and
                    creating intuitive, dynamic user experiences.</motion.p>
                <motion.p style={getInView('0.9s')} className="py-[20px]">Well-organised person, problem solver, independent
                    employee with high attention to detail.</motion.p>
                <motion.p style={getInView('1.1s')} >Interested in the entire frontend spectrum and
                    working on ambitious projects with positive people.</motion.p>
            </SignaturesTemplate>

            <motion.div style={getInView('1.2s')} className="mt-[20px] flex gap-4">
                <NeonLink href="#contact">Contact me</NeonLink>
                <NeonLink >Get CV</NeonLink>
            </motion.div>
        </article>
    )
}