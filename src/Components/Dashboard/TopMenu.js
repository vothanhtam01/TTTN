import React from 'react';
import logoutImg from '../../img/logout.svg';

var Boolean = false;

function contentDb(left, width) {
  document.querySelector('.menu-dashboard').style.display = left;
  for (let i = 0; i < document.getElementsByClassName("content-dashboard").length; i++) {
    document.getElementsByClassName("content-dashboard")[i].style.flex = '0 0 ' + width;
    document.getElementsByClassName("content-dashboard")[i].style.maxWidth = width;
  }
  Boolean = !Boolean
}
function showAdmin() {
  if (window.innerWidth > '768') {
    if (Boolean) {
      contentDb("none", "100%")
    }
    else {
      contentDb("block", "80%")
    }
  }
  else {
    if (Boolean) {
      contentDb("none", "100%")
    }
    else {
      contentDb("block", "100%")
    }
  }

}

const logOut = () => {
  sessionStorage.removeItem('userData')
  window.location.pathname = ('/')
}

const TopMenu = () => {
  return (
    <header className="header-dashboard">
      <span className="header-dashboard__logo">
        <a href="#" onClick={(e) => {
          e.preventDefault();
          showAdmin();
        }}>Admin</a>
      </span>
      <span className="header-dashboard__logout">
        <img src={logoutImg} alt="logo" onClick={logOut} />
      </span>
    </header>
  )
}

export default TopMenu;