import { Link, useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Exhibition = () => {
  const { id } = useParams();

  const exhibitionData = {
    1: {
      title: 'Цифровые измерения',
      artist: 'Коллективная выставка',
      date: 'До 15 марта 2025',
      description: 'Исследование цифрового искусства и его влияния на современную культуру. Выставка представляет работы более 20 художников со всего мира, работающих на пересечении технологий и искусства.',
      image: 'https://cdn.poehali.dev/projects/4a1b42c6-93d0-4d8c-a1bd-4f46dec833a5/files/02320f47-59f7-48de-ad98-7d4201b60b6d.jpg',
      gallery: [
        'https://cdn.poehali.dev/projects/4a1b42c6-93d0-4d8c-a1bd-4f46dec833a5/files/02320f47-59f7-48de-ad98-7d4201b60b6d.jpg',
        'https://cdn.poehali.dev/projects/4a1b42c6-93d0-4d8c-a1bd-4f46dec833a5/files/3350599c-4510-48db-abe8-667eb6ddcebe.jpg',
        'https://cdn.poehali.dev/projects/4a1b42c6-93d0-4d8c-a1bd-4f46dec833a5/files/cefc114e-0ac8-48c8-9d7d-a7a9cd7e69f1.jpg'
      ],
      artists: [
        { name: 'Анна Смирнова', work: 'Интерактивная инсталляция' },
        { name: 'Джон Доу', work: 'Видео-арт' },
        { name: 'Мария Иванова', work: 'Цифровая живопись' }
      ]
    },
    2: {
      title: 'Геометрия цвета',
      artist: 'Александра Петрова',
      date: 'С 20 февраля 2025',
      description: 'Персональная выставка Александры Петровой демонстрирует её исследования в области абстрактной живописи. Геометрические формы и смелые цветовые решения создают уникальный визуальный опыт.',
      image: 'https://cdn.poehali.dev/projects/4a1b42c6-93d0-4d8c-a1bd-4f46dec833a5/files/3350599c-4510-48db-abe8-667eb6ddcebe.jpg',
      gallery: [
        'https://cdn.poehali.dev/projects/4a1b42c6-93d0-4d8c-a1bd-4f46dec833a5/files/3350599c-4510-48db-abe8-667eb6ddcebe.jpg',
        'https://cdn.poehali.dev/projects/4a1b42c6-93d0-4d8c-a1bd-4f46dec833a5/files/cefc114e-0ac8-48c8-9d7d-a7a9cd7e69f1.jpg',
        'https://cdn.poehali.dev/projects/4a1b42c6-93d0-4d8c-a1bd-4f46dec833a5/files/02320f47-59f7-48de-ad98-7d4201b60b6d.jpg'
      ],
      artists: [
        { name: 'Александра Петрова', work: 'Живопись, 2020-2025' }
      ]
    },
    3: {
      title: 'Минимализм сегодня',
      artist: 'Дэвид Ченг',
      date: 'До 28 февраля 2025',
      description: 'Современная интерпретация минимализма через призму скульптуры и инсталляции. Работы Дэвида Ченга исследуют пространство, свет и форму в их чистейшем проявлении.',
      image: 'https://cdn.poehali.dev/projects/4a1b42c6-93d0-4d8c-a1bd-4f46dec833a5/files/cefc114e-0ac8-48c8-9d7d-a7a9cd7e69f1.jpg',
      gallery: [
        'https://cdn.poehali.dev/projects/4a1b42c6-93d0-4d8c-a1bd-4f46dec833a5/files/cefc114e-0ac8-48c8-9d7d-a7a9cd7e69f1.jpg',
        'https://cdn.poehali.dev/projects/4a1b42c6-93d0-4d8c-a1bd-4f46dec833a5/files/02320f47-59f7-48de-ad98-7d4201b60b6d.jpg',
        'https://cdn.poehali.dev/projects/4a1b42c6-93d0-4d8c-a1bd-4f46dec833a5/files/3350599c-4510-48db-abe8-667eb6ddcebe.jpg'
      ],
      artists: [
        { name: 'Дэвид Ченг', work: 'Скульптура и инсталляция' }
      ]
    }
  };

  const exhibition = exhibitionData[id as keyof typeof exhibitionData] || exhibitionData[1];

  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-black/10">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link to="/">
            <h1 className="text-2xl font-bold tracking-wider">SFMOMA</h1>
          </Link>
          <div className="hidden md:flex gap-8 items-center">
            <Link to="/#exhibitions" className="hover:text-accent transition-colors">Выставки</Link>
            <a href="#visit" className="hover:text-accent transition-colors">Посещение</a>
            <a href="#about" className="hover:text-accent transition-colors">О музее</a>
            <Button variant="default" size="sm">Билеты</Button>
          </div>
          <button className="md:hidden">
            <Icon name="Menu" size={24} />
          </button>
        </div>
      </nav>

      <section className="relative h-[70vh] overflow-hidden pt-16">
        <img 
          src={exhibition.image}
          alt={exhibition.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        
        <div className="relative h-full flex items-end justify-start z-10 container mx-auto px-6 pb-16">
          <div className="text-white max-w-3xl animate-fade-in-up">
            <Link to="/" className="inline-flex items-center gap-2 mb-6 hover:text-accent transition-colors">
              <Icon name="ArrowLeft" size={20} />
              Назад к выставкам
            </Link>
            <h1 className="text-6xl md:text-7xl font-bold mb-4">{exhibition.title}</h1>
            <p className="text-2xl mb-2">{exhibition.artist}</p>
            <p className="text-lg flex items-center gap-2">
              <Icon name="Calendar" size={18} />
              {exhibition.date}
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-16">
            <div className="md:col-span-2 animate-fade-in">
              <h2 className="text-4xl font-bold mb-6">О выставке</h2>
              <p className="text-lg leading-relaxed text-muted-foreground mb-8">
                {exhibition.description}
              </p>
              
              <h3 className="text-3xl font-bold mb-6 mt-12">Галерея</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {exhibition.gallery.map((image, index) => (
                  <div 
                    key={index} 
                    className="aspect-square overflow-hidden hover-lift"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <img 
                      src={image} 
                      alt={`Gallery ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="animate-fade-in">
              <Card className="p-8 bg-muted sticky top-24">
                <h3 className="text-2xl font-bold mb-6">Информация</h3>
                
                <div className="space-y-6 mb-8">
                  <div>
                    <h4 className="font-bold mb-2 flex items-center gap-2">
                      <Icon name="MapPin" size={18} className="text-accent" />
                      Зал
                    </h4>
                    <p className="text-muted-foreground">Галерея 3, уровень 2</p>
                  </div>
                  
                  <div>
                    <h4 className="font-bold mb-2 flex items-center gap-2">
                      <Icon name="Clock" size={18} className="text-accent" />
                      Время работы
                    </h4>
                    <p className="text-muted-foreground">Пт-Вт: 10:00 - 17:00<br />Чт: 10:00 - 21:00</p>
                  </div>

                  <div>
                    <h4 className="font-bold mb-2 flex items-center gap-2">
                      <Icon name="Users" size={18} className="text-accent" />
                      Художники
                    </h4>
                    <ul className="space-y-2">
                      {exhibition.artists.map((artist, index) => (
                        <li key={index} className="text-muted-foreground">
                          <span className="font-medium text-foreground">{artist.name}</span>
                          <br />
                          {artist.work}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <Button size="lg" className="w-full mb-4">
                  Купить билеты
                </Button>
                <Button size="lg" variant="outline" className="w-full">
                  <Icon name="Share2" size={16} className="mr-2" />
                  Поделиться
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted">
        <div className="container mx-auto px-6">
          <h3 className="text-4xl font-bold mb-12">Другие выставки</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {Object.entries(exhibitionData)
              .filter(([key]) => key !== id)
              .slice(0, 3)
              .map(([key, exp]) => (
                <Link key={key} to={`/exhibition/${key}`}>
                  <Card className="group overflow-hidden border-0 shadow-none hover-lift cursor-pointer">
                    <div className="relative aspect-[3/4] overflow-hidden">
                      <img 
                        src={exp.image} 
                        alt={exp.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-6 bg-white">
                      <h4 className="text-2xl font-bold mb-2">{exp.title}</h4>
                      <p className="text-muted-foreground">{exp.artist}</p>
                    </div>
                  </Card>
                </Link>
              ))}
          </div>
        </div>
      </section>

      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-6">
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
          <div className="border-t border-white/20 pt-8 text-center text-sm text-white/70">
            <p>© 2025 San Francisco Museum of Modern Art</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Exhibition;
