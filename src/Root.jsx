import { About } from "./components/About"
import { Feedback } from "./components/feedback/Feedback"
import MatrixRainingLetters from "./components/matrix-bcg/MatrixBcg"
import { Hands } from "./components/hands/Hands"
import { Main } from "./components/main/Main"
import { Header } from "./components/Header"
import { Footer } from "./components/Footer"
import { Skills } from "./components/Skills"
import { Projects } from "./components/projects/Projects"

export const Root = () => {
    // const [position, setPosition] = useState({ x: 0, y: 0 });

    // const handleMouseMove = (event) => {
    //     setPosition({ x: event.clientX, y: event.clientY });
    // };

    return (
        <div className="overflow-x-hidden ">
            <MatrixRainingLetters />
            <div className="container">
                <Header />
            </div>
            <Main />
            <div className="container">
                <About />
                <Skills />
                <Projects />
                <Feedback />
                <Hands />
            </div>
            <Footer />
        </div>

        //КОШКА - СБОЙ В МАТРИЦЕ!!!!!!


        // <div className="bg-dark min-h-screen" onMouseMove={handleMouseMove}>
        // <div className="bg-dark" >
        //     <SignaturesTemplate mStyles="container mx-auto" signature1={'body'} signature2={null}>
        //         <div className="min-h-full">
        //             <Header />

        //             <Main />

        //         </div>
        //     </SignaturesTemplate>
        //     <Scroll />
        //     <SignaturesTemplate mStyles="container mx-auto" signature1={null} signature2={'body'}>
        //         <Works />
        //         <About />
        //         <Footer />
        //     </SignaturesTemplate>

        //     {/* <FollowCursorCircle x={position.x} y={position.y} /> */}
        // </div>
    )
}