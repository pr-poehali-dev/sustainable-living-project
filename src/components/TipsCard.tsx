import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

type Tip = {
  id: number;
  title: string;
  description: string;
};

interface TipsCardProps {
  tips: Tip[];
}

const TipsCard = ({ tips }: TipsCardProps) => {
  return (
    <Card className="shadow-md bg-white/90 backdrop-blur">
      <CardHeader className="bg-green-600 text-white rounded-t-lg">
        <CardTitle className="text-2xl font-bold">Советы по минимализму</CardTitle>
        <CardDescription className="text-green-50 mt-1">
          Практические рекомендации для устойчивого образа жизни
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="space-y-4">
          {tips.map((tip) => (
            <div key={tip.id} className="space-y-2">
              <h3 className="text-lg font-semibold text-green-700 flex items-center">
                <span className="mr-2">🌱</span> {tip.title}
              </h3>
              <p className="text-gray-600">{tip.description}</p>
              {tip.id !== tips.length && (
                <Separator className="mt-4 bg-green-100" />
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default TipsCard;
