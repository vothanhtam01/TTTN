import React from 'react';
import * as img__Arr from '../../img/index'
import { useTranslation } from 'react-i18next';
import {banner} from '../../database/datatext'

const FirstBanner = () => {

  const { t } = useTranslation();

  return (
    <React.Fragment>
      <section className="banner__first">
        <div className="container">
          <div className="row">
            {banner.map((item, index) =>
              <div className="banner__item" key={index}>
                <div className="banner__text">
                  <h3>{item.name}</h3>
                  <h4>{item.info}</h4>
                  <a href="#">{item.price}</a>
                  <p>{item.dec}
                    <span>{item.span}</span>
                  </p>
                </div>
                <div className="banner__img">
                  <img className="img" src={img__Arr.banner[index]} />
                </div>
                <div className="banner__sale">
                  <div className="banner__sale__circle">
                    <div className="banner__sale__circle__text">
                      <h3>{t('SALE')}</h3>
                      <h3>{item.sale}</h3>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}
export default FirstBanner


