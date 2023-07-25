import { SignaturesTemplate } from "../SignaturesTemplate"

export const Header = () => {

    return (
        <SignaturesTemplate mStyles={'w-full flex items-center justify-between'} signature1={'header'} >
            <nav>
                <a href="/" className="px-[5px]">Home</a>
                <a href="/" className="px-[5px]">Works</a>
                <a href="/" className="px-[5px]">About</a>
            </nav>
        </SignaturesTemplate>
    )
}
