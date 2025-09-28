"use client";

import { useEffect, useMemo, useState } from "react";

const accordionItems = [
  {
    title: "СХЕМА-ТЕРАПИЯ",
    description:
      "пожалуй, мой любимый метод психотерапии, основанный на идеях КПТ, психоанализа, теории привязанности и гештальт-терапии. работа с внутренним ребенком и его потребностями, деструктивными \"схемами\" и травмами",
  },
  {
    title: "АНАЛИТИЧЕСКАЯ ПСИХОЛОГИЯ",
    description:
      "или юнгинианский анализ. одно из ответвлений психоанализа, где осмысляются глубинные, бессознательные процессы нашей психики, в том числе посредством снов, образов и архетипов",
  },
  {
    title: "КПТ",
    description:
      "Когнитивно-поведенческая терапия: базовые навыки, направленные на изменение мышления и поведения, меняющие неэффективные привычки и паттерны, на продуктивные и более здоровые",
  },
];

const services = [
  {
    title: "РЕГУЛЯРНАЯ ТЕРАПИЯ",
    description: [
      "самый популярный и подходящий формат для глубинной работы и запросов: встречи раз в неделю или раз в две недели, не реже. продолжительность 1 час",
      "ЦЕНА $50",
    ],
    cta: "записаться",
    image:
      "https://images.squarespace-cdn.com/content/v1/66e08bfd1da3f722f7960f5c/9d92c3b4-82ee-4c0b-8920-d698c34b9973/andrew-ridley-Kt5hRENuotI-unsplash.jpg",
  },
  {
    title: "ЭКСПРЕСС-КОНСУЛЬТАЦИЯ",
    description: [
      "точечная работа, коуч-сессия с применением терапевтических инструментов: быстро, эффективно и интенсивно. продолжительность 1,5 часа. обычно хватает 1-3 сессий для решения актуального запроса",
      "ЦЕНА $70",
    ],
    cta: "ЗАПИСАТЬСЯ",
    image:
      "https://images.squarespace-cdn.com/content/v1/66e08bfd1da3f722f7960f5c/7d85f08c-f6be-4fc2-9f00-e56a080c8a72/ales-krivec-N-aTikX-b00-unsplash.jpg",
  },
  {
    title: "ГРУППОВАЯ ТЕРАПИЯ",
    description: [
      "онлайн психотерапия в малых группах по 5-6 человек, всего 8 сессий по 2 часа. проводится несколько раз в год, уточнить когда следующая группа можно в личных сообщениях",
      "ЦЕНА $280",
    ],
    cta: "НАЛИЧИЕ МЕСТ",
    image:
      "https://images.squarespace-cdn.com/content/v1/66e08bfd1da3f722f7960f5c/1410399b-0418-46b3-9ce4-a14058f75aab/bjorn-snelders-Cd3Ek7rNXSk-unsplash.jpg",
  },
];

export default function Home() {
  const [activeAccordion, setActiveAccordion] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  const totalSlides = services.length;

  const goToSlide = (index: number) => {
    const wrapped = (index + totalSlides) % totalSlides;
    setCurrentSlide(wrapped);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 8000);

    return () => clearInterval(timer);
  }, [totalSlides]);

  const marqueeText = useMemo(
    () => Array.from({ length: 8 }, () => "душа потемки, но я с фонариком..."),
    []
  );

  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="container header-grid">
          <div className="brand" aria-label="Asya Berezovskaya">asya berezovskaya</div>
          <nav className="nav" aria-label="Главная навигация">
            <a
              href="https://web.archive.org/web/20250212221932/https://www.asyaberezovskaya.net/blog"
              target="_blank"
              rel="noreferrer"
            >
              blog
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container hero-grid">
            <div className="hero-copy">
              <span className="hero-kicker">Ася Березовская</span>
              <div className="hero-heading">
                <h1 className="hero-title">psychotherapist</h1>
                <p className="hero-subtitle">интегративная психотерапия онлайн и офлайн</p>
              </div>
              <p className="hero-lead">
                Привет, мой друг. Меня зовут Ася и я психолог-психотерапевт. Живу в Нью-Йорке и
                работаю с людьми по всему миру, помогая им обрести СЕБЯ. Моя цель и призвание -
                сделать этот мир чуточку лучше через раскрытие в людях их собственного потенциала
                души. Я, как проводник в тонкий мир психики, нежно и бережно возьму тебя за руку и
                проведу по удивительному пути к твоей САМОСТИ, покажу тебя подлинного и аутентичного,
                твой свет и твою тень, сознательное и бессознательное. Позволь мне помочь тебе
                УЗНАТЬ СЕБЯ и изменить свою жизнь к лучшему.
              </p>
              <div className="hero-actions">
                <a
                  className="primary-button"
                  href="https://t.me/AsyaBerezovskaya"
                  target="_blank"
                  rel="noreferrer"
                >
                  ЗАПИСАТЬСЯ
                </a>
                <a
                  className="secondary-link"
                  href="https://web.archive.org/web/20250212221932/https://www.asyaberezovskaya.net/contact"
                  target="_blank"
                  rel="noreferrer"
                >
                  задать вопрос
                </a>
              </div>
              <dl className="hero-meta">
                <div>
                  <dt>Локация</dt>
                  <dd>Нью-Йорк · работа по всему миру</dd>
                </div>
                <div>
                  <dt>Формат</dt>
                  <dd>онлайн · очные встречи</dd>
                </div>
                <div>
                  <dt>Подход</dt>
                  <dd>интеграция схем-терапии, аналитической психологии и КПТ</dd>
                </div>
              </dl>
            </div>
            <figure className="hero-portrait">
              <div className="hero-image">
                <img
                  src="https://images.squarespace-cdn.com/content/v1/66e08bfd1da3f722f7960f5c/96c5192d-bcf4-47f1-8a81-3fd877f2a103/blog.jpg"
                  alt="Ася Березовская"
                />
                <div className="hero-overlay" aria-hidden />
              </div>
              <figcaption className="hero-caption">душа потемки, но я с фонариком...</figcaption>
            </figure>
          </div>
        </section>

        <section className="approach">
          <div className="container approach-grid">
            <div className="approach-copy">
              <span className="section-kicker">моя философия</span>
              <h2>
                <em>МОЙ ПОДХОД</em>
              </h2>
              <p>
                Я работаю в интегративном подходе, совмещая разные школы и направления
                психотерапии. Мне нравится иметь как можно больше инструментов и методик в моем
                арсенале, и подбирать под каждого клиента индивидуально те практики, которые будут
                работать именно для него. Ведь каждый человек — отдельный мир, со своими потайными
                комнатами в бессознательном. И чем больше разных ключей я имею, тем выше шанс открыть
                каждую дверь, даже ту, что казалось невозможно взломать…
              </p>
            </div>
            <div className="accordion" role="tablist">
              {accordionItems.map((item, index) => {
                const isOpen = activeAccordion === index;
                return (
                  <div key={item.title} className={`accordion-item ${isOpen ? "open" : ""}`}>
                    <button
                      type="button"
                      className="accordion-trigger"
                      aria-expanded={isOpen}
                      aria-controls={`accordion-panel-${index}`}
                      id={`accordion-trigger-${index}`}
                      onClick={() =>
                        setActiveAccordion((prev) => (prev === index ? -1 : index))
                      }
                    >
                      <span>{item.title}</span>
                      <span className="accordion-icon" aria-hidden>
                        <span />
                        <span />
                      </span>
                    </button>
                    <div
                      className="accordion-panel"
                      id={`accordion-panel-${index}`}
                      role="region"
                      aria-labelledby={`accordion-trigger-${index}`}
                    >
                      <p>{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="marquee" aria-label="манифест">
          <div className="marquee-inner">
            <div className="marquee-track">
              {marqueeText.map((text, index) => (
                <span key={`${text}-${index}`}>{text}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="services" aria-label="форматы работы">
          <div className="services-inner">
            {services.map((service, index) => {
              const isActive = currentSlide === index;
              return (
                <article
                  key={service.title}
                  className={`service-slide ${isActive ? "active" : ""}`}
                  style={{
                    backgroundImage: `linear-gradient(180deg, rgba(12, 12, 12, 0.6), rgba(12, 12, 12, 0.75)), url(${service.image})`,
                  }}
                  aria-hidden={!isActive}
                >
                  <div className="service-card">
                    <span className="service-index">0{index + 1}</span>
                    <h3>{service.title}</h3>
                    {service.description.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                    <a
                      className="service-button"
                      href="https://t.me/AsyaBerezovskaya"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {service.cta}
                    </a>
                  </div>
                </article>
              );
            })}
            <div className="service-controls" aria-label="Слайдер форматов работы">
              <button
                type="button"
                onClick={() => goToSlide(currentSlide - 1)}
                aria-label="Предыдущий формат"
              >
                ←
              </button>
              <div className="service-dots">
                {services.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    aria-label={`Перейти к слайду ${index + 1}`}
                    className={currentSlide === index ? "active" : ""}
                    onClick={() => goToSlide(index)}
                  />
                ))}
              </div>
              <button
                type="button"
                onClick={() => goToSlide(currentSlide + 1)}
                aria-label="Следующий формат"
              >
                →
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">ASYA BEREZOVSKAYA</footer>
    </div>
  );
}
