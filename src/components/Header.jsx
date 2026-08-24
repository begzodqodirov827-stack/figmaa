import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navClass = ({ isActive }) =>
    `relative text-[12px] font-bold tracking-[1.5px] transition-all duration-300 py-2 px-3 rounded
    ${
      isActive
        ? "bg-[#009BDF] text-white"
        : "text-black hover:text-[#009BDF]"
    }`;

  return (
    <header className="w-full bg-white text-black border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        
        <div className="h-[95px] flex items-center justify-between">
          <Link to="/" className="shrink-0 group">
            <img
              src="/image 5 (4).png"
              alt="TRUE FITNESS"
              className="w-[150px] h-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          <div className="flex items-center gap-5 sm:gap-8">
            <a
              href="tel:+998906066666"
              className="hidden sm:block text-[13px] font-bold tracking-wide hover:text-[#009BDF] transition-colors duration-300"
            >
              +998 (90) 606-66-66
            </a>

            <Link
              to="/contacts"
              className="bg-[#009BDF] text-white px-6 sm:px-8 py-4 text-[11px] font-bold tracking-[1.5px] transition-all duration-300 hover:bg-[#0084be]"
            >
              ОСТАВИТЬ ЗАЯВКУ
            </Link>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden flex flex-col gap-1.5 p-2 focus:outline-none"
              aria-label="Menyuni ochish"
            >
              <span className={`h-0.5 w-6 bg-black transition-all duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`h-0.5 w-6 bg-black transition-all duration-300 ${isMobileMenuOpen ? "opacity-0" : ""}`} />
              <span className={`h-0.5 w-6 bg-black transition-all duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </button>
          </div>
        </div>

        <nav className="hidden lg:flex items-center justify-between h-[65px] border-t border-gray-200 relative">
          <NavLink to="/about" className={navClass}>
            О БРЕНДЕ
          </NavLink>

          <NavLink to="/products" className={navClass}>
            ПРОДУКЦИЯ
          </NavLink>

          <NavLink to="/advantages" className={navClass}>
            ПРЕИМУЩЕСТВА
          </NavLink>

          <NavLink to="/open-club" className={navClass}>
            OTKРЫТЬ КЛУБ
          </NavLink>

          <NavLink to="/contacts" className={navClass}>
            КОНТАКТЫ
          </NavLink>
        </nav>

        {isMobileMenuOpen && (
          <nav className="lg:hidden border-t border-gray-200 py-5 flex flex-col gap-4 bg-white absolute left-0 w-full px-6 shadow-xl z-40">
            <NavLink to="/about" onClick={() => setIsMobileMenuOpen(false)} className="text-xs font-bold tracking-wide py-1 hover:text-[#009BDF]">
              О БРЕНДЕ
            </NavLink>
            <NavLink to="/products" onClick={() => setIsMobileMenuOpen(false)} className="text-xs font-bold tracking-wide py-1 hover:text-[#009BDF]">
              ПРОДУКЦИЯ
            </NavLink>
            <NavLink to="/advantages" onClick={() => setIsMobileMenuOpen(false)} className="text-xs font-bold tracking-wide py-1 hover:text-[#009BDF]">
              ПРЕИМУЩЕСТВА
            </NavLink>
            <NavLink to="/open-club" onClick={() => setIsMobileMenuOpen(false)} className="text-xs font-bold tracking-wide py-1 hover:text-[#009BDF]">
              ОТКРЫТЬ КЛУБ
            </NavLink>
            <NavLink to="/contacts" onClick={() => setIsMobileMenuOpen(false)} className="text-xs font-bold tracking-wide py-1 hover:text-[#009BDF]">
              КОНТАКТЫ
            </NavLink>
            
            <a href="tel:+998906066666" className="text-xs font-bold pt-3 border-t border-gray-100 text-[#009BDF]">
              +998 (90) 606-66-66
            </a>
          </nav>
        )}

      </div>
    </header>
  );
}
