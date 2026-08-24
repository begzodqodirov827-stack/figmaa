import React from "react";

function About() {
  return (
    <div className="w-full min-h-screen bg-white font-sans antialiased overflow-x-hidden flex flex-col items-center">
      <main className="w-full flex flex-col items-center">
        <div className="relative w-full h-[360px] md:h-[460px] bg-gray-900 overflow-hidden rounded-sm">
          <img
            src="/Rectangle 1 (1).png"
            alt="True Fitness Gym"
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-black/20 flex flex-col items-center justify-center text-center p-4">
            <button className="w-14 h-14 md:w-16 md:h-16 bg-[#00A3E0] rounded-full flex items-center justify-center mb-6 shadow-lg hover:scale-105 transition-transform">
              <svg
                className="w-5 h-5 text-white fill-current ml-1"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
            <h1 className="text-white text-2xl md:text-4xl font-black tracking-widest uppercase max-w-2xl leading-snug">
              TRUE FITNESS - ПРЕМИУМ <br className="hidden md:inline" />{" "}
              ТРЕНАЖЕРЫ ИЗ США
            </h1>
          </div>
        </div>

        <div className="w-full bg-[#00A3E0] py-5 px-4 text-center">
          <p className="text-white text-xs md:text-sm font-black tracking-widest uppercase max-w-3xl mx-auto leading-relaxed">
            TRUE - ВЕДУЩИЙ МИРОВОЙ ПРОИЗВОДИТЕЛЬ ПРЕМИАЛЬНОГО ФИТНЕС
            ОБОРУДОВАНИЯ
          </p>
        </div>

        <div className="w-full bg-white pt-16 pb-20 overflow-hidden">
          <div className="w-full max-w-[1200px] mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-12 relative">
            <div
              className="absolute inset-y-0 left-1/2 -right-[100vw] bg-[#00A3E0] z-0 hidden md:block"
              style={{
                clipPath: "polygon(15% 0%, 100% 0%, 100% 100%, 0% 100%)",
              }}
            ></div>

            <div className="md:col-span-5 flex flex-col justify-center z-10">
              <div className="mb-6">
                <h2 className="text-2xl font-black text-gray-900 leading-none tracking-tight">
                  TRUE
                </h2>
                <h2 className="text-2xl font-black text-[#00A3E0] leading-none tracking-tight uppercase">
                  FITNESS
                </h2>
                <div className="w-12 h-[3px] bg-yellow-400 mt-3"></div>
              </div>

              <p className="text-gray-900 text-xs font-black uppercase tracking-wider max-w-[260px] leading-snug mb-6">
                СОВРЕМЕННОЕ И НАДЕЖНОЕ ОБОРУДОВАНИЕ ДЛЯ ФИТНЕС-КЛУБОВ
              </p>

              <a
                href="#cardio"
                className="group flex items-center gap-2 text-[#00A3E0] font-black text-[10px] tracking-widest uppercase hover:underline mb-8"
              >
                КАРДИО ТРЕНАЖЕРЫ
                <span className="transform group-hover:translate-x-1 transition-transform text-xs">
                  ➔
                </span>
              </a>

              <div className="flex gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-400"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-gray-200"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-gray-200"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-gray-200"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-gray-200"></span>
              </div>
            </div>

            <div className="md:col-span-7 relative flex items-center justify-center mt-12 md:mt-0 min-h-[320px] z-10">
              <div
                className="absolute inset-0 bg-[#00A3E0] z-0 block md:hidden"
                style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
              ></div>

              <img
                src="/image 6 (1).png"
                alt="True Alpine Runner"
                className="relative z-10 w-[85%] max-w-[380px] drop-shadow-[0_25px_25px_rgba(0,0,0,0.25)] object-contain transform md:-translate-y-2 md:translate-x-6"
              />
            </div>
          </div>
        </div>

        <div className="w-full max-w-[1200px] mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 mb-16">
          <div className="flex flex-col gap-6">
            <div className="relative w-full h-[280px] bg-gray-800 rounded-sm overflow-hidden p-8 flex flex-col justify-end">
              <img
                src="/Group 1 (1).png"
                alt="Характеристики"
                className="absolute inset-0 w-full h-full object-cover opacity-90 z-0"
              />
              <div className="absolute inset-0 bg-black/10 z-0"></div>

              <div className="relative z-10 max-w-md">
                <h3 className="text-white text-xl font-black uppercase tracking-wider leading-tight mb-2">
                  ЛУЧШИЕ <br /> ХАРАКТЕРИСТИКИ
                </h3>
                <div className="w-12 h-[3px] bg-yellow-400 mb-4"></div>
                <p className="text-white/90 text-[11px] font-medium leading-relaxed">
                  Наши тренажеры имеют самые совершенные характеристики в классе
                  от более мощных технических показателей до расширенных
                  функциональных возможностей.
                </p>
              </div>
            </div>

            <div className="w-full bg-[#00A3E0] p-8 flex flex-col justify-center min-h-[180px] rounded-sm">
              <h3 className="text-white text-lg font-black uppercase tracking-wider mb-2">
                ВЫСОКОЕ КАЧЕСТВО И НАДЕЖНОСТЬ
              </h3>
              <div className="w-12 h-[2px] bg-yellow-400 mb-4"></div>
              <p className="text-white/90 text-[11px] font-medium leading-relaxed max-w-md">
                Высокое Качество Тренажеров - Это Визитная Карточка TRUE. Кроме
                Того TRUE Предоставляет До 5 Лет Гарантии На Кардиотренажеры.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="w-full bg-[#00A3E0] p-8 flex flex-col justify-center min-h-[180px] rounded-sm">
              <h3 className="text-white text-lg font-black uppercase tracking-wider mb-2">
                НИЗКАЯ СТОИМОСТЬ ВЛАДЕНИЯ
              </h3>
              <div className="w-12 h-[2px] bg-yellow-400 mb-4"></div>
              <p className="text-white/90 text-[11px] font-medium leading-relaxed max-w-md">
                Надежность Оборудования Обеспечивает Низкие Затраты На Сервисное
                Обслуживание, Так По Стоимости Затрат На Эксплуатацию TRUE
                Выигрывает У Конкурентов.
              </p>
            </div>

            <div className="relative w-full h-[280px] bg-gray-800 rounded-sm overflow-hidden p-8 flex flex-col justify-end">
              <img
                src="/Group 2 (1).png"
                alt="Сервис"
                className="absolute inset-0 w-full h-full object-cover opacity-90 z-0"
              />
              <div className="absolute inset-0 bg-black/10 z-0"></div>

              <div className="relative z-10 max-w-md">
                <h3 className="text-white text-xl font-black uppercase tracking-wider leading-tight mb-2">
                  КАЧЕСТВЕННЫЕ И <br /> ОПЕРАТИВНЫЙ СЕРВИС
                </h3>
                <div className="w-12 h-[3px] bg-yellow-400 mb-4"></div>
                <p className="text-white/90 text-[11px] font-medium leading-relaxed">
                  Оборудование Должно Работать Бесперебойно, Поэтому Мы Уделяем
                  Особое Внимание Наличию Всех Необходимых Запчастей И Высокой
                  Срочности Технического Реагирования.
                </p>
              </div>
            </div>
          </div>
        </div>

        <section className="mt-12 w-full bg-[#f4f7f9]">
          <div className="mx-auto grid w-full max-w-[1200px] grid-cols-1 lg:grid-cols-12">
            <div className="h-[900px] bg-[#f4f7f9] px-6 py-16 sm:px-10 lg:col-span-7 lg:px-[55px] lg:py-[80px]">
              <h2 className="mb-[70px] text-2xl font-black uppercase leading-tight tracking-wider text-[#00A3E0] sm:text-3xl">
                МЫ ПРЕДЛАГАЕМ
                <br />
                ПОЛНЫЙ КОМПЛЕКС УСЛУГ
              </h2>

              <div className="grid grid-cols-1 gap-x-[45px] gap-y-[65px] sm:grid-cols-2">
                {/* 1 */}
                <div>
                  <div className="mb-5 text-[#00A3E0]">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className="h-9 w-9"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z"
                      />
                    </svg>
                  </div>

                  <h4 className="mb-3 text-xs font-black uppercase tracking-wider text-gray-900">
                    КОНСАЛТИНГ
                  </h4>

                  <p className="text-[11px] font-medium leading-[1.7] text-gray-500">
                    Помогаем в разработке концепции клуба, зонировании,
                    оснащении и расчете финансовых показателей.
                  </p>
                </div>

                {/* 2 */}
                <div>
                  <div className="mb-5 text-[#00A3E0]">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className="h-9 w-9"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z"
                      />
                    </svg>
                  </div>

                  <h4 className="mb-3 text-xs font-black uppercase tracking-wider text-gray-900">
                    МОНТАЖ И СЕРВИСНОЕ
                    <br />
                    ОБСЛУЖИВАНИЕ
                  </h4>

                  <p className="text-[11px] font-medium leading-[1.7] text-gray-500">
                    Полный цикл пуско-наладочных работ, а также сервисного
                    обслуживания тренажеров.
                  </p>
                </div>

                {/* 3 */}
                <div>
                  <div className="mb-5 text-[#00A3E0]">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className="h-9 w-9"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"
                      />
                    </svg>
                  </div>

                  <h4 className="mb-3 text-xs font-black uppercase tracking-wider text-gray-900">
                    ПОДБОР ОБОРУДОВАНИЯ
                    <br />И 3D ПРОЕКТ
                  </h4>

                  <p className="text-[11px] font-medium leading-[1.7] text-gray-500">
                    Помогаем подобрать оборудование, сделать расстановку на
                    плане и показать 3D визуализацию вашего будущего проекта.
                  </p>
                </div>

                {/* 4 */}
                <div>
                  <div className="mb-5 text-[#00A3E0]">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className="h-9 w-9"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 21h19.5m-18-18v14.25M21.75 21a.75.75 0 01-.75.75H3a.75.75 0 01-.75-.75V3a.75.75 0 01.75-.75h18a.75.75 0 01.75.75V21zM9 10.5a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z"
                      />
                    </svg>
                  </div>

                  <h4 className="mb-3 text-xs font-black uppercase tracking-wider text-gray-900">
                    ФИРМЕННЫЙ SHOW-ROOM
                  </h4>

                  <p className="text-[11px] font-medium leading-[1.7] text-gray-500">
                    Пройдите тест-драйв оборудования перед приобретением.
                  </p>
                </div>

                {/* 5 */}
                <div>
                  <div className="mb-5 text-[#00A3E0]">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className="h-9 w-9"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.43l-1.003.767a1.123 1.123 0 00-.417 1.015c.004.074.006.148.006.222 0 .074-.002.148-.006.222a1.123 1.123 0 00.417 1.015l1.003.767a1.125 1.125 0 01.26 1.43l-1.296 2.247a1.125 1.125 0 01-1.37.49l-1.216-.456a1.125 1.125 0 00-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281a1.125 1.125 0 00-.646-.87a6.512 6.512 0 01-.22-.127a1.125 1.125 0 00-1.074-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.43l1.004-.767a1.122 1.122 0 00.416-1.015a6.442 6.442 0 01-.006-.222c0-.074.002-.148.006-.222a1.122 1.122 0 00-.416-1.015l-1.004-.767a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.49l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.28z"
                      />
                    </svg>
                  </div>

                  <h4 className="mb-3 text-xs font-black uppercase tracking-wider text-gray-900">
                    ПОСТАВКА ЗАПЧАСТЕЙ
                  </h4>

                  <p className="text-[11px] font-medium leading-[1.7] text-gray-500">
                    Поставка как гарантийных, так и постгарантийных запчастей.
                  </p>
                </div>

                {/* 6 */}
                <div>
                  <div className="mb-5 text-[#00A3E0]">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className="h-9 w-9"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z"
                      />
                    </svg>
                  </div>

                  <h4 className="mb-3 text-xs font-black uppercase tracking-wider text-gray-900">
                    ДОСТАВКА ПО ВСЕМУ
                    <br />
                    УЗБЕКИСТАНУ
                  </h4>

                  <p className="text-[11px] font-medium leading-[1.7] text-gray-500">
                    Мы доставляем оборудование по всему Узбекистану.
                  </p>
                </div>
              </div>
            </div>

            {/* ================= RIGHT IMAGE ================= */}
            <div className="relative h-[900px] lg:col-span-5">
              <img
                src="/image 7.png"
                alt="True Climbing Trainer"
                className="absolute inset-0 h-full w-full object-cover object-center"
              />
            </div>
          </div>
        </section>
        <section className="w-full relative min-h-[550px] md:min-h-[620px] flex items-center justify-center mt-12 overflow-hidden select-none">
          <div className="absolute inset-0 z-0">
            <img
              src="/Rectangle 28.png"
              alt="True Fitness Outdoor Gym"
              className="w-full h-full object-cover object-center"
            />
          </div>

          <div className="w-full max-w-[1200px] mx-auto px-4 md:px-8 relative z-10 flex items-center justify-center">
            <div className="w-full max-w-[480px] bg-white p-8 md:p-10 shadow-2xl flex flex-col">
              <h3 className="text-gray-900 text-lg md:text-xl font-black uppercase tracking-wider leading-tight mb-4">
                ПОЛУЧИТЕ ЭКСКЛЮЗИВНОЕ ПРЕДЛОЖЕНИЕ НА ТРЕНАЖЕРЫ TRUE FITNESS
              </h3>

              <p className="text-gray-500 text-[11px] font-medium leading-relaxed mb-6">
                Мы будем рады проконсультировать вас и помочь с подбором
                оборудования
              </p>

              <form
                className="flex flex-col gap-3"
                onSubmit={(e) => e.preventDefault()}
              >
                <input
                  type="text"
                  placeholder="ИМЯ"
                  className="w-full bg-[#f4f7f9] text-xs font-bold text-gray-900 placeholder-gray-400 px-4 py-3.5 focus:outline-none focus:ring-1 focus:ring-[#00A3E0] transition-shadow uppercase tracking-wider"
                />

                <input
                  type="email"
                  placeholder="EMAIL"
                  className="w-full bg-[#f4f7f9] text-xs font-bold text-gray-900 placeholder-gray-400 px-4 py-3.5 focus:outline-none focus:ring-1 focus:ring-[#00A3E0] transition-shadow uppercase tracking-wider"
                />

                <div className="w-full bg-[#f4f7f9] flex items-center px-4 py-3.5 focus-within:ring-1 focus-within:ring-[#00A3E0] transition-shadow">
                  <div className="flex items-center gap-1.5 pr-3 border-r border-gray-300 mr-3 text-xs font-bold text-gray-700">
                    <span className="text-sm">🇺🇿</span>
                    <span>▼</span>
                  </div>
                  <span className="text-xs font-bold text-gray-900 mr-1">
                    +998
                  </span>
                  <input
                    type="tel"
                    placeholder="(99)-999-99-99"
                    className="w-full bg-transparent text-xs font-bold text-gray-900 placeholder-gray-400 focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#00A3E0] text-white text-xs font-black uppercase tracking-widest py-4 mt-2 hover:bg-[#0082b3] transition-colors shadow-md active:scale-[0.99] transform"
                >
                  ОТПРАВИТЬ
                </button>
              </form>

              <p className="text-gray-400 text-[9px] font-medium leading-normal mt-5">
                Нажимая на кнопку, вы даете согласие на обработку персональных
                данных и соглашаетесь с политикой конфиденциальности
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default About;
