import profileImage from "../assets/michelle-lee.jpg"
import { useTranslation } from "react-i18next"

function About() {
  const { t, i18n } = useTranslation()

  const cvMap: Record<string, string> = {
    en: "/Michelle-Lee-CV-ENG.pdf",
    sv: "/Michelle-Lee-CV-SWE.pdf",
    ko: "/Michelle-Lee-CV-KOR.pdf"
  }

  const cvFile = cvMap[i18n.language] || cvMap.en

  return (
    <section className="section about">
      <div className="container">

        <h1 className="about__title">{t("about.title")}</h1>

        <div className="about__grid">

          <div className="about__image">
            <img src={profileImage} alt={t("about.photoAlt")} />
          </div>

          <div className="about__text">
            <h2>{t("about.greeting")}</h2>

            <p>{t("about.intro1")}</p>

            <p>{t("about.intro2")}</p>
          </div>

          <div className="about__side">
            <h3>{t("about.connect")}</h3>

            <div className="about__links">
              <ul>
                <li>
                  <a
                    href="https://linkedin.com/in/michelle-lee-a4a65a1a0"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/Ritsumel"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </li>
              </ul>
            </div>

            <div className="about__cv">
              <a href={cvFile} download className="cv-btn">
                ↓ {t("about.cv.download")}
              </a>
            </div>
          </div>

        </div>

        <div className="about__focus">
          <h2>{t("about.focus.title")}</h2>

          <div className="about__focus-grid">

            <div className="about__card">
              <h4>{t("about.focus.architecture.title")}</h4>
              <p>{t("about.focus.architecture.text")}</p>
            </div>

            <div className="about__card">
              <h4>{t("about.focus.auth.title")}</h4>
              <p>{t("about.focus.auth.text")}</p>
            </div>

            <div className="about__card">
              <h4>{t("about.focus.api.title")}</h4>
              <p>{t("about.focus.api.text")}</p>
            </div>

            <div className="about__card">
              <h4>{t("about.focus.ui.title")}</h4>
              <p>{t("about.focus.ui.text")}</p>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}

export default About