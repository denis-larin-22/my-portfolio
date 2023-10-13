import { JsIcon, ReactIcon, ReduxIcon, TailwindCssIcon } from "../common/icons/technologies";

export const ProjectCard = () => {
    const path = process.env.PUBLIC_URL + '/assets/work.webp';

    return (
        <article
            className="relative h-[400px] w-[350px] group overflow-hidden"
            style={{ backgroundImage: `url(${path})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
            <div className="p-[20px] absolute -right-[100%] flex flex-col justify-between duration-200 group-hover:right-0 w-full h-full bg-transparent-black">
                <h5 className="text-m-md font-bold uppercase">Project name</h5>
                <p className="">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem esse expedita suscipit ipsa. Veniam omnis iusto, beatae nulla quasi corrupti delectus quo corporis possimus, voluptate laboriosam quis unde cum fuga.</p>
                <p className="font-bold">Technologies</p>
                <ul className="flex gap-x-2">
                    <li className="h-[40px]"><JsIcon /></li>
                    <li className="h-[40px]"><ReactIcon /></li>
                    <li className="h-[40px]"><ReduxIcon /></li>
                    <li className="h-[40px]"><TailwindCssIcon /></li>
                </ul>
                <button className="relative group/button position w-[150px] h-[50px] overflow-hidden">
                    <span className="absolute top-0 -left-[90%] group-hover/button:left-0 z-0 inline-block w-full group-hover/button:w-full h-full duration-200 bg-green"></span>
                    <span className="relative z-10 group-hover/button:text-black font-bold">Show more</span>
                </button>
            </div>
        </article>
        // <a href="/" class="group block max-w-xs mx-auto rounded-lg p-6 text-black bg-white ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-green ">
        //     <div class="flex items-center space-x-3">
        //         <h3 class="text-slate-900 group-hover:text-white text-sm font-semibold">New project</h3>
        //     </div>
        //     <p class="text-slate-500 group-hover:text-white text-sm">Create a new project from a variety of starting templates.</p>
        // </a>
    )
}