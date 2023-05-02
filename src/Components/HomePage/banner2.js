import React from 'react';
import * as img__Arr from '../../img/index'
import { useTranslation } from 'react-i18next';


const SecondBanner = () => {

  const { t } = useTranslation();

  return (
    <React.Fragment>
      <section className="banner__second">
        <div className="container">
          <div className="row">
            <div className="banner__img">
              <img className="img" src={img__Arr.banner3} />
            </div>
            <div className="banner__text">
              <h3>{t('banner.2')}</h3>
              <p>
                {t('banner.1')}
            </p>
              <div className="item__button">
                <a className="-left" href="#">{t('button.buyNow')}</a>
                <a className="-right" href="#">{t('button.detail')}</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default SecondBanner