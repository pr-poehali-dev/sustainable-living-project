import { Card, CardContent } from "@/components/ui/card";

const InfoSection = () => {
  return (
    <div className="py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-green-700 mb-8 text-center">
          Устойчивое потребление и минимализм
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
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
                  <span>Снижение экологического следа</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Поддержка долговечных продуктов</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Сокращение отходов и вторичная переработка</span>
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
                  <span>Осознанность в покупках</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Фокус на качестве, а не количестве</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Избавление от ненужных вещей</span>
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
