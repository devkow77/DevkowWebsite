import { ModeToggle, Navbar } from "./components/ui";
import { Hero, Portfolio, About, Work, Footer } from "./components/sections";
import { useEffect } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import { ThemeProvider } from "./components/theme-provider";

function App() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const lenis = new Lenis({
      autoRaf: true,
      duration: 1.2,
    });
    return () => lenis.destroy();
  }, []);

  return (
    <ThemeProvider defaultTheme="light">
      <a
        href="#main-content"
        className="bg-background text-foreground sr-only z-100 rounded-md px-4 py-2 focus:not-sr-only focus:fixed focus:top-4 focus:left-4"
      >
        Przejdź do treści
      </a>
      <Navbar />
      <main id="main-content" className="space-y-10 md:space-y-20">
        <Hero />
        <Portfolio />
        <About />
        <Work />
      </main>
      <Footer />
      <div className="fixed right-4 bottom-4 z-50">
        <ModeToggle />
      </div>
    </ThemeProvider>
  );
}

export default App;
