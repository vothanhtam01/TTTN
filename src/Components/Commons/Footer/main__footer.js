import React from 'react'
import * as img_Arr from '../../../img/index'
import { useTranslation } from 'react-i18next';
import {answer_item} from '../../../database/datatext'


const MainFoot = () => {

  const { t } = useTranslation();

  return (
    <React.Fragment><footer>
      <section className="main__foot">
        <div className="container">
          <div className="row">
            <div className="pay__item">
              <p>{t('cart.buy.3')}</p>
              <div className="foot__bank">
                {img_Arr.bank.map((item, index) =>
                  <div className="bank__img" key={index}>
                    <img className="img" src={item} />
                  </div>
                )}
              </div>
            </div>
            <div className="pay__item">
              <p>{t('Giải đáp nhanh:')}</p>
              <div className="foot__answer" >
                <AnswerItem items={answer_item} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bonus__foot">
        <div className="container">
          <div className="row">
            <div className="bonus__text">
              <p>
               {t('Bản quyền thuộc về ')}
              <span>{t(' Võ Thanh Tâm')}</span>
              </p>
            
            </div>
            <div className="bonus__text">
              <ul>
                <li><a href="#">{t('TRANG CHỦ')}</a></li>
                <li><a href="#">{t('GIỚI THIỆU')}</a></li>
                <li><a href="#">{t('SẢN PHẨM')}</a></li>
                <li><a href="#">{t('TIN KHUYẾN MÃI')}</a></li>
                <li><a href="#">{t('DỊCH VỤ')}</a></li>
                <li><a href="#">{t('LIÊN HỆ')}</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </footer>
    </React.Fragment>
  )
}

export default MainFoot

const AnswerItem = (props) => {
  const { items } = props
  return (
    <React.Fragment>
      {items.map((item, index) =>
        <div className="answer__item" key={index}>
          <div className="answer__icon">
            <i className={item.icon} />
          </div>
          <div className="answer__text">
            <p>{item.text}</p>
            <span>{item.phone}</span>
          </div>
        </div>)}
    </React.Fragment>
  )
}


