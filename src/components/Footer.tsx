import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Upex
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md">
              Эксперты в области серверных технологий. Поставляем, интегрируем и поддерживаем 
              высокопроизводительные решения для дата-центров по всей России.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-3 text-muted-foreground">
                <Phone className="w-4 h-4" />
                <span>+7 (495) 123-45-67</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail className="w-4 h-4" />
                <span>info@upex.ru</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>Москва, ул. Серверная, 15</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Продукты</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Серверы</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">СХД</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Сетевое оборудование</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Комплектующие</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Услуги</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Проектирование ЦОД</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Интеграция</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Сервис и поддержка</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Консультации</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm">
              © 2024 Upex. Все права защищены.
            </p>
            <div className="flex items-center gap-4 mt-4 md:mt-0">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};