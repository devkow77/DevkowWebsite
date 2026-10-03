import { Navbar } from "./components/ui";
import { Hero, Portfolio, About, Work, Footer } from "./components/sections";

function App() {
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
