import React, { Component } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "./style.css"
import img1 from "../images/0.jpg"
import img2 from "../images/1.jpg"
import img3 from "../images/2.jpg"
import img4 from "../images/4.jpg"
import img5 from "../images/5.jpg"
import img6 from "../images/6.jpg"
import img7 from "../images/8.jpg"
import img8 from "../images/9.jpg"
import img9 from "../images/10.jpg"
import img10 from "../images/11.jpg"
import img11 from "../images/12.jpg"
import img12 from "../images/13.jpg"
import img13 from "../images/14.jpg"
import Fade from "react-reveal/Fade"
export default class SimpleSlider extends Component {
  render() {
    const settings = {
      arrows: false,
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
    }
    return (
      <div className="parent-photo sec-divs ">
        <Fade bottom>
          <h4> Mi trabajo</h4>
          <Slider {...settings}>
            <div>
              <img src={img1} />
            </div>
            <div>
              <img src={img2} />
            </div>
            <div>
              <img src={img3} />
            </div>
            {/* <div>
              <img src={img4} />
            </div> */}
            <div>
              <img src={img5} />
            </div>
            <div>
              <img src={img6} />
            </div>
            <div>
              <img src={img7} />
            </div>
            <div>
              <img src={img8} />
            </div>
            <div>
              <img src={img9} />
            </div>
            <div>
              <img src={img10} />
            </div>
            <div>
              <img src={img11} />
            </div>
            <div>
              <img src={img12} />
            </div>
            <div>
              <img src={img13} />
            </div>
          </Slider>
        </Fade>
      </div>
    )
  }
}
