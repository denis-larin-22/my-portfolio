import { CallIcon, GitIcon, LinkedInIcon, MailIcon, TelegramIcon } from "./common";
import LinerGradient from "./common/icons/LineGradient";


export const Footer = () => {
    const blockStyles = "flex flex-col gap-y-[10px] ";
    const itemStyles = "flex items-center gap-x-[5px]";
    const links = [
        {
            text: "About",
            link: "#about"
        },
        {
            text: "Skills",
            link: "#skills"
        },
        {
            text: "Projects",
            link: "#projects"
        },
    ]
    const contactLinks = [{ icon: <LinkedInIcon />, link: '/' }, { icon: <GitIcon />, link: '/' }, { icon: <TelegramIcon />, link: '/' }]

    return (
        <footer className="mt-[30px] text-grey">
            <LinerGradient />

            <div className="container py-[20px] xsm:py-[70px] flex items-center justify-between ">
                <ul className="">
                    <li className={blockStyles + "mb-[20px] sm:mb-[44px]"}>
                        <span className="text-white">Contacts</span>
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
                        <span className="text-white">Address</span>
                        <p className={itemStyles}>Ukraine, Kharkiv</p>
                    </li>
                </ul>

                <nav className="text-grey">
                    <div className="flex flex-col gap-y-3 xsm:gap-y-[30px] mb-[45px]">
                        {links.map((item, index) => (
                            <a key={index} href={item.link} className="">{item.text}</a>
                        ))}
                    </div>

                    <div className="flex items-center gap-x-[8px]">
                        {contactLinks.map((item, index) => (
                            <a key={index} href={item.link}>{item.icon}</a>
                        ))}
                    </div>
                </nav>
            </div>
        </footer>
    )
}