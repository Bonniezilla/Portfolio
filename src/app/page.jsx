import About from "./components/about";

export default function Home() {
  const projects = [
    { id: 1, content: 'passwordgenerator', url: 'project1.com', github: 'github.com/Bonniezilla/passwordgenerator' },
    { id: 2, content: 'secondproject', url: 'project2.com', github: 'github.com/Bonniezilla/' },    
  ]

  return (
    <main>
      <header className="bg-white w-full h-16">
      </header>
      <main className="flex w-screen flex-col">
        <About />
        <section className="h-screen w-screen bg-white flex justify-between items-center 
        p-12 gap-12">
          {projects.map((project,  index) => (
            <div className="bg-slate-800 flex flex-col border-purple-500 border-solid
            border-2 h-5/6 w-full rounded-xl p-6">
              <h1 className="text-white">{project.content + " " + index}</h1>
              <a href={project.url}>Project</a>
              <a href={project.github}>Github</a>
            </div>
          ))}
        </section>
      </main>
    </main>
  )
}
