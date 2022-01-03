import React from "react"
import About from "../images/about.jpg"
import "./style.css"
import "animate.css"

import Fade from "react-reveal/Fade"

export default function about() {
  return (
    <div className="">
      <div className="about-me">
        <div className="about-me-info">
          <Fade left>
            <p className="about-me-text animate__animated animate__fadeInLeft">
              Soy Uruguaya, nací en Montevideo y vivo en Acapulco. Tras
              finalizar mis estudios, descubrí que mis dos pasiones la
              fotografía y los niños podían ir juntas. Desde entonces disfruto
              junto a familias de diferentes lugares, retratándolos y atesorando
              sus recuerdos.
            </p>
          </Fade>
          <Fade right>
            <img
              src={About}
              alt=""
              className="about-me-image animate__animated animate__fadeInRight"
            />
          </Fade>
        </div>
        <Fade left>
          <div className="z-50 heading-info animate__animated animate__fadeInLeft">
            <p className="sobre">SOBRE MÍ</p>
            <div>
              <h2 className="font-elgocReg name">FLORENCIA</h2>
              <h2 className="font-elgocReg name">FRANCO</h2>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  )
}
