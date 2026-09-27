import { Container } from "../ui";

const Hero = () => {
  return (
    <section className="mt-10 md:mt-20">
      <Container className="flex w-full justify-between">
        <div className="space-y-3 md:space-y-6">
          <h2 className="max-w-4xl text-4xl font-bold sm:text-5xl md:text-6xl">
            KACPER KOWALSKI | Fullstack Developer & UI/UX Designer & AI
            Automation
          </h2>
          <p className="max-w-2xl text-sm font-medium md:text-base">
            Zajmuję się tworzeniem stron internetowych, aplikacji webowych i
            automatyzacją procesów biznesowych. Absolwent Inżynier Uniwersytetu
            Rzeszowskiego na kierunku Informatyka.
          </p>
        </div>
        <div>
          <div className="hidden rotate-45 rounded-2xl bg-black 2xl:block 2xl:size-60"></div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
