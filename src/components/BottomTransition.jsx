import React, { useState } from "react";

export default function BottomTransition() {
  const slides = [
    {
      id: 1,
      image: "/Rectangle 1 (1).png",
      alt: "True Fitness Gym Interior 1",
    },
    {
      id: 2,
      image: "/Rectangle 28.png",
      alt: "True Fitness Gym Interior 2",
    },
    {
      id: 3,
      image: "/image 7.png",
      alt: "True Fitness Gym Interior 3",
    },
    {
      id: 4,
      image: "/club-plan.png",
      alt: "True Fitness Gym Interior 4",
    },
    {
      id: 5,
      image: "/image 6 (1).png",
      alt: "True Fitness Gym Interior 5",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevIndex = (currentIndex - 1 + slides.length) % slides.length;
  const nextIndex = (currentIndex + 1) % slides.length;

  return (
    <section className="w-full bg-white overflow-hidden py-12 md:py-16">
      {/* ================= CAROUSEL / GALLERY SLIDER ================= */}
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 mb-16">
        <div className="relative flex items-center justify-center min-h-[300px] sm:min-h-[400px] md:min-h-[500px]">
          {/* Left Preview Slide */}
          <div className="hidden md:block absolute left-0 w-[20%] h-[75%] opacity-40 scale-90 transition-all duration-500 overflow-hidden rounded-lg shadow-md z-0">
            <img
              src={slides[prevIndex].image}
              alt={slides[prevIndex].alt}
              className="w-full h-full object-cover object-center"
            />
          </div>

          {/* Center Focused Main Slide */}
          <div className="relative w-full md:w-[75%] lg:w-[68%] h-[300px] sm:h-[400px] md:h-[500px] z-10 rounded-lg overflow-hidden shadow-2xl transition-all duration-500">
            <img
              src={slides[currentIndex].image}
              alt={slides[currentIndex].alt}
              className="w-full h-full object-cover object-center transition-all duration-500"
            />

            {/* Left Cyan Nav Button */}
            <button
              onClick={prevSlide}
              aria-label="Previous Slide"
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-[#009BDF] hover:bg-[#0082b3] text-white rounded-full flex items-center justify-center shadow-lg transition-transform active:scale-95 z-20 cursor-pointer"
            >
              <svg
                className="w-6 h-6 fill-current"
                viewBox="0 0 24 24"
              >
                <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
              </svg>
            </button>

            {/* Right Cyan Nav Button */}
            <button
              onClick={nextSlide}
              aria-label="Next Slide"
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-[#009BDF] hover:bg-[#0082b3] text-white rounded-full flex items-center justify-center shadow-lg transition-transform active:scale-95 z-20 cursor-pointer"
            >
              <svg
                className="w-6 h-6 fill-current"
                viewBox="0 0 24 24"
              >
                <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
              </svg>
            </button>
          </div>

          {/* Right Preview Slide */}
          <div className="hidden md:block absolute right-0 w-[20%] h-[75%] opacity-40 scale-90 transition-all duration-500 overflow-hidden rounded-lg shadow-md z-0">
            <img
              src={slides[nextIndex].image}
              alt={slides[nextIndex].alt}
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex items-center justify-center gap-3 mt-6">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`w-3.5 h-3.5 rounded-full transition-all duration-300 cursor-pointer ${
                idx === currentIndex
                  ? "bg-[#FFE600] scale-110 shadow-sm"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>

      {/* ================= MAP + PROWELLNESS INFO SECTION ================= */}
      <div className="w-full max-w-[1440px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[420px] rounded-lg overflow-hidden shadow-lg border border-gray-100">
          {/* Left: Interactive Map */}
          <div className="lg:col-span-6 xl:col-span-7 h-[360px] sm:h-[420px] lg:h-auto min-h-[360px] relative w-full bg-gray-100">
            <iframe
              title="Prowellness Tashkent Location Map"
              src="https://yandex.ru/map-widget/v1/?ll=69.240562%2C41.311086&z=16&pt=69.240562,41.311086,pm2rdm"
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>

          {/* Right: Prowellness Info Box */}
          <div className="lg:col-span-6 xl:col-span-5 bg-[#dedede] p-8 sm:p-10 md:p-12 lg:p-14 flex flex-col justify-center">
            <h2 className="text-[#009BDF] font-black text-lg sm:text-xl md:text-2xl uppercase tracking-wider leading-snug mb-8">
              ОФИЦИАЛЬНЫЙ ДИСТРИБЬЮТЕР<br /> В УЗБЕКИСТАНЕ - PROWELLNESS
            </h2>

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
              <p className="text-gray-800 text-sm sm:text-base font-medium leading-relaxed">
                Адрес: Ташкент Сити, Булевард,<br />Ул. Фурката 2А
              </p>
            </div>

            <div className="space-y-1 pt-2">
              <p className="text-[#009BDF] font-black text-sm sm:text-base uppercase tracking-wider">
                ПН-СБ С 9:00-19:00
              </p>
              <p className="text-[#009BDF] font-black text-sm sm:text-base uppercase tracking-wider">
                ВС НЕ РАБОЧИЙ
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
