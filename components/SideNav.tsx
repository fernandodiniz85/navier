"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

const sections = [
  { id: 'ritual', label: 'O Ritual' },
  { id: 'metodo-v60', label: 'V60' },
  { id: 'metodo-aeropress', label: 'Prensa Manual' }, // Proteção de marca
  { id: 'produtos', label: 'Coleção' },
  { id: 'faq', label: 'FAQ' },
];

export default function SideNav() {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      let current = '';
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            current = section.id;
          }
        }
      });
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); 
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="hidden md:flex fixed left-6 top-1/2 transform -translate-y-1/2 flex-col gap-5 z-50">
      {sections.map((section) => {
        const isActive = activeSection === section.id;
        
        return (
          <a
            key={section.id}
            href={`#${section.id}`}
            className="group flex items-center justify-start gap-3 cursor-pointer"
          >
            {/* Bolinha adaptada para modo escuro */}
            <div
              className={`w-2 rounded-full transition-all duration-500 ${
                isActive
                  ? 'bg-[#EABEA9] h-8' 
                  : 'bg-gray-200 dark:bg-gray-600 h-2 group-hover:bg-[#8FA98C] dark:group-hover:bg-[#EABEA9]'
              }`}
            />
            {/* Texto adaptado para modo escuro */}
            <span 
              className={`text-[10px] uppercase tracking-widest transition-all duration-300 origin-left ${
                isActive 
                  ? 'text-[#1F5455] dark:text-[#EABEA9] font-bold scale-105' 
                  : 'text-gray-400 dark:text-gray-500 font-medium group-hover:text-[#8FA98C] dark:group-hover:text-white'
              }`}
            >
              {section.label}
            </span>
          </a>
        );
      })}

      <Link href="/novo-blog" className="group flex items-center justify-start gap-3 cursor-pointer mt-4">
        <div className="w-2 rounded-full transition-all duration-500 bg-gray-200 dark:bg-gray-600 h-2 group-hover:bg-[#1F5455] dark:group-hover:bg-[#EABEA9]" />
        <span className="text-[10px] uppercase tracking-widest transition-all duration-300 origin-left text-gray-400 dark:text-gray-500 font-medium group-hover:text-[#1F5455] dark:group-hover:text-white group-hover:font-bold">
          Journal
        </span>
      </Link>
    </nav>
  );
}