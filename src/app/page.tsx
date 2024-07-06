"use client";
// @refresh reset
import React from "react";
import styles from "./home.module.css";
import {
  ArrowRightIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  MenuIcon,
  PlayIcon,
  SearchIcon,
  XIcon,
} from "@heroicons/react/outline";
import localFont from "next/font/local";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";
import { animated, Spring, useSprings } from "react-spring";

const myFont = localFont({
  src: "../../public/font/Gilroy-Regular.woff2",
  display: "swap",
});

const getRandomColor = () => {
  const colors = ["#ffffff", "#f0f8ff", "#e0ffff"];
  return colors[Math.floor(Math.random() * colors.length)];
};

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isButtonHovered, setIsButtonHovered] = React.useState(false);
  const [snowflakes, setSnowflakes] = React.useState<any>([]);

  const handleHover = () => {
    setIsButtonHovered(!isButtonHovered);
  };

  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    const initialSnowflakes = Array.from({ length: 30 }, () => ({
      x: Math.random() * (window.innerWidth - 20),
      y: Math.random() * -20,
      color: getRandomColor(),
      speed: 1 + Math.random() * 2,
    }));
    setSnowflakes(initialSnowflakes);
  }, []);

  setTimeout(() => {
    setMounted(true);
  }, 100);

  const animatedSnowflakes = useSprings(
    snowflakes.length,
    snowflakes.map((item: any) => ({
      from: { x: item.x, y: item.y },
      to: async (next: any) => {
        while (1) {
          await next({
            // x: Math.random() * (window.innerWidth - 20),
            x: item.x + (Math.random() - 0.5) * 50,
            y:
              Math.random() * (200 - window.innerHeight * 0.1) +
              window.innerHeight * 0.4,
          });
          // await next({ x: item.x, y: item.y });
        }
      },
      loop: true,
      reset: mounted,
      config: {
        duration: 3000 + Math.random() * 1000,
        tension: 0.1,
        friction: 10,
      },
    }))
  );

  if (!mounted) {
    return null;
  }

  const cards = [
    {
      id: 1,
      image: "/assets/product.png",
      title: "Card Title 2",
      description: "",
    },
    {
      id: 2,
      image: "/assets/produc2.png",
      title: "Card Title 2",
      description: "Почему следует принимать пищевые добавки?.",
    },
    {
      id: 3,
      image: "/assets/product3.png",
      title: "Card Title 3",
      description: "Пищевые ингредиенты Европа 2023 Франкфурт",
    },
  ];

  return (
    <div className="overflow-x-hidden">
      {/* Section 1 */}
      <div className="relative h-[1050px] sm:h-screen">
        {animatedSnowflakes.map((props: any, index) => (
          <animated.div
            key={index}
            style={{
              position: "absolute",
              left: props.x,
              top: props.y,
              fontSize: 20,
              color: snowflakes[index].color,
              zIndex: 3,
            }}
          >
            ❄️
          </animated.div>
        ))}
        <div
          className={`absolute inset-0 bg-center ${styles.mountain}`}
          style={{
            backgroundImage: "url('/assets/mountain.png')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            backgroundPosition: "bottom",
            zIndex: 2,
          }}
        />

        <div
          className={`absolute inset-0 bg-center ${styles.clouds}`}
          style={{
            backgroundImage: "url('/assets/clouds.png')",
            mixBlendMode: "multiply",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            backgroundPosition: "top",
            zIndex: 0,
          }}
        />

        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('assets/filters.png')",
            zIndex: 3,
          }}
        />

        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('assets/content.png')",
            zIndex: 3,
          }}
        />
        <div
          className="relative flex flex-col items-start h-full text-white px-20 sm:px-12 lg:px-16"
          style={{
            zIndex: 4,
          }}
        >
          <div className="max-w-6xl w-full mx-auto">
            <nav
              className={`relative inset-x-0 top-5 z-50 flex items-center justify-between sm:pr-12 lg:pr-16 bg-transparent ${myFont.className}`}
            >
              <div className="flex items-center">
                <img
                  className="h-10 w-auto"
                  src="/assets/Logo.png"
                  alt="Logo"
                />
                <div className="mx-4"></div>
              </div>

              <div className="flex items-center xl:hidden">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="text-white hover:text-gray-300 focus:outline-none"
                >
                  {isMenuOpen ? (
                    <XIcon className="h-6 w-6" />
                  ) : (
                    <MenuIcon className="h-6 w-6" />
                  )}
                </button>
              </div>

              <div className="hidden xl:flex items-center">
                <div className="hidden xl:flex items-center space-x-10">
                  <a
                    href="#"
                    className="text-white underline hover:text-gray-300"
                  >
                    Главная
                  </a>
                  <a href="#" className="text-white hover:text-gray-300">
                    О нас
                  </a>
                  <a href="#" className="text-white hover:text-gray-300">
                    Продукты
                  </a>
                  <a href="#" className="text-white hover:text-gray-300">
                    Контакты
                  </a>
                  <a href="#" className="text-white hover:text-gray-300">
                    Новости
                  </a>
                </div>

                <div className="mx-4"></div>

                <div className="flex justify-start items-center gap-3 py-1 rounded-2xl border border-white">
                  <SearchIcon className="h-5 w-5 ml-2 text-white" />
                  <input
                    type="text"
                    placeholder="Поиск..."
                    className="bg-transparent text-white outline-none"
                  />
                </div>
                <div onClick={handleHover} className="relative ml-7">
                  <button className="flex justify-center items-center text-white hover:text-gray-300">
                    Ру
                    <ChevronDownIcon className="h-5 w-5 ml-1 text-white" />
                  </button>
                  {isButtonHovered && (
                    <div className="absolute z-50 right-0 mt-2 w-48 bg-white rounded-md shadow-lg ">
                      <a
                        href="#"
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                      >
                        Уз
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                      >
                        Ен
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </nav>

            {isMenuOpen && (
              <div className="fixed inset-0 z-50 bg-gray-900">
                <div className="flex flex-col items-center justify-center h-full">
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="absolute top-5 right-5 text-white hover:text-gray-300 focus:outline-none"
                  >
                    <XIcon className="h-6 w-6" />
                  </button>
                  <div className="flex flex-col space-y-8">
                    <a href="#" className="text-white text-2xl">
                      Главная
                    </a>
                    <a href="#" className="text-white text-2xl">
                      О нас
                    </a>
                    <a href="#" className="text-white text-2xl">
                      Продукты
                    </a>
                    <a href="#" className="text-white text-2xl">
                      Контакты
                    </a>
                    <a href="#" className="text-white text-2xl">
                      Новости
                    </a>
                  </div>
                </div>
              </div>
            )}

            <div className="max-w-7xl w-full mx-auto relative top-20">
              <h1 className="font-TenorSans font-normal text-2xl md:text-3xl lg:text-6xl text-white mb-8">
                Экологически чистые продукты <br /> из богатой флоры
                <span
                  className={`ml-2 text-[#4eb748] underline ${styles.uzbekistan}`}
                >
                  Узбекистана
                </span>
              </h1>
              <h4 className="max-w-[890px] text-sm sm:text-md lg:text-lg mb-6">
                Страна Шелкового пути, древней сети торговых маршрутов, была
                местом культурного обмена и глубоких знаний. Опираясь на богатое
                историческое наследие Узбекистана и стремление к инновациям, в
                2018 году в самом сердце Центральной Азии было создано
                современное предприятие, целью которого является использование
                экологически чистых, натуральных местных природных богатств —
                цветов, листьев, кожуры, семян, корней дикорастущих
                лекарственных растений, фруктов и овощей
              </h4>
              <div className={`flex gap-4 ${styles.buttons}`}>
                <button className="uppercase text-white px-4 py-2 cursor-pointer border-2 rounded-md backdrop-filter backdrop-blur-sm backdrop-opacity-75">
                  Связаться с нами
                </button>

                <button className="uppercase flex items-center gap-1 text-white px-4 py-2 cursor-pointer border-2 rounded-md backdrop-filter backdrop-blur-sm backdrop-opacity-75">
                  Смотреть о нас
                  <PlayIcon className="h-7 w-7 ml-1 text-white" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 2 */}
      <div
        className="bg-cover bg-center h-[200vh] sm:h-[160vh] lg:h-screen"
        style={{ backgroundImage: "url('/assets/bg-image2.png')" }}
      >
        <div className="relative flex flex-col items-start h-full text-white px-6 sm:px-12 lg:px-16">
          <div className="max-w-7xl w-full mx-auto p-8 ">
            <h4 className="text-3xl mt-10 lg:text-4xl text-black mb-8">
              Полезные статьи
            </h4>
            <h5 className="text-1xl max-w-2xl lg:text-2xl text-black mb-8">
              На нашем сайте мы публикуем новости отрасли и исследовательские
              статьи. Будьте в курсе новостей и интересных статей.
            </h5>
            <div className="container mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {cards.map((card, index) => (
                  <div
                    key={card.id}
                    className="relative bg-white shadow-md rounded-lg overflow-hidden"
                  >
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-64 object-cover"
                    />
                    <div
                      className={`absolute inset-0 ${
                        index > 0 ? "bg-black bg-opacity-50" : ""
                      } flex flex-col justify-between p-4`}
                    >
                      <div>
                        <p className="text-1xl max-w-60 lg:text-xl text-gray-200">
                          {card.description}
                        </p>
                      </div>
                      {index > 0 && (
                        <button className="text-white flex gap-x-2 px-4 py-2 cursor-pointer backdrop-filter backdrop-blur-sm backdrop-opacity-75 self-start mt-4">
                          Читать
                          <ArrowRightIcon className="w-6 h-6 text-white ml-1" />
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 3 */}
      <div className="bg-[#231e1e] h-auto py-12 flex flex-col items-center">
        <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start justify-between gap-8">
            <div className="absolute flex justify-end items-center lg:w-[800px] w-[300px] h-auto z-10">
              <div
                className="bg-center bg-contain bg-no-repeat w-60 h-60"
                style={{
                  backgroundImage: "url('/assets/Logo_footer.png')",
                  opacity: "50%",
                }}
              ></div>
            </div>

            <div className="flex items-center z-20">
              <img
                src="/assets/Logo.png"
                alt="Small Logo"
                className="h-12 hidden lg:block"
              />
            </div>

            <div className="flex flex-col max-w-sm z-20">
              <h3 className="text-white text-lg font-semibold mb-4">
                Адрес головного офиса:
              </h3>
              <p className="text-gray-300">
                100100, Республика Узбекистан, город Ташкент, Яккасарайский
                район, улица Шота Руставели, 53Б
              </p>
              <h3 className="text-white text-lg font-semibold mt-10 mb-4">
                Адрес производства:
              </h3>
              <p className="text-gray-300">
                111305, Республика Узбекистан, Ташкентская область, Паркентский
                район, Каракалпакский Марказий МФУ
              </p>
            </div>

            <div className="flex flex-col z-20">
              <h3 className="text-white text-lg font-semibold mb-4">
                Навигация
              </h3>
              <a href="#" className="text-gray-300 hover:text-white mb-1">
                Главная
              </a>
              <a href="#" className="text-gray-300 hover:text-white mb-1">
                О нас
              </a>
              <a href="#" className="text-gray-300 hover:text-white mb-1">
                Продукты
              </a>
              <a href="#" className="text-gray-300 hover:text-white mb-1">
                Контакты
              </a>
              <a href="#" className="text-gray-300 hover:text-white mb-1">
                Новости
              </a>
            </div>

            <div className="flex flex-col z-20">
              <h3 className="text-white text-lg font-semibold mb-4">
                Как с нами связаться?
              </h3>
              <p className="text-gray-300 mb-1">info@yumabio.com</p>
              <p className="text-gray-300 mb-1">+998 95 478 88 87</p>
              <p className="text-gray-300 mb-1">+998 93 321 24 42</p>
              <div className="flex gap-4 mt-4">
                <a href="#" className="text-gray-300 hover:text-white">
                  <FontAwesomeIcon icon={faInstagram} className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-300 hover:text-white">
                  <FontAwesomeIcon icon={faFacebook} className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-300 hover:text-white">
                  <FontAwesomeIcon icon={faTelegram} className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
