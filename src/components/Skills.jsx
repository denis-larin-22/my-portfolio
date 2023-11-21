import { motion, useInView } from "framer-motion";
import { CssIcon, HtmlIcon, JsIcon, ReactIcon, ReduxIcon, TailwindCssIcon } from "./common";
import { useRef } from "react";
import { SignaturesTemplate } from "./common/signatures/SignaturesTemplate";

export const Skills = () => {
    const skills = ['html', 'css', 'JavaScript', 'es5/es6', 'TypeScript', 'react js', 'redux', 'rest', 'sass', 'npm', 'tailwind css', 'next ui', 'material ui', 'bootstrap', 'git', 'framer motion']
    const icons = [
        { icon: <HtmlIcon />, link: 'https://uk.wikipedia.org/wiki/HTML5' },
        { icon: <CssIcon />, link: 'https://ru.wikipedia.org/wiki/CSS' },
        { icon: <JsIcon />, link: 'https://ru.wikipedia.org/wiki/JavaScript' },
        { icon: <ReactIcon />, link: 'https://react.dev/' },
        { icon: <ReduxIcon />, link: 'https://redux.js.org/' },
        { icon: <TailwindCssIcon />, link: 'https://tailwindcss.com/' }
    ];
    //Animation
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const getInView = (delay) => ({
        transform: isInView ? "translateY(0)" : "translateY(100px)",
        opacity: isInView ? 1 : 0,
        transition: `all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) ${delay}`,
    });

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
        <section id="skills" className="mt-9 md:mt-0 min-h-fit sm:min-h-screen flex flex-col xsm:flex-row justify-center xsm:justify-between items-center xsm:items-start ">
            <motion.div style={getInView('0.5s')} className="self-center sm:self-start">
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
                                <a href={item.link} target="_blank" rel="noreferrer">
                                    {item.icon}
                                </a>
                            </motion.li>
                        ))}
                    </motion.ul>
                </SignaturesTemplate>
            </motion.div>

            <motion.ul
                ref={ref}
                className="m-0 lg:mt-32 min-w-[200px] grid grid-cols-2 xsm:block text-m-md uppercase"
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? 'visible' : 'none'}
            >
                {skills.map((skill, index) => (
                    <motion.li key={index} variants={itemVariants} className="text-grey duration-100 hover:text-white hover:border-l-4 hover:border-green hover:pl-3">
                        {skill}
                    </motion.li>
                ))}
            </motion.ul>
        </section>
    )
}