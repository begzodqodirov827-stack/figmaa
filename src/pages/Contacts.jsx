import React, { useState } from "react";

export default function BottomTransition() {
  const slides = [
    {
      id: 1,
      image: "/Rectangle 1 (1).png",
      alt: "True Fitness Gym Interior 1",
    },
    { id: 2, image: "/Rectangle 28.png", alt: "True Fitness Gym Interior 2" },
    { id: 3, image: "/rasm.png", alt: "True Fitness Gym Interior 3" },
    { id: 4, image: "/club-plan.png", alt: "True Fitness Gym Interior 4" },
    { id: 5, image: "/image 6 (1).png", alt: "True Fitness Gym Interior 5" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="w-full bg-white overflow-hidden">
      {/* ================= HEADER SECTION ================= */}
      <div className="w-full bg-[#009BDF] text-white text-center py-6 px-4">
        <p className="text-xs sm:text-sm font-bold uppercase tracking-widest mb-1 text-[#FFE600]">
          КОНТАКТЫ
        </p>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-black uppercase tracking-wide mb-2">
          ШОУ РУМ TRUE В ТАШКЕНТЕ
        </h2>
        <p className="text-xs sm:text-sm md:text-base font-medium uppercase tracking-wider opacity-90">
          ПОСЕТИТЕ НАШ ВЫСТАВОЧНЫЙ ЗАЛ В ТАШКЕНТ СИТИ, BOULEVARD
        </p>
      </div>

      {/* ================= CAROUSEL / GALLERY SLIDER ================= */}
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 py-10">
        <div className="relative flex items-center justify-center max-w-[900px] mx-auto">
          {/* Main Slide Container */}
          <div className="relative w-full h-[250px] sm:h-[380px] md:h-[480px] rounded-lg overflow-hidden shadow-md">
            <img
              src={slides[currentIndex].image}
              alt={slides[currentIndex].alt}
              className="w-full h-full object-cover object-center"
            />

            {/* Left Nav Button */}
            <button
              onClick={prevSlide}
              aria-label="Previous Slide"
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-[#009BDF] hover:bg-[#0082b3] text-white rounded-full flex items-center justify-center shadow-md transition-transform active:scale-95 cursor-pointer z-10"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
              </svg>
            </button>

            {/* Right Nav Button */}
            <button
              onClick={nextSlide}
              aria-label="Next Slide"
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-[#009BDF] hover:bg-[#0082b3] text-white rounded-full flex items-center justify-center shadow-md transition-transform active:scale-95 cursor-pointer z-10"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
              </svg>
            </button>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex items-center justify-center gap-2 mt-5">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
                idx === currentIndex
                  ? "bg-[#FFE600] scale-110 shadow-sm"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>

      {/* ================= MAP + INFO SECTION ================= */}
<div className="w-full bg-[#dedede]">
  <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2">

    {/* LEFT — MAP */}
    <div className="w-full h-[320px] sm:h-[400px] md:h-[460px] relative">
      <iframe
        title="Prowellness Tashkent Location Map"
        src="https://www.google.com/maps?q=41.3728768,69.2781056&z=14&output=embed"
        className="w-full h-full border-0"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>

    {/* RIGHT — INFO */}
    <div className="p-8 sm:p-12 md:p-16 flex flex-col justify-center text-left">

      <h3 className="text-[#009BDF] font-black text-base sm:text-lg md:text-xl uppercase tracking-wider mb-6 leading-tight">
        ОФИЦИАЛЬНЫЙ ДИСТРИБЬЮТОР
        <br />
        В УЗБЕКИСТАНЕ - PROWELLNESS
      </h3>

      <div className="mb-4">
        <a
          href="tel:+998906066666"
          className="text-gray-900 font-bold text-base sm:text-lg hover:text-[#009BDF] transition-colors"
        >
          +998 (90)-606-66-66
        </a>
      </div>

      <div className="mb-6">
        <a
          href="mailto:info@prowellness.uz"
          className="text-[#009BDF] text-sm sm:text-base font-medium hover:underline"
        >
          info@prowellness.uz
        </a>
      </div>

      <div className="mb-8">
        <p className="text-gray-700 text-sm sm:text-base font-medium leading-relaxed">
          Адрес: Ташкент Сити, Булевард,
          <br />
          Ул. Фурката 2А
        </p>
      </div>

      <div className="space-y-1 text-sm sm:text-base font-bold text-[#009BDF] tracking-wide">
        <p>ПН-СБ С 9:00-19:00</p>
        <p>ВС НЕ РАБОЧИЙ</p>
      </div>

    </div>
  </div>
</div>
    </section>
  );
}
