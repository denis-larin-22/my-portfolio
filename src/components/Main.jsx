import { SignaturesTemplate } from "./SignaturesTemplate";
import { motion } from "framer-motion";

export const Main = () => {


    return (
        <main className="flex justify-between items-center pt-[15.6rem] pb-[9.4rem]">
            <div className="max-w-[479px] min-h-[395px]">
                <SignaturesTemplate mStyles={'text-[3.75rem] font-bold leading-[4.5rem]'} signature1={'h1'}>
                    <p>Hi,</p>
                    <h1 className="">I`m <span className="text-light-green">D</span>enis,</h1>
                    <p> w<span className="text-light-green">e</span>b developer</p>
                </SignaturesTemplate>
                <SignaturesTemplate mStyles={'pt-[10px] pb-[30px] flex items-center gap-3 text-grey-text text-[1.25rem] font-normal leading-normal'} signature1={'p'}>
                    <p>Front End Developer /</p>
                </SignaturesTemplate>
                <motion.button
                    className="px-[65px] py-[12px] border-2 text-light-green text-[1rem] font-normal leading-normal"
                    animate={{
                        scale: [1, 1.1, 1, 1.05, 1],
                    }}
                    transition={{
                        duration: 2,
                        ease: "easeInOut",
                        times: [0, 0.2, 0.5, 0.8, 1],
                        repeat: Infinity,
                        repeatDelay: 1
                    }}
                >
                    Contact me !
                </motion.button>
            </div>

            <SignaturesTemplate mStyles={'flex flex-col items-center'} signature1={'a'}>
                <div className="flex flex-col items-center gap-7 px-[22px] py-[25px] border-2 border-white rounded-full">
                    <button className="">
                        <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path id="Vector" fillRule="evenodd" clipRule="evenodd" d="M0 20.875C0 31.9207 8.95433 40.875 20 40.875C31.0457 40.875 40 31.9207 40 20.875C40 9.82933 31.0457 0.875 20 0.875C8.95433 0.875 0 9.82933 0 20.875ZM16.3333 30.0417L16.6736 24.9436L25.9474 16.5742C26.3544 16.2129 25.8586 16.0367 25.3183 16.3644L13.8728 23.5852L8.92892 22.0422C7.86125 21.7153 7.85358 20.9817 9.16858 20.4543L28.4336 13.0258C29.3135 12.6263 30.1627 13.2371 29.8268 14.5837L26.546 30.0443C26.3169 31.1429 25.6531 31.4057 24.7333 30.8982L19.7356 27.2057L17.3333 29.5417C17.3257 29.549 17.3182 29.5563 17.3107 29.5637C17.0421 29.8252 16.8197 30.0417 16.3333 30.0417Z" fill="white" />
                        </svg>

                    </button>
                    <button className="">
                        <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M20 0.875C8.95433 0.875 0 9.82933 0 20.875C0 31.9207 8.95433 40.875 20 40.875C31.0457 40.875 40 31.9207 40 20.875C40 9.82933 31.0457 0.875 20 0.875ZM19.9699 22.5578L12.4989 17.1346V28.5667H11.2507C10.5553 28.5667 10.0026 28.0139 10.0026 27.3185V14.6767C10.0026 14.6237 10.0058 14.5741 10.012 14.5276C10.0347 14.3293 10.107 14.1352 10.2344 13.9634C10.6445 13.4107 11.4469 13.2858 12.0175 13.6959L19.9877 19.4909L28.0115 13.6247C28.5642 13.2145 29.3488 13.3393 29.7589 13.9099C29.9769 14.2037 30.0437 14.563 29.9728 14.8967V27.3363C29.9728 28.0139 29.4201 28.5667 28.7247 28.5667H27.4766V17.1073L19.9699 22.5578Z" fill="white" />
                        </svg>

                    </button>
                    <button className="">
                        <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M30.8122 2.06258C30.0211 1.27057 29.0831 0.875 27.9999 0.875H12.0003C10.9167 0.875 9.9793 1.2709 9.18761 2.06258C8.39593 2.85383 8.00003 3.79152 8.00003 4.87479V36.875C8.00003 37.9581 8.39593 38.8957 9.18761 39.6872C9.9793 40.479 10.9167 40.875 12.0003 40.875H27.9999C29.083 40.875 30.0211 40.4787 30.8121 39.6872C31.6039 38.8957 31.9999 37.9581 31.9999 36.875V4.87479C31.9999 3.79152 31.6044 2.85426 30.8122 2.06258ZM17.5001 4.87479H22.5006C22.8339 4.87479 23.0002 5.04149 23.0002 5.37489C23.0002 5.70818 22.8338 5.8751 22.5006 5.8751H17.5001C17.1668 5.8751 17.0001 5.70818 17.0001 5.37489C17 5.04149 17.1667 4.87479 17.5001 4.87479ZM21.7662 38.6407C21.2763 39.1299 20.6879 39.3748 20.0002 39.3748C19.3128 39.3748 18.7244 39.1299 18.2347 38.6407C17.745 38.1507 17.5001 37.5619 17.5001 36.875C17.5001 36.1873 17.7453 35.5987 18.2347 35.1092C18.724 34.62 19.3129 34.3743 20.0002 34.3743C20.688 34.3743 21.2764 34.62 21.7662 35.1092C22.2558 35.5987 22.5004 36.1873 22.5004 36.875C22.5004 37.5627 22.2555 38.1508 21.7662 38.6407ZM29.0004 31.8752C29.0004 32.1457 28.9016 32.3809 28.7033 32.5784C28.5049 32.7761 28.2711 32.8746 28.0006 32.8746H12.0003C11.7295 32.8746 11.4951 32.7758 11.2972 32.5784C11.0993 32.3809 11.0004 32.1457 11.0004 31.8752V9.87533C11.0004 9.60454 11.0992 9.36997 11.2972 9.1723C11.4952 8.97473 11.7295 8.87524 12.0003 8.87524H27.9999C28.2711 8.87524 28.5051 8.9743 28.7033 9.1723C28.9016 9.37008 29 9.60454 29 9.87533V31.8751H29.0004V31.8752Z" fill="white" />
                        </svg>
                    </button>
                </div>
            </SignaturesTemplate>
        </main>
    )
}