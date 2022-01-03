import React from "react"
import "./style.css"
import Zoom from "react-reveal/Zoom"
import GifFlor from "../images/flor.gif"

export default function video() {
  return (
    <div>
      <Zoom>
        <img className="flor-video" src={GifFlor} />
      </Zoom>
    </div>
  )
}
