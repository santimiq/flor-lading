import React, { useState } from "react"
import axios from "axios"
import "./style.css"

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
    <div class="contact-form-parent sec-divs animate__animated animate__fadeInUp">
      <h4 class="">Contáctame</h4>
      <div class="contact-form-container">
        <form
          class="contact-form"
          name="ask-question"
          method="POST"
          onSubmit={handleOnSubmit}
        >
          <div class="block-component">
            <label>Nombre: *</label>
            <input
              type="text"
              required
              placeholder="Tu nombre aquí"
              class="border-input"
              name="name"
            />
          </div>

          <div class="block-component">
            <label>Número de Teléfono: *</label>
            <input
              type="tel"
              required
              placeholder="E.g 5555555555"
              class="border-input"
              name="tel"
            />
          </div>

          <div class="block-component">
            <label>Email: *</label>
            <input
              type="email"
              required
              placeholder="E.g myemail@email.com"
              class="border-input"
              name="email"
            />
          </div>

          <div class="block-component">
            <label>Tipo de fotos:</label>
            <select id="" class="border-input" name="fotos">
              <option value="Familiar">FAMILIAR</option>
              <option value="Embarazo">EMBARAZO</option>
              <option value="Retratos">RETRATOS</option>
              <option value="Pareja">PAREJA</option>
              <option value="Branding">BRANDING</option>
              <option value="Otro">OTRO</option>
            </select>
          </div>

          <div class="block-component">
            <label>Hay niños:</label>
            <input
              type="text"
              placeholder="Nombres y edades de los niños"
              class="border-input"
              name="ninos"
            />
          </div>

          <div class="block-component">
            <label>Lugar:</label>
            <select name="lugar" id="" class="border-input">
              <option value="Acapulco">ACAPULCO</option>
              <option value="CDMX">CDMX</option>
              <option value="Uruguay">URUGUAY</option>
              <option value="Otro">OTRO</option>
            </select>
          </div>

          <div class="block-component">
            <label>Fecha aproximada para tus fotos:</label>
            <input
              type="text"
              placeholder="Escribe la fecha aproximada para tus fotos"
              class="border-input"
              name="fecha"
            />
          </div>

          <div class="block-component">
            <label>¿Cómo llegaste a mi?</label>
            <select name="llegaste" id="" class="border-input">
              <option value="Instagram">INSTAGRAM</option>
              <option value="Recomendacion">RECOMENDACIÓN</option>
              <option value="Otro">OTROS</option>
            </select>
          </div>

          <div class="block-component">
            <label>Instagram:</label>
            <input
              type="text"
              placeholder="E.g @micuenta"
              class="border-input"
              name="instagram"
            />
          </div>

          <div class="block-component">
            <label>Detalles:</label>
            <textarea
              class="border-input"
              name="detalles"
              placeholder="Me encantaría saber qué estás buscando para tus fotos. Cuantos más detalles mejor para que podamos crear algo increíble. Si es con niños, cuéntame sobre ellos."
            ></textarea>
          </div>
          <div class="block-component">
            <p class="importante">
              Importante: los datos de contacto como correo y celular serán
              utilizados únicamente para hacer llegar la propuesta y tu
              información no será compartida con terceros.
            </p>
          </div>
          <div class="submit">
            <button class="button-form" type="submit">
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
