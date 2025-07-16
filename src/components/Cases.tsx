import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, Factory, Hospital } from "lucide-react";

const cases = [
  {
    icon: Building2,
    title: "Банковский дата-центр",
    client: "Крупный коммерческий банк",
    description: "Поставка и интеграция высокопроизводительного кластера для обработки финансовых транзакций",
    result: "Увеличение производительности на 300%",
    badge: "Финансы"
  },
  {
    icon: Factory,
    title: "Промышленная автоматизация",
    client: "Металлургический комбинат",
    description: "Внедрение серверной инфраструктуры для системы управления производством",
    result: "Сокращение простоев на 40%",
    badge: "Промышленность"
  },
  {
    icon: Hospital,
    title: "Медицинская информационная система",
    client: "Сеть частных клиник",
    description: "Развертывание отказоустойчивой инфраструктуры для хранения медицинских данных",
    result: "99.99% доступность системы",
    badge: "Медицина"
  }
];

export const Cases = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Наши кейсы
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Реализованные проекты, которые помогли нашим клиентам достичь бизнес-целей
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {cases.map((caseItem, index) => {
            const IconComponent = caseItem.icon;
            return (
              <div 
                key={index}
                className="group p-8 rounded-xl bg-gradient-card shadow-card hover:shadow-glow transition-all duration-500 hover:scale-105"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <IconComponent className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <span className="px-3 py-1 bg-primary/20 text-primary text-sm rounded-full">
                    {caseItem.badge}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {caseItem.title}
                </h3>
                
                <p className="text-sm text-accent mb-4 font-medium">
                  {caseItem.client}
                </p>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {caseItem.description}
                </p>
                
                <div className="border-t border-border pt-4">
                  <p className="text-primary font-semibold">
                    {caseItem.result}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg" className="group">
            Смотреть все кейсы
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};