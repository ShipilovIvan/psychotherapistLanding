"use client";

const services = [
  {
    title: "Регулярная терапия",
    blurb:
      "Глубинная работа над длительными темами. Раз в неделю или две, продолжительность 60 минут.",
    note: "50 $ · онлайн и офлайн",
  },
  {
    title: "Экспресс-консультация",
    blurb:
      "Помощь в остром вопросе, когда важно быстро структурировать мысли и наметить план действий.",
    note: "70 $ · 90 минут",
  },
  {
    title: "Групповая терапия",
    blurb:
      "Погружение в малой группе, чтобы исследовать себя рядом с другими и почувствовать поддержку сообщества.",
    note: "Старт по набору · 8 встреч",
  },
];

const principles = [
  "Интегративный подход: схема-терапия, аналитическая психология, КПТ.",
  "Фокус на безопасности и устойчивых изменениях, а не быстрых решениях.",
  "Сессия — пространство, где можно говорить честно и быть услышанным.",
];

const faqs = [
  {
    question: "Как проходит первая встреча?",
    answer:
      "Мы знакомимся, обозначаем запрос и договариваемся о формате. Вы можете задать любые вопросы о процессе.",
  },
  {
    question: "Можно ли работать онлайн?",
    answer:
      "Да, я работаю с клиентами по всему миру через видеосвязь и обеспечиваю конфиденциальность консультаций.",
  },
  {
    question: "Что нужно для записи?",
    answer:
      "Оставьте заявку в мессенджере или по почте — я предложу доступные слоты и пришлю договор.",
  },
];

export default function Home() {
  return (
    <div className="page">
      <header className="site-header">
        <div className="container header-layout">
          <span className="logo" aria-label="Asya Berezovskaya">
            asya berezovskaya
          </span>
          <a
            className="header-cta"
            href="https://t.me/AsyaBerezovskaya"
            target="_blank"
            rel="noreferrer"
          >
            записаться
          </a>
        </div>
      </header>

      <main>
        <section className="hero" aria-labelledby="hero-title">
          <div className="container hero-layout">
            <div>
              <p className="hero-kicker">Ася Березовская · психотерапевт</p>
              <h1 id="hero-title">Интегративная терапия для жизни в согласии с собой</h1>
              <p className="hero-lead">
                Я помогаю людям мягко проходить сложные периоды, возвращать чувствительность к себе и
                находить устойчивость. Работаю с травмой, выгоранием, отношениями и поиском опоры в
                переменах.
              </p>
              <div className="hero-actions">
                <a
                  className="primary-button"
                  href="https://t.me/AsyaBerezovskaya"
                  target="_blank"
                  rel="noreferrer"
                >
                  записаться на консультацию
                </a>
                <a
                  className="secondary-link"
                  href="mailto:asya.berezovskaya.psych@gmail.com"
                >
                  задать вопрос
                </a>
              </div>
            </div>
            <figure className="hero-figure">
              <img
                src="https://images.squarespace-cdn.com/content/v1/66e08bfd1da3f722f7960f5c/96c5192d-bcf4-47f1-8a81-3fd877f2a103/blog.jpg"
                alt="Ася Березовская"
              />
              <figcaption>Нью-Йорк · работаю онлайн по всему миру</figcaption>
            </figure>
          </div>
        </section>

        <section className="section about" aria-labelledby="about-title">
          <div className="container two-column">
            <div>
              <span className="section-kicker">подход</span>
              <h2 id="about-title">О сессиях</h2>
              <p>
                Сессия — это безопасное пространство, где можно останавливаться, слушать себя и
                исследовать переживания. Мы двигаемся в вашем темпе, отмечаем прогресс и создаём новые
                опоры.
              </p>
            </div>
            <ul className="principles" aria-label="Основные принципы работы">
              {principles.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section services" aria-labelledby="services-title">
          <div className="container">
            <span className="section-kicker">форматы</span>
            <h2 id="services-title">Как мы можем работать</h2>
            <div className="card-grid">
              {services.map((service) => (
                <article key={service.title} className="card">
                  <h3>{service.title}</h3>
                  <p>{service.blurb}</p>
                  <p className="card-note">{service.note}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section quote" aria-label="Манифест">
          <div className="container">
            <blockquote>
              «Душа — это лабиринт, но я иду рядом с фонариком, чтобы мы вместе нашли дорогу наружу и
              увидели то, что давно хотелось осветить»
            </blockquote>
          </div>
        </section>

        <section className="section faq" aria-labelledby="faq-title">
          <div className="container two-column">
            <div>
              <span className="section-kicker">вопросы</span>
              <h2 id="faq-title">Часто спрашивают</h2>
              <p>
                Если вы не нашли ответ на свой вопрос, напишите мне. Я постараюсь ответить в течение
                суток и помогу выбрать удобный формат.
              </p>
            </div>
            <dl className="faq-list">
              {faqs.map((item) => (
                <div key={item.question} className="faq-item">
                  <dt>{item.question}</dt>
                  <dd>{item.answer}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="section contact" aria-labelledby="contact-title">
          <div className="container contact-box">
            <div>
              <span className="section-kicker">контакты</span>
              <h2 id="contact-title">Готовы начать?</h2>
              <p>
                Напишите мне в мессенджер или на почту. Расскажите пару слов о себе и о запросе — я
                предложу свободные окна и отправлю дальнейшие шаги.
              </p>
            </div>
            <div className="contact-actions">
              <a
                className="primary-button"
                href="https://t.me/AsyaBerezovskaya"
                target="_blank"
                rel="noreferrer"
              >
                написать в telegram
              </a>
              <a className="secondary-link" href="mailto:asya.berezovskaya.psych@gmail.com">
                asya.berezovskaya.psych@gmail.com
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-layout">
          <span>© {new Date().getFullYear()} Asya Berezovskaya</span>
          <a href="https://web.archive.org/web/20250212221932/https://www.asyaberezovskaya.net/" target="_blank" rel="noreferrer">
            архив оригинального сайта
          </a>
        </div>
      </footer>
    </div>
  );
}
