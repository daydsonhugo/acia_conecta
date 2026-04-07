import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import { navigationLinks } from "../../data/home";

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[linear-gradient(180deg,rgba(6,20,15,0.96)_0%,rgba(6,20,15,0.90)_100%)] shadow-[0_20px_48px_rgba(3,12,9,0.22)] backdrop-blur-2xl">
      <div className="mx-auto flex max-w-7xl items-center gap-6 px-6 py-5">
        <Link
          to="/"
          onClick={() => setMobileMenuOpen(false)}
          className="min-w-0 transition-opacity hover:opacity-100"
        >
          <p className="font-display text-[1.4rem] font-semibold tracking-[0.02em] text-white md:text-[1.72rem]">
            ACIA Conecta
            {/* <img src="/images/logo_acia_conecta.png" alt="ACIA Conecta" className="h-10 w-auto" /> */}
          </p>
        </Link>

        <nav className="ml-auto hidden items-center gap-7 md:flex">
          {navigationLinks.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `relative px-1 py-2 text-[0.96rem] font-medium tracking-[0.01em] transition-colors ${
                  isActive ? "text-white" : "text-white/90 hover:text-white"
                }`
              }
            >
              {({ isActive }) => (
                <span className="relative block">
                  {item.label}
                  {isActive ? (
                    <span className="absolute -bottom-1.5 left-0 h-px w-full bg-conecta-200/95" />
                  ) : null}
                </span>
              )}
            </NavLink>
          ))}
        </nav>

        <button
          type="button"
          aria-label="Abrir menu"
          className="ml-auto inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] text-white shadow-[0_10px_24px_rgba(3,12,9,0.18)] transition hover:border-white/25 md:hidden"
          onClick={() => setMobileMenuOpen((open) => !open)}
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {mobileMenuOpen ? (
        <div className="border-t border-white/10 bg-[linear-gradient(180deg,rgba(6,20,15,0.86)_0%,rgba(6,20,15,0.94)_100%)] px-6 pb-6 md:hidden">
          <nav className="mt-5 flex flex-col gap-1">
            {navigationLinks.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `border-b border-white/8 px-1 py-3.5 text-sm font-medium transition-colors ${
                    isActive ? "text-white" : "text-white/90 hover:text-white"
                  }`
                }
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
