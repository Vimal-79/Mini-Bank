import Link from "next/link";
import BankLogo from "./BankLogo.js";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Security", href: "/security" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

function Navbar() {
  return (
    <header className="w-full border-b border-white/10 bg-[#061A40]/95 text-white backdrop-blur">
      <nav className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-4 lg:px-10">
        <Link href="/" aria-label="Chulbul Bank home" className="shrink-0">
          <BankLogo />
        </Link>

        <div className="order-3 flex w-full gap-2 overflow-x-auto pb-1 text-sm font-semibold text-blue-100 md:order-2 md:w-auto md:overflow-visible md:pb-0">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="shrink-0 rounded-md px-3 py-2 transition hover:bg-white/10 hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="order-2 flex shrink-0 items-center gap-2 md:order-3">
          <Link
            href="/login"
            className="rounded-md border border-white/20 px-4 py-2 text-sm font-bold text-white transition hover:bg-white/10"
          >
            Login
          </Link>
          <Link
            href="/register"
            className="rounded-md bg-[#2563EB] px-4 py-2 text-sm font-bold text-white shadow-sm transition hover:bg-[#1D4ED8]"
          >
            Register
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
