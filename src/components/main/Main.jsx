import { Scroll } from "./Scroll";
import { SignaturesTemplate } from "../common/signatures/SignaturesTemplate";
import { motion } from "framer-motion";
import { WordAnimate } from "../common/animate-word/WordAnimate";
import './styles/index.css';
import { useEffect, useState } from "react";
import { Rabbit } from "./Rabbit";

export const Main = () => {
    //Text
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const keyWords = ['matrix', 'matrix', 'js', 'ts', 'react', 'web'];
    const greetings = ['Hi,', 'I`m Denis', 'web', 'developer'];
    //Framer animation
    const variants = {
        visible: { y: 0, opacity: 1, transition: { delay: 2, duration: 0.7 } },
        hidden: { y: '20%', opacity: 0 },
    }
    //Default signatures 
    const signatureStyles = 'font-aurore text-signatures text-grey-sign';
    //Words toggler
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [currentWord, setCurrentWord] = useState(keyWords[0]);

    useEffect(() => {
        const changeWord = () => {
            const nextIndex = currentWordIndex + 1;

            if (nextIndex < keyWords.length) {
                setCurrentWordIndex(nextIndex);
                setCurrentWord(keyWords[nextIndex]);
            } else {
                clearInterval(intervalId);
            }
        };
        const intervalId = setInterval(changeWord, 600);

        setTimeout(() => {
            clearInterval(intervalId);
        }, 4000);

        return () => {
            clearInterval(intervalId);
        };
    }, [currentWordIndex, keyWords]);

    return (
        <motion.div className="min-h-screen flex flex-col justify-evenly">
            <main className="relative container flex flex-col ">
                <div>
                    <motion.p initial="hidden" animate="visible" variants={variants} className={signatureStyles}>{`< h1 >`}</motion.p>
                    {greetings.map((word, index) => {
                        if (word === 'web') {
                            return <p key={index} className="text-m-3xl text-green" >
                                {currentWord}
                            </p>
                        }
                        return (
                            <motion.p
                                key={index}
                                initial="hidden"
                                animate="visible"
                                variants={variants}
                                transition={{ delay: 2, duration: 0.7 }}
                                className="text-m-3xl"
                            >
                                <WordAnimate word={word} delay={true} />
                            </motion.p>
                        )
                    })}
                    <motion.p initial="hidden" animate="visible" variants={variants} className={signatureStyles}>{`< /h1 >`}</motion.p>
                </div>
                <motion.div
                    initial={{ y: '20%', opacity: 0 }}
                    animate={{ y: 0, opacity: 1, transition: { delay: 2.5, duration: 1.5 } }}
                >
                    <SignaturesTemplate mStyles={'pt-[10px] pb-[30px] flex items-center gap-3 text-m-md'} signature1={'p'}>
                        <p className="typewriter typewriter_delay"><span className="text-green">Front End</span> Developer /</p>
                    </SignaturesTemplate>
                </motion.div>

                <Rabbit mStyles="absolute right-0 top-0 md:hidden" />
            </main >
            <motion.div initial="hidden" animate="visible" variants={variants}>
                <Scroll />
            </motion.div>
        </motion.div >
    )
}
