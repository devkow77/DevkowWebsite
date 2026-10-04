import {
  BiLogoReact,
  BiLogoNodejs,
  BiLogoTypescript,
  BiLogoTailwindCss,
  BiLogoMongodb,
  BiLogoHtml5,
  BiLogoDocker,
  BiLogoFigma,
  BiLogoGithub,
} from "react-icons/bi";
import { Container } from "../ui";

const About = () => {
  return (
    <section id="o-mnie" aria-labelledby="about-heading">
      <Container>
        <h2 id="about-heading" className="mb-4 text-lg font-bold md:text-2xl">
          O MNIE
        </h2>
        <div className="flex flex-col gap-2 xl:flex-row xl:justify-between xl:gap-6">
          <div className="flex flex-col gap-2 md:flex-row md:gap-6">
            <div
              aria-label="Moje zdjęcie"
              className="relative size-70 min-w-70 rounded-xl md:size-80 md:min-w-80"
            >
              <img
                src="/profilowe.webp"
                alt="Kacper Kowalski"
                width="320"
                height="320"
                loading="lazy"
                decoding="async"
                className="absolute size-full rounded-xl object-cover object-center"
              />
            </div>
            <div className="max-w-xl space-y-2 md:space-y-4">
              <h4 className="text-xl font-semibold lg:text-3xl">
                Analiza rynku i potrzeb. Dopasowanie do klienta. Zadbanie o
                każdy detal. Bezpieczeństwo i stabilność.
              </h4>
              <p className="text-sm font-medium md:text-base">
                Moja pasja to tworzenie stron internetowych, aplikacji webowych
                i automatyzacji procesów biznesowych. W swojej pracy stosuję
                najnowsze technologie i podejścia, aby zapewnić moim klientom
                najlepsze wyniki. Wiem, że każdy projekt jest inny, dlatego
                staram się dopasować się do potrzeb klienta i zapewnić najlepsze
                rozwiązanie.
              </p>
              <div
                aria-hidden="true"
                className="flex flex-wrap items-center gap-2 text-4xl md:text-5xl"
              >
                <BiLogoReact />
                <BiLogoTypescript />
                <BiLogoNodejs />
                <BiLogoTailwindCss />
                <BiLogoMongodb />
                <BiLogoHtml5 />
                <BiLogoFigma />
                <BiLogoDocker />
                <BiLogoGithub />
              </div>
            </div>
          </div>
          <ul
            aria-label="Moje umiejętności"
            className="flex flex-wrap gap-1 text-right font-semibold md:gap-2 md:text-lg xl:flex-col xl:text-2xl"
          >
            <li>Fullstack Web Development</li>
            <li>UI/UX Design</li>
            <li>SEO Optimization</li>
            <li>AI Automation</li>
            <li>Cloud Integration</li>
          </ul>
        </div>
      </Container>
    </section>
  );
};

export default About;
