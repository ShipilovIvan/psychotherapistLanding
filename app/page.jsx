"use client";

const marqueeItems = [
  "эмиграция и адаптация",
  "кризисы идентичности",
  "отношения и границы",
  "выгорание и восстановление",
  "работа с травмой",
  "самосострадание",
];

const focusPoints = [
  "Интегративный подход: схема-терапия, психодинамика, КПТ, элементы травматерапии и работа с телом.",
  "Работаю с взрослыми людьми на русском и английском языках. Сессии проходят онлайн и очно в Нью-Йорке.",
  "Помогаю возвращать чувствительность к себе, выстраивать опоры и замечать жизненную энергию в ежедневных практиках.",
];

const approachColumns = [
  {
    title: "Безопасное пространство",
    description:
      "Вы приходите с вашим опытом, темпом и ожиданиями. Вместе мы создаём атмосферу, где можно расслабиться, быть честными и постепенно двигаться вглубь.",
  },
  {
    title: "Осознанные изменения",
    description:
      "Мы ищем устойчивые решения: замечаем паттерны, выстраиваем новые реакции, пробуем опираться на тело и эмоции, чтобы изменения оставались с вами.",
  },
  {
    title: "Сотрудничество",
    description:
      "Я делюсь наблюдениями, знаниями и практиками, но ключевые решения всегда принимаете вы. Моя задача — быть рядом и поддерживать процесс.",
  },
];

const services = [
  {
    number: "01",
    title: "Регулярная терапия",
    description:
      "Еженедельные сессии по 60 минут для глубокой работы с повторяющимися сценариями, отношениями и последствиями травматического опыта.",
    meta: "50 $ · онлайн или очно",
  },
  {
    number: "02",
    title: "Экспресс-консультация",
    description:
      "Одна или несколько встреч по 90 минут, когда нужно поддержать себя в точке кризиса, прояснить запрос и увидеть первые шаги.",
    meta: "70 $ · 90 минут",
  },
  {
    number: "03",
    title: "Групповые процессы",
    description:
      "Закрытые группы на 6–8 человек. Мы исследуем важные темы в безопасной атмосфере, учимся быть в контакте с собой и другими.",
    meta: "набор по запросу",
  },
];

const faqs = [
  {
    question: "Как проходит первая встреча?",
    answer:
      "Мы знакомимся, обсуждаем запрос и договорённости: формат, частоту, оплату. Вы можете задать любые вопросы и почувствовать, комфортно ли вам продолжать.",
  },
  {
    question: "С какими темами вы работаете?",
    answer:
      "С тревогой, выгоранием, границами, самооценкой, трудностями в отношениях, переживаниями после переезда и травматичным опытом. Если тема вне моей компетенции — предложу коллег.",
  },
  {
    question: "Как отменить или перенести сессию?",
    answer:
      "Отмену без оплаты можно сделать за 24 часа до встречи. При переносе позже этого срока стоимость сессии сохраняется, потому что время было забронировано под вас.",
  },
  {
    question: "Можно ли оплатить сессию из другой страны?",
    answer:
      "Да. Принимаю оплату картой США, переводы Zelle, PayPal и европейские банковские переводы. По запросу выставляю инвойс.",
  },
];

export default function Home() {
  return (
    <div className="page-shell">
      <header className="page-header">
        <div className="wrap header-wrap">
          <div className="brand" aria-label="asya berezovskaya home">
            asya berezovskaya
          </div>
          <nav className="header-links" aria-label="Основные контакты">
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
                Меня зовут Ася Березовская. Я поддерживаю людей в кризисах, помогаю замечать новые опоры и
                возвращать контакт с чувствами. Работаю с темами отношений, границ, выгорания, травмы и адаптации к
                переменам.
              </p>
              <dl className="hero-meta">
                <div>
                  <dt>опыт</dt>
                  <dd>12 лет практики</dd>
                </div>
                <div>
                  <dt>языки</dt>
                  <dd>русский · английский</dd>
                </div>
                <div>
                  <dt>подход</dt>
                  <dd>интегративный</dd>
                </div>
              </dl>
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
              <div className="portrait-frame">
                <img
                  src="https://images.squarespace-cdn.com/content/v1/66e08bfd1da3f722f7960f5c/96c5192d-bcf4-47f1-8a81-3fd877f2a103/blog.jpg"
                  alt="Ася Березовская"
                />
              </div>
              <figcaption>Нью-Йорк · очно и онлайн</figcaption>
            </figure>
          </div>
        </section>

        <section className="marquee" aria-label="Темы, с которыми работаем">
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
                На встречах мы бережно исследуем опыт, эмоции и тело. Смотрим, какие стратегии больше не работают и
                что поможет вам чувствовать устойчивость. Поддерживаю, когда страшно и когда что-то меняется.
              </p>
            </div>
            <ul className="focus-list" aria-label="Фокус работы">
              {focusPoints.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="approach" aria-label="Как мы работаем">
          <div className="wrap">
            <span className="section-label">формула</span>
            <h2>Что помогает удерживать изменения</h2>
            <div className="approach-grid" role="list">
              {approachColumns.map((item) => (
                <article key={item.title} className="approach-card" role="listitem">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="services" aria-labelledby="services-title">
          <div className="wrap">
            <span className="section-label">форматы</span>
            <div className="services-heading">
              <h2 id="services-title">Выберите комфортный формат</h2>
              <p>
                Можно комбинировать форматы: начать с экспресс-консультации, перейти в регулярную терапию или присоединиться к
                группе. Напишите — подскажу, что подойдёт именно вам.
              </p>
            </div>
            <div className="services-slider" role="list">
              {services.map((service) => (
                <article key={service.number} className="service-card" role="listitem">
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
              «Душа — это лабиринт. Я иду рядом, чтобы мы нашли светлые комнаты, где можно обосноваться и почувствовать себя дома.»
            </blockquote>
          </div>
        </section>

        <section className="bio" aria-labelledby="bio-title">
          <div className="wrap bio-layout">
            <div>
              <span className="section-label">обо мне</span>
              <h2 id="bio-title">Ася Березовская</h2>
            </div>
            <div>
              <p>
                Сертифицированный психотерапевт, выпускница Нью-Йоркского института психотерапии. 12 лет практики, сотни часов
                личной терапии и супервизий. Регулярно прохожу повышение квалификации в Европе и США.
              </p>
              <p>
                Мой опыт включает работу с людьми, переживающими эмиграцию, выгорание, семейные кризисы, травматические события и
                поиск своей идентичности. В терапии мы двигаемся в вашем темпе, держим фокус на теле и чувствах, учимся заботиться
                о себе и строить отношения, в которых можно опираться.
              </p>
            </div>
          </div>
        </section>

        <section className="faq" aria-labelledby="faq-title">
          <div className="wrap faq-layout">
            <div>
              <span className="section-label">вопросы</span>
              <h2 id="faq-title">Часто спрашивают</h2>
              <p>
                Если не нашли ответ, напишите в телеграм или по почте — я отвечу в течение суток и помогу подобрать формат работы.
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
                Расскажите пару слов о себе и запросе. Я предложу свободные слоты и пришлю договор. Работаю с взрослыми
                индивидуально и в группах.
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
