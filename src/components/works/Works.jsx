import { SignaturesTemplate } from "../SignaturesTemplate";
import { motion } from "framer-motion";
import { WorkList } from "./WorkList";

export const Works = () => {
    return (
        <SignaturesTemplate signature1={'section'}>
            <SignaturesTemplate mStyles={' relative flex justify-center items-center'} signature1={'h2'}>
                <motion.h2 className="relative z-10 p-5 mx-10  text-[3.75rem] font-bold leading-normal tracking-[1px] ">My works</motion.h2>
                <motion.div
                    className="absolute top-0 z-[1] border-[5px] border-light-green px-[155px] py-[59px]"
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
            </SignaturesTemplate>

            <WorkList />
        </SignaturesTemplate>
    )
}