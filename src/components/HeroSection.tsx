import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  onLearnMoreClick: () => void;
}

const HeroSection = ({ onLearnMoreClick }: HeroSectionProps) => {
  return (
    <div className="relative py-20 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-green-100 bg-opacity-60 z-0"></div>
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-green-50/90 via-green-100/50 to-green-200/70"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1493552152660-f915ab47ae9d?q=80&w=2000')] bg-cover bg-center opacity-10"></div>
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold text-green-800">
          <span className="text-green-600">Lumen</span>Live
        </h1>
        <p className="text-xl md:text-2xl text-green-700 font-medium">
          Устойчивое потребление: минимализм в повседневной жизни
        </p>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Открой для себя путь к более осознанной и экологичной жизни через принципы минимализма и устойчивого потребления.
        </p>
        <Button 
          onClick={onLearnMoreClick}
          size="lg" 
          className="bg-green-600 hover:bg-green-700 text-white font-medium mt-4"
        >
          Узнать больше
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
