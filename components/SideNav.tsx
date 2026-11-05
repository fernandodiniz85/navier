"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const sections = [
  { id: "ritual", label: "O Ritual" },
  { id: "metodo-v60", label: "V60" },
  { id: "metodo-aeropress", label: "Prensa Manual" },
  { id: "produtos", label: "Coleção" },
  { id: "faq", label: "FAQ" },
];

export default function SideNav() {
  const [activeSection, setActiveSection] = useState("");
  const [footerVisible, setFooterVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      let current = "";

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (!element) continue;

        const top = element.getBoundingClientRect().top + window.scrollY;
        const bottom = top + element.offsetHeight;
        if (scrollPosition >= top && scrollPosition < bottom) {
          current = section.id;
          break;
        }
      }

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const footer = document.querySelector("footer");
    if (!footer || !("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      ([entry]) => setFooterVisible(entry.isIntersecting),
      { threshold: 0.01 }
    );

    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  if (footerVisible) return null;

  return (
    <nav
      aria-label="Seções da página"
      className="hidden md:flex fixed left-6 top-1/2 -translate-y-1/2 flex-col gap-5 z-40"
    >
      {sections.map((section) => {
        const isActive = activeSection === section.id;

        return (
          <Link
            key={section.id}
            href={`/#${section.id}`}
            aria-current={isActive ? "location" : undefined}
            className="group flex items-center justify-start gap-3 cursor-pointer"
          >
            <span
              aria-hidden="true"
              className={`w-2 rounded-full transition-all duration-500 ${
                isActive
                  ? "bg-navier-peach h-8"
                  : "bg-gray-200 h-2 group-hover:bg-navier-sage"
              }`}
            />
            <span
              className={`text-[10px] uppercase tracking-widest transition-all duration-300 origin-left ${
                isActive
                  ? "text-navier-green font-bold scale-105"
                  : "text-gray-400 font-medium group-hover:text-navier-sage"
              }`}
            >
              {section.label}
            </span>
          </Link>
        );
      })}

      <Link
        href="/novo-blog"
        className="group flex items-center justify-start gap-3 cursor-pointer mt-4"
      >
        <span
          aria-hidden="true"
          className="w-2 rounded-full transition-all duration-500 bg-gray-200 h-2 group-hover:bg-navier-green"
        />
        <span className="text-[10px] uppercase tracking-widest transition-all duration-300 origin-left text-gray-400 font-medium group-hover:text-navier-green group-hover:font-bold">
          Blog
        </span>
      </Link>
    </nav>
  );
}