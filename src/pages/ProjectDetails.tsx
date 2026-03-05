import { useParams, Link, useSearchParams } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { projects } from "../data/projects"
import type { Project } from "../data/projects"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"

function ProjectDetails() {
  const { t } = useTranslation()
  const { slug } = useParams()
  const project: Project | undefined = projects.find(p => p.slug === slug)
  const [isTouchDevice, setIsTouchDevice] = useState(false)
  const [slideDirection, setSlideDirection] = useState(0)
  const [searchParams, setSearchParams] = useSearchParams()

  if (!project) {
    return (
      <section className="section not-found">
        <div className="container not-found__content">
          <h1>{t("projectNotFound.title")}</h1>

          <p>{t("projectNotFound.text")}</p>

          <div className="not-found__links">
            <Link to="/projects">{t("projectNotFound.projects")}</Link>
            <Link to="/">{t("projectNotFound.home")}</Link>
          </div>
        </div>
      </section>
    )
  }

  const initialIndex = searchParams.get("img")
  const [activeIndex, setActiveIndex] = useState<number | null>(() => {
    if (initialIndex === null) return null

    const index = Number(initialIndex)

    if (Number.isNaN(index) || index < 0 || index >= project.screenshots.length) {
      return null
    }

    return index
  })

  const total = project.screenshots.length

  const goNext = () => {
    if (activeIndex === null) return

    setSlideDirection(1)

    const next = (activeIndex + 1) % total
    setActiveIndex(next)
    setSearchParams({ img: String(next) })
  }

  const goPrev = () => {
    if (activeIndex === null) return

    setSlideDirection(-1)

    const prev = (activeIndex - 1 + total) % total
    setActiveIndex(prev)
    setSearchParams({ img: String(prev) })
  }

  useEffect(() => {
    if (activeIndex === null) return

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveIndex(null)
        setSearchParams({})
      }
      if (e.key === "ArrowRight") goNext()
      if (e.key === "ArrowLeft") goPrev()
    }

    window.addEventListener("keydown", handleKey)
    return () => window.removeEventListener("keydown", handleKey)
  }, [activeIndex, goNext, goPrev, setSearchParams])

  useEffect(() => {
    if (activeIndex !== null) {
      document.body.style.overflow = "hidden"
      document.documentElement.style.scrollbarGutter = "auto"
    } else {
      document.body.style.overflow = ""
      document.documentElement.style.scrollbarGutter = ""
    }

    return () => {
      document.body.style.overflow = ""
      document.documentElement.style.scrollbarGutter = ""
    }
  }, [activeIndex])

  useEffect(() => {
    const mq = window.matchMedia("(pointer: coarse)")
    setIsTouchDevice(mq.matches)

    const handler = (e: MediaQueryListEvent) => setIsTouchDevice(e.matches)
    mq.addEventListener("change", handler)

    return () => mq.removeEventListener("change", handler)
  }, [])

  return (
    <>
      <section className="section project-details">
        <div className="container">

          <div className="project-details__header">

            <div className="project-details__header-left">
              <h1>{project.title}</h1>

              <p className="project-details__meta">
                {project.type === "group"
                  ? t("projects.groupProject", { count: (project.members?.length ?? 0) + 1 })
                  : t("projects.soloProject")}
              </p>

              <p className="project-details__subtitle">
                {t(project.shortDescription)}
              </p>
            </div>

            <div className="project-details__header-right">

              <div className="project-details__links">
                {project.live && (
                  <a href={project.live} target="_blank" className="btn btn--primary">
                    {t("projects.liveDemo")}
                  </a>
                )}
                {project.github && (
                  <a href={project.github} target="_blank" className="btn btn--secondary">
                    {t("projects.github")}
                  </a>
                )}
              </div>

              <div className="project-details__tech">
                {project.tech.map(tag => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>

            </div>

          </div>

          <div className="project-details__content">

            <div className="project-details__about">
              <h2>{t("projects.about")}</h2>
              <p>{t(project.longDescription)}</p>
            </div>

            <div className="project-details__features">
              <h2>{t("projects.features")}</h2>

              <div className="project-details__feature-grid">
                {project.features.map(section => (
                  <div key={section.title} className="project-details__feature-section">
                    {section.title && <h3>{t(section.title)}</h3>}
                    <ul>
                      {section.items.map(item => (
                        <li key={item}>{t(item)}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {project.type === "group" && (
              <>
                <div className="project-details__role">
                  <h2>{t("projects.role")}</h2>
                  {project.role && <p>{t(project.role)}</p>}
                </div>

                <div className="project-details__workflow">
                  <h2>{t("projects.workflow")}</h2>
                  {project.workflow && (
                    <ul>
                      {project.workflow.map(item => (
                        <li key={item}>{t(item)}</li>
                      ))}
                    </ul>
                  )}

                  {project.members && (
                    <div className="project-details__members">
                      <h3>{t("projects.members")}</h3>
                      <ul>
                        {project.members.map(member => (
                          <li key={member.name}>
                            <a href={member.github} target="_blank">
                              {member.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </>
            )}

          </div>

          <h2 className="screenshot-title">{t("projects.screenshots")}</h2>
          <div className="project-details__screenshots">
            {project.screenshots.map((shot, i) => (
              <div
                key={i}
                className="project-details__shot"
                onClick={() => {
                  setSlideDirection(0)
                  setActiveIndex(i)
                  setSearchParams({ img: String(i) })
                }}
              >
                <img
                  src={shot.src}
                  alt={`${project.title} screenshot ${i + 1}`}
                />
              </div>
            ))}
          </div>

          <Link to="/projects" className="project-details__back">
            {t("projects.back")}
          </Link>

        </div>
      </section>

      {activeIndex !== null && (
        <div
          className="lightbox"
          onClick={() => {
            setActiveIndex(null)
            setSearchParams({})
          }}
        >

          <div
            className="lightbox__content"
            onClick={(e) => e.stopPropagation()}
          >

            <span className="lightbox__counter">
              {activeIndex + 1} / {total}
            </span>

            <motion.div
              key={activeIndex}
              className="lightbox__image-wrapper"
              drag={isTouchDevice ? "x" : false}
              dragElastic={isTouchDevice ? 0.35 : 0}
              dragConstraints={isTouchDevice ? { left: 0, right: 0 } : undefined}
              initial={
                isTouchDevice && slideDirection !== 0
                  ? { x: slideDirection > 0 ? 200 : -200, opacity: 0 }
                  : { opacity: 0 }
              }

              animate={
                isTouchDevice && slideDirection !== 0
                  ? { x: 0, opacity: 1 }
                  : { opacity: 1 }
              }

              exit={
                isTouchDevice && slideDirection !== 0
                  ? { x: slideDirection > 0 ? -200 : 200, opacity: 0 }
                  : { opacity: 0 }
              }
              transition={{ duration: 0.3 }}
              onDragEnd={
                isTouchDevice
                  ? (_, info) => {
                      if (info.offset.x < -120) goNext()
                      if (info.offset.x > 120) goPrev()
                    }
                  : undefined
              }
            >
              <button
                className="lightbox__close"
                onClick={(e) => {
                  e.stopPropagation()
                  setActiveIndex(null)
                  setSearchParams({})
                }}
              >
                ×
              </button>

              <img
                className="lightbox__image"
                src={project.screenshots[activeIndex].src}
                alt="Expanded screenshot"
              />
            </motion.div>

            {project.screenshots[activeIndex].caption && (
              <p className="lightbox__caption">
                {t(project.screenshots[activeIndex].caption)}
              </p>
            )}
          </div>

          <button
            className="lightbox__arrow lightbox__arrow--left"
            onClick={(e) => {
              e.stopPropagation()
              goPrev()
            }}
          >
            ‹
          </button>

          <button
            className="lightbox__arrow lightbox__arrow--right"
            onClick={(e) => {
              e.stopPropagation()
              goNext()
            }}
          >
            ›
          </button>
        </div>
      )}
    </>
  )
}

export default ProjectDetails