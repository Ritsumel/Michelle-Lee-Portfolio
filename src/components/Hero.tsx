import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"

function Hero() {
  const { t } = useTranslation()

  return (
    <section id="home" className="section hero">
      <div className="container hero__inner">
        <span className="hero__eyebrow">
          {t("home.title")}
        </span>

        <h1 className="hero__title">
          Michelle Lee
        </h1>

        <p className="hero__text">
          {t("home.subtitle")}
        </p>

        <div className="hero__buttons">
          <Link to="/projects" className="btn btn--primary">
            {t("home.viewProjects")}
          </Link>

          <Link to="/contact" className="btn btn--secondary">
            {t("home.contact")}
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Hero