import React, { useState, useEffect } from 'react';
import avatarImg from '../../../img/admin-ui.svg';
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next';
import { updateUser } from '../../../database/db'
import { formatter } from '../../mixin/mixin'

const UserForm = () => {

  const user = useSelector(state => state.user)
  const [User, setUser] = useState(user || Object)
  const { t } = useTranslation();

  useEffect(() => {
    setUser(user)
  }, [user])

  const handleChange = (e) => {
    const target = e.target;
    const { name, value } = target;
    setUser({ ...User, [name]: value });
  }

  const handleConfirm = () => {
    if (!User.name || !User.mail || !User.phone || !User.addrres || !User.username) {
      alert(t('register.warning.fill'))
    }
    else if (!checkPhone(User.phone)) {
      alert(t('register.warning.phone'))
    }
    else {
      update(User)
    }

  }
  const update = async (user) => {
    if (window.confirm(t('dashboard.warning.1'))) {
      await updateUser(user)
      alert(t('dashboard.warning.3'))
      window.location.reload();
    }
  }

  return (
    <React.Fragment>
      <div className="content-dashboard-profile">
        <div className="content-dashboard-profile-left">
          <div className="content-dashboard-profile-left__infor">
            <h1>{user.name || t('dashboard.form.1')}</h1>
            <p>{user.addrres}</p>
          </div>
          <div className="content-dashboard-profile-left__avatar"><img src={avatarImg} alt="a" /></div>
        </div>
        <div className="content-dashboard-profile-right">
          <div className="content-dashboard-profile-right__top">
            <h2>{t('dashboard.form.2')}</h2>
            <p>{t('dashboard.form.3')}</p>
          </div>
          <hr />
          <div className="content-dashboard-profile-right__content">
            <div className="input-container"><input type="text" required="required"
              value={User.name || ""} name="name" onChange={handleChange} /><label
              >{t('dashboard.form.4')}</label>
              <div className="bar"></div>
            </div>
            <div className="input-container"><input type="text" required="required"
              value={User.mail || ""} name="mail" onChange={handleChange} /><label
              >{t('dashboard.form.5')}</label>
              <div className="bar"></div>
            </div>
            <div className="input-container"><input type="text" required="required"
              value={User.phone || ""} name="phone" onChange={handleChange} /><label
              >{t('dashboard.form.6')}</label>
              <div className="bar"></div>
            </div>
            <div className="input-container"><input type="tex" required="required"
              value={User.addrres || ""} name="addrres" onChange={handleChange} /><label
              >{t('dashboard.form.7')}</label>
              <div className="bar"></div>
            </div>
            <div className="input-container"><input type="text" required="required"
              value={User.sumPro || ""} name="sumPro" onChange={e => e.preventDefault()} /><label
              >{t('dashboard.form.11')}</label>
              <div className="bar"></div>
            </div>
            <div className="input-container"><input type="text" required="required"
              value={formatter.format(User.sumPay) !== formatter.format(NaN) ? formatter.format(User.sumPay) : ""} name="sumPay" onChange={e => e.preventDefault()} /><label
              >{t('dashboard.form.12')}</label>
              <div className="bar"></div>
            </div>
          </div>
          <hr />
          <div className="content-dashboard-profile-right__bottom" onClick={handleConfirm}><button id="dis__button" disabled >{t('dashboard.form.10')}</button></div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default UserForm

const checkPhone = (phone) => {
  let b = true
  for (let index in phone) {
    let a = parseInt(phone[index])
    if (isNaN(a)) {
      b = false;
      break;
    }
  }
  return b
}