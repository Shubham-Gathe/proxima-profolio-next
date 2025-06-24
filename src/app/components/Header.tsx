import React from "react";

const navLinks = [
  { href: "#banner", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#what-we-bring", label: "What We Bring" },
  { href: "#projects", label: "Projects" },
  { href: "#tech-stack", label: "Tech Stack" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  // Smooth scroll handler
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-transparent border-b border-white/0 py-3">
      <nav className="container mx-auto flex items-center justify-between py-4 px-6">
        <span className="font-bold text-white text-2xl tracking-tight">Proxima Cloud</span>
        <ul className="flex gap-6 text-white font-medium text-base">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="hover:text-purple-400 transition"
                onClick={e => handleNavClick(e, link.href)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}