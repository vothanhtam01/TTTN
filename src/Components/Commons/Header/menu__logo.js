import React from 'react'
import { Link } from 'react-router-dom'
import { logo } from '../../../img'
import { useTranslation } from 'react-i18next';

const MenuLogo = () => {

  const { t } = useTranslation();


  return (
    <React.Fragment>
      <section className="menu__logo">
        <div className="container">
          <div className="row">
            <div className="menu__img">
              <Link to="/">
                <img className="img" src={logo} />
              </Link>
            </div>
            <div className="menu__hotline">
              <h3>{t('HOTLINE')} :</h3>
              <p>{t('(04) 9500 9650- (04) 9500 8850')}</p>
            </div>
            <div className="menu__book">
              <h3>{t('header.order')}</h3>
              <p>{t('(04) 9500 9650- (04) 9500 8850')}</p>
            </div>
            <div className="menu__search">
              <input placeholder={t('header.search')} type="text" />
              <a href="#">
                <i className="fa fa-search" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}


export default MenuLogo