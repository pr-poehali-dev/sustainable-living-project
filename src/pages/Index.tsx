import { useRef } from "react";
import HeroSection from "@/components/HeroSection";
import TipsCard from "@/components/TipsCard";
import AboutCard from "@/components/AboutCard";
import InfoSection from "@/components/InfoSection";
import PracticalSteps from "@/components/PracticalSteps";

const minimalistTips = [
  {
    id: 1,
    title: "Правило одной вещи",
    description: "Прежде чем купить новую вещь, избавьтесь от старой. Это помогает контролировать количество вещей и заставляет задуматься перед каждой покупкой."
  },
  {
    id: 2,
    title: "Цифровой минимализм",
    description: "Регулярно удаляйте неиспользуемые приложения, очищайте почту и файлы. Цифровой беспорядок тоже создает ментальную нагрузку."
  },
  {
    id: 3,
    title: "Осознанное потребление",
    description: "Задавайте себе вопрос: «Действительно ли мне это нужно?» перед каждой покупкой. Часто ответ будет отрицательным."
  },
  {
    id: 4,
    title: "Правило 30 дней",
    description: "Если хотите купить что-то не первой необходимости, запишите и подождите 30 дней. Если через месяц вы все еще хотите это приобрести — покупайте."
  },
  {
    id: 5,
    title: "Привычка чистоты",
    description: "Выработайте привычку регулярно наводить порядок в своем пространстве. Уделяйте этому 15-20 минут ежедневно вместо многочасовых уборок."
  },
  {
    id: 6,
    title: "Метод Конмари",
    description: "Сохраняйте только те вещи, которые «вызывают радость». Если вещь не приносит пользы или положительных эмоций, избавьтесь от нее."
  },
  {
    id: 7,
    title: "Принцип двух корзин",
    description: "При расхламлении используйте две корзины: одну для вещей на выброс, другую для передачи (продажи, пожертвования, переработки)."
  }
];

const Index = () => {
  const infoSectionRef = useRef<HTMLDivElement>(null);

  const scrollToInfo = () => {
    infoSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-green-50">
      {/* Навигация */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-green-100 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-xl font-bold text-green-700">
            <span className="text-green-600">Lumen</span>Live
          </div>
          <nav className="space-x-6">
            <a href="#info" className="text-green-700 hover:text-green-600 font-medium">О проекте</a>
            <a href="#practical" className="text-green-700 hover:text-green-600 font-medium">Практика</a>
            <a href="#tips" className="text-green-700 hover:text-green-600 font-medium">Советы</a>
            <a href="#about" className="text-green-700 hover:text-green-600 font-medium">Об авторе</a>
          </nav>
        </div>
      </header>

      {/* Главная секция */}
      <HeroSection onLearnMoreClick={scrollToInfo} />

      {/* Секция с информацией */}
      <div ref={infoSectionRef} id="info">
        <InfoSection />
      </div>

      {/* Практические шаги */}
      <div id="practical">
        <PracticalSteps />
      </div>

      {/* Секция с советами и об авторе */}
      <div className="py-12 px-6 bg-green-100/50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          <div id="tips">
            <TipsCard tips={minimalistTips} />
          </div>
          <div id="about">
            <AboutCard 
              name="Андрей Луменецкий" 
              role="Ученик 11А класса" 
              description="Исследователь принципов устойчивого потребления и минимализма. В своем проекте я изучаю, как современный человек может сократить свой экологический след и жить более осознанно в эпоху потребительства. Это исследование помогает понять, как наши повседневные выборы влияют на окружающую среду и качество жизни."
            />
          </div>
        </div>
      </div>

      {/* Подвал */}
      <footer className="bg-green-800 text-white py-6">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="mb-2">© 2025 LumenLive - Проект об устойчивом потреблении</p>
          <div className="flex justify-center space-x-4 mb-2">
            <span className="text-green-200">Электронная почта: andrey@lumenlive.ru</span>
            <span className="text-green-200">Телефон: +7 (999) 123-45-67</span>
          </div>
          <p className="text-green-200 text-sm">Создано Андреем Луменецким для школьного проекта</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
