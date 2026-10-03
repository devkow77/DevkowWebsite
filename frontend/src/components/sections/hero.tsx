import { Container } from "../ui";

const Hero = () => {
  return (
    <section aria-labelledby="hero-heading" className="mt-10 md:mt-20">
      <Container className="flex w-full items-center justify-between">
        <div className="space-y-3 md:space-y-6">
          <h1
            id="hero-heading"
            className="max-w-4xl text-4xl font-bold md:text-5xl xl:text-6xl"
          >
            KACPER KOWALSKI | Fullstack Developer & UI/UX Designer & AI
            Automation
          </h1>
          <p className="max-w-2xl text-sm font-medium md:text-base">
            Zajmuję się tworzeniem stron internetowych, aplikacji webowych i
            automatyzacją procesów biznesowych. Aktualnie jestem studentem 7
            semestru 3.5 letnich studiów inżynierskich na kierunku Informatyka
            na Uniwersytecie Rzeszowskim.
          </p>
        </div>
        <div
          aria-hidden="true"
          className="hidden rotate-45 rounded-2xl bg-black 2xl:block 2xl:size-60 dark:bg-white"
        />
      </Container>
    </section>
  );
};

export default Hero;
