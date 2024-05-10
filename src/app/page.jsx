
import About from "./components/about";
import Projects from "./components/projects";

export default function Home() {
  return (
    <main>
      <main className="flex w-screen flex-col">
        <About />
        <Projects />
      </main>
    </main>
  )
}
