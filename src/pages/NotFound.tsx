import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"

function NotFound() {
  const { t } = useTranslation()

  return (
    <section className="section not-found">
      <div className="container not-found__content">
        <h1>{t("notFound.title")}</h1>

        <p>{t("notFound.text")}</p>

        <div className="not-found__links">
          <Link to="/">{t("notFound.home")}</Link>
          <Link to="/projects">{t("notFound.projects")}</Link>
        </div>
      </div>
    </section>
  )
}

export default NotFound