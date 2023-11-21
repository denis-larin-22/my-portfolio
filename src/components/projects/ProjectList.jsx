import { BootstrapIcon, CssIcon, FirebaseIcon, HtmlIcon, NextUiIcon, ReactIcon, ReduxIcon, SassIcon, TailwindCssIcon, TsIcon } from "../common/icons/technologies";
import { ProjectCard } from "./ProjectCard";

export const ProjectList = () => {
    const odinsLogo = process.env.PUBLIC_URL + '/assets/odin`s-logo-white.svg';
    const hlegalLogo = process.env.PUBLIC_URL + '/assets/hlegal.svg';
    const asmrLogo = process.env.PUBLIC_URL + '/assets/ASMR_app.svg';

    const list = [
        {
            name: 'Odin`s shoes', logo: odinsLogo, text: 'Website catalog of an assortment of shoes from the manufacturer of the trademark "Odin`s shoes"', link: 'https://github.com/denis-larin-22/odins-store/tree/main',
            technologies: [
                { icon: <ReactIcon />, link: "https://react.dev/" },
                { icon: <ReduxIcon />, link: "https://redux.js.org/" },
                { icon: <FirebaseIcon />, link: "https://firebase.google.com/" },
                { icon: <TailwindCssIcon />, link: "https://tailwindcss.com/" },
                { icon: <NextUiIcon />, link: "https://nextui.org/" },
            ]
        },
        {
            name: 'Hlegal', logo: hlegalLogo, text: 'Final hillel school project. Layout using elements from Bootstrap and using the CSS preprocessor."', link: 'https://github.com/denis-larin-22/hlegal_final_hillel_project',
            technologies: [
                { icon: <HtmlIcon />, link: "https://uk.wikipedia.org/wiki/HTML5" },
                { icon: <CssIcon />, link: "https://uk.wikipedia.org/wiki/CSS" },
                { icon: <SassIcon />, link: "https://sass-lang.com/" },
                { icon: <BootstrapIcon />, link: "https://getbootstrap.com/" }
            ]
        },
        {
            name: 'ASMR-App', logo: asmrLogo, text: 'A set of ASMR sounds for rest, relaxation and sleep with the ability to mix sounds', link: 'https://github.com/denis-larin-22/ASMR_App',
            technologies: [
                { icon: <ReactIcon />, link: "https://react.dev/" },
                { icon: <TsIcon />, link: "https://www.typescriptlang.org/" },
                { icon: <ReduxIcon />, link: "https://redux.js.org/" },
                { icon: <TailwindCssIcon />, link: "https://tailwindcss.com/" },
            ]
        },
    ]

    return (
        <ul className="flex flex-col sm:flex-row flex-wrap gap-10 items-center justify-center mt-[120px]">
            {list.map((project, index) => (
                <li key={index}>
                    <ProjectCard project={project} />
                </li>
            ))}
        </ul>
    )
}