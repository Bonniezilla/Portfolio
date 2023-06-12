export default function Home() {
  return (
    <main>

      <header className="bg-zinc-100 w-full h-16">
      </header>
      <main className="flex h-screen w-screen min-h-full min-w-full flex-col">
        <section className="bg-slate-950 bg-gradient-radial 
        from-purple-900 to-purple-950 w-full h-5/6
        flex items-center justify-center flex-col bg-repeat bg-center">
          <span className="p-6 flex flex-col justify-around">
            <h2 className="text-purple-500/90 text-4xl font-bold">OI, 👋 EU SOU O PEDRO MUNIZ, </h2>
            <h1 className="text-white text-9xl font-bold">
              <div className="flex items-center gap-12">
                WEB
                <a href="https://github.com/Bonniezilla"><img src="/github.png"
                className="text-white invert w-16 duration-300 hover:opacity-50 
                hover:-translate-y-2 
                hover:-translate-x-2"/></a> 
              </div> 
              DEVELOPER</h1>
            <p className="text-white text-2xl self-end text-end">
              Tenho 18 anos sou desenvolvedor
              <br/>
              fullstack com
              1 ano de experiencia
              <br/> 
              trabalhando como freelancer.</p>
          </span>
        </section>
      </main>
    </main>
  )
}
