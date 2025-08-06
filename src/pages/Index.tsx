import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    city: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Новая заявка с сайта Авто Маркет:
ФИО: ${formData.name}
Телефон: ${formData.phone}
Услуга: ${formData.service}
Город: ${formData.city}
Сообщение: ${formData.message}`;
    
    const telegramUrl = `https://t.me/Ivan_88888?text=${encodeURIComponent(message)}`;
    window.open(telegramUrl, '_blank');
  };

  const services = [
    {
      icon: 'Car',
      title: 'Продажа авто с пробегом',
      description: 'Широкий выбор качественных автомобилей с пробегом',
      features: ['Юридическая чистота 100%', 'Проверка истории авто', 'Гарантия качества']
    },
    {
      icon: 'DollarSign',
      title: 'Выкуп авто',
      description: 'Выкуп вашего автомобиля по рыночной стоимости в день обращения',
      features: ['Оценка в день обращения', 'Рыночная стоимость', 'Быстрое оформление']
    },
    {
      icon: 'RefreshCw',
      title: 'Трейд-ин',
      description: 'Обмен вашего автомобиля на новый с доплатой',
      features: ['Выгодный обмен', 'Зачет стоимости авто', 'Простое оформление']
    },
    {
      icon: 'CreditCard',
      title: 'Автокредит и рассрочка',
      description: 'Продажа автомобилей в кредит или рассрочку',
      features: ['Любая кредитная история', 'Независимо от долгов', 'Быстрое одобрение']
    }
  ];

  const advantages = [
    'Гарантия юридической чистоты 100%',
    'Оценка и выкуп авто в день обращения', 
    'Работаем с любой кредитной историей',
    'Независимо от долгов у судебных приставов',
    'Профессиональная команда экспертов',
    'Честные рыночные цены'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-auto-slate-50 to-auto-blue-50">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm border-b border-auto-blue-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img 
                src="https://cdn.poehali.dev/files/cda2720e-ae20-4979-8096-5b1d4194a5b1.png" 
                alt="Авто Маркет" 
                className="h-12 w-auto"
              />
              <div>
                <h1 className="text-2xl font-montserrat font-bold text-auto-blue-800">АВТО МАРКЕТ</h1>
                <p className="text-auto-slate-600 text-sm font-opensans">Продажа | Выкуп | Обмен</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <a 
                href="https://t.me/+W0ZJqg_iYY82MWIy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-auto-blue-500 text-white hover:bg-auto-blue-600 transition-colors"
              >
                <Icon name="Send" size={20} />
              </a>
              <a 
                href="https://vk.com/avtorynok_nomer1" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-auto-blue-500 text-white hover:bg-auto-blue-600 transition-colors"
              >
                <Icon name="Users" size={20} />
              </a>
              <a 
                href={`https://wa.me/79212542636`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-green-500 text-white hover:bg-green-600 transition-colors"
              >
                <Icon name="MessageCircle" size={20} />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-montserrat font-bold text-auto-blue-900 mb-6 animate-fade-in">
              Ваш надежный партнер в мире автомобилей
            </h2>
            <p className="text-xl font-opensans text-auto-slate-700 mb-8 animate-fade-in">
              Продажа, обмен, комиссия автомобилей с пробегом. Гарантия юридической чистоты 100%.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-auto-blue-600 text-auto-blue-600 hover:bg-auto-blue-600 hover:text-white font-montserrat font-semibold px-8 py-4 rounded-xl transition-all duration-300"
                onClick={() => window.open('https://t.me/Ivan_88888', '_blank')}
              >
                <Icon name="Calculator" className="mr-2" size={24} />
                Оценить авто
              </Button>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <div className="relative overflow-hidden rounded-2xl shadow-xl">
                <img 
                  src="/img/0334d70f-4478-445f-bab6-22f752b6e426.jpg" 
                  alt="Автосалон"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-auto-blue-900/60 to-transparent"></div>
              </div>
              <div className="relative overflow-hidden rounded-2xl shadow-xl">
                <img 
                  src="/img/00508c68-3edd-4b91-9d66-b13f4f2c2f29.jpg" 
                  alt="Покупка автомобиля"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-auto-blue-900/60 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Car Selection CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-auto-blue-700 to-auto-blue-900 relative overflow-hidden">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            <div className="relative z-10">
              <div className="space-y-6">
                <Badge className="bg-auto-blue-200 text-auto-blue-800 font-montserrat font-semibold text-sm px-4 py-1">
                  Более 500 автомобилей в наличии
                </Badge>
                <h2 className="text-4xl lg:text-5xl font-montserrat font-bold text-white leading-tight">
                  Найдите идеальный автомобиль для себя
                </h2>
                <p className="text-xl text-auto-blue-100 font-opensans leading-relaxed">
                  Профессиональная помощь в выборе, проверенные автомобили с полной историей, 
                  честные цены и гарантия юридической чистоты.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                  <Button 
                    size="lg" 
                    className="bg-white text-auto-blue-800 hover:bg-auto-blue-50 font-montserrat font-bold px-10 py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 text-lg"
                    onClick={() => window.open('https://www.avito.ru/user/387b19b1dc19f7ddf7692a6f45049371/profile?src=sharing', '_blank')}
                  >
                    <Icon name="Car" className="mr-3" size={28} />
                    Выбрать автомобиль
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="border-2 border-white text-white hover:bg-white hover:text-auto-blue-800 font-montserrat font-semibold px-8 py-4 rounded-2xl transition-all duration-300 text-lg"
                    onClick={() => window.open('https://t.me/+W0ZJqg_iYY82MWIy', '_blank')}
                  >
                    <Icon name="Send" className="mr-2" size={24} />
                    Задать вопрос
                  </Button>
                </div>
                
                <div className="flex items-center space-x-6 pt-4">
                  <div className="flex items-center text-auto-blue-100">
                    <Icon name="CheckCircle" size={20} className="text-green-400 mr-2" />
                    <span className="font-opensans">Гарантия качества</span>
                  </div>
                  <div className="flex items-center text-auto-blue-100">
                    <Icon name="Shield" size={20} className="text-green-400 mr-2" />
                    <span className="font-opensans">Юридическая чистота</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-500">
                <img 
                  src="https://cdn.poehali.dev/files/1690c080-0d07-45cf-9e09-019095292c8c.png" 
                  alt="Выбор автомобиля в Авто Маркет"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-auto-blue-900/20 to-transparent"></div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-auto-blue-400 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-auto-blue-300 rounded-full opacity-15 animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
        
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-repeat" style={{backgroundImage: "url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='7' cy='7' r='7'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"}}></div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-4xl font-montserrat font-bold text-center text-auto-blue-900 mb-4">
            Наши услуги
          </h2>
          <p className="text-center text-auto-slate-600 font-opensans mb-12 max-w-2xl mx-auto">
            Полный спектр услуг для комфортной покупки, продажи и обмена автомобилей
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-white to-auto-blue-50">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 p-3 bg-gradient-to-br from-auto-blue-500 to-auto-blue-600 rounded-full w-fit">
                    <Icon name={service.icon} size={32} className="text-white" />
                  </div>
                  <CardTitle className="font-montserrat font-semibold text-auto-blue-900">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-auto-slate-700 font-opensans text-center mb-4">
                    {service.description}
                  </p>
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-auto-slate-600">
                        <Icon name="CheckCircle" size={16} className="text-auto-blue-500 mr-2 flex-shrink-0" />
                        <span className="font-opensans">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Auto Selection Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-auto-blue-600 to-auto-blue-800">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-montserrat font-bold text-white mb-6">
              Подбор автомобилей
            </h2>
            <p className="text-auto-blue-100 font-opensans text-lg mb-12">
              Персональный подбор автомобиля под ваши потребности и бюджет
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="font-montserrat font-bold text-auto-blue-900 flex items-center justify-center">
                    <Icon name="MapPin" className="mr-2" size={24} />
                    Череповец
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-auto-slate-700 font-opensans mb-6">
                    Профессиональный подбор автомобилей в Череповце
                  </p>
                  <Button 
                    className="w-full bg-auto-blue-600 hover:bg-auto-blue-700 font-montserrat font-semibold"
                    onClick={() => window.open('https://t.me/artemk_888', '_blank')}
                  >
                    <Icon name="Send" className="mr-2" size={20} />
                    Оставить заявку
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="font-montserrat font-bold text-auto-blue-900 flex items-center justify-center">
                    <Icon name="MapPin" className="mr-2" size={24} />
                    Вологда
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-auto-slate-700 font-opensans mb-6">
                    Профессиональный подбор автомобилей в Вологде
                  </p>
                  <Button 
                    className="w-full bg-auto-blue-600 hover:bg-auto-blue-700 font-montserrat font-semibold"
                    onClick={() => window.open('https://t.me/RuslanKorolev1', '_blank')}
                  >
                    <Icon name="Send" className="mr-2" size={20} />
                    Оставить заявку
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-4xl font-montserrat font-bold text-center text-auto-blue-900 mb-4">
            Наши преимущества
          </h2>
          <p className="text-center text-auto-slate-600 font-opensans mb-12 max-w-2xl mx-auto">
            Почему клиенты выбирают Авто Маркет для решения автомобильных вопросов
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {advantages.map((advantage, index) => (
              <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-auto-blue-50 to-white">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 p-2 bg-auto-blue-500 rounded-full">
                      <Icon name="Star" size={20} className="text-white" />
                    </div>
                    <p className="font-opensans text-auto-slate-800 font-medium">
                      {advantage}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Form Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-auto-slate-100 to-auto-blue-100">
        <div className="container mx-auto">
          <div className="max-w-2xl mx-auto">
            <Card className="shadow-2xl border-0 bg-white/95 backdrop-blur-sm">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl font-montserrat font-bold text-auto-blue-900 mb-2">
                  Оставить заявку
                </CardTitle>
                <p className="text-auto-slate-600 font-opensans">
                  Заполните форму и мы свяжемся с вами в ближайшее время
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="font-opensans font-semibold text-auto-slate-700">
                      ФИО
                    </Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="border-auto-blue-200 focus:border-auto-blue-500"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="font-opensans font-semibold text-auto-slate-700">
                      Номер телефона
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="border-auto-blue-200 focus:border-auto-blue-500"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="service" className="font-opensans font-semibold text-auto-slate-700">
                      Выбор услуги
                    </Label>
                    <Select onValueChange={(value) => setFormData({...formData, service: value})}>
                      <SelectTrigger className="border-auto-blue-200 focus:border-auto-blue-500">
                        <SelectValue placeholder="Выберите услугу" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="sale">Продажа авто</SelectItem>
                        <SelectItem value="buyout">Выкуп авто</SelectItem>
                        <SelectItem value="trade">Трейд-ин</SelectItem>
                        <SelectItem value="credit">Автокредит/рассрочка</SelectItem>
                        <SelectItem value="selection">Автоподбор</SelectItem>
                        <SelectItem value="evaluation">Оценка авто</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="city" className="font-opensans font-semibold text-auto-slate-700">
                      Город обращения
                    </Label>
                    <Select onValueChange={(value) => setFormData({...formData, city: value})}>
                      <SelectTrigger className="border-auto-blue-200 focus:border-auto-blue-500">
                        <SelectValue placeholder="Выберите город" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="cherepovets">Череповец</SelectItem>
                        <SelectItem value="vologda">Вологда</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message" className="font-opensans font-semibold text-auto-slate-700">
                      Дополнительная информация
                    </Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="border-auto-blue-200 focus:border-auto-blue-500 min-h-[100px]"
                      placeholder="Расскажите о ваших потребностях..."
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-auto-blue-600 to-auto-blue-700 hover:from-auto-blue-700 hover:to-auto-blue-800 text-white font-montserrat font-semibold py-3 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <Icon name="Send" className="mr-2" size={20} />
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 bg-auto-blue-900">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl font-montserrat font-bold text-white mb-6">
                Контакты
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-montserrat font-semibold text-auto-blue-200 mb-3">
                    Вологда
                  </h3>
                  <div className="space-y-2 text-auto-blue-100 font-opensans">
                    <div className="flex items-center">
                      <Icon name="MapPin" size={18} className="mr-3 text-auto-blue-300" />
                      <span>Окружное шоссе, 23</span>
                    </div>
                    <div className="flex items-center">
                      <Icon name="Phone" size={18} className="mr-3 text-auto-blue-300" />
                      <a href="tel:+79215347321" className="hover:text-white transition-colors">
                        +7 (921) 534-73-21
                      </a>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-montserrat font-semibold text-auto-blue-200 mb-3">
                    Череповец
                  </h3>
                  <div className="space-y-2 text-auto-blue-100 font-opensans">
                    <div className="flex items-center">
                      <Icon name="MapPin" size={18} className="mr-3 text-auto-blue-300" />
                      <span>Рыбинская, 61</span>
                    </div>
                    <div className="flex items-center">
                      <Icon name="Phone" size={18} className="mr-3 text-auto-blue-300" />
                      <a href="tel:+79115186113" className="hover:text-white transition-colors">
                        +7 (911) 518-61-13
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-montserrat font-bold text-white mb-6">
                Мы в соцсетях
              </h2>
              
              <div className="space-y-4">
                <a 
                  href="https://t.me/+W0ZJqg_iYY82MWIy" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center p-4 bg-auto-blue-800 rounded-xl hover:bg-auto-blue-700 transition-colors group"
                >
                  <Icon name="Send" size={24} className="text-auto-blue-200 group-hover:text-white mr-3" />
                  <div>
                    <div className="font-montserrat font-semibold text-white">Telegram</div>
                    <div className="text-auto-blue-200 text-sm font-opensans">Присоединяйтесь к нашему каналу</div>
                  </div>
                </a>
                
                <a 
                  href="https://vk.com/avtorynok_nomer1" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center p-4 bg-auto-blue-800 rounded-xl hover:bg-auto-blue-700 transition-colors group"
                >
                  <Icon name="Users" size={24} className="text-auto-blue-200 group-hover:text-white mr-3" />
                  <div>
                    <div className="font-montserrat font-semibold text-white">ВКонтакте</div>
                    <div className="text-auto-blue-200 text-sm font-opensans">Следите за новостями</div>
                  </div>
                </a>
                
                <a 
                  href={`https://wa.me/79212542636`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center p-4 bg-green-600 rounded-xl hover:bg-green-500 transition-colors group"
                >
                  <Icon name="MessageCircle" size={24} className="text-green-100 group-hover:text-white mr-3" />
                  <div>
                    <div className="font-montserrat font-semibold text-white">WhatsApp</div>
                    <div className="text-green-100 text-sm font-opensans">Быстрая связь</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          
          <Separator className="my-8 bg-auto-blue-700" />
          
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <img 
                src="https://cdn.poehali.dev/files/cda2720e-ae20-4979-8096-5b1d4194a5b1.png" 
                alt="Авто Маркет" 
                className="h-8 w-auto mr-3"
              />
              <span className="text-2xl font-montserrat font-bold text-white">АВТО МАРКЕТ</span>
            </div>
            <p className="text-auto-blue-200 font-opensans">
              © 2024 Авто Маркет. Все права защищены.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;