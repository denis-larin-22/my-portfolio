import { NeonLink } from "./common";

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
        <header className="max-w-[1400px] mx-auto p-[20px] flex items-center justify-center xsm:justify-between text-[1.5em] xsm:text-m-md" >
            <nav className="flex justify-center gap-x-9 xsm:gap-x-20">
                {links.map((item, index) => (
                    <a key={index} href={item.link} className="p-[0.5em] text-grey hover:text-white border-b-4 border-black hover:border-green duration-200">{item.text}</a>
                ))}
            </nav>

            <NeonLink href="#contact" mStyles="hidden xsm:block">Contact me</NeonLink>
        </header>
    )
}
