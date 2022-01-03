import React from "react"
import FlorVideo from "../images/flor.mp4"
import "./style.css"

export default function video() {
  return (
    <div>
      <video autoplay loop playsinline class="flor-video">
        <source src={FlorVideo} type="video/mp4" />
      </video>
    </div>
  )
}
