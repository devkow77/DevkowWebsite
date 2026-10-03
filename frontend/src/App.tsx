import { Navbar } from "./components/ui";
import { Hero, Portfolio, About, Work, Footer } from "./components/sections";
import { useEffect } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
      duration: 1.2,
    });
    return () => lenis.destroy();
  }, []);

  return (
    <>
      <Navbar />
      <main className="space-y-10 md:space-y-20">
        <Hero />
        <Portfolio />
        <About />
        <Work />
        <Footer />
      </main>
    </>
  );
}

export default App;
