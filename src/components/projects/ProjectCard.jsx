export const ProjectCard = ({ project }) => {
    const { name, logo, text, link, technologies } = project;

    return (
        <article
            className="relative min-h-[400px] w-[280px] xsm:w-[300px] group overflow-hidden grayscale hover:grayscale-0 hover:shadow-card rounded-xl duration-1000"
            style={{
                backgroundImage: `url(${logo})`,
                backgroundSize: '200px',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
            }}
        >
            <div className="p-[20px] absolute -right-[100%] flex flex-col justify-evenly sm:justify-between duration-200 group-hover:right-0 w-full h-full bg-transparent-black text-m-md sm:text-m-sm">
                <div>
                    <h5 className="font-bold uppercase pb-[10px]">{name}</h5>
                    <p>{text}</p>
                </div>
                <div>
                    <p className="font-bold">Technologies</p>
                    <ul className="flex gap-x-2">
                        {technologies.map((technology, index) => (
                            <li key={index} className="h-[40px]">
                                <a href={technology.link} target="_blank" rel="noreferrer">{technology.icon}</a>
                            </li>
                        ))}
                    </ul>
                </div>
                <a href={link} target="_blank" rel="noreferrer" className="group/button relative w-36 h-12 pt-[11px] px-4 overflow-hidden">
                    <span className="absolute top-0 -left-[90%] group-hover/button:left-0 z-0 inline-block w-full h-full group-hover/button:w-full duration-200 bg-green"></span>
                    <span className="relative z-10 group-hover/button:text-black font-bold">Open project</span>
                </a>
            </div>
        </article>
    )
}