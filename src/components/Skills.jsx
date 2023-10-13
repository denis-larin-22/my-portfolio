import { motion, useInView } from "framer-motion";
import { CssIcon, HtmlIcon, JsIcon, ReactIcon, ReduxIcon, TailwindCssIcon } from "./common";
import { useRef } from "react";
import { SignaturesTemplate } from "./SignaturesTemplate";

export const Skills = () => {
    const skills = ['html', 'css', 'JavaScript', 'es5/es6', 'react js', 'redux', 'rest', 'sass', 'npm', 'tailwind css', 'material ui', 'bootstrap', 'git', 'framer motion']
    const icons = [{ icon: <HtmlIcon />, link: '/' }, { icon: <CssIcon />, link: '/' }, { icon: <JsIcon />, link: '/' }, { icon: <ReactIcon />, link: '/' }, { icon: <ReduxIcon />, link: '/' }, { icon: <TailwindCssIcon />, link: '/' }];
    //Animation
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const getInView = (delay) => ({
        transform: isInView ? "translateY(0)" : "translateY(100px)",
        opacity: isInView ? 1 : 0,
        transition: `all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) ${delay}`,
    })

    const containerVariants = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                delayChildren: 0.4,
                staggerChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1
        }
    };

    return (
        <section id="skills" ref={ref} className="min-h-screen flex flex-col xsm:flex-row justify-center xsm:justify-between items-center xsm:items-start lg:items-center">
            <motion.div style={getInView('0.5s')} className="self-start">
                <SignaturesTemplate signature1='h3'>
                    <h3 className="text-m-2xl text-light-green">Skills</h3>
                </SignaturesTemplate>
                <SignaturesTemplate signature1='ul' >
                    <motion.ul
                        className="grid grid-cols-3 justify-between gap-[10px] lg:gap-[30px]"
                        variants={containerVariants}
                        initial="hidden"
                        animate={isInView ? 'visible' : 'none'}
                    >
                        {icons.map((item, index) => (
                            <motion.li key={index} className="h-[80px] md:h-[150px] lg:h-[200px] w-[80px] md:w-[150px] lg:w-[200px]" variants={itemVariants} >
                                <a href={item.link} className="">
                                    {item.icon}
                                </a>
                            </motion.li>
                        ))}
                    </motion.ul>
                </SignaturesTemplate>
            </motion.div>
            <motion.div className="" style={getInView('0.7s')}>
                <motion.ul
                    className="min-w-[200px] grid grid-cols-2 xsm:block text-m-md uppercase"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'none'}
                >
                    {skills.map((skill, index) => (
                        <motion.li key={index} variants={itemVariants} className="text-grey duration-100 hover:text-white hover:border-l-4 hover:border-green hover:pl-3 cursor-default">
                            {skill}
                        </motion.li>
                    ))}
                </motion.ul>
            </motion.div>
        </section>
    )
}