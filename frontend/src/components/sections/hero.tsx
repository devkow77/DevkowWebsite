import { TypeAnimation } from "react-type-animation";
import { Container } from "../ui";

const roles = [
  "Fullstack Developer",
  2000,
  "UI & UX Designer",
  2000,
  "AI Automation",
  2000,
];

const Typewriter = () => {
  return (
    <>
      <TypeAnimation
        aria-hidden="true"
        className="block max-w-full overflow-x-clip text-[clamp(1.15rem,8.6cqi,1em)] whitespace-nowrap"
        sequence={roles}
        speed={70}
        deletionSpeed={70}
        repeat={Infinity}
      />
      <span className="sr-only">{roles.join(", ")}</span>
    </>
  );
};

const Hero = () => {
  return (
    <section aria-labelledby="hero-heading" className="mt-10 md:mt-20">
      <Container className="flex w-full items-center justify-between lg:-my-10">
        <div className="min-w-0 flex-1 space-y-3 md:space-y-6">
          <h1
            id="hero-heading"
            className="max-w-4xl text-4xl font-bold md:text-5xl xl:text-6xl"
          >
            KACPER KOWALSKI
            <span className="@container block w-full">
              <Typewriter />
            </span>
          </h1>
          <p className="max-w-2xl text-sm font-medium md:text-base">
            Projektuję strony i aplikacje pod konkretną działalność - dopasowane
            do klienta i zbudowane pod wysokie pozycje w Google.{" "}
            <a href="#kontakt" className="font-semibold underline">
              Napisz do mnie
            </a>{" "}
            i opowiedz, czym zajmuje się Twoja firma.
          </p>
        </div>
        <div
          aria-hidden="true"
          className="relative hidden lg:block lg:size-70 lg:shrink-0 xl:size-80 2xl:size-90"
        >
          <div className="absolute z-2 size-full bg-linear-to-b from-transparent via-white/75 to-white dark:via-transparent dark:to-transparent" />
          <img
            src="./model.png"
            alt="Mobile Main Mockup"
            className="absolute h-full w-full object-cover"
          />
        </div>
      </Container>
    </section>
  );
};

export default Hero;
