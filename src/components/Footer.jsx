import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <footer className="bg-[#111111] text-white">

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">

        {/* FOOTER TOP */}
        <div className="py-16 lg:py-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">

          {/* LOGO */}
          <div>
            <Link to="/">
              <img
                src="/logo.png"
                alt="TRUE FITNESS"
                className="w-[150px] brightness-0 invert mb-7"
              />
            </Link>

            <p className="text-gray-400 text-sm leading-6 max-w-[220px]">
              Профессиональное фитнес-оборудование
              для современных клубов.
            </p>
          </div>

          {/* CATALOG */}
          <div>
            <h4 className="text-xs font-bold tracking-[2px] mb-7">
              КАТАЛОГ ТОВАРОВ
            </h4>

            <div className="flex flex-col gap-4">

              <Link
                to="/products/cardio"
                className="text-xs text-gray-400 hover:text-white transition"
              >
                КАРДИО ТРЕНАЖЕРЫ
              </Link>

              <Link
                to="/products/composite"
                className="text-xs text-gray-400 hover:text-white transition"
              >
                COMPOSITE STRENGTH
              </Link>

              <Link
                to="/products/stretch"
                className="text-xs text-gray-400 hover:text-white transition"
              >
                TRUE STRETCH
              </Link>

              <Link
                to="/products/synrgy"
                className="text-xs text-gray-400 hover:text-white transition"
              >
                СИНРДЖИ
              </Link>

              <Link
                to="/products/group"
                className="text-xs text-gray-400 hover:text-white transition"
              >
                ГРУППОВЫЕ ТРЕНИРОВКИ
              </Link>

              <Link
                to="/products/strength"
                className="text-xs text-gray-400 hover:text-white transition"
              >
                СИЛОВЫЕ ТРЕНАЖЕРЫ
              </Link>

              <Link
                to="/products/consoles"
                className="text-xs text-gray-400 hover:text-white transition"
              >
                КОНСОЛИ
              </Link>

            </div>
          </div>

          {/* INFORMATION */}
          <div>
            <h4 className="text-xs font-bold tracking-[2px] mb-7">
              ИНФОРМАЦИЯ
            </h4>

            <div className="flex flex-col gap-4">

              <Link
                to="/about"
                className="text-xs text-gray-400 hover:text-white transition"
              >
                О БРЕНДЕ
              </Link>

              <Link
                to="/advantages"
                className="text-xs text-gray-400 hover:text-white transition"
              >
                ПРЕИМУЩЕСТВА
              </Link>

              <Link
                to="/open-club"
                className="text-xs text-gray-400 hover:text-white transition"
              >
                ОТКРЫТЬ КЛУБ
              </Link>

              <Link
                to="/products"
                className="text-xs text-gray-400 hover:text-white transition"
              >
                ПРОДУКЦИЯ
              </Link>

              <Link
                to="/contacts"
                className="text-xs text-gray-400 hover:text-white transition"
              >
                КОНТАКТЫ
              </Link>

            </div>
          </div>

          {/* CONTACTS */}
          <div>
            <h4 className="text-xs font-bold tracking-[2px] mb-7">
              КОНТАКТЫ
            </h4>

            <div className="flex flex-col gap-5">

              <a
                href="tel:+998906066666"
                className="text-sm hover:text-red-500 transition"
              >
                +998 (90) 606-66-66
              </a>

              <a
                href="mailto:info@truefitness.uz"
                className="text-sm text-gray-400 hover:text-white transition"
              >
                info@truefitness.uz
              </a>

              <Link
                to="/privacy"
                className="text-xs text-gray-400 hover:text-white transition leading-5"
              >
                ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ
              </Link>

            </div>
          </div>

          {/* SUBSCRIBE */}
          <div>

            <h4 className="text-xs font-bold tracking-[2px] mb-7 leading-5">
              ПОДПИСАТЬСЯ НА НОВОСТИ И АКЦИИ
            </h4>

            <form
              onSubmit={handleSubmit}
              className="flex border-b border-gray-600 mb-7"
            >

              <input
                type="email"
                placeholder="E-MAIL"
                required
                className="w-full bg-transparent outline-none py-3 text-sm placeholder:text-gray-500"
              />

              <button
                type="submit"
                className="text-xl px-2 hover:text-red-500 transition"
              >
                →
              </button>

            </form>

            {/* SOCIAL */}
            <div className="flex items-center gap-3">

              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 border border-gray-700 flex items-center justify-center text-sm hover:bg-white hover:text-black transition"
              >
                f
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 border border-gray-700 flex items-center justify-center text-sm hover:bg-white hover:text-black transition"
              >
                ◎
              </a>

              <a
                href="https://telegram.org"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 border border-gray-700 flex items-center justify-center text-xs hover:bg-white hover:text-black transition"
              >
                tg
              </a>

            </div>

          </div>

        </div>

        {/* BOTTOM */}
        <div className="border-t border-gray-800 py-6 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-xs text-gray-500">
            © TRUE FITNESS
          </p>

          <p className="text-xs text-gray-500">
            Профессиональное фитнес-оборудование
          </p>

        </div>

      </div>

    </footer>
  );
}