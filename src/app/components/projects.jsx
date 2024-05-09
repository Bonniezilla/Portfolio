'use client';

import { useEffect, useState, useRef } from "react";
import { useInView } from 'react-intersection-observer';

const Projects = () => {
    const projects = [
        {
            id: 1,
            content: 'peaceword',
            title: 'PeaceWord',
            url: 'https://peace-word.vercel.app',
            github: 'https://github.com/Bonniezilla/peace-word-react-app',
        },
        {
            id: 2,
            content: 'siteadvogada',
            title: 'Site Profissional de Advogada',
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
        <section className="h-screen w-screen bg-white flex justify-between items-center 
        p-12 gap-12">
            {projects.map((project, index) => (
                <div ref={ref}
                    className="bg-slate-800 flex flex-col border-purple-800 border-solid
            border-8 h-5/6 w-full rounded-lg p-12 justify-between items-center gap-4">
                    <h1 ref={(el) => (titleRefs.current[index] = el)}
                        className="text-white text-3xl
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
