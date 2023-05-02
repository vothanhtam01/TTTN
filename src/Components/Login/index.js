import React, { useEffect, useState } from 'react'
import { BreadCrum } from '../mixin/mixin'
import { getData } from '../../database/db'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next';


const Login = () => {

  const { t } = useTranslation();
  const dispatch = useDispatch()
  const [user, setUser] = useState(Object) // khoi tao state user la 1 cai object 

  useEffect(() => {

  }, [dispatch])

  const handleLogin = (e) => {
    e.preventDefault();
    const GetData = async () => {
      const dataUser = await getData('user') // get du lieu tu json
      const findUser = dataUser.find(v => v.username === user.username)
      
      if (!findUser) { // kiem tra co trong db ko
        alert(t('login.warning.empty'))
       
      }
      else if (findUser.role === 0 && findUser.password === user.password) { //
        alert(t('admin'))
        sessionStorage.setItem('userData', JSON.stringify(findUser.username)) // luu vao session storage
        window.location.pathname = "/admin/dashboard" // router qa page admin
      }
      else if (findUser.role === 1 && findUser.password === user.password) {
        alert(t('login.warning.success'))
        sessionStorage.setItem('userData', JSON.stringify(findUser.username))
        window.location.pathname = ('/')
      }
      else {
        alert(t('login.warning.wrong'))
      }

    };
    GetData()

  }

  const handleChange = (e) => { // ham nhap user name va password
    const target = e.target;
    const { name, value } = target;
    setUser({ ...user, [name]: value });
  }

  return (
    <React.Fragment>
      <BreadCrum path="Đăng nhập" />
      <section className="main__user">
        <div className="container">
          <div className="row">
            <form action="" className="login__form" >
              <h3>{t('login.title')}</h3>
              <div className="check-box__login">
                <div className="form__info__item -first -one">
                  <p>
                    {t('login.username')}
                    <span>{t(' *')}</span>
                  </p>
                  <input type="text" style={{ padding: '1rem' }}
                    name="username"
                    value={user.username || ""}
                    onChange={handleChange} />
                </div>
                <div className="form__info__item -one">
                  <p>
                    {t('login.password')}
                    <span>{t(' *')}</span>
                  </p>
                  <input type="password" style={{ padding: '1rem' }}
                    name="password"
                    value={user.password || ""}
                    onChange={handleChange} />
                </div>
                <input type="checkbox" />
                <p>{t('login.remember')}</p>
                <a href="#">{t('login.forgot')}</a>
              </div>
              <div className="item__button -start">
                <input className="-right" href="#" type="submit" value={t('button.login')} onClick={handleLogin} />
              </div>
            </form>
            <div className="login__text">
              <h3>{t('login.regis.1')}</h3>
              <p>
                {t('login.regis.2')}
              </p>
              <div className="item__button -start">
                <Link to="/register" className="-left">{t('button.regis')}</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default Login