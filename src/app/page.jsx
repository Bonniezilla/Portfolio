import About from "./components/about";

export default function Home() {
  return (
    <main>
      <header className="bg-white w-full h-16">
      </header>
      <main className="flex w-screen flex-col">
        <About />
        <section className="h-screen w-screen bg-white">
        </section>
      </main>
    </main>
  )
}
