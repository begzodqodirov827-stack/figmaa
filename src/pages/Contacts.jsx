import React from "react";

export default function Contacts() {
  return (
    <div className="w-full bg-white">
      {/* Header Banner */}
      <div className="bg-[#009BDF] text-white py-14 px-4 text-center">
        <h1 className="text-2xl sm:text-4xl font-extrabold uppercase tracking-wider">
          КОНТАКТЫ
        </h1>
        <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-cyan-100 mt-2">
          СВЯЖИТЕСЬ С НАМИ ИЛИ ПОСЕТИТЕ НАШ ШОУ-РУМ
        </p>
      </div>

      {/* Quick Contact Form & Info Cards */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-12 md:py-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="bg-gray-50 border border-gray-200 p-8 rounded-lg flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 bg-[#009BDF] text-white rounded-full flex items-center justify-center mb-6 text-xl">
              📞
            </div>
            <h3 className="text-gray-900 font-black text-lg uppercase tracking-wide mb-2">
              ТЕЛЕФОН
            </h3>
            <p className="text-gray-500 text-xs mb-4">
              Мы на связи с понедельника по субботу
            </p>
            <a
              href="tel:+998906066666"
              className="text-[#009BDF] font-black text-lg hover:underline"
            >
              +998 (90) 606-66-66
            </a>
          </div>
        </div>

        <div className="bg-gray-50 border border-gray-200 p-8 rounded-lg flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 bg-[#009BDF] text-white rounded-full flex items-center justify-center mb-6 text-xl">
              ✉️
            </div>
            <h3 className="text-gray-900 font-black text-lg uppercase tracking-wide mb-2">
              E-MAIL
            </h3>
            <p className="text-gray-500 text-xs mb-4">
              Пишите нам по любым вопросам
            </p>
            <a
              href="mailto:info@prowellness.uz"
              className="text-[#009BDF] font-black text-lg hover:underline"
            >
              info@prowellness.uz
            </a>
          </div>
        </div>

        <div className="bg-gray-50 border border-gray-200 p-8 rounded-lg flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 bg-[#009BDF] text-white rounded-full flex items-center justify-center mb-6 text-xl">
              📍
            </div>
            <h3 className="text-gray-900 font-black text-lg uppercase tracking-wide mb-2">
              АДРЕС
            </h3>
            <p className="text-gray-500 text-xs mb-4">
              Фирменный шоу-рум TRUE FITNESS
            </p>
            <p className="text-gray-800 font-bold text-sm leading-relaxed">
              Ташкент Сити, Булевард, Ул. Фурката 2А
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}