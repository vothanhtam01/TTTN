import React from 'react';
import { BreadCrum } from '../mixin/mixin'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next';


const Confirm = () => {

  const { t } = useTranslation();

  return (
    <React.Fragment>
      <BreadCrum path="Xác nhận" />
      <section className="main__user">
        <div className="container">
          <div className="row">
            <form action="" className="form__regis">
              <div className="confirm__text" style={{ textAlign: 'center' }}>
                <h5>{t('order.4')}</h5>
              </div>
              <div className="item__button" style={{ margin: '0 auto' }}>
                <Link className="-left" to="/">{t('button.home')}</Link>
              </div>
            </form>
          </div>
        </div>
      </section>
    </React.Fragment>
  )

}

export default Confirm