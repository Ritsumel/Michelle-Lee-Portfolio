import { useRef, useState } from "react"
import emailjs from "@emailjs/browser"
import { useTranslation } from "react-i18next"

function Contact() {
  const { t } = useTranslation()

  const formRef = useRef<HTMLFormElement>(null)

  const [status, setStatus] = useState<{
    type: "success" | "error" | null
    message: string
  }>({
    type: null,
    message: ""
  })

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault()

    if (!formRef.current) return

    emailjs
      .sendForm(
        "service_ar1q0eb",
        "template_tcize5i",
        formRef.current,
        "ehraV0AeJvFEOpoCf"
      )
      .then(
        () => {
          setStatus({
            type: "success",
            message: t("contact.success")
          })
          formRef.current?.reset()
        },
        () => {
          setStatus({
            type: "error",
            message: t("contact.error")
          })
        }
      )
  }

  return (
    <section className="section contact">
      <div className="container">

        <h1 className="contact__title">{t("contact.title")}</h1>

        <form ref={formRef} onSubmit={sendEmail} className="contact__form">

          <div className="contact__field">
            <label>{t("contact.name")}</label>
            <input 
            type="text" 
            name="user_name" 
            placeholder={t("contact.namePlaceholder")}
            required />
          </div>

          <div className="contact__field">
            <label>{t("contact.email")}</label>
            <input 
            type="email" 
            name="user_email" 
            placeholder={t("contact.emailPlaceholder")}
            required />
          </div>

          <div className="contact__field">
            <label>{t("contact.message")}</label>
            <textarea 
            name="message" 
            rows={5} 
            placeholder={t("contact.messagePlaceholder")}
            required />
          </div>

          <button type="submit" className="btn btn--primary">
            {t("contact.send")}
          </button>

          {status.type && (
            <p className={`contact__status contact__status--${status.type}`}>
              {status.message}
            </p>
          )}

        </form>

      </div>
    </section>
  )
}

export default Contact