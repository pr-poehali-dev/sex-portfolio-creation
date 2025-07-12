import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 to-amber-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-rose-100">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-heading font-bold text-stone-700">
              Intimate Balance
            </div>
            <div className="hidden md:flex space-x-8">
              <a
                href="#home"
                className="text-stone-600 hover:text-rose-500 transition-colors"
              >
                Главная
              </a>
              <a
                href="#services"
                className="text-stone-600 hover:text-rose-500 transition-colors"
              >
                Услуги
              </a>
              <a
                href="#gallery"
                className="text-stone-600 hover:text-rose-500 transition-colors"
              >
                Галерея
              </a>
              <a
                href="#reviews"
                className="text-stone-600 hover:text-rose-500 transition-colors"
              >
                Отзывы
              </a>
              <a
                href="#contact"
                className="text-stone-600 hover:text-rose-500 transition-colors"
              >
                Контакты
              </a>
            </div>
            <Button className="bg-gradient-to-r from-amber-400 to-rose-400 hover:from-amber-500 hover:to-rose-500 border-0">
              Консультация
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-6xl font-heading font-bold text-stone-800 leading-tight">
                  Гармония
                  <span className="bg-gradient-to-r from-amber-500 to-rose-500 bg-clip-text text-transparent">
                    {" "}
                    интимности
                  </span>
                </h1>
                <p className="text-xl text-stone-600 leading-relaxed">
                  Профессиональный интимный коучинг и образование для создания
                  здоровых отношений с собой и партнером
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-amber-400 to-rose-400 hover:from-amber-500 hover:to-rose-500 border-0 text-white"
                >
                  <Icon name="Calendar" className="mr-2" size={20} />
                  Записаться на консультацию
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-stone-300 hover:bg-stone-50"
                >
                  <Icon name="Play" className="mr-2" size={20} />
                  Узнать больше
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-amber-200 to-rose-200 rounded-3xl overflow-hidden">
                <img
                  src="/img/25dbb361-d9e7-4af7-b1af-c56fa4137376.jpg"
                  alt="Wellness background"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-6 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-stone-800">Услуги</h2>
            <p className="text-xl text-stone-600 max-w-2xl mx-auto">
              Индивидуальный подход к каждому клиенту с использованием
              современных методик
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "Heart",
                title: "Интимная терапия",
                description:
                  "Работа с парами и индивидуально по вопросам интимности и близости",
              },
              {
                icon: "Users",
                title: "Коучинг отношений",
                description:
                  "Развитие навыков коммуникации и эмоциональной близости",
              },
              {
                icon: "BookOpen",
                title: "Образовательные программы",
                description:
                  "Курсы и семинары по вопросам сексуальности и здоровья",
              },
              {
                icon: "Compass",
                title: "Личные границы",
                description:
                  "Работа с установлением и поддержанием здоровых границ",
              },
              {
                icon: "Sparkles",
                title: "Самопознание",
                description: "Исследование собственной сексуальности и желаний",
              },
              {
                icon: "Shield",
                title: "Безопасность",
                description:
                  "Создание безопасного пространства для открытого диалога",
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="border-0 bg-white/70 hover:bg-white transition-colors group hover:shadow-lg"
              >
                <CardContent className="p-8 text-center space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-rose-400 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                    <Icon
                      name={service.icon}
                      size={28}
                      className="text-white"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-stone-800">
                    {service.title}
                  </h3>
                  <p className="text-stone-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-stone-800">Атмосфера</h2>
            <p className="text-xl text-stone-600">
              Создание комфортного и безопасного пространства
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item, index) => (
              <div
                key={index}
                className={`relative rounded-3xl overflow-hidden bg-gradient-to-br from-amber-200 to-rose-200 ${
                  index === 0 || index === 3 ? "md:col-span-2" : ""
                }`}
              >
                <div className="aspect-video flex items-center justify-center">
                  <Icon name="Image" size={48} className="text-stone-400" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-16 px-6 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-stone-800">Отзывы</h2>
            <p className="text-xl text-stone-600">Что говорят мои клиенты</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Анна",
                text: "Благодаря работе с коучем я научилась лучше понимать себя и свои потребности. Это изменило мою жизнь к лучшему.",
              },
              {
                name: "Михаил и Елена",
                text: "Парная терапия помогла нам восстановить близость и доверие. Мы снова чувствуем себя командой.",
              },
              {
                name: "Светлана",
                text: "Очень деликатный и профессиональный подход. Чувствовала себя в полной безопасности на всех сессиях.",
              },
            ].map((review, index) => (
              <Card key={index} className="border-0 bg-white/70">
                <CardContent className="p-8 space-y-6">
                  <div className="flex space-x-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Icon
                        key={star}
                        name="Star"
                        size={20}
                        className="text-amber-400 fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-stone-600 italic">"{review.text}"</p>
                  <div className="font-semibold text-stone-800">
                    — {review.name}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl font-bold text-stone-800">
            Свяжитесь со мной
          </h2>
          <p className="text-xl text-stone-600">
            Готовы начать путь к гармонии? Запишитесь на консультацию
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-rose-400 rounded-2xl flex items-center justify-center mx-auto">
                <Icon name="Mail" size={28} className="text-white" />
              </div>
              <h3 className="font-semibold text-stone-800">Email</h3>
              <p className="text-stone-600">hello@intimatebalance.ru</p>
            </div>

            <div className="space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-rose-400 rounded-2xl flex items-center justify-center mx-auto">
                <Icon name="Phone" size={28} className="text-white" />
              </div>
              <h3 className="font-semibold text-stone-800">Телефон</h3>
              <p className="text-stone-600">+7 (999) 123-45-67</p>
            </div>

            <div className="space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-rose-400 rounded-2xl flex items-center justify-center mx-auto">
                <Icon name="MapPin" size={28} className="text-white" />
              </div>
              <h3 className="font-semibold text-stone-800">Адрес</h3>
              <p className="text-stone-600">Москва, центр города</p>
            </div>
          </div>

          <Button
            size="lg"
            className="bg-gradient-to-r from-amber-400 to-rose-400 hover:from-amber-500 hover:to-rose-500 border-0 text-white mt-8"
          >
            <Icon name="Calendar" className="mr-2" size={20} />
            Записаться на консультацию
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-stone-800">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-stone-400">
            © 2024 Intimate Balance. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
