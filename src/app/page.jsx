import { headers } from "next/dist/client/components/headers"

export default function Home() {
  return (
    <main>

      <header className="bg-zinc-100 w-full h-16">
      </header>
      <main className="flex min-h-screen min-w-screen flex-col">
        <section className="bg-purple-950 bg-gradient-radial 
        from-purple-900 to-purple-950 w-full h-5/6
         flex items-center justify-center flex-col bg-repeat bg-center">
          <span className="p-6">
            <h2 className="text-purple-500/70 text-3xl">I'm Pedro Muniz, </h2>
            <h1 className="text-white text-9xl font-bold">Frontend Developer</h1>
          </span>
        </section>
      </main>
    </main>
  )
}
