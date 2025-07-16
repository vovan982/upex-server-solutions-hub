import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Search, Filter, Grid, List } from "lucide-react";

// Import server images
import dellR740 from "@/assets/servers/dell-r740.jpg";
import hpeDl380 from "@/assets/servers/hpe-dl380.jpg";
import lenovoSr630 from "@/assets/servers/lenovo-sr630.jpg";
import ciscoUcs from "@/assets/servers/cisco-ucs.jpg";
import netappStorage from "@/assets/servers/netapp-storage.jpg";
import ciscoSwitch from "@/assets/servers/cisco-switch.jpg";

// Import brand logos
import dellLogo from "@/assets/brands/dell-logo.jpg";
import hpeLogo from "@/assets/brands/hpe-logo.jpg";
import lenovoLogo from "@/assets/brands/lenovo-logo.jpg";

interface Product {
  id: string;
  name: string;
  brand: string;
  category: string;
  formFactor: string;
  application: string;
  price?: string;
  inStock: boolean;
  description: string;
  image: string;
  specs: {
    cpu?: string;
    memory?: string;
    storage?: string;
    ports?: string;
  };
}

const products: Product[] = [
  {
    id: "1",
    name: "PowerEdge R740",
    brand: "Dell",
    category: "Серверы",
    formFactor: "2U Rack",
    application: "Виртуализация",
    price: "от 285 000 ₽",
    inStock: true,
    description: "Высокопроизводительный 2U сервер для виртуализации и облачных решений",
    image: dellR740,
    specs: {
      cpu: "Intel Xeon Scalable",
      memory: "до 3TB DDR4",
      storage: "до 16x 2.5\" или 8x 3.5\"",
      ports: "4x 1GbE, опционально 10/25GbE"
    }
  },
  {
    id: "2",
    name: "ProLiant DL380 Gen10",
    brand: "HPE",
    category: "Серверы",
    formFactor: "2U Rack",
    application: "1С",
    price: "от 310 000 ₽",
    inStock: true,
    description: "Надежный сервер для критически важных приложений и баз данных",
    image: hpeDl380,
    specs: {
      cpu: "Intel Xeon Scalable",
      memory: "до 3TB DDR4",
      storage: "до 30x SFF",
      ports: "4x 1GbE встроенных"
    }
  },
  {
    id: "3",
    name: "ThinkSystem SR630",
    brand: "Lenovo",
    category: "Серверы",
    formFactor: "1U Rack",
    application: "Веб-сервисы",
    price: "от 245 000 ₽",
    inStock: true,
    description: "Компактный 1U сервер для плотных вычислительных сред",
    image: lenovoSr630,
    specs: {
      cpu: "Intel Xeon Scalable",
      memory: "до 2TB DDR4",
      storage: "до 10x 2.5\"",
      ports: "4x 1GbE"
    }
  },
  {
    id: "4",
    name: "UCS C240 M5",
    brand: "Cisco",
    category: "Серверы",
    formFactor: "2U Rack",
    application: "AI",
    price: "по запросу",
    inStock: false,
    description: "Сервер для задач машинного обучения и искусственного интеллекта",
    image: ciscoUcs,
    specs: {
      cpu: "Intel Xeon Scalable",
      memory: "до 3TB DDR4",
      storage: "до 26x 2.5\"",
      ports: "2x 10GbE"
    }
  },
  {
    id: "5",
    name: "FAS2750",
    brand: "NetApp",
    category: "СХД",
    formFactor: "2U Rack",
    application: "Хранение данных",
    price: "от 890 000 ₽",
    inStock: true,
    description: "Система хранения данных для малого и среднего бизнеса",
    image: netappStorage,
    specs: {
      storage: "до 144TB",
      memory: "16GB",
      ports: "10GbE, FC"
    }
  },
  {
    id: "6",
    name: "Catalyst 9300",
    brand: "Cisco",
    category: "Сетевое",
    formFactor: "1U Rack",
    application: "Сеть",
    price: "от 180 000 ₽",
    inStock: true,
    description: "Управляемый коммутатор для корпоративных сетей",
    image: ciscoSwitch,
    specs: {
      ports: "24/48 портов Gigabit",
      memory: "8GB",
      storage: "16GB Flash"
    }
  }
];

const brands = ["Dell", "HPE", "Lenovo", "Cisco", "NetApp"];
const categories = ["Серверы", "СХД", "Сетевое", "Комплектующие"];
const formFactors = ["1U Rack", "2U Rack", "4U Rack", "Tower", "Blade"];
const applications = ["Виртуализация", "1С", "AI", "Веб-сервисы", "Хранение данных", "Сеть", "Бэкап"];

export const Catalog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [selectedFormFactor, setSelectedFormFactor] = useState<string>("");
  const [selectedApplication, setSelectedApplication] = useState<string>("");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 2000000]);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [sortBy, setSortBy] = useState<string>("name");

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesBrand = selectedBrands.length === 0 || selectedBrands.includes(product.brand);
    const matchesCategory = !selectedCategory || product.category === selectedCategory;
    const matchesFormFactor = !selectedFormFactor || product.formFactor === selectedFormFactor;
    const matchesApplication = !selectedApplication || product.application === selectedApplication;
    
    return matchesSearch && matchesBrand && matchesCategory && matchesFormFactor && matchesApplication;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "name":
        return a.name.localeCompare(b.name);
      case "brand":
        return a.brand.localeCompare(b.brand);
      case "price":
        // Simple price sorting - in real app would parse price properly
        return a.price && b.price ? a.price.localeCompare(b.price) : 0;
      default:
        return 0;
    }
  });

  const handleBrandToggle = (brand: string) => {
    setSelectedBrands(prev => 
      prev.includes(brand) 
        ? prev.filter(b => b !== brand)
        : [...prev, brand]
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary/10 to-accent/10 py-16">
          <div className="container mx-auto px-6">
            <div className="text-center">
              <h1 className="text-4xl font-bold mb-4">Каталог оборудования</h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Серверы, системы хранения данных и сетевое оборудование от ведущих производителей
              </p>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-6 py-8">
          <div className="flex gap-8">
            {/* Filters Sidebar */}
            <aside className="w-80 space-y-6">
              <div className="bg-card rounded-lg p-6 shadow-sm border">
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <Filter className="w-4 h-4" />
                  Фильтры
                </h3>

                {/* Search */}
                <div className="space-y-2 mb-6">
                  <Label htmlFor="search">Поиск</Label>
                  <div className="relative">
                    <Search className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                    <Input
                      id="search"
                      placeholder="Название модели..."
                      className="pl-10"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                </div>

                <Separator className="my-4" />

                {/* Brand Filter */}
                <div className="space-y-3 mb-6">
                  <Label>Производитель</Label>
                  {brands.map(brand => (
                    <div key={brand} className="flex items-center space-x-2">
                      <Checkbox
                        id={brand}
                        checked={selectedBrands.includes(brand)}
                        onCheckedChange={() => handleBrandToggle(brand)}
                      />
                      <Label htmlFor={brand} className="text-sm">{brand}</Label>
                    </div>
                  ))}
                </div>

                <Separator className="my-4" />

                {/* Category Filter */}
                <div className="space-y-2 mb-6">
                  <Label>Категория</Label>
                  <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                    <SelectTrigger>
                      <SelectValue placeholder="Все категории" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="">Все категории</SelectItem>
                      {categories.map(category => (
                        <SelectItem key={category} value={category}>{category}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Form Factor Filter */}
                <div className="space-y-2 mb-6">
                  <Label>Форм-фактор</Label>
                  <Select value={selectedFormFactor} onValueChange={setSelectedFormFactor}>
                    <SelectTrigger>
                      <SelectValue placeholder="Любой" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="">Любой</SelectItem>
                      {formFactors.map(formFactor => (
                        <SelectItem key={formFactor} value={formFactor}>{formFactor}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Application Filter */}
                <div className="space-y-2">
                  <Label>Назначение</Label>
                  <Select value={selectedApplication} onValueChange={setSelectedApplication}>
                    <SelectTrigger>
                      <SelectValue placeholder="Любое" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="">Любое</SelectItem>
                      {applications.map(application => (
                        <SelectItem key={application} value={application}>{application}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1">
              {/* Top Bar */}
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-4">
                  <span className="text-muted-foreground">
                    Найдено: {sortedProducts.length} из {products.length}
                  </span>
                </div>
                
                <div className="flex items-center gap-4">
                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger className="w-48">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="name">По названию</SelectItem>
                      <SelectItem value="brand">По производителю</SelectItem>
                      <SelectItem value="price">По цене</SelectItem>
                    </SelectContent>
                  </Select>
                  
                  <div className="flex border rounded-lg">
                    <Button
                      variant={viewMode === "grid" ? "default" : "ghost"}
                      size="sm"
                      className="rounded-r-none"
                      onClick={() => setViewMode("grid")}
                    >
                      <Grid className="w-4 h-4" />
                    </Button>
                    <Button
                      variant={viewMode === "list" ? "default" : "ghost"}
                      size="sm"
                      className="rounded-l-none"
                      onClick={() => setViewMode("list")}
                    >
                      <List className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Products Grid */}
              <div className={`grid gap-6 ${viewMode === "grid" ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" : "grid-cols-1"}`}>
                {sortedProducts.map(product => (
                  <Card key={product.id} className="group hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
                    <CardContent className="p-6">
                      <div className="aspect-square bg-gray-50 rounded-lg mb-4 overflow-hidden">
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      
                      <div className="space-y-3">
                        <div className="flex items-start justify-between">
                          <div>
                            <Badge variant="secondary" className="text-xs mb-2">
                              {product.brand}
                            </Badge>
                            <h3 className="font-semibold text-lg">{product.name}</h3>
                          </div>
                          {product.inStock && (
                            <Badge variant="default" className="bg-green-100 text-green-800 border-green-200">
                              В наличии
                            </Badge>
                          )}
                        </div>
                        
                        <p className="text-muted-foreground text-sm line-clamp-2">
                          {product.description}
                        </p>
                        
                        <div className="space-y-1 text-xs text-muted-foreground">
                          <div>Форм-фактор: {product.formFactor}</div>
                          <div>Применение: {product.application}</div>
                          {product.specs.cpu && <div>CPU: {product.specs.cpu}</div>}
                          {product.specs.memory && <div>Память: {product.specs.memory}</div>}
                        </div>
                        
                        {product.price && (
                          <div className="text-xl font-bold text-primary">
                            {product.price}
                          </div>
                        )}
                        
                        <div className="flex gap-2 pt-2">
                          <Button className="flex-1">Подробнее</Button>
                          <Button variant="outline" className="flex-1">Запросить КП</Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {sortedProducts.length === 0 && (
                <div className="text-center py-16">
                  <h3 className="text-lg font-semibold mb-2">Товары не найдены</h3>
                  <p className="text-muted-foreground">
                    Попробуйте изменить параметры фильтрации
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};