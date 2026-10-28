"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { navigation, site } from "@/content/site";
import { Logo } from "./Logo";
import { Close, Menu, Phone } from "./icons";

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  const overHero = pathname === "/" && !scrolled && !open;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the menu whenever the route changes.
  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return;
    const toggle = toggleRef.current;
    document.body.style.overflow = "hidden";
    menuRef.current?.querySelector<HTMLElement>("a")?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
      // Keep focus inside the open menu (toggle button + menu links).
      if (e.key === "Tab" && menuRef.current) {
        const focusables = [toggle, ...menuRef.current.querySelectorAll<HTMLElement>("a")].filter(Boolean) as HTMLElement[];
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
      toggle?.focus();
    };
  }, [open]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <>
      <a
        href="#main"
        className="sr-only z-[60] rounded-full bg-ink px-5 py-3 text-paper focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to content
      </a>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,color] duration-500 ${
          overHero
            ? "on-dark bg-transparent text-paper"
            : "bg-paper/90 text-ink shadow-[0_1px_0_0_var(--color-stone)] backdrop-blur-md"
        }`}
      >
        <div className="shell flex h-18 items-center justify-between gap-6 md:h-20">
          <Logo tone={overHero ? "light" : "dark"} />

          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-9">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={isActive(item.href) ? "page" : undefined}
                    className={`link-draw py-2 text-[0.9375rem] font-medium ${isActive(item.href) ? "bg-[length:100%_1px]" : ""}`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={site.phone.href}
              className={`hidden min-h-11 items-center gap-2 rounded-full border px-5 text-sm font-semibold transition-colors duration-300 sm:inline-flex ${
                overHero ? "border-paper/50 hover:bg-paper hover:text-ink" : "border-ink/25 hover:bg-ink hover:text-paper"
              }`}
            >
              <Phone width={16} height={16} />
              <span>{site.phone.display}</span>
            </a>
            <button
              ref={toggleRef}
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full lg:hidden"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <Close width={24} height={24} /> : <Menu width={24} height={24} />}
            </button>
          </div>
        </div>
      </header>

      <div
        id="mobile-menu"
        ref={menuRef}
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        hidden={!open}
        className="fixed inset-0 z-40 overflow-y-auto bg-paper pt-24 lg:hidden"
      >
        <nav aria-label="Mobile" className="shell flex min-h-full flex-col pb-10">
          <ul className="border-t border-stone">
            {navigation.map((item, i) => (
              <li key={item.href} className="border-b border-stone">
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className="flex items-baseline justify-between py-5 font-display text-4xl tracking-tight motion-safe:animate-rise"
                  style={{ animationDelay: `${i * 50}ms` }}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                  <span className="font-sans text-xs tracking-[0.2em] text-muted">0{i + 1}</span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-auto space-y-2 pt-10 text-ink-soft">
            <p className="eyebrow text-muted">Visit the showroom</p>
            <p>
              {site.address.line1}, {site.address.line2}, {site.address.city} {site.address.postalCode}
            </p>
            <a href={site.phone.href} className="inline-block font-semibold text-ink underline underline-offset-4">
              {site.phone.display}
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}
