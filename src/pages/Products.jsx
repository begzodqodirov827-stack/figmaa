import React from "react";
import { Link } from "react-router-dom";

export default function Products() {
  const categories = [
    {
      title: "КАРДИО ТРЕНАЖЕРЫ",
      desc: "Беговые дорожки, эллиптические и велотренажеры премиум класса",
      image: "/image 6 (1).png",
      link: "/products/cardio",
    },
    {
      title: "СИЛОВЫЕ ТРЕНАЖЕРЫ",
      desc: "Профессиональные грузоблочные и нагружаемые дисками тренажеры",
      image: "/image 7.png",
      link: "/products/strength",
    },
    {
      title: "COMPOSITE STRENGTH",
      desc: "Уникальные силовые комплексы для эффективных тренировок",
      image: "/assets/tyanki.png",
      link: "/products/composite",
    },
    {
      title: "TRUE STRETCH",
      desc: "Специальное оборудование для растяжки и развития гибкости",
      image: "/assets/ruka.png",
      link: "/products/stretch",
    },
    {
      title: "ГРУППОВЫЕ ТРЕНИРОВКИ",
      desc: "Многофункциональные станции и рамы для групповых занятий",
      image: "/assets/mujiki.png",
      link: "/products/group",
    },
    {
      title: "КОНСОЛИ И СОФТ",
      desc: "Инновационные сенсорные консоли и программное обеспечение",
      image: "/assets/tip.png",
      link: "/products/consoles",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-white font-sans">
      {/* Banner */}
      <div className="bg-[#009BDF] text-white py-14 px-4 text-center">
        <h1 className="text-2xl sm:text-4xl font-black uppercase tracking-wider">
          КАТАЛОГ ПРОДУКЦИИ TRUE FITNESS
        </h1>
        <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-cyan-100 mt-3 max-w-2xl mx-auto">
          ПРОФЕССИОНАЛЬНОЕ ОБОРУДОВАНИЕ ДЛЯ ФИТНЕС-КЛУБОВ И СПОРТИВНЫХ КОМПЛЕКСОВ
        </p>
      </div>

      {/* Grid */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              <div className="h-56 bg-gray-100 overflow-hidden relative">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-[#009BDF] font-black text-lg uppercase tracking-wide mb-2">
                  {cat.title}
                </h3>
                <p className="text-gray-600 text-xs leading-relaxed mb-6 flex-grow">
                  {cat.desc}
                </p>
                <Link
                  to={cat.link}
                  className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#009BDF] hover:text-[#007cb3] transition-colors"
                >
                  ПОДРОБНЕЕ <span>➔</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}