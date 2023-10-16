import { About } from "./components/About"
import { Feedback } from "./components/feedback/Feedback"
import MatrixRainingLetters from "./components/matrix-bcg/MatrixBcg"
import { Hands } from "./components/hands/Hands"
import { Main } from "./components/main/Main"
import { Header } from "./components/Header"
import { Footer } from "./components/Footer"
import { Skills } from "./components/Skills"
import { Projects } from "./components/projects/Projects";

export const Root = () => {
    // const [position, setPosition] = useState({ x: 0, y: 0 });

    // const handleMouseMove = (event) => {
    //     setPosition({ x: event.clientX, y: event.clientY });
    // };

    return (
        <div className="overflow-x-hidden">
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
    )
}