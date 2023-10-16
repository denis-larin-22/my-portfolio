import { ProjectCard } from "./ProjectCard";

export const ProjectList = () => {
    const list = [{ name: 'HILLEL', text: 'Final work for basic course', link: 'https://github.com/denis-larin-22/hlegal_final_hillel_project' }, { name: 'HILLEL', text: 'Final work for basic course', link: 'https://github.com/denis-larin-22/hlegal_final_hillel_project' }, { name: 'HILLEL', text: 'Final work for basic course', link: 'https://github.com/denis-larin-22/hlegal_final_hillel_project' }]

    return (
        <ul className="flex flex-col sm:flex-row flex-wrap gap-10 items-center justify-center mt-[120px]">
            {list.map((item, index) => (
                <li key={index}>
                    <ProjectCard value={item} />
                </li>
            ))}
        </ul>
    )
}