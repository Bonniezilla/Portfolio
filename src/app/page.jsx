
import About from "./components/about";
import Projects from "./components/projects";

export default function Home() {
  return (
    <main>
      <header className="bg-white w-full h-16">
      </header>
      <main className="flex w-screen flex-col">
        <About />
        <Projects />
      </main>
    </main>
  )
}
