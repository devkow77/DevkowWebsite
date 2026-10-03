import { Container } from "../ui";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="kontakt"
      aria-labelledby="contact-heading"
      className="mt-10 md:mt-20"
    >
      <Container className="text-center text-sm md:text-base">
        <div className="space-y-2 border-t-2 border-b-2 border-black/10 py-8 md:py-12 dark:border-white/20">
          <h2
            id="contact-heading"
            className="mx-auto max-w-xl text-3xl font-bold md:text-5xl xl:text-6xl"
          >
            STWÓRZMY COŚ NIESAMOWITEGO.
          </h2>
          <address className="inline not-italic">
            <a
              href="mailto:devkow77@gmail.com"
              className="font-medium underline"
            >
              devkow77@gmail.com
            </a>
          </address>
        </div>
        <div className="py-4 font-semibold">
          <p>
            Kacper Kowalski &copy; {currentYear} | Polska, Rzeszów |{" "}
            <a
              href="https://www.instagram.com/_kacperkowalski/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Instagram
            </a>{" "}
            |{" "}
            <a
              href="https://www.facebook.com/profile.php?id=100011588175691"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Facebook
            </a>{" "}
            |{" "}
            <a
              href="https://www.linkedin.com/in/kacper-kowalski-0a286b241/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
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
