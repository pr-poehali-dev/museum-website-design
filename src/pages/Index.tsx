import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const exhibitions = [
    {
      id: 1,
      title: 'Цифровые измерения',
      artist: 'Коллективная выставка',
      date: 'До 15 марта 2025',
      image: 'https://cdn.poehali.dev/projects/4a1b42c6-93d0-4d8c-a1bd-4f46dec833a5/files/02320f47-59f7-48de-ad98-7d4201b60b6d.jpg',
      status: 'Сейчас'
    },
    {
      id: 2,
      title: 'Геометрия цвета',
      artist: 'Александра Петрова',
      date: 'С 20 февраля 2025',
      image: 'https://cdn.poehali.dev/projects/4a1b42c6-93d0-4d8c-a1bd-4f46dec833a5/files/3350599c-4510-48db-abe8-667eb6ddcebe.jpg',
      status: 'Скоро'
    },
    {
      id: 3,
      title: 'Минимализм сегодня',
      artist: 'Дэвид Ченг',
      date: 'До 28 февраля 2025',
      image: 'https://cdn.poehali.dev/projects/4a1b42c6-93d0-4d8c-a1bd-4f46dec833a5/files/cefc114e-0ac8-48c8-9d7d-a7a9cd7e69f1.jpg',
      status: 'Сейчас'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-lg z-50 border-b border-black/5 shadow-sm">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold tracking-wider">SFMOMA</h1>
          <div className="hidden md:flex gap-8 items-center">
            <a href="#exhibitions" className="hover:text-accent transition-colors">Выставки</a>
            <a href="#visit" className="hover:text-accent transition-colors">Посещение</a>
            <a href="#about" className="hover:text-accent transition-colors">О музее</a>
            <Button variant="default" size="sm">Билеты</Button>
          </div>
          <button className="md:hidden">
            <Icon name="Menu" size={24} />
          </button>
        </div>
      </nav>

      <section className="relative h-screen overflow-hidden pt-16">
        <div 
          className="absolute inset-0 parallax"
          style={{ 
            transform: `translateY(${scrollY * 0.5}px)`,
            backgroundImage: `url('https://cdn.poehali.dev/projects/4a1b42c6-93d0-4d8c-a1bd-4f46dec833a5/files/02320f47-59f7-48de-ad98-7d4201b60b6d.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <div 
          className="relative h-full flex items-center justify-center text-white z-10"
          style={{ transform: `translateY(${scrollY * 0.3}px)` }}
        >
          <div className="text-center animate-fade-in-up">
            <h2 className="text-6xl md:text-8xl font-bold mb-6 tracking-wider">
              ИСКУССТВО<br />СЕГОДНЯ
            </h2>
            <p className="text-xl md:text-2xl mb-8 font-light">
              Музей современного искусства Сан-Франциско
            </p>
            <Button size="lg" variant="default" className="bg-accent hover:bg-accent/90">
              Текущие выставки
            </Button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <Icon name="ChevronDown" size={32} className="text-white" />
        </div>
      </section>

      <section id="exhibitions" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-12 animate-fade-in">
            <div>
              <h3 className="text-5xl md:text-6xl font-bold mb-4">Выставки</h3>
              <p className="text-muted-foreground text-lg">Текущие и предстоящие экспозиции</p>
            </div>
            <Button variant="outline" className="hidden md:flex">
              Все выставки <Icon name="ArrowRight" size={16} className="ml-2" />
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {exhibitions.map((exhibition, index) => (
              <Link 
                key={exhibition.id} 
                to={`/exhibition/${exhibition.id}`}
                style={{ animationDelay: `${index * 0.2}s` }}
                className="animate-fade-in"
              >
                <Card className="group overflow-hidden border-0 shadow-none hover-lift cursor-pointer">
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <img 
                      src={exhibition.image} 
                      alt={exhibition.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-4 right-4">
                      <span className={`px-4 py-1.5 text-sm font-medium ${
                        exhibition.status === 'Сейчас' 
                          ? 'bg-accent text-white' 
                          : 'bg-white text-black'
                      }`}>
                        {exhibition.status}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 bg-muted">
                    <h4 className="text-2xl font-bold mb-2">{exhibition.title}</h4>
                    <p className="text-muted-foreground mb-2">{exhibition.artist}</p>
                    <p className="text-sm flex items-center gap-2">
                      <Icon name="Calendar" size={14} />
                      {exhibition.date}
                    </p>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="relative h-[60vh] overflow-hidden">
        <div 
          className="absolute inset-0 parallax"
          style={{ 
            transform: `translateY(${scrollY * 0.2}px)`,
            backgroundImage: `url('https://cdn.poehali.dev/projects/4a1b42c6-93d0-4d8c-a1bd-4f46dec833a5/files/cefc114e-0ac8-48c8-9d7d-a7a9cd7e69f1.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="relative h-full flex items-center justify-center text-white z-10">
          <div className="text-center max-w-3xl px-6">
            <h3 className="text-5xl md:text-6xl font-bold mb-6">
              ПРИСОЕДИНЯЙТЕСЬ К НАМ
            </h3>
            <p className="text-xl mb-8 font-light">
              Станьте частью сообщества ценителей современного искусства
            </p>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black">
              Узнать больше
            </Button>
          </div>
        </div>
      </section>

      <section id="visit" className="py-20 bg-muted">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in">
              <h3 className="text-5xl font-bold mb-6">Посетите нас</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <Icon name="MapPin" size={24} className="text-accent flex-shrink-0" />
                  <div>
                    <h4 className="font-bold mb-1">Адрес</h4>
                    <p className="text-muted-foreground">151 Third Street<br />San Francisco, CA 94103</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Icon name="Clock" size={24} className="text-accent flex-shrink-0" />
                  <div>
                    <h4 className="font-bold mb-1">Часы работы</h4>
                    <p className="text-muted-foreground">Пт-Вт: 10:00 - 17:00<br />Чт: 10:00 - 21:00<br />Ср: выходной</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Icon name="Ticket" size={24} className="text-accent flex-shrink-0" />
                  <div>
                    <h4 className="font-bold mb-1">Билеты</h4>
                    <p className="text-muted-foreground">Взрослые: $25<br />Студенты: $19<br />Дети до 18: бесплатно</p>
                  </div>
                </div>
              </div>
              <Button size="lg" className="mt-8">
                Купить билеты онлайн
              </Button>
            </div>
            <div className="relative aspect-square animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/projects/4a1b42c6-93d0-4d8c-a1bd-4f46dec833a5/files/3350599c-4510-48db-abe8-667eb6ddcebe.jpg"
                alt="Museum interior"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <footer className="relative bg-black/90 backdrop-blur-xl text-white py-12 border-t border-white/10">
        <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="text-xl font-bold mb-4">SFMOMA</h4>
              <p className="text-sm text-white/70">Музей современного искусства Сан-Франциско</p>
            </div>
            <div>
              <h5 className="font-bold mb-4">Посещение</h5>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href="#" className="hover:text-accent transition-colors">Часы работы</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Билеты</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Как добраться</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold mb-4">Выставки</h5>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href="#" className="hover:text-accent transition-colors">Текущие</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Предстоящие</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Архив</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold mb-4">Контакты</h5>
              <div className="flex gap-4">
                <Icon name="Instagram" size={20} className="cursor-pointer hover:text-accent transition-colors" />
                <Icon name="Facebook" size={20} className="cursor-pointer hover:text-accent transition-colors" />
                <Icon name="Twitter" size={20} className="cursor-pointer hover:text-accent transition-colors" />
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-sm text-white/70">
            <p>© 2025 San Francisco Museum of Modern Art</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;