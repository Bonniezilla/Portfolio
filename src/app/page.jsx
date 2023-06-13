import { headers } from "next/dist/client/components/headers"

export default function Home() {
  return (
    <main>

      <header className="bg-zinc-100 w-full h-16">
      </header>
      <main className="flex h-screen-4/5 w-screen flex-col">
        <section className="bg-purple-950 bg-gradient-radial 
        from-purple-900 to-purple-950 w-full h-full
          flex items-center justify-center flex-col bg-repeat bg-center">
          <span className="p-20 flex flex-col w-3/5">
            <h2 className="text-purple-500/70 text-5xl">I'm Pedro Muniz, </h2>
            <h1 className="text-white text-9xl font-bold self-center">Frontend <br/> Developer</h1>
            <p className="text-white/70 self-end text-2xl">and i have 18 years, 
            <br/>with 1 year working
            <br/>in freelance projects.</p>
          </span>
        </section>
      </main>
    </main>
  )
}
