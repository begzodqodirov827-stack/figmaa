import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <footer className="bg-[#111111] text-white">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        
        <div className="py-16 lg:py-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          
          <div>
            <Link to="/">
              <img
                src="/image 5 (4).png"
                alt="TRUE FITNESS"
                className="w-[150px] brightness-0 invert mb-7"
              />
            </Link>
            <p className="text-gray-400 text-sm leading-6 max-w-[220px]">
              Professional fitness uskunalari zamonaviy klublar uchun.
            </p>
          </div>

          <div>
            <p className="text-xs font-bold tracking-[2px] mb-7 text-white">
              КАТАЛОГ ТОВАРОВ
            </p>
            <div className="flex flex-col gap-4">
              <Link to="/products/cardio" className="text-xs text-gray-400 hover:text-[#009BDF] transition">
                КАРДИО ТРЕНАЖЕРЫ
              </Link>
              <Link to="/products/composite" className="text-xs text-gray-400 hover:text-[#009BDF] transition">
                COMPOSITE STRENGTH
              </Link>
              <Link to="/products/stretch" className="text-xs text-gray-400 hover:text-[#009BDF] transition">
                TRUE STRETCH
              </Link>
              <Link to="/products/synrgy" className="text-xs text-gray-400 hover:text-[#009BDF] transition">
                СИНРДЖИ
              </Link>
              <Link to="/products/group" className="text-xs text-gray-400 hover:text-[#009BDF] transition">
                ГРУППОВЫЕ ТРЕНИРОВКИ
              </Link>
              <Link to="/products/strength" className="text-xs text-gray-400 hover:text-[#009BDF] transition">
                СИЛОВЫЕ ТРЕНАЖЕРЫ
              </Link>
              <Link to="/products/consoles" className="text-xs text-gray-400 hover:text-[#009BDF] transition">
                КОНСОЛИ
              </Link>
            </div>
          </div>

          <div>
            <p className="text-xs font-bold tracking-[2px] mb-7 text-white">
              ИНФОРМАЦИЯ
            </p>
            <div className="flex flex-col gap-4">
              <Link to="/about" className="text-xs text-gray-400 hover:text-[#009BDF] transition">
                О БРЕНДЕ
              </Link>
              <Link to="/advantages" className="text-xs text-gray-400 hover:text-[#009BDF] transition">
                ПРЕИМУЩЕСТВА
              </Link>
              <Link to="/open-club" className="text-xs text-gray-400 hover:text-[#009BDF] transition">
                ОТКРЫТЬ КЛУБ
              </Link>
              <Link to="/products" className="text-xs text-gray-400 hover:text-[#009BDF] transition">
                ПРОДУКЦИЯ
              </Link>
              <Link to="/contacts" className="text-xs text-gray-400 hover:text-[#009BDF] transition">
                КОНТАКТЫ
              </Link>
            </div>
          </div>

          <div>
            <p className="text-xs font-bold tracking-[2px] mb-7 text-white">
              КОНТАКТЫ
            </p>
            <div className="flex flex-col gap-5">
              <a href="tel:+998906066666" className="text-sm font-bold hover:text-[#009BDF] transition">
                +998 (90) 606-66-66
              </a>
              <a href="mailto:info@prowellness.uz" className="text-sm text-gray-400 hover:text-[#009BDF] transition">
                info@prowellness.uz
              </a>
              <Link to="/privacy" className="text-xs text-gray-400 hover:text-[#009BDF] transition leading-5">
                ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ
              </Link>
            </div>
          </div>

          <div>
            <p className="text-xs font-bold tracking-[2px] mb-7 leading-5 text-white">
              ПОДПИСАТЬСЯ НА НОВОСТИ И АКЦИИ
            </p>
            <form onSubmit={handleSubmit} className="flex border-b border-gray-600 mb-7">
              <input
                type="email"
                placeholder="E-MAIL"
                required
                className="w-full bg-transparent outline-none py-3 text-sm placeholder:text-gray-500 text-white"
              />
              <button type="submit" className="text-xl px-2 hover:text-[#009BDF] transition text-gray-400">
                →
              </button>
            </form>

            <div className="flex items-center gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 border border-gray-700 flex items-center justify-center text-sm text-gray-400 hover:bg-[#009BDF] hover:text-white hover:border-[#009BDF] transition"
              >
                f
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 border border-gray-700 flex items-center justify-center text-sm text-gray-400 hover:bg-[#009BDF] hover:text-white hover:border-[#009BDF] transition"
              >
                ◎
              </a>
              <a
                href="https://t.me"
                target="_blank"
                rel="noreferrer"
                aria-label="Telegram"
                className="w-10 h-10 border border-gray-700 flex items-center justify-center text-xs text-gray-400 hover:bg-[#009BDF] hover:text-white hover:border-[#009BDF] transition"
              >
                tg
              </a>
            </div>
          </div>

        </div>

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
