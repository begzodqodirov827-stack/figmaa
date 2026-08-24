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

// Оставляем пустым, подставишь свой путь

function Advantages() {
  return (
    <section className="w-full">
      {/* Голубая шапка */}
      <div className="bg-[#00a6e3] text-white py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto flex flex-col items-center gap-4">
          <span className="text-[#ffe600] text-sm font-bold uppercase tracking-wider">
            НАШИ ПРЕИМУЩЕСТВА
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold uppercase tracking-wide">
            ПРЕИМУЩЕСТВА TRUE FITNESS
          </h2>
          <p className="text-sm md:text-base font-semibold uppercase tracking-wider max-w-3xl leading-relaxed">
            БЛАГОДАРЯ КОТОРЫМ МЫ ЯВЛЯЕМСЯ МИРОВЫМ ЛИДЕРОМ В ПРОИЗВОДСТВЕ ФИТНЕС-ОБОРУДОВАНИЯ
          </p>
        </div>
      </div>

      {/* Сетка карточек */}
      <div className="max-w-7xl mx-auto px-4 py-12 flex flex-col gap-12">
        
        {/* Первые 4 карточки */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {/* Карточка 1 */}
          <div className="flex flex-col items-center text-center">
            <div 
              className="w-full aspect-[4/3] bg-gray-100 mb-4 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${begovayaImg})` }}
            />
            <h3 className="text-[#00a6e3] font-bold text-lg md:text-xl uppercase mb-3 leading-snug px-2">
              ЛУЧШИЕ ХАРАКТЕРИСТИКИ В КЛАССЕ
            </h3>
            <p className="text-gray-600 text-xs md:text-sm leading-relaxed px-2">
              Наши тренажеры имеют самые совершенные характеристики в классе, от более мощных технических показателей до расширенных функциональных возможностей
            </p>
          </div>

          {/* Карточка 2 */}
          <div className="flex flex-col items-center text-center">
            <div 
              className="w-full aspect-[4/3] bg-gray-100 mb-4 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${tyanki})` }}
            />
            <h3 className="text-[#00a6e3] font-bold text-lg md:text-xl uppercase mb-3 leading-snug px-2">
              ВЫСОКАЯ НАДЕЖНОСТЬ ОБОРУДОВАНИЯ
            </h3>
            <p className="text-gray-600 text-xs md:text-sm leading-relaxed px-2">
              Высокое Качество Тренажеров - Это Визитная Карточка TRUE. Кроме Того, TRUE Предоставляет До 5 Лет Полной Гарантии На Кардио Тренажеры.
            </p>
          </div>

          {/* Карточка 3 */}
          <div className="flex flex-col items-center text-center">
            <div 
              className="w-full aspect-[4/3] bg-gray-100 mb-4 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${mujiki})` }}
            />
            <h3 className="text-[#00a6e3] font-bold text-lg md:text-xl uppercase mb-3 leading-snug px-2">
              НИЗКАЯ СТОИМОСТЬ ВЛАДЕНИЯ
            </h3>
            <p className="text-gray-600 text-xs md:text-sm leading-relaxed px-2">
              Тренажеры Способны Выдерживать Серьезную Эксплуатационную Нагрузку, Сохраняя Минимальные Затраты На Сервис, Что Обеспечивает Минимальную Стоимость Владения
            </p>
          </div>

          {/* Карточка 4 */}
          <div className="flex flex-col items-center text-center">
            <div 
              className="w-full aspect-[4/3] bg-gray-100 mb-4 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${tip})` }}
            />
            <h3 className="text-[#00a6e3] font-bold text-lg md:text-xl uppercase mb-3 leading-snug px-2">
              КАЧЕСТВЕННЫЙ И ОПЕРАТИВНЫЙ СЕРВИС
            </h3>
            <p className="text-gray-600 text-xs md:text-sm leading-relaxed px-2">
              Оборудование Должно Работать Бесперебойно, Поэтому Мы Уделяем Особое Внимание Наличию Всех Необходимых Запчастей И Высокой Срочности Технического Реагирования
            </p>
          </div>

        </div>

        {/* Вторые 4 карточки */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {/* Карточка 5 */}
          <div className="flex flex-col items-center text-center">
            <div 
              className="w-full aspect-[4/3] bg-gray-100 mb-4 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${ded})` }}
            />
            <h3 className="text-[#00a6e3] font-bold text-lg md:text-xl uppercase mb-3 leading-snug px-2">
              ЦЕНЫ НИЖЕ, ЧЕМ У АНАЛОГОВ
            </h3>
            <p className="text-gray-600 text-xs md:text-sm leading-relaxed px-2">
              Стоимость Тренажеров Вас Приятно Удивит. Несмотря На То, Что Мы Полностью Превосходим Конкурентов, Наши Цены Ниже
            </p>
          </div>

          {/* Карточка 6 */}
          <div className="flex flex-col items-center text-center">
            <div 
              className="w-full aspect-[4/3] bg-gray-100 mb-4 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${dor})` }}
            />
            <h3 className="text-[#00a6e3] font-bold text-lg md:text-xl uppercase mb-3 leading-snug px-2">
              СОВЕРШЕННАЯ ПРОИЗВОДИТЕЛЬНОСТЬ
            </h3>
            <p className="text-gray-600 text-xs md:text-sm leading-relaxed px-2">
              Тренажеры TRUE Обеспечивают Непревзойденный Уровень Тренировок, Для Достижения Самых Высоких Результатов.
            </p>
          </div>

          {/* Карточка 7 */}
          <div className="flex flex-col items-center text-center">
            <div 
              className="w-full aspect-[4/3] bg-gray-100 mb-4 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${tyanka})` }}
            />
            <h3 className="text-[#00a6e3] font-bold text-lg md:text-xl uppercase mb-3 leading-snug px-2">
              АБСОЛЮТНЫЕ ЛИДЕРЫ ПО КОЛИЧЕСТВУ ИННОВАЦИЙ
            </h3>
            <p className="text-gray-600 text-xs md:text-sm leading-relaxed px-2">
              Наши тренажеры имеют самые совершенные характеристики в классе, от более мощных технических показателей до расширенных функциональных возможностей
            </p>
          </div>

          {/* Карточка 8 */}
          <div className="flex flex-col items-center text-center">
            <div 
              className="w-full aspect-[4/3] bg-gray-100 mb-4 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${ruka})` }}
            />
            <h3 className="text-[#00a6e3] font-bold text-lg md:text-xl uppercase mb-3 leading-snug px-2">
              МАКСИМАЛЬНОЕ УДОБСТВО И ФУНКЦИОНАЛЬНОСТЬ
            </h3>
            <p className="text-gray-600 text-xs md:text-sm leading-relaxed px-2">
              Компания TRUE Продумывает Все Технические Нюансы И Делает Тренажеры Максимально Удобными И Функциональными
            </p>
          </div>

        </div>

        {/* Баннер TOP 5 под карточками */}
        <div className="mt-8 border border-sky-200 relative pt-10 pb-8 px-6 text-center">
          {/* Плашка TOP 5 по центру верхней линии */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#00a6e3] text-white px-8 py-1 font-bold text-sm tracking-wider uppercase">
            TOP 5
          </div>
          <h3 className="text-gray-800 font-bold text-base sm:text-xl md:text-2xl uppercase leading-relaxed max-w-4xl mx-auto">
            БРЕНД TRUE FITNESS ВХОДИТ В ТОП 5 КРУПНЕЙШИХ ПРОИЗВОДИТЕЛЕЙ ФИТНЕС ОБОРУДОВАНИЯ
          </h3>
        </div>

      </div>

      {/* Форма с фоновой картинкой (под баннером) */}
      <div 
        className="w-full bg-cover bg-center bg-no-repeat py-12 md:py-20 px-4"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="max-w-6xl mx-auto bg-black/65 backdrop-blur-xs p-6 md:p-12 text-center text-white border border-white/10 shadow-2xl">
          <span className="text-[#ffe600] text-xs md:text-sm font-bold uppercase tracking-widest block mb-4">
            TRUE FITNESS
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black uppercase leading-tight max-w-4xl mx-auto tracking-wide mb-4">
            ПОЛУЧИТЕ <span className="text-[#00a6e3]">ЭКСКЛЮЗИВНОЕ ПРЕДЛОЖЕНИЕ</span> НА ТРЕНАЖЕРЫ <span className="text-[#00a6e3]">TRUE FITNESS</span>
          </h2>

          <p className="text-[#ffe600] text-xs sm:text-sm md:text-base font-bold uppercase tracking-wider mb-8 max-w-3xl mx-auto">
            МЫ БУДЕМ РАДЫ ПРОКОНСУЛЬТИРОВАТЬ ВАС И ПОМОЧЬ С ПОДБОРОМ ОБОРУДОВАНИЯ
          </p>

          <form className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-5xl mx-auto mb-6" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="text" 
              placeholder="ИМЯ" 
              className="bg-[#dcdcdc] text-black placeholder-gray-600 font-bold px-4 py-3 text-sm focus:outline-none uppercase w-full"
            />

            <div className="flex items-center bg-[#dcdcdc] px-3 py-3 w-full">
              <span className="mr-2 text-lg">🇺🇿</span>
              <span className="text-black font-bold mr-2 text-sm">▾</span>
              <input 
                type="tel" 
                defaultValue="+998 (99)-999-99-99"
                className="bg-transparent text-black font-bold text-sm focus:outline-none w-full"
              />
            </div>

            <input 
              type="email" 
              placeholder="E-MAIL" 
              className="bg-[#dcdcdc] text-black placeholder-gray-600 font-bold px-4 py-3 text-sm focus:outline-none uppercase w-full"
            />

            <button 
              type="submit" 
              className="bg-[#00a6e3] hover:bg-[#008cc0] text-white font-black text-sm uppercase px-4 py-3 transition-colors duration-200 cursor-pointer w-full"
            >
              ОТПРАВИТЬ
            </button>
          </form>

          <p className="text-[10px] sm:text-xs text-gray-200 uppercase max-w-2xl mx-auto font-semibold leading-relaxed tracking-wider">
            «НАЖИМАЯ НА КНОПКУ, ВЫ ДАЕТЕ СОГЛАСИЕ НА ОБРАБОТКУ ПЕРСОНАЛЬНЫХ ДАННЫХ И СОГЛАШАЕТЕСЬ С ПОЛИТИКОЙ КОНФИДЕНЦИАЛЬНОСТИ»
          </p>
        </div>
      </div>
    </section>
  )
}

export default Advantages