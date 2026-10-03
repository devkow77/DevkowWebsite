import { Container } from "../ui/index";
import {
  AudioLines,
  PanelsTopLeft,
  Clock,
  PencilSparkles,
  CircleFadingArrowUp,
  ShieldUser,
  type LucideIcon,
} from "lucide-react";

interface Step {
  icon: LucideIcon;
  title: string;
}

const steps: Step[] = [
  {
    icon: AudioLines,
    title: "Szczegółowa rozmowa z klientem",
  },
  {
    icon: PanelsTopLeft,
    title: "Wizualizacja szablonu projektu",
  },
  {
    icon: Clock,
    title: "Stopniowe wdrażanie z prezentacją postępu",
  },
  {
    icon: PencilSparkles,
    title: "Utworzenie finalnego projektu",
  },
  {
    icon: CircleFadingArrowUp,
    title: "Optymalizacja SEO i wdrożenie",
  },
  {
    icon: ShieldUser,
    title: "Utrzymanie i wsparcie techniczne",
  },
];

const Work = () => {
  return (
    <section id="praca">
      <Container>
        <h3 className="mb-4 text-lg font-bold md:text-2xl">
          JAK WYGLĄDA WSPÓŁPRACA
        </h3>
        <ul className="grid grid-cols-2 gap-4 text-center text-sm font-semibold sm:grid-cols-3 md:grid-cols-4 md:gap-6 md:text-base lg:grid-cols-5 xl:grid-cols-6">
          {steps.map((step: Step, index: number) => (
            <li key={index}>
              <div
                className={`mb-2 grid aspect-square place-items-center rounded-full bg-black text-white md:mb-3 ${index === 4 && "border-4 border-black bg-white text-black!"}`}
              >
                <step.icon className={`size-8 sm:size-10`} />
              </div>
              <p className={`mb-1 text-sm font-semibold md:text-base`}>
                {step.title}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default Work;
