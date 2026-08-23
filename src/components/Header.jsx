import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="w-full bg-white text-black border-b border-gray-200">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">

        <div className="h-[90px] flex items-center justify-between">
          <Link to="/" className="shrink-0">
            <img
              src="/image 5 (4).png"
              alt="TRUE FITNESS"
              className="w-[150px] h-auto"
            />
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            <a
              href="tel:+998906066666"
              className="text-sm font-medium hover:text-red-600 transition"
            >
              +998 (90) 606-66-66
            </a>

            <Link
              to="/contacts"
              className="bg-black text-white px-7 py-4 text-xs font-bold tracking-[1.5px] hover:bg-red-600 transition"
            >
              ОСТАВИТЬ ЗАЯВКУ
            </Link>
          </div>
        </div>

        <nav className="hidden lg:flex items-center justify-between border-t border-gray-200 h-[65px]">
          <Link
            to="/about"
            className="text-xs font-bold tracking-[1.5px] hover:text-red-600 transition"
          >
            О БРЕНДЕ
          </Link>

          <Link
            to="/products"
            className="text-xs font-bold tracking-[1.5px] hover:text-red-600 transition"
          >
            ПРОДУКЦИЯ <span>⌄</span>
          </Link>

          <Link
            to="/advantages"
            className="text-xs font-bold tracking-[1.5px] hover:text-red-600 transition"
          >
            ПРЕИМУЩЕСТВА
          </Link>

          <Link
            to="/open-club"
            className="text-xs font-bold tracking-[1.5px] hover:text-red-600 transition"
          >
            ОТКРЫТЬ КЛУБ
          </Link>

          <Link
            to="/contacts"
            className="text-xs font-bold tracking-[1.5px] hover:text-red-600 transition"
          >
            КОНТАКТЫ
          </Link>
        </nav>

      </div>
    </header>
  );
}