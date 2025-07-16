import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Clock, Phone, Mail, MessageSquare } from "lucide-react";

export const CTA = () => {
  return (
    <section className="py-24 bg-gradient-hero">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Рассчитаем ваш проект под ключ 
              <span className="text-primary block mt-2">за 15 минут</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Оставьте заявку, и наши эксперты подготовят техническое решение и коммерческое предложение
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <Clock className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">Быстрый расчет</h3>
                    <p className="text-muted-foreground">Техническое решение за 15 минут</p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">Персональный менеджер</h3>
                    <p className="text-muted-foreground">Dedicated support throughout the project</p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <MessageSquare className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">Экспертная консультация</h3>
                    <p className="text-muted-foreground">Рекомендации от сертифицированных инженеров</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="p-8 rounded-xl bg-card shadow-card border border-border">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Ваше имя
                  </label>
                  <Input 
                    placeholder="Введите ваше имя"
                    className="bg-background border-border focus:border-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Телефон
                  </label>
                  <Input 
                    placeholder="+7 (999) 123-45-67"
                    className="bg-background border-border focus:border-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Описание задачи
                  </label>
                  <Textarea 
                    placeholder="Расскажите о ваших требованиях к серверному оборудованию..."
                    rows={4}
                    className="bg-background border-border focus:border-primary resize-none"
                  />
                </div>

                <Button variant="hero" size="lg" className="w-full">
                  Получить расчет
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  Нажимая кнопку, вы соглашаетесь с политикой обработки персональных данных
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};