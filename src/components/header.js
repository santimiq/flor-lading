import * as React from "react"
import "./style.css"
import Zoom from "react-reveal/Zoom"

import FlorLogo from "../images/logo.png"

const Header = () => (
  <div className="image-logo ">
    <Zoom>
      <img src={FlorLogo} />
    </Zoom>
  </div>
)

export default Header
