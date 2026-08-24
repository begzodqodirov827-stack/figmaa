import React from 'react'

import begovayaImg from '../assets/begovaya.png'
import tyanki from '../assets/tyanki.png'
import mujiki from '../assets/mujiki.png'
import tip from '../assets/tip.png'
import bgImage from '../assets/tipi.png'
import ded from '../assets/ded.png'
import dor from '../assets/dorojka.png'
import tyanka from '../assets/tyanka.png'
import ruka from '../assets/ruka.png'

function Advantages() {
  return (
    <section className="w-full overflow-hidden bg-white">

      {/* ================= HEADER ================= */}
      <div className="bg-[#00a6e3] px-4 py-16 text-center text-white">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-4">

          <span className="text-sm font-bold uppercase tracking-wider text-[#ffe600]">
            НАШИ ПРЕИМУЩЕСТВА
          </span>

          <h2 className="text-3xl font-extrabold uppercase tracking-wide md:text-5xl">
            ПРЕИМУЩЕСТВА TRUE FITNESS
          </h2>

          <p className="max-w-3xl text-sm font-semibold uppercase leading-relaxed tracking-wider md:text-base">
            БЛАГОДАРЯ КОТОРЫМ МЫ ЯВЛЯЕМСЯ МИРОВЫМ ЛИДЕРОМ В ПРОИЗВОДСТВЕ
            ФИТНЕС-ОБОРУДОВАНИЯ
          </p>

        </div>
      </div>

      {/* ================= CARDS ================= */}
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-4 py-12">

        {/* ================= FIRST 4 ================= */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">

          {/* CARD 1 */}
          <div className="flex flex-col items-center text-center">
            <div
              className="mb-4 aspect-[4/3] w-full bg-gray-100 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${begovayaImg})`,
              }}
            />

            <h3 className="mb-3 px-2 text-lg font-bold uppercase leading-snug text-[#00a6e3] md:text-xl">
              ЛУЧШИЕ ХАРАКТЕРИСТИКИ В КЛАССЕ
            </h3>

            <p className="px-2 text-xs leading-relaxed text-gray-600 md:text-sm">
              Наши тренажеры имеют самые совершенные характеристики в классе,
              от более мощных технических показателей до расширенных
              функциональных возможностей
            </p>
          </div>

          {/* CARD 2 */}
          <div className="flex flex-col items-center text-center">
            <div
              className="mb-4 aspect-[4/3] w-full bg-gray-100 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${tyanki})`,
              }}
            />

            <h3 className="mb-3 px-2 text-lg font-bold uppercase leading-snug text-[#00a6e3] md:text-xl">
              ВЫСОКАЯ НАДЕЖНОСТЬ ОБОРУДОВАНИЯ
            </h3>

            <p className="px-2 text-xs leading-relaxed text-gray-600 md:text-sm">
              Высокое качество тренажеров - это визитная карточка TRUE.
              Кроме того, TRUE предоставляет до 5 лет полной гарантии на
              кардио тренажеры.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="flex flex-col items-center text-center">
            <div
              className="mb-4 aspect-[4/3] w-full bg-gray-100 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${mujiki})`,
              }}
            />

            <h3 className="mb-3 px-2 text-lg font-bold uppercase leading-snug text-[#00a6e3] md:text-xl">
              НИЗКАЯ СТОИМОСТЬ ВЛАДЕНИЯ
            </h3>

            <p className="px-2 text-xs leading-relaxed text-gray-600 md:text-sm">
              Тренажеры способны выдерживать серьезную эксплуатационную
              нагрузку, сохраняя минимальные затраты на сервис, что
              обеспечивает минимальную стоимость владения
            </p>
          </div>

          {/* CARD 4 */}
          <div className="flex flex-col items-center text-center">
            <div
              className="mb-4 aspect-[4/3] w-full bg-gray-100 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${tip})`,
              }}
            />

            <h3 className="mb-3 px-2 text-lg font-bold uppercase leading-snug text-[#00a6e3] md:text-xl">
              КАЧЕСТВЕННЫЙ И ОПЕРАТИВНЫЙ СЕРВИС
            </h3>

            <p className="px-2 text-xs leading-relaxed text-gray-600 md:text-sm">
              Оборудование должно работать бесперебойно, поэтому мы уделяем
              особое внимание наличию всех необходимых запчастей и высокой
              срочности технического реагирования
            </p>
          </div>

        </div>

        {/* ================= SECOND 4 ================= */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">

          {/* CARD 5 */}
          <div className="flex flex-col items-center text-center">
            <div
              className="mb-4 aspect-[4/3] w-full bg-gray-100 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${ded})`,
              }}
            />

            <h3 className="mb-3 px-2 text-lg font-bold uppercase leading-snug text-[#00a6e3] md:text-xl">
              ЦЕНЫ НИЖЕ, ЧЕМ У АНАЛОГОВ
            </h3>

            <p className="px-2 text-xs leading-relaxed text-gray-600 md:text-sm">
              Стоимость тренажеров вас приятно удивит. Несмотря на то, что мы
              полностью превосходим конкурентов, наши цены ниже
            </p>
          </div>

          {/* CARD 6 */}
          <div className="flex flex-col items-center text-center">
            <div
              className="mb-4 aspect-[4/3] w-full bg-gray-100 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${dor})`,
              }}
            />

            <h3 className="mb-3 px-2 text-lg font-bold uppercase leading-snug text-[#00a6e3] md:text-xl">
              СОВЕРШЕННАЯ ПРОИЗВОДИТЕЛЬНОСТЬ
            </h3>

            <p className="px-2 text-xs leading-relaxed text-gray-600 md:text-sm">
              Тренажеры TRUE обеспечивают непревзойденный уровень тренировок
              для достижения самых высоких результатов.
            </p>
          </div>

          {/* CARD 7 */}
          <div className="flex flex-col items-center text-center">
            <div
              className="mb-4 aspect-[4/3] w-full bg-gray-100 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${tyanka})`,
              }}
            />

            <h3 className="mb-3 px-2 text-lg font-bold uppercase leading-snug text-[#00a6e3] md:text-xl">
              АБСОЛЮТНЫЕ ЛИДЕРЫ ПО КОЛИЧЕСТВУ ИННОВАЦИЙ
            </h3>

            <p className="px-2 text-xs leading-relaxed text-gray-600 md:text-sm">
              Наши тренажеры имеют самые совершенные характеристики в классе,
              от более мощных технических показателей до расширенных
              функциональных возможностей
            </p>
          </div>

          {/* CARD 8 */}
          <div className="flex flex-col items-center text-center">
            <div
              className="mb-4 aspect-[4/3] w-full bg-gray-100 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${ruka})`,
              }}
            />

            <h3 className="mb-3 px-2 text-lg font-bold uppercase leading-snug text-[#00a6e3] md:text-xl">
              МАКСИМАЛЬНОЕ УДОБСТВО И ФУНКЦИОНАЛЬНОСТЬ
            </h3>

            <p className="px-2 text-xs leading-relaxed text-gray-600 md:text-sm">
              Компания TRUE продумывает все технические нюансы и делает
              тренажеры максимально удобными и функциональными
            </p>
          </div>

        </div>

        {/* ================= TOP 5 ================= */}
        <div className="relative mt-4 border border-sky-200 px-6 pb-8 pt-10 text-center">

          <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 bg-[#00a6e3] px-8 py-1 text-sm font-bold uppercase tracking-wider text-white">
            TOP 5
          </div>

          <h3 className="mx-auto max-w-4xl text-base font-bold uppercase leading-relaxed text-gray-800 sm:text-xl md:text-2xl">
            БРЕНД TRUE FITNESS ВХОДИТ В ТОП 5 КРУПНЕЙШИХ ПРОИЗВОДИТЕЛЕЙ
            ФИТНЕС ОБОРУДОВАНИЯ
          </h3>

        </div>

      </div>

      {/* ================= FORM ================= */}
      <div
        className="w-full bg-cover bg-center bg-no-repeat px-4 py-12 md:py-20"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      >

        <div className="mx-auto max-w-6xl border border-white/10 bg-black/65 p-6 text-center text-white shadow-2xl backdrop-blur-sm md:p-12">

          <span className="mb-4 block text-xs font-bold uppercase tracking-widest text-[#ffe600] md:text-sm">
            TRUE FITNESS
          </span>

          <h2 className="mx-auto mb-4 max-w-4xl text-2xl font-black uppercase leading-tight tracking-wide sm:text-3xl md:text-4xl lg:text-5xl">
            ПОЛУЧИТЕ{' '}
            <span className="text-[#00a6e3]">
              ЭКСКЛЮЗИВНОЕ ПРЕДЛОЖЕНИЕ
            </span>{' '}
            НА ТРЕНАЖЕРЫ{' '}
            <span className="text-[#00a6e3]">
              TRUE FITNESS
            </span>
          </h2>

          <p className="mx-auto mb-8 max-w-3xl text-xs font-bold uppercase tracking-wider text-[#ffe600] sm:text-sm md:text-base">
            МЫ БУДЕМ РАДЫ ПРОКОНСУЛЬТИРОВАТЬ ВАС И ПОМОЧЬ С ПОДБОРОМ
            ОБОРУДОВАНИЯ
          </p>

          <form
            className="mx-auto mb-6 grid max-w-5xl grid-cols-1 gap-4 md:grid-cols-4"
            onSubmit={(e) => e.preventDefault()}
          >

            {/* NAME */}
            <input
              type="text"
              placeholder="ИМЯ"
              className="w-full bg-[#dcdcdc] px-4 py-3 text-sm font-bold uppercase text-black placeholder-gray-600 focus:outline-none"
            />

            {/* PHONE */}
            <div className="flex w-full items-center bg-[#dcdcdc] px-3 py-3">
              <span className="mr-2 text-lg">
                🇺🇿
              </span>

              <span className="mr-2 text-sm font-bold text-black">
                ▾
              </span>

              <input
                type="tel"
                defaultValue="+998 (99)-999-99-99"
                className="w-full bg-transparent text-sm font-bold text-black focus:outline-none"
              />
            </div>

            {/* EMAIL */}
            <input
              type="email"
              placeholder="E-MAIL"
              className="w-full bg-[#dcdcdc] px-4 py-3 text-sm font-bold uppercase text-black placeholder-gray-600 focus:outline-none"
            />

            {/* BUTTON */}
            <button
              type="submit"
              className="w-full cursor-pointer bg-[#00a6e3] px-4 py-3 text-sm font-black uppercase text-white transition-colors duration-200 hover:bg-[#008cc0]"
            >
              ОТПРАВИТЬ
            </button>

          </form>

          <p className="mx-auto max-w-2xl text-[10px] font-semibold uppercase leading-relaxed tracking-wider text-gray-200 sm:text-xs">
            «НАЖИМАЯ НА КНОПКУ, ВЫ ДАЕТЕ СОГЛАСИЕ НА ОБРАБОТКУ ПЕРСОНАЛЬНЫХ
            ДАННЫХ И СОГЛАШАЕТЕСЬ С ПОЛИТИКОЙ КОНФИДЕНЦИАЛЬНОСТИ»
          </p>

        </div>

      </div>

    </section>
  )
}

export default Advantages