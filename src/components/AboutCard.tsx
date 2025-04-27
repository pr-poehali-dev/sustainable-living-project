import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface AboutCardProps {
  name: string;
  role: string;
  description: string;
}

const AboutCard = ({ name, role, description }: AboutCardProps) => {
  return (
    <Card className="shadow-md bg-white/90 backdrop-blur">
      <CardHeader className="bg-green-600 text-white rounded-t-lg">
        <CardTitle className="text-2xl font-bold">Об авторе</CardTitle>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <Avatar className="h-24 w-24 border-4 border-green-100">
            <AvatarFallback className="bg-green-100 text-green-700 text-xl font-bold">
              АЛ
            </AvatarFallback>
          </Avatar>
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-xl font-bold text-green-800">{name}</h3>
            <p className="text-green-600 font-medium">{role}</p>
            <p className="text-gray-600">{description}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AboutCard;
