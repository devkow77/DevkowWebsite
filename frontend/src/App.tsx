import { Navbar } from "./components/ui";
import { Hero, Portfolio } from "./components/sections";

function App() {
  return (
    <>
      <Navbar />
      <main className="space-y-10 md:space-y-20">
        <Hero />
        <Portfolio />
      </main>
    </>
  );
}

export default App;
