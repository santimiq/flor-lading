import React from "react"
import About from "../images/about.jpg"
import "./style.css"
import "animate.css"

export default function about() {
  return (
    <div className="sec-divs">
      <div class="about-me">
        <div class="about-me-info">
          <p class="about-me-text animate__animated animate__fadeInLeft">
            Soy Uruguaya, nací en Montevideo y vivo en Acapulco. Tras finalizar
            mis estudios, descubrí que mis dos pasiones la fotografía y los
            niños podían ir juntas. Desde entonces disfruto junto a familias de
            diferentes lugares, retratándolos y atesorando sus recuerdos.
          </p>
          <img
            src={About}
            alt=""
            class="about-me-image animate__animated animate__fadeInRight"
          />
        </div>
        <div class="z-50 heading-info animate__animated animate__fadeInLeft">
          <p class="sobre">SOBRE MÍ</p>
          <div>
            <h2 class="font-elgocReg name">FLORENCIA</h2>
            <h2 class="font-elgocReg name">FRANCO</h2>
          </div>
        </div>
      </div>
    </div>
  )
}
