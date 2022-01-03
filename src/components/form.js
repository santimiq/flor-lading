import React, { useState } from "react"
import axios from "axios"
import "./style.css"
import Fade from "react-reveal/Fade"

export default function Form() {
  const [serverState, setServerState] = useState({
    submitting: false,
    status: null,
  })
  const handleServerResponse = (ok, msg, form) => {
    setServerState({
      submitting: false,
      status: { ok, msg },
    })
    if (ok) {
      form.reset()
    }
  }
  const handleOnSubmit = e => {
    e.preventDefault()
    const form = e.target
    setServerState({ submitting: true })
    axios({
      method: "post",
      url: "https://getform.io/f/0579f1f0-5630-4da7-ab2f-2c3de40ecd5b",
      data: new FormData(form),
    })
      .then(r => {
        handleServerResponse(true, "Thanks!", form)
      })
      .catch(r => {
        handleServerResponse(false, r.response.data.error, form)
      })
  }
  return (
    <div className="contact-form-parent sec-divs animate__animated animate__fadeInUp">
      <Fade bottom>
        <h4 className="">Contáctame</h4>
        <div className="contact-form-container">
          <form
            className="contact-form"
            name="ask-question"
            method="POST"
            onSubmit={handleOnSubmit}
          >
            <div className="block-component">
              <label>Nombre: *</label>
              <input
                type="text"
                required
                placeholder="Tu nombre aquí"
                className="border-input"
                name="Nombre"
              />
            </div>

            <div className="block-component">
              <label>Número de Teléfono: *</label>
              <input
                type="tel"
                required
                placeholder="E.g 5555555555"
                className="border-input"
                name="Teléfono"
              />
            </div>

            <div className="block-component">
              <label>Email: *</label>
              <input
                type="Email"
                required
                placeholder="E.g myemail@email.com"
                className="border-input"
                name="email"
              />
            </div>

            <div className="block-component">
              <label>Tipo de fotos:</label>
              <select id="" className="border-input" name="Tipo de Fotos">
                <option value="Familiar">FAMILIAR</option>
                <option value="Embarazo">EMBARAZO</option>
                <option value="Retratos">RETRATOS</option>
                <option value="Pareja">PAREJA</option>
                <option value="Branding">BRANDING</option>
                <option value="Otro">OTRO</option>
              </select>
            </div>

            <div className="block-component">
              <label>Hay niños:</label>
              <input
                type="text"
                placeholder="Nombres y edades de los niños"
                className="border-input"
                name="Hay Niños"
              />
            </div>

            <div className="block-component">
              <label>Lugar:</label>
              <select name="Locación" id="" className="border-input">
                <option value="Acapulco">ACAPULCO</option>
                <option value="CDMX">CDMX</option>
                <option value="Uruguay">URUGUAY</option>
                <option value="Otro">OTRO</option>
              </select>
            </div>

            <div className="block-component">
              <label>Fecha aproximada para tus fotos:</label>
              <input
                type="text"
                placeholder="¿Cuando te gustaría hacer la sesión?"
                className="border-input"
                name="Fecha aproximada"
              />
            </div>

            <div className="block-component">
              <label>¿Cómo llegaste a mi?</label>
              <select
                name="Donde me encontraste"
                id=""
                className="border-input"
              >
                <option value="Instagram">INSTAGRAM</option>
                <option value="Recomendacion">RECOMENDACIÓN</option>
                <option value="Otro">OTROS</option>
              </select>
            </div>

            <div className="block-component">
              <label>Instagram:</label>
              <input
                type="text"
                placeholder="E.g @micuenta"
                className="border-input"
                name="Instagram"
              />
            </div>

            <div className="block-component">
              <label>Detalles:</label>
              <textarea
                className="border-input"
                name="detalles"
                placeholder="Me encantaría saber qué estás buscando para tus fotos. Cuantos más detalles mejor para que podamos crear algo increíble. Si es con niños, cuéntame sobre ellos."
              ></textarea>
            </div>
            <div className="block-component">
              <p className="importante">
                Importante: los datos de contacto como correo y celular serán
                utilizados únicamente para hacer llegar la propuesta y tu
                información no será compartida con terceros.
              </p>
            </div>
            <div className="submit">
              <button className="button-form" type="submit">
                Enviar
              </button>
            </div>
          </form>
        </div>
      </Fade>
    </div>
  )
}
