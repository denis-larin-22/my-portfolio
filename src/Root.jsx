import { About, Feedback, Footer, Hands, Header, Main, MatrixRainingLetters, Projects, Skills } from "./components";

export const Root = () => {
    return (
        <div className="overflow-x-hidden">
            <MatrixRainingLetters />
            <Header />
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