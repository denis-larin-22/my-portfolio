import { motion } from "framer-motion";
import { Rabbit } from "./Rabbit";

export const Scroll = () => {
    return (
        <div className="hidden md:flex p-5 mt-5 justify-between items-center">
            {[1, 2, 3].map((index) => {
                if (index === 2) return <Rabbit key={index} mStyles="absolute -top-[100%] right-[10%] max-w-fit" />

                return (
                    <div key={index} className="flex flex-col items-center justify-center">
                        <p className="rotate-90 pr-[60px] text-[1rem] font-normal leading-normal">follow me</p>
                        {[1, 2, 3].map((index) => <motion.svg
                            key={index}
                            width="23"
                            height="22"
                            viewBox="0 0 23 22"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            animate={{
                                opacity: [1, 0],
                                y: ['0px', '40px'],
                                scale: [1, 1.1, 1.2, 1.3, 1.4, 1.5]
                            }}
                            transition={{
                                duration: 1,
                                ease: "easeIn",
                                repeat: Infinity,
                                repeatDelay: 1
                            }}
                        >
                            <g opacity="0.78521">
                                <mask id="path-1-inside-1_1_50" fill="white">
                                    <path d="M11.5 0.534973L22.1066 11.1416L11.5 21.7482L0.893394 11.1416L11.5 0.534973Z" />
                                </mask>
                                <path d="M11.5 21.7482L10.0858 23.1624L11.5 24.5766L12.9142 23.1624L11.5 21.7482ZM20.6924 9.72737L10.0858 20.334L12.9142 23.1624L23.5208 12.5558L20.6924 9.72737ZM12.9142 20.334L2.30761 9.72737L-0.52082 12.5558L10.0858 23.1624L12.9142 20.334Z" fill="#8D8D8D" mask="url(#path-1-inside-1_1_50)" />
                            </g>
                        </motion.svg>)}
                    </div>
                )
            })}
        </div>
    )
}