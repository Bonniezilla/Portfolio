import { IncrementalCache } from "next/dist/server/lib/incremental-cache";

export default function About() {
  const icons = [
    { name: "github", href: "https://github/Bonniezilla" },
    { name: "document", href: undefined },
  ];

  return (
    <section className="bg-slate-950 bg-gradient-radial 
        from-purple-900 to-purple-950 w-full h-screen-4/5
        flex items-center justify-center flex-col bg-repeat shadow-2xl">
      <span className="p-6 flex flex-col justify-around">
        <h2 className="text-purple-500/90 text-4xl font-bold
            animate-text-entry-1.5">OI, 👋 EU SOU O PEDRO MUNIZ</h2>
        <span className="text-white text-9xl font-bold">
          <div className="flex items-center gap-12">
            <span className="animate-text-entry-1">
              WEB
            </span>
            {icons.map((icon, index) => (
              <a href={icon.href}
                className={`"flex items-center justify-center animate-icon-entry-${index + 1}"`}><img src={"/" + icon.name + ".png"}
                  className={"text-white w-16 hover:duration-300 hover:opacity-50 hover:-translate-y-2 hover:-translate-x-2"}/>
              </a>
            ))}
          </div>
          <span className="animate-text-entry-1">
            DEVELOPER
          </span>
        </span>
        <p className="text-white text-2xl self-end text-end animate-text-entry-invert-2">
          Tenho 18 anos sou desenvolvedor
          <br />
          fullstack com
          1 ano de experiencia
          <br />
          trabalhando como freelancer.
        </p>
      </span>
    </section>
  )
}