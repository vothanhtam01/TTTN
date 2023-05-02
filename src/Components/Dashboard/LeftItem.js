import React from 'react'
import avatarImg from '../../img/admin-ui.svg';
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";

const LeftItem = () => {

  const admin = JSON.parse(sessionStorage.getItem('userData')) || null;
  const { t } = useTranslation();
  const url = window.location.protocol + "//" + window.location.host;

  return (
    <div className="menu-dashboard">
      <div className="menu-dashboard-top">
        <div className="menu-dashboard-top__avatar"><img src={avatarImg} alt="avatar" /></div>
        <p className="menu-dashboard-top__name">{admin.name}</p>
      </div>
      <hr />
      <div className="menu-dashboard-content">
        <Link to="/admin/dashboard">
          <div className="menu-dashboard-content__item"><span><img src={`${url}/image/dashboard.svg`} alt="a" /></span>
            <p>{t('dashboard.menu.Dashboard')}</p>
          </div></Link>
        <Link to="/admin/users">
          <div className="menu-dashboard-content__item" ><span><img src={`${url}/image/users.svg`} alt="a" /></span>
            <p>{t('dashboard.menu.Users')}</p>
          </div></Link>
        <Link to="/admin/products">
          <div className="menu-dashboard-content__item"><span><img src={`${url}/image/products.svg`} alt="a" /></span>
            <p>{t('dashboard.menu.Products')}</p>
          </div>
        </Link>
        <Link to="/admin/carts">
          <div className="menu-dashboard-content__item"><span><img src={`${url}/image/carts.svg`}
            alt="a" /></span>
            <p>{t('dashboard.menu.Carts')}</p>
          </div></Link>
        <Link to="/admin/account">
          <div className="menu-dashboard-content__item" ><span><img src={`${url}/image/account.svg`} alt="a" /></span>
            <p>{t('dashboard.menu.Account')}</p>
          </div></Link>
      </div>
    </div>
  )
}

export default LeftItem