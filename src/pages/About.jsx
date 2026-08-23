import React from "react";

function About() {
  return (
    <div className="w-full overflow-hidden bg-white text-[#222]">
      {/* ================= HERO ================= */}
      <section
        className="relative flex min-h-[520px] items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: "url('/Rectangle 1 (1).png')",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 px-5 text-center text-white">
          <button className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#08afe2] text-2xl shadow-lg transition hover:scale-110">
            ▶
          </button>

          <h1 className="text-3xl font-black uppercase leading-tight md:text-5xl">
            TRUE FITNESS — ПРЕМИУМ
            <br />
            ТРЕНАЖЕРЫ ИЗ США
          </h1>
        </div>
      </section>

      {/* ================= BLUE TITLE ================= */}
      <section className="bg-[#08afe2] px-5 py-[22px] text-center text-white">
        <div className="mx-auto max-w-[900px]">
          <div className="mx-auto mb-3 h-[2px] w-[60px] bg-[#ffe500]" />

          <h2 className="text-[18px] font-extrabold uppercase leading-[1.1] md:text-[26px]">
            TRUE - ВЕДУЩИЙ МИРОВОЙ
            <br />
            ПРОИЗВОДИТЕЛЬ ПРЕМИАЛЬНОГО
            <br />
            ФИТНЕС ОБОРУДОВАНИЯ
          </h2>

          <div className="mx-auto mt-3 h-[2px] w-[60px] bg-white" />
        </div>
      </section>

      {/* ================= TRUE FITNESS ================= */}
      <section className="w-full bg-white">
        <div className="mx-auto grid w-full max-w-[1120px] grid-cols-1 md:grid-cols-2">
          {/* LEFT TEXT */}
          <div className="flex h-[260px] flex-col justify-center px-[55px]">
            <h2 className="text-[24px] font-black uppercase leading-none">
              TRUE
            </h2>

            <h3 className="text-[24px] font-black uppercase leading-none text-[#08afe2]">
              FITNESS
            </h3>

            <div className="my-[13px] h-[2px] w-[35px] bg-[#ffe500]" />

            <h4 className="text-[10px] font-black uppercase leading-[1.1]">
              СОВРЕМЕННОЕ И
              <br />
              НАДЕЖНОЕ
              <br />
              ОБОРУДОВАНИЕ ДЛЯ
              <br />
              ФИТНЕС-КЛУБОВ
            </h4>

            <div className="mt-[12px] flex items-center gap-3">
              <span className="text-[7px] font-bold uppercase text-[#08afe2]">
                КАЖДЫЕ ТРЕНАЖЕРЫ
              </span>

              <span className="text-[13px] text-[#08afe2]">⟶</span>
            </div>

            <div className="mt-[14px] flex gap-[4px]">
              <span className="h-[6px] w-[6px] rounded-full bg-[#ffe500]" />
              <span className="h-[6px] w-[6px] rounded-full bg-[#ccc]" />
              <span className="h-[6px] w-[6px] rounded-full bg-[#ccc]" />
              <span className="h-[6px] w-[6px] rounded-full bg-[#ccc]" />
              <span className="h-[6px] w-[6px] rounded-full bg-[#ccc]" />
            </div>
          </div>

          {/* RIGHT PRODUCT */}
          <div className="relative h-[260px] overflow-hidden bg-[#08afe2]">
            {/* white area */}
            <div
              className="absolute inset-y-0 right-0 w-[78%] bg-white"
              style={{
                clipPath: "polygon(35% 0, 100% 0, 100% 100%, 0 100%)",
              }}
            />

            {/* blue bottom shape */}
            <div
              className="absolute bottom-0 right-0 h-[42%] w-[78%] bg-[#08afe2]"
              style={{
                clipPath: "polygon(40% 0, 100% 0, 100% 100%, 0 100%)",
              }}
            />

            <img
              src="/image 6 (1).png"
              alt="TRUE Fitness"
              className="absolute inset-0 z-10 h-full w-full object-contain p-[20px]"
            />
          </div>
        </div>
      </section>

      {/* ================= ADVANTAGES ================= */}
      <section className="w-full bg-[#f3f3f3] py-0">
        <div className="mx-auto grid w-full max-w-[1120px] grid-cols-1 md:grid-cols-2">
          {/* LEFT TOP — IMAGE */}
          <article className="relative h-[170px] overflow-hidden">
            <img
              src="/Group 1 (1).png"
              alt="Лучшие характеристики"
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />

            <div className="absolute bottom-0 left-0 p-[18px] text-white">
              <div className="mb-[7px] h-[2px] w-[45px] bg-[#ffe500]" />

              <h3 className="text-[15px] font-black uppercase leading-[1]">
                ЛУЧШИЕ
                <br />
                ХАРАКТЕРИСТИКИ
              </h3>

              <p className="mt-[7px] max-w-[400px] text-[8px] leading-[1.2]">
                Тренажеры TRUE отличаются современными технологиями, высокой
                надежностью и комфортом для пользователей.
              </p>
            </div>
          </article>

          {/* RIGHT TOP — BLUE */}
          <article className="h-[170px] bg-[#08afe2] px-[18px] py-[18px] text-white">
            <h3 className="text-[15px] font-black uppercase leading-[1]">
              НИЗКАЯ СТОИМОСТЬ
              <br />
              ВЛАДЕНИЯ
            </h3>

            <div className="my-[8px] h-[2px] w-[55px] bg-[#ffe500]" />

            <p className="max-w-[390px] text-[8px] leading-[1.25]">
              Надежность оборудования обеспечивает низкие затраты на сервисное
              обслуживание. Такой подход помогает снизить эксплуатационные
              расходы.
            </p>
          </article>

          {/* LEFT BOTTOM — BLUE */}
          <article className="h-[90px] bg-[#08afe2] px-[18px] py-[13px] text-white">
            <h3 className="text-[14px] font-black uppercase leading-[1]">
              ВЫСОКОЕ КАЧЕСТВО
              <br />И НАДЕЖНОСТЬ
            </h3>

            <div className="my-[6px] h-[2px] w-[55px] bg-[#ffe500]" />

            <p className="max-w-[400px] text-[7px] leading-[1.2]">
              Высокое качество тренажеров — это визитная карточка TRUE. Каждая
              модель проходит строгий контроль.
            </p>
          </article>

          {/* RIGHT BOTTOM — IMAGE */}
          <article className="relative h-[90px] overflow-hidden">
            <img
              src="/Group 2 (1).png"
              alt="Качественный сервис"
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-black/50" />

            <div className="absolute bottom-0 left-0 p-[13px] text-white">
              <div className="mb-[5px] h-[2px] w-[45px] bg-[#ffe500]" />

              <h3 className="text-[13px] font-black uppercase leading-[1]">
                КАЧЕСТВЕННЫЙ И
                <br />
                ОПЕРАТИВНЫЙ СЕРВИС
              </h3>

              <p className="mt-[5px] max-w-[390px] text-[7px] leading-[1.15]">
                Обеспечиваем профессиональный сервис и оперативное решение любых
                вопросов.
              </p>
            </div>
          </article>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="w-full bg-[#f1f1f1]">
        <div className="mx-auto grid w-full max-w-[1120px] grid-cols-1 md:grid-cols-[1.2fr_0.8fr]">
          <div className="px-[45px] py-[45px]">
            <h2 className="text-[20px] font-black uppercase leading-[1.05] text-[#08afe2]">
              МЫ ПРЕДЛАГАЕМ
              <br />
              ПОЛНЫЙ КОМПЛЕКС УСЛУГ
            </h2>

            <div className="mt-[35px] grid grid-cols-2 gap-x-[30px] gap-y-[30px]">
              <div>
                <div className="mb-[7px] text-[28px] text-[#08afe2]">♧</div>

                <h3 className="text-[9px] font-black uppercase">КОНСАЛТИНГ</h3>

                <p className="mt-[5px] text-[8px] leading-[1.25] text-gray-600">
                  Помогаем в разработке концепции клуба, выборе оборудования и
                  создании эффективной фитнес-зоны.
                </p>
              </div>

              <div>
                <div className="mb-[7px] text-[28px] text-[#08afe2]">▶</div>

                <h3 className="text-[9px] font-black uppercase">
                  МОНТАЖ И СЕРВИСНОЕ
                  <br />
                  ОБСЛУЖИВАНИЕ
                </h3>

                <p className="mt-[5px] text-[8px] leading-[1.25] text-gray-600">
                  Полный цикл установки оборудования, а также сервисного
                  обслуживания тренажеров.
                </p>
              </div>

              <div>
                <div className="mb-[7px] text-[28px] text-[#08afe2]">◇</div>

                <h3 className="text-[9px] font-black uppercase">
                  ПОДБОР ОБОРУДОВАНИЯ
                  <br />И 3D ПРОЕКТ
                </h3>

                <p className="mt-[5px] text-[8px] leading-[1.25] text-gray-600">
                  Поможем подобрать оборудование, сделать расстановку на плане и
                  показать 3D визуализацию.
                </p>
              </div>

              <div>
                <div className="mb-[7px] text-[28px] text-[#08afe2]">▣</div>

                <h3 className="text-[9px] font-black uppercase">
                  ФИРМЕННЫЙ SHOW-ROOM
                </h3>

                <p className="mt-[5px] text-[8px] leading-[1.25] text-gray-600">
                  Приходите посмотреть оборудование перед приобретением.
                </p>
              </div>

              <div>
                <div className="mb-[7px] text-[28px] text-[#08afe2]">⚙</div>

                <h3 className="text-[9px] font-black uppercase">
                  ПОСТАВКА ЗАПЧАСТЕЙ
                </h3>

                <p className="mt-[5px] text-[8px] leading-[1.25] text-gray-600">
                  Поставка как оригинальных, так и сопоставимых запчастей.
                </p>
              </div>

              <div>
                <div className="mb-[7px] text-[28px] text-[#08afe2]">✓</div>

                <h3 className="text-[9px] font-black uppercase">
                  ДОСТАВКА ПО ВСЕМУ
                  <br />
                  УЗБЕКИСТАНУ
                </h3>

                <p className="mt-[5px] text-[8px] leading-[1.25] text-gray-600">
                  Мы доставляем оборудование по всем регионам Узбекистана.
                </p>
              </div>
            </div>
          </div>

          {/* SERVICE IMAGE */}
          <div className="h-[1000px]">
            <img
              src="/image 7.png"
              alt="TRUE Fitness equipment"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>
      {/* ================= FORM ================= */}
      <section
        className="relative min-h-[450px] bg-cover bg-center"
        style={{
          backgroundImage: "url('/Rectangle 28.png')",
        }}
      >
        <div className="absolute inset-0 bg-black/20" />

        <div className="relative z-10 mx-auto flex min-h-[450px] max-w-[1120px] items-center justify-center px-5">
          <div className="w-full max-w-[400px] bg-white p-[28px] shadow-xl">
            <h2 className="text-[13px] font-black uppercase leading-[1.15]">
              ПОЛУЧИТЕ ЭКСКЛЮЗИВНОЕ
              <br />
              ПРЕДЛОЖЕНИЕ НА ТРЕНАЖЕРЫ
              <br />
              TRUE FITNESS
            </h2>

            <p className="mt-[12px] text-[9px] leading-[1.4] text-gray-500">
              Мы будем рады проконсультировать вас и помочь с подбором
              необходимого оборудования.
            </p>

            <form className="mt-[18px] space-y-[7px]">
              <input
                type="text"
                placeholder="ИМЯ"
                className="w-full bg-[#f1f1f1] px-[12px] py-[11px] text-[9px] outline-none focus:ring-1 focus:ring-[#08afe2]"
              />

              <input
                type="email"
                placeholder="EMAIL"
                className="w-full bg-[#f1f1f1] px-[12px] py-[11px] text-[9px] outline-none focus:ring-1 focus:ring-[#08afe2]"
              />

              <input
                type="tel"
                placeholder="+998 (99) 999-99-99"
                className="w-full bg-[#f1f1f1] px-[12px] py-[11px] text-[9px] outline-none focus:ring-1 focus:ring-[#08afe2]"
              />

              <button
                type="submit"
                className="w-full bg-[#08afe2] py-[11px] text-[9px] font-bold uppercase text-white transition hover:bg-[#0796c2]"
              >
                ОТПРАВИТЬ
              </button>
            </form>

            <p className="mt-[10px] text-[7px] leading-[1.3] text-gray-400">
              Нажимая на кнопку, вы даете согласие на обработку персональных
              данных.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
