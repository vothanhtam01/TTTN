import React from 'react';
import * as img__Arr from '../../img/index'
import { useTranslation } from 'react-i18next';


const Letter = () => {
  
  const { t } = useTranslation();

  return (
    <React.Fragment>
      <section className="letter" style={{backgroundImage:`url(${img__Arr.feedback})`}}>
        <div className="container">
          <div className="row">
            <div className="letter__text">
              <p>{t('Đăng kí để nhận tin tức khuyến mại hàng tuần')}</p>
            </div>
          </div>
          <div className="row">
            <div className="letter__input">
              <input placeholder="Nhập email của bạn..." type="text" />
            </div>
            <div className="letter__button">
              <a href="#">{t('ĐĂNG KÍ')}</a>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}


export default Letter