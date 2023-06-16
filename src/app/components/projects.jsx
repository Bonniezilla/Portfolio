'use client';

import { useEffect, useRef } from "react";
import { useInView } from 'react-intersection-observer';

const Projects = () => {
    const projects = [
        {
            id: 1,
            content: 'peaceword',
            title: 'PeaceWord',
            url: 'https://better-passwordgenerator.onrender.com',
            github: 'https://github.com/Bonniezilla/passwordgenerator'
        },
        {
            id: 2,
            content: 'secondproject',
            title: 'Second Project',
            url: 'project2.com',
            github: 'https://github.com/Bonniezilla/'
        },
    ]

    const { ref, inView } = useInView({
        triggerOnce: true,
    });
    const titleRefs = useRef([]);

    useEffect(() => {
        if (inView) {
            titleRefs.current.map((ref, index) => {
                titleRefs.current[index].classList.remove('invisible')
            })
        }
    }, [inView]);

    return (
        <section className="h-screen w-screen bg-white flex justify-between items-center 
        p-12 gap-12">
            {projects.map((project, index) => (
                <div ref={ref}
                    className="bg-slate-700 flex flex-col border-purple-500 border-solid
            border-2 h-5/6 w-full rounded-xl p-12 justify-between items-center">
                    <h1 ref={(el) => (titleRefs.current[index] = el)} 
                    className="text-white text-3xl
                    animate-text-entry-3 invisible">{project.title}</h1>
                    <div className="h-3/5 text-center bg-slate-800 border-2 border-white rounded-lg
              w-5/6 p-6">
                        <img src={'/' + project.content} />
                    </div>
                    <a href={project.url} target="_blank"
                        className="bg-white border-2 border-slate-800 rounded-sm w-2/5 
              flex items-center text-slate-800
              justify-center hover:bg-slate-800 hover:border-white 
              hover:text-white duration-300">Project</a>
                    <a href={project.github} target="_blank"
                        className="bg-slate-800 border-2 border-white rounded-sm w-2/5 
              flex items-center text-white
              justify-center hover:bg-white hover:border-slate-800 
              hover:text-slate-800 duration-300">Github</a>
                </div>
            ))}
        </section>
    )
}

export default Projects;