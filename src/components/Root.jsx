// import { useState } from "react";
import { Header } from "./header/Header"
import { Main } from "./Main"
import { Scroll } from "./Scroll"
import { SignaturesTemplate } from "./SignaturesTemplate"
import { Works } from "./works/Works"
// import { FollowCursorCircle } from "./FollowCursorCircle";

export const Root = () => {
    // const [position, setPosition] = useState({ x: 0, y: 0 });

    // const handleMouseMove = (event) => {
    //     setPosition({ x: event.clientX, y: event.clientY });
    // };

    return (
        // <div className="bg-dark min-h-screen" onMouseMove={handleMouseMove}>
        <div className="bg-dark" >
            <SignaturesTemplate mStyles="container mx-auto" signature1={'body'} signature2={null}>
                <div className="min-h-full">
                    <Header />

                    <Main />

                </div>
            </SignaturesTemplate>
            <Scroll />
            <SignaturesTemplate mStyles="container mx-auto" signature1={null} signature2={'body'}>
                <Works />

            </SignaturesTemplate>

            {/* <FollowCursorCircle x={position.x} y={position.y} /> */}
        </div>
    )
}