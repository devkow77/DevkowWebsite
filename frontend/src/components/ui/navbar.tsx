import { Container } from "./index";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

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
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <nav>
      <Container className="flex items-center justify-between p-6">
        <div className="flex items-center gap-4">
          <h1 className="font-semibold">Kacper Kowalski</h1>
          <div className="hidden h-full min-h-4 w-0.5 bg-black sm:block"></div>
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
        {isOpen ? (
          <div className="fixed top-0 left-0 z-10 flex h-full w-screen items-center justify-center bg-white shadow-xl">
            <ul className="flex flex-col gap-4 text-lg font-semibold">
              {links.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="z-10 cursor-pointer sm:hidden"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </div>
        <a
          href="#work"
          className="hidden rounded-4xl border-2 border-black/10 px-4 py-2 text-sm font-semibold duration-200 hover:bg-black hover:text-white sm:block"
        >
          Zobacz moje prace
        </a>
      </Container>
    </nav>
  );
};

export default Navbar;
