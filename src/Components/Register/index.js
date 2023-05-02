import React, { useEffect, useState } from 'react'
import { BreadCrum } from '../mixin/mixin'
import { useDispatch } from 'react-redux'
import { getData, RegisUser } from '../../database/db'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next';

const Register = ({ history }) => {

  const { t } = useTranslation();
  const dispatch = useDispatch()
  const [newUser, setNewUser] = useState(Object)

  useEffect(() => {
  }, [dispatch])


  const handleChange = (e) => {
    const target = e.target;
    const { name, value } = target;
    setNewUser({ ...newUser, [name]: value });
  }

  const handleRegis = async (e) => {  // ham dang ky
    e.preventDefault();
    const dataUser = await getData('user')
    const findUser = dataUser.find(v => v.username === newUser.username)

    if (!newUser.name || !newUser.mail || !newUser.phone || !newUser.addrres || !newUser.username || !newUser.password || !newUser.confirm) {
      alert(t('register.warning.fill'))
    }
    else if (!checkPhone(newUser.phone)) {
      alert(t('register.warning.phone'))
    }
    else if (newUser.password !== newUser.confirm) {
      alert(t('register.warning.confirmPass'))
    }
    else if (findUser) {// kiem tra tai khoan da ton tai chua
      alert(t('register.warning.accountExist'))
    }
    else {
      alert(t('register.warning.success'))//dang ki thanh cong      delete newUser.confirm
      newUser.id = dataUser[dataUser.length-1].id+1
      // newUser.id =uniqid()
      newUser.sumPro = 0
      newUser.sumPay = 0
      newUser.role = 1
      newUser.cart = []
      setNewUser(newUser)
      console.log(newUser)
      await RegisUser(newUser)
      sessionStorage.setItem('userData', JSON.stringify(newUser.username))
      window.location.pathname = ('/')
    }
   }

  return (
    <React.Fragment>
      <BreadCrum path="Đăng kí" />
      <section className="main__user">
        <div className="container">
          <div className="row">
            <form action="" className="form__regis">
              <h3>{t('register.title1')}</h3>
              <div className="form__info__item -first">
                <p>{t('register.name')}<span>{t(' *')}</span></p>
                <input type="text"
                  name="name"
                  value={newUser.name || ""}
                  onChange={handleChange}
                />
              </div>
              <div className="form__info__item">
                <p>{t('register.email')}<span>{t(' *')}</span></p>
                <input type="text"
                  name="mail"
                  value={newUser.mail || ""}
                  onChange={handleChange} />
              </div>
              <div className="form__info__item -first">
                <p>{t('register.phone')}<span>{t(' *')}</span></p>
                <input type="text"
                  name="phone"
                  value={newUser.phone || ""}
                  onChange={handleChange} />
              </div>
              <div className="form__info__item">
                <p>{t('register.address')}<span>{t(' *')}</span></p>
                <input type="text"
                  name="addrres"
                  value={newUser.addrres || ""}
                  onChange={handleChange} />
              </div>
              <div className="check-box__item">
                <input type="checkbox" />
                <p>{t('register.receiveInfo')}</p>
              </div>
              <h3>{t('register.title2')}</h3>
              <div className="form__info__item -first">
                <p>{t('login.username')}<span>{t(' *')}</span></p>
                <input type="text"
                  name="username"
                  value={newUser.username || ""}
                  onChange={handleChange} />
              </div>
              <div className="form__info__item -first">
                <p>{t('login.password')}<span>{t(' *')}</span></p>
                <input type="password"
                  name="password"
                  value={newUser.password || ""}
                  onChange={handleChange} />
              </div>
              <div className="form__info__item">
                <p>{t('register.confirm')}<span>{t(' *')}</span></p>
                <input type="password"
                  name="confirm"
                  value={newUser.confirm || ""}
                  onChange={handleChange} />
              </div>
              <div className="item__button">
                <Link to="/" className="-right">{t('QUAY LẠI')}</Link>
                <input className="-left" href="#" type="submit" value="ĐĂNG KÍ" onClick={handleRegis} /> 
              </div>
            </form>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}


export default Register

const checkPhone = (phone) => {
  let bool = true
  for (let index in phone) {
    let a = parseInt(phone[index])
    if (isNaN(a)) {
      bool = false;
      break;
    }
  }
  return bool
}