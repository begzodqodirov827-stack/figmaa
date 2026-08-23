import React from "react";

function OpenClub() {
  return (
    <div className="w-full min-h-screen bg-white text-black overflow-x-hidden">

      {/* ================= HEADER ================= */}
      <header className="h-[70px] border-b border-gray-200 flex items-center justify-between px-6 md:px-16">

        <div className="flex items-center gap-2">
          <div className="text-cyan-500 text-4xl rotate-[-25deg]">
            ▲
          </div>

          <h1 className="text-3xl md:text-4xl font-extrabold tracking-[8px]">
            TRUE
          </h1>
        </div>

        <div className="flex items-center gap-5">
          <span className="text-sm">🇷🇺</span>

          <button className="hidden sm:block bg-cyan-500 hover:bg-cyan-600 text-white text-[10px] font-bold px-5 py-2 transition">
            ОТКРЫТЬ КЛУБ
          </button>
        </div>
      </header>

      {/* ================= NAV ================= */}
      <nav className="w-full border-b border-gray-200 px-4 py-3 overflow-x-auto">
        <div className="flex justify-center min-w-max gap-8 md:gap-14">
          <a
            href="#"
            className="text-[9px] font-semibold hover:text-cyan-500 transition"
          >
            О КОМПАНИИ
          </a>

          <a
            href="#"
            className="text-[9px] font-semibold hover:text-cyan-500 transition"
          >
            ПРОДУКЦИЯ И УСЛУГИ
          </a>

          <a
            href="#"
            className="text-[9px] font-semibold hover:text-cyan-500 transition"
          >
            ПРЕИМУЩЕСТВА
          </a>

          <a
            href="#"
            className="text-[9px] font-semibold text-cyan-500"
          >
            ОТКРЫТЬ КЛУБ
          </a>

          <a
            href="#"
            className="text-[9px] font-semibold hover:text-cyan-500 transition"
          >
            КОНТАКТЫ
          </a>
        </div>
      </nav>

      {/* ================= BLUE TITLE ================= */}
      <section className="bg-cyan-500 text-center py-4">

        <p className="text-[8px] font-extrabold text-black mb-1">
          КЛУБ TRUE
        </p>

        <h2 className="text-white text-lg md:text-2xl font-bold">
          ОТКРЫТЬ КЛУБ ВМЕСТЕ С TRUE
        </h2>

      </section>

      {/* ================= CLUB PLAN ================= */}
      <section className="bg-white min-h-[400px] md:min-h-[500px] flex items-center justify-center px-4 py-10">

        <img
          src="/club-plan.png"
          alt="TRUE Club"
          className="w-full max-w-[850px] object-contain"
        />

      </section>

      {/* ================= FORM ================= */}
      <section className="bg-[#dedede] py-12 px-5">

        <div className="w-full max-w-[580px] mx-auto">

          <h2 className="text-xl font-extrabold mb-8">
            ОТПРАВИТЬ ЗАЯВКУ
          </h2>

          <form className="space-y-5">

            {/* NAME */}
            <div>
              <label className="block text-[9px] font-bold mb-2">
                ВАШЕ ИМЯ
              </label>

              <input
                type="text"
                placeholder="ИМЯ"
                className="w-full h-8 bg-transparent border-b border-gray-400 outline-none text-xs focus:border-cyan-500"
              />
            </div>

            {/* EMAIL */}
            <div>
              <label className="block text-[9px] font-bold mb-2">
                E-MAIL
              </label>

              <input
                type="email"
                placeholder="E-MAIL"
                className="w-full h-8 bg-transparent border-b border-gray-400 outline-none text-xs focus:border-cyan-500"
              />
            </div>

            {/* PHONE */}
            <div>
              <label className="block text-[9px] font-bold mb-2">
                НОМЕР ТЕЛЕФОНА
              </label>

              <input
                type="tel"
                placeholder="+998 (99) 999-99-99"
                className="w-full h-8 bg-transparent border-b border-gray-400 outline-none text-xs focus:border-cyan-500"
              />
            </div>

            {/* CITY */}
            <div>
              <label className="block text-[9px] font-bold mb-2">
                ГОРОД
              </label>

              <input
                type="text"
                placeholder="ГОРОД"
                className="w-full h-8 bg-transparent border-b border-gray-400 outline-none text-xs focus:border-cyan-500"
              />
            </div>

            {/* WHAT DO YOU WANT */}
            <div className="pt-3">

              <p className="text-[9px] font-extrabold mb-3">
                ХОТИТЕ ОТКРЫТЬ:
              </p>

              <div className="space-y-2">

                <label className="flex items-center gap-2 text-[9px]">
                  <input
                    type="checkbox"
                    className="accent-cyan-500"
                  />
                  ФИТНЕС-КЛУБ
                </label>

                <label className="flex items-center gap-2 text-[9px]">
                  <input
                    type="checkbox"
                    className="accent-cyan-500"
                  />
                  TRUE CLUB
                </label>

                <label className="flex items-center gap-2 text-[9px]">
                  <input
                    type="checkbox"
                    className="accent-cyan-500"
                  />
                  TRUE KIDS
                </label>

                <label className="flex items-center gap-2 text-[9px]">
                  <input
                    type="checkbox"
                    className="accent-cyan-500"
                  />
                  ДРУГОЙ ФОРМАТ
                </label>

              </div>
            </div>

            {/* PROJECT TIME */}
            <div className="pt-3">

              <p className="text-[9px] font-extrabold mb-3">
                ПЛАНИРУЕМЫЙ СРОК ЗАПУСКА ПРОЕКТА:
              </p>

              <div className="space-y-2">

                <label className="flex items-center gap-2 text-[9px]">
                  <input
                    type="radio"
                    name="projectTime"
                    className="accent-cyan-500"
                  />
                  В ТЕЧЕНИЕ 3 МЕСЯЦЕВ
                </label>

                <label className="flex items-center gap-2 text-[9px]">
                  <input
                    type="radio"
                    name="projectTime"
                    className="accent-cyan-500"
                  />
                  В ТЕЧЕНИЕ 6 МЕСЯЦЕВ
                </label>

                <label className="flex items-center gap-2 text-[9px]">
                  <input
                    type="radio"
                    name="projectTime"
                    className="accent-cyan-500"
                  />
                  В ТЕЧЕНИЕ ГОДА
                </label>

              </div>
            </div>

            {/* SERVICES */}
            <div className="pt-3">

              <p className="text-[9px] font-extrabold mb-3">
                КАКИЕ УСЛУГИ ВАС ИНТЕРЕСУЮТ:
              </p>

              <div className="space-y-2">

                <label className="flex items-center gap-2 text-[9px]">
                  <input
                    type="checkbox"
                    className="accent-cyan-500"
                  />
                  ПРОЕКТИРОВАНИЕ
                </label>

                <label className="flex items-center gap-2 text-[9px]">
                  <input
                    type="checkbox"
                    className="accent-cyan-500"
                  />
                  ОБОРУДОВАНИЕ
                </label>

                <label className="flex items-center gap-2 text-[9px]">
                  <input
                    type="checkbox"
                    className="accent-cyan-500"
                  />
                  КОНСАЛТИНГ
                </label>

              </div>
            </div>

            {/* FILE */}
            <div className="pt-3">

              <p className="text-[9px] font-extrabold mb-3">
                ЗАГРУЗИТЬ ПЛАН ПОМЕЩЕНИЯ
              </p>

              <label className="inline-block bg-cyan-500 hover:bg-cyan-600 text-white text-[9px] font-bold px-5 py-2 cursor-pointer transition">

                ВЫБРАТЬ ФАЙЛ

                <input
                  type="file"
                  className="hidden"
                />

              </label>

            </div>

            {/* COMMENT */}
            <div className="pt-3">

              <label className="block text-[9px] font-bold mb-2">
                КОММЕНТАРИЙ
              </label>

              <textarea
                className="w-full h-20 bg-transparent border-b border-gray-400 outline-none resize-none focus:border-cyan-500"
              />

            </div>

            {/* SUBMIT */}
            <div className="flex justify-center pt-5">

              <button
                type="submit"
                className="bg-cyan-500 hover:bg-cyan-600 text-white text-[9px] font-bold px-8 py-2 transition"
              >
                ОТПРАВИТЬ
              </button>

            </div>

          </form>
        </div>

      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-cyan-500 text-white px-6 md:px-16 py-10">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* COLUMN 1 */}
          <div>

            <h3 className="text-[9px] font-extrabold mb-4">
              КАТАЛОГ ТОВАРОВ
            </h3>

            <div className="flex flex-col gap-2">

              <a href="#" className="text-[8px] hover:underline">
                ТРЕНАЖЕРЫ
              </a>

              <a href="#" className="text-[8px] hover:underline">
                КАРДИО
              </a>

              <a href="#" className="text-[8px] hover:underline">
                СИЛОВОЕ ОБОРУДОВАНИЕ
              </a>

              <a href="#" className="text-[8px] hover:underline">
                СВОБОДНЫЕ ВЕСА
              </a>

              <a href="#" className="text-[8px] hover:underline">
                АКСЕССУАРЫ
              </a>

            </div>

          </div>

          {/* COLUMN 2 */}
          <div>

            <h3 className="text-[9px] font-extrabold mb-4">
              ИНФОРМАЦИЯ
            </h3>

            <div className="flex flex-col gap-2">

              <a href="#" className="text-[8px] hover:underline">
                О КОМПАНИИ
              </a>

              <a href="#" className="text-[8px] hover:underline">
                ПРЕИМУЩЕСТВА
              </a>

              <a href="#" className="text-[8px] hover:underline">
                ПРОДУКЦИЯ
              </a>

              <a href="#" className="text-[8px] hover:underline">
                НОВОСТИ
              </a>

              <a href="#" className="text-[8px] hover:underline">
                ПАРТНЕРАМ
              </a>

            </div>

          </div>

          {/* COLUMN 3 */}
          <div>

            <h3 className="text-[9px] font-extrabold mb-4">
              КОНТАКТЫ
            </h3>

            <div className="flex flex-col gap-2">

              <a href="#" className="text-[8px] hover:underline">
                ГОЛОВНОЙ ОФИС
              </a>

              <a href="#" className="text-[8px] hover:underline">
                КОНТАКТЫ
              </a>

            </div>

          </div>

          {/* COLUMN 4 */}
          <div>

            <h3 className="text-[9px] font-extrabold mb-4">
              ПОДПИШИТЕСЬ НА НОВОСТИ
            </h3>

            <div className="flex max-w-[230px]">

              <input
                type="email"
                placeholder="E-MAIL"
                className="w-full h-8 px-2 text-black text-[9px] outline-none"
              />

              <button className="w-9 h-8 bg-yellow-400 text-black">
                ➜
              </button>

            </div>

            <div className="flex gap-3 mt-4">

              <span className="w-6 h-6 rounded-full bg-white text-cyan-500 flex items-center justify-center text-xs font-bold">
                f
              </span>

              <span className="w-6 h-6 rounded-full bg-white text-cyan-500 flex items-center justify-center text-xs font-bold">
                ◎
              </span>

              <span className="w-6 h-6 rounded-full bg-white text-cyan-500 flex items-center justify-center text-xs font-bold">
                ▶
              </span>

            </div>

          </div>

        </div>

      </footer>

    </div>
  );
}

export default OpenClub;