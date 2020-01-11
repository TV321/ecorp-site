import React, { Component } from 'react';
import './Testimonials.sass';

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import one from './one.png';
import two from './two.png';
import three from './three.png';


class Testimonials extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true
    };
    return (
        <div id="testimonials-wrapper">
         <div id="testimonials-header">
             <p>Cras ante urna, bibendum vitae velit sit amet, ultricies eleifend felis.
                  Duis nunc neque, convallis eu elit in, fringilla tempus ante. Maecenas blandit
                  imperdiet cursus. Aenean ut mauris tempus, finibus risus quis, commodo dolor.</p>
         </div>
         <div id="testimonials">
            <Slider {...settings}>
              <div>
                <div id="img-wrapper">
                    <img src={ three } alt="" />
                </div>
                <h3>elliot alderson</h3>
                <p>Suspendisse augue purus, viverra nec sem scelerisque, placerat maximus tortor.</p>
              </div>
              <div>
                  <div id="img-wrapper">
                      <img src={ two } alt="" />
                  </div>
                  <h3>tyrell wellick</h3>
                  <p>Maecenas et lectus nec enim tempor laoreet.</p>
              </div>
              <div>
                  <div id="img-wrapper">
                      <img src={ one } alt="" />
                  </div>
                  <h3>angela moss</h3>
                  <p>Praesent nec molestie massa, in convallis enim. Curabitur at sapien quam.</p>
              </div>
            </Slider>
        </div>
    </div>
    );
  }
}




export default Testimonials
