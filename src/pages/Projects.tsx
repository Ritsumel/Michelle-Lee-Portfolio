import { projects } from "../data/projects"
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"

function Projects() {
  const { t } = useTranslation()

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <h2 className="section-title">{t("nav.projects")}</h2>

        <div className="projects__grid">
          {projects.map((project) => (
            <div key={project.slug} className="project-card">
              <div className="project-card__image">
                <img src={project.image} alt={`${project.title} preview`} />
              </div>

              <div className="project-card__content">
                <div className="project-card__top">
                  <h3>{project.title}</h3>
                  <p>{t(project.shortDescription)}</p>
                </div>

                <div className="project-card__bottom">
                  <div className="project-card__tags">
                    {project.tech.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>

                  <Link to={`/projects/${project.slug}`} className="btn btn--primary">
                    {t("projects.viewProject")}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Projects