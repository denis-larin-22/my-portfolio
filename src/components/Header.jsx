import { NeonLink } from "./common"

export const Header = () => {
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

    return (
        <header className="w-full flex items-center justify-between m-[20px]" >
            <nav className="flex gap-9 justify-center xsm:gap-x-20">
                {links.map((item, index) => (
                    <a key={index} href={item.link} className="px-[5px] p-[0.8em] border-b-4 border-black text-grey duration-200 hover:text-white hover:border-b-4 hover:border-green">{item.text}</a>
                ))}
            </nav>
            {/* <a href="contact" className="border-2 rounded-3xl py-[8px] px-[20px] border-green">Contact me</a> */}
            <NeonLink href="#contact" mStyles="hidden xsm:block">Contact me</NeonLink>
        </header>
    )
}
