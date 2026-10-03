import { Container } from "./index";
interface Link {
  href: string;
  label: string;
}

const links: Link[] = [
  {
    href: "#portfolio",
    label: "Portfolio",
  },
  {
    href: "#o-mnie",
    label: "O mnie",
  },
  {
    href: "#kontakt",
    label: "Kontakt",
  },
];

const Navbar = () => {
  return (
    <nav aria-label="Główna nawigacja">
      <Container className="flex items-center justify-between p-6">
        <div className="flex items-center gap-4">
          <a
            href="/"
            className="font-semibold"
            aria-label="Kacper Kowalski — strona główna"
          >
            Kacper Kowalski
          </a>
          <div
            aria-hidden="true"
            className="hidden h-full min-h-4 w-0.5 bg-black sm:block"
          />
          <ul className="hidden items-center gap-4 font-medium sm:flex">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="hover:underline">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <a
          href="#portfolio"
          className="rounded-4xl border-2 border-black/10 px-3 py-2 text-xs font-semibold duration-200 hover:bg-black hover:text-white sm:block sm:px-4 sm:text-sm dark:border-white/20 dark:hover:bg-white dark:hover:text-black"
        >
          Zobacz projekty
        </a>
      </Container>
    </nav>
  );
};

export default Navbar;
