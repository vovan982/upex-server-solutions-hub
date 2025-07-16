import { Server, Database, Building, Headphones } from "lucide-react";

const competencies = [
  {
    icon: Server,
    title: "Серверы",
    description: "Высокопроизводительные серверные решения для любых задач"
  },
  {
    icon: Database,
    title: "Хранение данных",
    description: "Надежные системы хранения и резервного копирования"
  },
  {
    icon: Building,
    title: "Проектирование ЦОД",
    description: "Комплексное проектирование дата-центров под ключ"
  },
  {
    icon: Headphones,
    title: "Сервис и поддержка",
    description: "Круглосуточная техническая поддержка и обслуживание"
  }
];

export const Competencies = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
          Наши компетенции
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {competencies.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div 
                key={index}
                className="group text-center p-8 rounded-xl bg-gradient-card shadow-card hover:shadow-glow transition-all duration-500 hover:scale-105"
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:animate-glow-pulse">
                  <IconComponent className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};