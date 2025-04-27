import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const PracticalSteps = () => {
  return (
    <div className="py-12 px-6 bg-green-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-green-700 mb-8 text-center">
          Практические шаги к устойчивому потреблению
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="shadow-md bg-white/90 backdrop-blur transition-transform hover:scale-[1.02]">
            <CardHeader className="pb-2">
              <CardTitle className="text-xl font-bold text-green-600 flex items-center">
                <span className="mr-2 text-2xl">🏠</span> В доме
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">→</span>
                  <span>Регулярно проводите ревизию вещей и избавляйтесь от ненужного</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">→</span>
                  <span>Используйте многоразовые контейнеры вместо одноразовых</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">→</span>
                  <span>Экономьте воду и электричество</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">→</span>
                  <span>Выбирайте экологичные чистящие средства</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">→</span>
                  <span>Сортируйте мусор для переработки</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="shadow-md bg-white/90 backdrop-blur transition-transform hover:scale-[1.02]">
            <CardHeader className="pb-2">
              <CardTitle className="text-xl font-bold text-green-600 flex items-center">
                <span className="mr-2 text-2xl">🛒</span> При покупках
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">→</span>
                  <span>Составляйте список покупок и придерживайтесь его</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">→</span>
                  <span>Выбирайте продукты с минимальной упаковкой</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">→</span>
                  <span>Носите с собой многоразовые сумки и бутылки</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">→</span>
                  <span>Покупайте качественные вещи, которые прослужат долго</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">→</span>
                  <span>Поддерживайте местных производителей</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="shadow-md bg-white/90 backdrop-blur transition-transform hover:scale-[1.02]">
            <CardHeader className="pb-2">
              <CardTitle className="text-xl font-bold text-green-600 flex items-center">
                <span className="mr-2 text-2xl">👕</span> С одеждой
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">→</span>
                  <span>Создайте капсульный гардероб из базовых вещей</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">→</span>
                  <span>Выбирайте одежду из натуральных тканей</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">→</span>
                  <span>Практикуйте обмен или покупайте одежду в секонд-хендах</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">→</span>
                  <span>Ремонтируйте поврежденную одежду вместо покупки новой</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">→</span>
                  <span>Сдавайте ненужную одежду на переработку</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PracticalSteps;
