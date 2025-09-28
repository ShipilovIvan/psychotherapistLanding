"use client";

const marqueeItems = [
  "поддержка в эмиграции",
  "кризисы идентичности",
  "отношения и границы",
  "выгорание и восстановление",
  "работа с травмой",
  "женская идентичность",
];

const focusAreas = [
  "Интегративный подход: схема-терапия, психодинамика, КПТ и работа с телом.",
  "Работаю на русском и английском языках, онлайн и офлайн в Нью-Йорке.",
  "Помогаю наметить опоры, когда привычные сценарии больше не работают.",
];

const services = [
  {
    number: "01",
    title: "Регулярная терапия",
    description:
      "Еженедельные сессии по 60 минут для глубокой работы с повторяющимися паттернами, отношениями и травматическим опытом.",
    meta: "50 $ · онлайн или очно",
  },
  {
    number: "02",
    title: "Экспресс-консультация",
    description:
      "Одна или несколько встреч по 90 минут, чтобы структурировать запрос, увидеть ситуацию со стороны и найти первые шаги.",
    meta: "70 $ · 90 минут",
  },
  {
    number: "03",
    title: "Групповые процессы",
    description:
      "Закрытые группы на 6–8 человек для тех, кому важно чувствовать плечо рядом и проживать изменения не в одиночку.",
    meta: "набор по запросу",
  },
];

const faqs = [
  {
    question: "Как проходит первая встреча?",
    answer:
      "Мы знакомимся, обсуждаем запрос и договорённости: формат, частоту, оплату. Вы можете задать любые вопросы и проверить, комфортно ли вам со мной.",
  },
  {
    question: "С какими темами я работаю?",
    answer:
      "С тревогой, выгоранием, отношениями, самооценкой, сложностями после переезда, последствиями травматичного опыта. Если ваш запрос вне моей компетенции, я порекомендую коллег.",
  },
  {
    question: "Можно ли отменить или перенести сессию?",
    answer:
      "Отмену без оплаты можно сделать за 24 часа. Если переносите позже — оплата сохраняется за забронированное время.",
  },
];

export default function Home() {
  return (
    <div className="page-shell">
      <header className="page-header">
        <div className="wrap">
          <div className="brand">asya berezovskaya</div>
          <nav className="header-links" aria-label="Основные действия">
            <a
              className="header-link"
              href="https://t.me/AsyaBerezovskaya"
              target="_blank"
              rel="noreferrer"
            >
              записаться
            </a>
            <a className="header-link" href="mailto:asya.berezovskaya.psych@gmail.com">
              email
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero-block" aria-labelledby="hero-title">
          <div className="wrap hero-layout">
            <div className="hero-copy">
              <p className="hero-kicker">Психотерапевт · Нью-Йорк · онлайн по всему миру</p>
              <h1 id="hero-title">Пространство, где можно дышать полной грудью</h1>
              <p className="hero-lead">
                Меня зовут Ася Березовская. Я поддерживаю людей в кризисах, помогаю находить новые опоры и
                возвращать чувствительность к себе. Работаю с темами отношений, границ, выгорания, травмы и
                адаптации к переменам.
              </p>
              <div className="hero-meta">
                <span>12 лет практики</span>
                <span>русский · английский</span>
                <span>интегративный подход</span>
              </div>
              <div className="hero-actions">
                <a
                  className="button-primary"
                  href="https://t.me/AsyaBerezovskaya"
                  target="_blank"
                  rel="noreferrer"
                >
                  записаться на консультацию
                </a>
                <a className="button-secondary" href="mailto:asya.berezovskaya.psych@gmail.com">
                  задать вопрос
                </a>
              </div>
            </div>
            <figure className="hero-figure">
              <img
                src="https://images.squarespace-cdn.com/content/v1/66e08bfd1da3f722f7960f5c/96c5192d-bcf4-47f1-8a81-3fd877f2a103/blog.jpg"
                alt="Ася Березовская"
              />
              <figcaption>Нью-Йорк · очно и онлайн</figcaption>
            </figure>
          </div>
        </section>

        <section className="marquee" aria-label="Темы, с которыми я работаю">
          <div className="marquee-track" role="presentation">
            {[...marqueeItems, ...marqueeItems].map((item, index) => (
              <span className="marquee-item" key={`${item}-${index}`}>
                {item}
              </span>
            ))}
          </div>
        </section>

        <section className="intro" aria-labelledby="intro-title">
          <div className="wrap intro-layout">
            <div>
              <span className="section-label">подход</span>
              <h2 id="intro-title">О чём наши сессии</h2>
              <p>
                На встречах мы создаём место, где можно говорить честно, проживать чувства и пробовать новые
                стратегии. Я аккуратно подсвечиваю паттерны, предлагаю практики и поддерживаю, когда становится
                сложнее.
              </p>
            </div>
            <ul className="focus-list" aria-label="Фокус работы">
              {focusAreas.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="services" aria-labelledby="services-title">
          <div className="wrap">
            <span className="section-label">форматы</span>
            <h2 id="services-title">Выбирайте комфортный формат</h2>
            <div className="services-slider" role="list">
              {services.map((service) => (
                <article key={service.title} className="service-card" role="listitem">
                  <div className="service-number">{service.number}</div>
                  <div className="service-body">
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                    <p className="service-meta">{service.meta}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="quote-block" aria-label="Цитата">
          <div className="wrap">
            <blockquote>
              «Душа — это лабиринт. Я иду рядом, чтобы мы нашли светлые комнаты, где вы сможете обосноваться и
              почувствовать себя дома.»
            </blockquote>
          </div>
        </section>

        <section className="faq" aria-labelledby="faq-title">
          <div className="wrap faq-layout">
            <div>
              <span className="section-label">вопросы</span>
              <h2 id="faq-title">Часто спрашивают</h2>
              <p>
                Если вы не нашли ответ, напишите мне в мессенджер или по почте — я отвечу в течение суток и
                помогу подобрать формат.
              </p>
            </div>
            <div className="faq-list" role="list">
              {faqs.map((item) => (
                <details key={item.question} className="faq-item">
                  <summary>{item.question}</summary>
                  <p>{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="contact" aria-labelledby="contact-title">
          <div className="wrap contact-card">
            <div>
              <span className="section-label">контакты</span>
              <h2 id="contact-title">Готовы начать?</h2>
              <p>
                Расскажите пару слов о себе и запросе. Я предложу свободные слоты и пришлю договор. Работаю с
                взрослыми индивидуально и в группах.
              </p>
            </div>
            <div className="contact-actions">
              <a
                className="button-primary"
                href="https://t.me/AsyaBerezovskaya"
                target="_blank"
                rel="noreferrer"
              >
                написать в telegram
              </a>
              <a className="contact-email" href="mailto:asya.berezovskaya.psych@gmail.com">
                asya.berezovskaya.psych@gmail.com
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="page-footer">
        <div className="wrap footer-layout">
          <span>© {new Date().getFullYear()} Asya Berezovskaya</span>
          <a
            href="https://web.archive.org/web/20250212221932/https://www.asyaberezovskaya.net/"
            target="_blank"
            rel="noreferrer"
          >
            оригинальный сайт
          </a>
        </div>
      </footer>
    </div>
  );
}
