import { CallIcon, GitIcon, LinkedInIcon, MailIcon, SmartPhoneIcon, TelegramIcon } from "../common";
import { InputForm } from "./InputForm";

const ContactLinks = () => {
    const contactLinks = [{ icon: <LinkedInIcon />, link: '/' }, { icon: <GitIcon />, link: '/' }, { icon: <TelegramIcon />, link: '/' }];

    return (
        <div className="p-[5px] flex items-center gap-x-[8px] bg-black rounded-full w-fit">
            {contactLinks.map((item, index) => (
                <a key={index} href={item.link} className="">{item.icon}</a>
            ))}
        </div>
    )
}

export const Feedback = () => {
    const contactList = [
        { header: 'Gmail', text: 'denislarin2017@gmail.com', icon: <MailIcon /> },
        { header: 'Phone', text: '+380 98 126 85 08', icon: <CallIcon /> },
        { header: 'Connecting', text: <ContactLinks />, icon: <SmartPhoneIcon /> }
    ]


    return (
        <section id="contact" className="flex flex-col items-center  my-4">
            <ul className="hidden lg:flex gap-8">
                {contactList.map((item, index) => (
                    <li key={index} className="min-w-[200px] bg-green text-black font-bold p-[25px] flex flex-col gap-y-2 items-center rounded-t-3xl duration-200 hover:scale-110">
                        <div className="h-[3em] w-[3em] flex items-center justify-center rounded-full bg-black">
                            {item.icon}
                        </div>
                        <p className="text-m-md font-bold">{item.header}</p>
                        {item.text}
                    </li>
                ))}
            </ul>

            <ul className="flex flex-col-reverse gap-y-3 lg:hidden bg-green text-black p-[20px] items-center rounded-t-3xl">
                {contactList.map((item, index) => {
                    if (item.header === 'Connecting') return (
                        <li key={index}>
                            {item.text}
                        </li>
                    )

                    return (
                        <li key={index} className="flex items-center gap-3 font-bold">
                            <div className="h-[3em] w-[3em] flex items-center justify-center rounded-full bg-black">
                                {item.icon}
                            </div>
                            {item.text}
                        </li>
                    )
                })}

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