import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ProjectList } from "./ProjectList";

export const Projects = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <section id="projects" className="min-h-fit sm:min-h-screen py-[1rem] my-[9em]">
            <div className="relative flex justify-center items-center">
                <motion.h3 initial={{ opacity: 0 }} animate={isInView ? { opacity: 1, transition: { duration: 1, delay: 0.5 } } : 'none'} className="relative z-10 p-5 mx-10  text-m-2xl">Projects</motion.h3>
                <motion.div
                    className="absolute top-0 z-0 border-[5px] border-light-green px-[11.1em] py-[3.3em]"
                    animate={{
                        rotate: [0, '180deg', '180deg', 0]
                    }}
                    transition={{
                        duration: 10,
                        ease: "linear",
                        repeat: Infinity,
                        repeatDelay: 1
                    }}
                ></motion.div>
            </div>

            <motion.div ref={ref} initial={{ opacity: 0, y: '100px' }} animate={isInView ? { opacity: 1, y: 0, transition: { duration: 1, delay: 0.7 } } : 'null'}>
                <ProjectList isIInView={isInView} />
            </motion.div>
        </section>
    )
}