import { Shield, Truck, MapPin, Wrench } from "lucide-react";

const advantages = [
  {
    icon: Shield,
    title: "Гарантия качества",
    description: "36 месяцев гарантии на всё оборудование с полной технической поддержкой"
  },
  {
    icon: Truck,
    title: "Быстрая логистика",
    description: "Собственная логистическая сеть обеспечивает доставку в кратчайшие сроки"
  },
  {
    icon: MapPin,
    title: "Склад в РФ",
    description: "Крупный складской комплекс в России с постоянным наличием оборудования"
  },
  {
    icon: Wrench,
    title: "Инженерная поддержка",
    description: "Команда сертифицированных инженеров для консультаций и внедрения"
  }
];

export const WhyUpex = () => {
  return (
    <section className="py-24 bg-gradient-hero">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
          Почему <span className="text-primary">Upex</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {advantages.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div 
                key={index}
                className="group p-8 rounded-xl bg-card/50 backdrop-blur-sm border border-border hover:bg-card/70 transition-all duration-500 hover:scale-105 hover:shadow-glow"
              >
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:animate-glow-pulse shrink-0">
                    <IconComponent className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-foreground">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};