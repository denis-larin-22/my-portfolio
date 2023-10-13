import { CallIcon, GitIcon, LinkedInIcon, MailIcon, TelegramIcon } from "./common";
import LinerGradient from "./common/icons/LineGradient";


export const Footer = () => {
    const blockStyles = "flex flex-col gap-y-[10px] text-green ";
    const itemStyles = "text-white flex items-center gap-x-[5px]";
    const anchorLinks = [{ text: 'Home', link: '/' }, { text: 'About me', link: '/' }, { text: 'Works', link: '/' }];
    const contactLinks = [{ icon: <LinkedInIcon />, link: '/' }, { icon: <GitIcon />, link: '/' }, { icon: <TelegramIcon />, link: '/' }]

    return (
        <footer className="mt-[30px]">
            <LinerGradient />

            <div className="container py-[70px] flex items-center justify-between">
                <ul className="">
                    <li className={blockStyles + "mb-[44px]"}>
                        Contacts
                        <p className={itemStyles}>
                            <MailIcon />
                            denislarin2017@gmail.com
                        </p>
                        <p className={itemStyles}>
                            <CallIcon />
                            +380 98 126 85 08
                        </p>
                    </li>

                    <li className={blockStyles}>
                        Address
                        <p className={itemStyles}>Ukraine, Kharkiv</p>
                    </li>
                </ul>

                <nav className="">
                    <div className="flex flex-col gap-y-[29px] mb-[45px]">
                        {anchorLinks.map((item, index) => (
                            <a key={index} href={item.link} className="">{item.text}</a>
                        ))}
                    </div>

                    <div className="flex items-center gap-x-[8px]">
                        {contactLinks.map((item, index) => (
                            <a key={index} href={item.link} className="">{item.icon}</a>
                        ))}
                    </div>
                </nav>
            </div>
        </footer>
    )
}