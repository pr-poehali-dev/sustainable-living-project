import { Card, CardContent } from "@/components/ui/card";

const InfoSection = () => {
  return (
    <div className="py-12 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-green-700 mb-8 text-center">
          Устойчивое потребление и минимализм
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 mb-10">
          <Card className="bg-white/90 backdrop-blur shadow-md">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-green-600 mb-4 flex items-center">
                <span className="mr-2">♻️</span> Устойчивое потребление
              </h3>
              <p className="text-gray-600">
                Устойчивое потребление — это использование товаров и услуг, которое отвечает основным потребностям и создает лучшее качество жизни, одновременно минимизируя использование природных ресурсов, токсичных материалов и выбросов отходов и загрязняющих веществ.
              </p>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Снижение экологического следа через осознанное потребление</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Поддержка долговечных, качественных продуктов</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Сокращение отходов и вторичная переработка</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Применение принципа «reduce, reuse, recycle» (сокращать, повторно использовать, перерабатывать)</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="bg-white/90 backdrop-blur shadow-md">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-green-600 mb-4 flex items-center">
                <span className="mr-2">✨</span> Минимализм
              </h3>
              <p className="text-gray-600">
                Минимализм — это образ жизни, который помогает людям избавиться от лишнего и сосредоточиться на том, что действительно важно. Это не просто о владении меньшим количеством вещей, но о создании пространства для большего счастья и смысла.
              </p>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Осознанность в покупках и потреблении</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Фокус на качестве, а не количестве</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Избавление от ненужных вещей, снижающих качество жизни</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Переоценка ценностей и фокус на нематериальных аспектах жизни</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-white/90 backdrop-blur shadow-md">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-green-600 mb-4 flex items-center">
                <span className="mr-2">🌍</span> Экологическое влияние
              </h3>
              <p className="text-gray-600">
                Чрезмерное потребление оказывает значительное негативное влияние на окружающую среду. От истощения природных ресурсов до загрязнения экосистем и изменения климата.
              </p>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Индустрия моды является вторым по величине загрязнителем воды в мире</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Каждый год в мире производится более 2 миллиардов тонн твердых отходов</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>На производство одной футболки требуется около 2700 литров воды</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Электронные отходы содержат токсичные материалы и растут быстрее любого другого потока отходов</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="bg-white/90 backdrop-blur shadow-md">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-green-600 mb-4 flex items-center">
                <span className="mr-2">💡</span> Преимущества минимализма
              </h3>
              <p className="text-gray-600">
                Переход к минималистичному образу жизни имеет многочисленные преимущества, которые затрагивают все аспекты благополучия человека.
              </p>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Снижение уровня стресса и тревожности</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Экономия денег на ненужных покупках</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Более организованное и чистое жизненное пространство</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Больше времени и энергии для того, что действительно важно</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Более глубокое удовлетворение от осознанного потребления</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
