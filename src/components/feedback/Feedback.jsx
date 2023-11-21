import { CallIcon, GitIcon, LinkedInIcon, MailIcon, SmartPhoneIcon, TelegramIcon } from "../common";
import { InputForm } from "./InputForm";

const ContactLinks = () => {
    const contactLinks = [{ icon: <LinkedInIcon />, link: 'https://www.linkedin.com/in/denis-larin-a12a31241/' }, { icon: <GitIcon />, link: 'https://github.com/denis-larin-22' }, { icon: <TelegramIcon />, link: 'https://t.me/den4ik_larin' }];

    return (
        <div className="p-[5px] flex items-center gap-x-[8px] bg-black rounded-full w-fit">
            {contactLinks.map((item, index) => (
                <a key={index} href={item.link} target="_blank" rel="noreferrer">{item.icon}</a>
            ))}
        </div>
    )
}

export const Feedback = () => {
    const list = [
        { header: 'Gmail', element: 'denislarin2017@gmail.com', icon: <MailIcon /> },
        { header: 'Phone', element: <a href="tel:380981268508">+380 98 126 85 08</a>, icon: <CallIcon /> },
        { header: 'Connecting', element: <ContactLinks />, icon: <SmartPhoneIcon /> }
    ]


    return (
        <section id="contact" className="flex flex-col items-center  my-4">
            <ul className="hidden lg:flex gap-8">
                {list.map((item, index) => (
                    <li key={index} className="min-w-[200px] bg-green text-black font-bold p-[25px] flex flex-col gap-y-2 items-center rounded-t-3xl duration-200 hover:scale-110">
                        <div className="h-[3em] w-[3em] flex items-center justify-center rounded-full bg-black">
                            {item.icon}
                        </div>
                        <p className="text-m-md font-bold">{item.header}</p>
                        {item.element}
                    </li>
                ))}
            </ul>

            <ul className="flex flex-col-reverse gap-y-3 lg:hidden bg-green text-black p-[20px] items-center rounded-t-3xl">
                {list.map((item, index) => {
                    return (
                        <li key={index} className="flex items-center self-start gap-3 font-bold">
                            <div className="h-[3em] w-[3em] flex items-center justify-center rounded-full bg-black">
                                {item.icon}
                            </div>
                            {item.element}
                        </li>
                    )
                })}

            </ul>

            <InputForm />
        </section>
    )
}