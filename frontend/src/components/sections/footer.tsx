import { Container } from "../ui";

const Footer = () => {
  return (
    <footer id="kontakt">
      <Container className="text-center text-sm md:text-base">
        <div className="space-y-2 border-t-2 border-b-2 border-black/10 py-8 md:py-12">
          <h3 className="mx-auto max-w-xl text-3xl font-bold md:text-5xl xl:text-6xl">
            STWÓRZMY COŚ NIESAMOWITEGO.
          </h3>
          <a
            href="mailto:devkow77@gmail.com"
            className="font-medium underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            devkow77@gmail.com
          </a>
        </div>
        <div className="py-4 font-semibold">
          <p>
            Kacper Kowalski &copy; 2026 | Polska, Rzeszów |{" "}
            <a
              href="https://www.instagram.com/_kacperkowalski/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>{" "}
            |{" "}
            <a
              href="https://www.facebook.com/profile.php?id=100011588175691"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>{" "}
            |{" "}
            <a
              href="https://www.linkedin.com/in/kacper-kowalski-0a286b241/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
