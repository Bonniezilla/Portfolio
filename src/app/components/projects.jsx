'use client';

import { useEffect, useState, useRef } from "react";
import { useInView } from 'react-intersection-observer';

const Projects = () => {
    const projects = [
        {
            id: 1,
            content: 'peaceword',
            title: 'PEACEWORD',
            url: 'https://peace-word.vercel.app',
            github: 'https://github.com/Bonniezilla/peace-word-react-app',
        },
        {
            id: 2,
            content: 'siteadvogada',
            title: 'SITE PROFISSIONAL DE ADVOGADA',
            url: 'project2.com',
            github: 'https://github.com/Bonniezilla/'
        },
    ]

    const [ isVisible, setIsVisible ] = useState(false);
    const { ref, inView } = useInView({
        triggerOnce: true,
    });
    const titleRefs = useRef([]);

    useEffect(() => {
        if (inView) {
            setIsVisible(true);
        }
    }, [inView]);
    
    useEffect(() => {
        if (isVisible) {
            titleRefs.current.map((ref, index) => {
                titleRefs.current[index].classList.remove('invisible')
            })
        }
    });


    return (
        <section className="h-full w-screen bg-white flex flex-col justify-between items-center 
        p-20 gap-24">
            <h1 className="font-bold text-slate-800 text-7xl">PROJETOS</h1>
            {projects.map((project, index) => (
                <div ref={ref}
                    className="bg-slate-800 flex flex-col border-purple-800 border-solid
            border-8 h-full w-4/6 rounded-lg p-12 justify-between items-center gap-12">
                    <h1 ref={(el) => (titleRefs.current[index] = el)}
                        className="text-white text-5xl font-bold
                    animate-text-entry-3 invisible">{project.title}</h1>
                    <div className="h-full text-center bg-slate-800 rounded-lg w-full">
                        <img src={'/images/' + project.content + ".png"} 
                        className="project-image"/>
                    </div>
                    <div className="flex w-full justify-around px-12">
                    <a href={project.url} target="_blank"
                        className="project-icon"><img src="/icons/url.png" className="w-full invert hover:opacity-50 duration-500"/></a>
                    <a href={project.github} target="_blank"
                    className="project-icon"><img src="/icons/github.png" className="w-full brightness-200 hover:opacity-50 duration-500"/></a>
                    </div>
                </div>
            ))}
        </section>
    )
}

export default Projects;
