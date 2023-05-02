import React from 'react'
import { useTranslation } from 'react-i18next';

const Error = () => {

  const { t } = useTranslation();
  const url = window.location.protocol + "//" + window.location.host;

  return (
    <section className="error__main">
      <div className="container">
        <div className="row">
          <div className="error__text">
            <h1>{t('error.1')}</h1>
            <h4>{t('error.2')}</h4>
            <h4>{t('error.3')}</h4>
            <div className="item__button">
              <a className="-right" href="/">{t('header.menu.1')}</a>
            </div>
          </div>
          <div className="error_img">
            <img className="img" src={`${url}/image/error.jpg`} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Error