import React from 'react'
import MenuLogin from './menu_login'
import MenuUser from './menu_user'

const Header = (props) => {

  const { user } = props

  return (
    <React.Fragment>
      <header>
        <div className="container">
          <div className="row">
            <div className="menu__icon">
              <ul>
                <li className="-left">
                  <a href="https://www.facebook.com/Mynga97">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li >
                  <a href="https://noithatthanhcong.com.vn/">
                    <i className="fab fa-google-plus"></i>
                  </a>
                </li>
                <li >
                  <a href="https://www.instagram.com/makemyhomevn/">
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
                <li >
                  <a href="https://twitter.com/">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="menu__user">
              {user ? <MenuUser user={user} /> : <MenuLogin />}
            </div>
          </div>
        </div>
      </header>
    </React.Fragment>
  )
}

export default Header