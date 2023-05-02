import React from 'react'
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';


const LoginMenu = () => {

  const { t } = useTranslation();

  return (
    <ul>
      <li className="-left -usernot">
        <Link to="/register">{t('button.regis')}</Link>
      </li>
      <li>
        <Link to="/login">{t('button.login')}</Link>
      </li>
    </ul>
  )
}

export default LoginMenu