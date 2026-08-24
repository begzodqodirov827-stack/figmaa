import React from "react";

function Products() {
  return (
    <div className="font-sans text-gray-800 bg-white">
      {/* Header */}


      {/* Main Hero Section */}
      <section id="about" className="relative bg-cyan-500 pt-10 pb-16 px-4">
        <h1 className="text-center text-white text-2xl md:text-3xl font-extrabold uppercase tracking-wide mb-8">
          TRUE — Совершенное фитнес-оборудование
        </h1>

        <div className="max-w-5xl mx-auto relative rounded-md overflow-hidden shadow-lg">
          {/* Background Gym Image */}
          <img
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80"
            alt="Gym Background"
            className="w-full h-[500px] object-cover"
          />

          {/* Overlay Box */}
          <div className="absolute inset-0 flex items-center justify-center p-4">
            <div className="bg-white/95 backdrop-blur-sm p-6 md:p-10 max-w-2xl text-center shadow-2xl rounded-sm">
              <p className="text-cyan-600 text-xs md:text-sm mb-4 leading-relaxed font-medium">
                Это совершенство обеспечивается высококачественными,
                долговечными материалами и технологиями, которые мы используем
                для производства наших машин. Но они также создаются благодаря
                нашей страсти к инновациям и их потребностям.
              </p>
              <p className="text-gray-600 text-xs md:text-sm mb-4 leading-relaxed">
                Наша опытная команда предлагает комплексное обслуживание,
                начиная от планирования объекта до технического обслуживания и
                оснащения клуба самыми новейшими технологиями. Делясь вашим
                надежным партнером, мы делаем все возможное, чтобы ваше
                предприятие продолжало эффективно работать годы и годы.
              </p>
              <p className="text-gray-600 text-xs md:text-sm mb-6 leading-relaxed">
                Вы можете рассчитывать на нас в предоставлении одних из лучших
                услуг в отрасли. Мы ориентированы на оптимизацию срока службы
                вашего фитнес-оборудования...
              </p>
              <p className="text-cyan-600 font-semibold text-xs md:text-sm cursor-pointer hover:underline">
                Свяжитесь с нами, чтобы узнать, как партнерство с TRUE может
                помочь вашей компании добиться успеха.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Innovations Section */}
      <section id="products" className="bg-cyan-500 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center text-white text-2xl md:text-3xl font-extrabold uppercase tracking-wide mb-10">
            Наши инновации
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              {
                title: "Тренажер лестница TRUE Palisade",
                img: "https://images.unsplash.com/photo-1576678927484-cc907957088c?w=400&q=80",
              },
              {
                title: "Функциональный тренинг с Composite Strength",
                img: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=400&q=80",
              },
              {
                title: "Рамы для стретчинга TRUE Stretch",
                img: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&q=80",
              },
              {
                title: "Латеральный тренажер TRUE Traverse",
                img: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=400&q=80",
              },
              {
                title: "Беговая дорожка TRUE Alpine Runner",
                img: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=400&q=80",
              },
              {
                title: "Эллиптический тренажер TRUE Spectrum",
                img: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=400&q=80",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded overflow-hidden shadow hover:shadow-lg transition"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 text-center">
                  <h3 className="text-xs font-bold uppercase text-gray-800 leading-snug">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / Form Section */}
      <section className="relative bg-gray-900 text-white py-16 px-4">
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80"
          alt="Gym Background CTA"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />

        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="text-xl md:text-3xl font-extrabold uppercase tracking-wide mb-2">
            Получите эксклюзивное предложение на тренажеры TRUE Fitness
          </h2>
          <p className="text-xs text-gray-300 mb-8 uppercase tracking-wider">
            Наш менеджер проконсультирует вас и поможет подобрать оборудование
          </p>

          <form className="grid grid-cols-1 md:grid-cols-4 gap-3 max-w-3xl mx-auto">
            <input
              type="text"
              placeholder="Имя"
              className="px-4 py-3 bg-white text-gray-800 text-xs rounded focus:outline-none"
            />
            <input
              type="tel"
              placeholder="+7 (999) 000-00-00"
              className="px-4 py-3 bg-white text-gray-800 text-xs rounded focus:outline-none"
            />
            <input
              type="email"
              placeholder="E-mail"
              className="px-4 py-3 bg-white text-gray-800 text-xs rounded focus:outline-none"
            />
            <button
              type="submit"
              className="bg-cyan-500 hover:bg-cyan-600 text-white text-xs font-bold uppercase py-3 rounded transition"
            >
              Отправить
            </button>
          </form>

          <p className="text-[10px] text-gray-400 mt-4 max-w-xl mx-auto">
            Нажимая кнопку, вы даете согласие на обработку персональных данных и
            соглашаетесь с нашей политикой конфиденциальности.
          </p>
        </div>
      </section>

  
    </div>
  );
}

export default Products;
