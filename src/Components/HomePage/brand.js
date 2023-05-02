import React from 'react';
import * as img__Arr from '../../img/index'

const Brand = () => {
  return (
    <React.Fragment>
      <section className="brand">
        <div className="container">
          <div className="row">
            <div className="arrow left">
              <a href="#">
                <i className="fas fa-angle-left" />
              </a>
            </div>
            <div className="arrow right">
              <a href="#">
                <i className="fas fa-angle-right" />
              </a>
            </div>
            <div className="brand__img -only">
              <img className="img" src={img__Arr.brand1} />
            </div>
            <div className="brand__img -hide">
              <img className="img" src={img__Arr.brand2} />
            </div>
            <div className="brand__img -hide">
              <img className="img" src={img__Arr.brand3} />
            </div>
            <div className="brand__img -hide">
              <img className="img" src={img__Arr.brand4} />
            </div>
            <div className="brand__img -hide">
              <img className="img" src={img__Arr.brand5} />
            </div>

          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default Brand