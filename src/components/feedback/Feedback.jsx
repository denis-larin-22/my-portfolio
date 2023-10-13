import { CallIcon, GitIcon, LinkedInIcon, MailIcon, SmartPhoneIcon, TelegramIcon } from "../common";
import { InputForm } from "./InputForm";

export const Feedback = () => {
    const contactLinks = [{ icon: <LinkedInIcon />, link: '/' }, { icon: <GitIcon />, link: '/' }, { icon: <TelegramIcon />, link: '/' }]

    return (
        <section id="contact" className="flex flex-col items-center  my-4">
            <ul className="flex gap-8">
                <li className="min-w-[200px] bg-green text-black font-bold p-[25px] flex flex-col gap-y-2 items-center rounded-t-3xl duration-200 hover:scale-110">
                    <div className="h-[40px] w-[40px] flex items-center justify-center rounded-full bg-black">
                        <MailIcon />
                    </div>
                    <p className="text-m-md font-bold">Gmail</p>
                    <p className="">denislarin2017@gmail.com</p>
                </li>
                <li className="min-w-[200px] bg-green text-black font-bold p-[25px] flex flex-col gap-y-2 items-center rounded-t-3xl duration-200 hover:scale-110">
                    <div className="h-[40px] w-[40px] flex items-center justify-center rounded-full bg-black">
                        <CallIcon />
                    </div>
                    <p className="text-m-md font-bold">Phone</p>
                    <p className="">+380 98 126 85 08</p>
                </li>
                <li className="min-w-[200px] bg-green text-black font-bold p-[25px] flex flex-col gap-y-2 items-center rounded-t-3xl duration-200 hover:scale-110">
                    <div className="h-[40px] w-[40px] flex items-center justify-center rounded-full bg-black">
                        <SmartPhoneIcon />
                    </div>
                    <p className="text-m-md font-bold">Connecting</p>
                    <div className="p-[5px] flex items-center gap-x-[8px] bg-black rounded-full w-fit">
                        {contactLinks.map((item, index) => (
                            <a key={index} href={item.link} className="">{item.icon}</a>
                        ))}
                    </div>
                </li>
            </ul>
            <InputForm />


            {/* <div className="self-end text-m-xl max-w-[550px]">
                <Rabbit />
                Follow the white rabbit and <span className="text-green">contact</span> me
                <SignaturesTemplate mStyles={'flex items-center'} signature1={'a'}>
                    <div className="flex items-center gap-7 px-[22px] py-[25px]">
                        <button className="">
                            <TelegramIcon />
                        </button>
                        <button className="">
                            <LinkedInIcon />
                        </button>
                        <button className="">
                            <GitIcon />
                        </button>
                    </div>
                </SignaturesTemplate>
            </div>
            <InputForm /> */}
        </section>
    )
}