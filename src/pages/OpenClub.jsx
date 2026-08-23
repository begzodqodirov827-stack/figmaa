import React from "react";

function OpenClub() {
  return (
    <div className="w-full min-h-screen bg-white overflow-x-hidden">

      {/* ================= TITLE ================= */}
      <section className="w-full bg-cyan-500 text-center py-5">
        <p className="text-[8px] font-bold text-black mb-1">
          TRUE CLUB
        </p>

        <h1 className="text-white text-xl md:text-2xl font-bold">
          ОТКРЫТЬ КЛУБ ВМЕСТЕ С TRUE
        </h1>
      </section>

      {/* ================= CLUB IMAGE ================= */}
      <section className="w-full bg-white flex justify-center items-center px-4 py-10 md:py-14">

        <img
          src="/club-plan.png"
          alt="TRUE Club"
          className="w-full max-w-[850px] h-auto object-contain"
        />

      </section>

      {/* ================= FORM ================= */}
      <section className="w-full bg-[#dedede] py-12 px-5">

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
                className="w-full h-8 bg-transparent border-0 border-b border-gray-500 outline-none text-xs focus:border-cyan-500"
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
                className="w-full h-8 bg-transparent border-0 border-b border-gray-500 outline-none text-xs focus:border-cyan-500"
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
                className="w-full h-8 bg-transparent border-0 border-b border-gray-500 outline-none text-xs focus:border-cyan-500"
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
                className="w-full h-8 bg-transparent border-0 border-b border-gray-500 outline-none text-xs focus:border-cyan-500"
              />
            </div>

            {/* OPEN CLUB */}
            <div className="pt-3">

              <p className="text-[9px] font-extrabold mb-3">
                ХОТИТЕ ОТКРЫТЬ:
              </p>

              <div className="flex flex-col gap-2">

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

              <div className="flex flex-col gap-2">

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

              <div className="flex flex-col gap-2">

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
                className="w-full h-20 bg-transparent border-0 border-b border-gray-500 outline-none resize-none focus:border-cyan-500"
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

    </div>
  );
}

export default OpenClub;