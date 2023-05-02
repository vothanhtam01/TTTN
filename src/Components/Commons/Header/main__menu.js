import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';



const MainMenu = (props) => {


  const { t } = useTranslation();
  const cart = useSelector(state => state.cart)
  const [length, setLength] = useState(0)
  const [display, setDispaly] = useState(false)

  useEffect(() => {
    if (cart !== null) {
      setLength(Object.keys(cart).length)
    }
    if (display) {
      document.querySelector('.menu__hide .menu__ul').style.display = 'block';
    }
    else {
      document.querySelector('.menu__hide .menu__ul').style.display = 'none';
    }
  })

  const displayMenu = () => {
    setDispaly(!display)
  }

  return (
    <React.Fragment>
      <section className="main__menu">
        <div className="container">
          <div className="row">
            <div className="menu__list">
              <div className="menu__ul">
                <ul>
                  <li><Link to="">{t('header.menu.1')}</Link></li>
                  <li><Link to="/gioithieu">{t('header.menu.2')}</Link></li>
                  <li><Link to="/list">{t('header.menu.3')}</Link></li>
                  <li><Link to="/error">{t('header.menu.4')}</Link></li>
                  <li><Link to="/error">{t('header.menu.5')}</Link></li>
                  <li><Link to="/lienhe">{t('header.menu.6')}</Link></li>
                </ul>
              </div>
            </div>
            <div className="menu__hide">
              <div className="nav__menu" onClick={displayMenu}>
                <div className="span__menu">
                  <span />
                  <span />
                  <span />
                </div>
              </div>
              <div className="menu__ul">
                <ul>
                  <li><a href="#">{t('header.menu.1')}</a></li>
                  <li><a href="#">{t('header.menu.2')}</a></li>
                  <li><Link to="/list">{t('header.menu.3')}</Link></li>
                  <li><a href="#">{t('header.menu.4')}</a></li>
                  <li><a href="#">{t('header.menu.5')}</a></li>
                  <li><a href="#">{t('header.menu.6')}</a></li>
                </ul>
              </div>
            </div>
            <div className="menu__basket">
              <div className="basket__count">
                <p>{length}</p>
              </div>
              <div className="basket__icon">
                <Link to="/cart">
                  <i className="fa fa-shopping-basket" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}


export default MainMenu