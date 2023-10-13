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
            text: "Works",
            link: "#works"
        },
    ]

    return (
        <header className="w-full flex items-center justify-between py-[20px]" >
            <nav className="flex gap-x-20">
                {links.map((item, index) => (
                    <a key={index} href={item.link} className="px-[5px] pb-3 border-b-4 border-black text-grey duration-200 hover:text-white hover:border-b-4 hover:border-green">{item.text}</a>
                ))}
            </nav>
            {/* <a href="contact" className="border-2 rounded-3xl py-[8px] px-[20px] border-green">Contact me</a> */}
            <NeonLink href="#contact">Contact me</NeonLink>
        </header>
    )
}
