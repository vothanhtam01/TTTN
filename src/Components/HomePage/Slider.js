import React from 'react';
import { slider1, slider2, slider3 } from '../../img/index'
import { slider_beside } from '../../database/datatext'

const Slider = () => {
  return (
    <React.Fragment>
      <section className="slider">
        <div className="container">
          <div className="row">
            <div className="slider__item">
              <div className="slider__content">
                <div className="slide__show">
                  <div className="slide__img">
                    <img className="img" src={slider1} />
                  </div>
                  <div className="slide__img">
                    <img className="img" src={slider2} />
                  </div>
                  <div className="slide__img">
                    <img className="img" src={slider3} />
                  </div>
                </div>
                <div className="slider__button">
                  <a href="#">
                    <span />
                  </a>
                  <a href="#">
                    <span className="-center" />
                  </a>
                  <a href="#">
                    <span />
                  </a>
                </div>
              </div>
            </div>
            <div className="slider__text" >
              {slider_beside.map((item, index) =>
                <div className="slider__content" key={index}>
                  <i className={item.icon} />
                  <div className="text__info">
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default Slider


